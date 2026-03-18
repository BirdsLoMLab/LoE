// ============================================================
// LoE Resource Loader Interceptor
// Paste into DevTools console BEFORE the game loads (or at startup)
// This hooks Laya's resource loading to capture config .dat files
// ============================================================

(function() {
    'use strict';

    window.__loe_captures = window.__loe_captures || {};
    let captureCount = 0;

    // --- 1. Hook XMLHttpRequest to catch binary config downloads ---
    const origXHROpen = XMLHttpRequest.prototype.open;
    const origXHRSend = XMLHttpRequest.prototype.send;

    XMLHttpRequest.prototype.open = function(method, url, ...args) {
        this.__loe_url = url;
        return origXHROpen.call(this, method, url, ...args);
    };

    XMLHttpRequest.prototype.send = function(...args) {
        const url = this.__loe_url || '';
        if (url.includes('.dat') || url.includes('.zip') ||
            url.includes('Config/') || url.includes('config')) {
            console.log('[INTERCEPT] XHR:', url);

            this.addEventListener('load', function() {
                const key = url.split('/').pop();
                try {
                    if (this.responseType === 'arraybuffer' || this.response instanceof ArrayBuffer) {
                        const buf = new Uint8Array(this.response);
                        window.__loe_captures[key] = {
                            url: url,
                            type: 'arraybuffer',
                            size: buf.length,
                            data: Array.from(buf.slice(0, 200)),  // first 200 bytes for inspection
                            fullData: this.response  // keep full ArrayBuffer in memory
                        };
                        console.log(`[INTERCEPT] Captured binary: ${key} (${buf.length} bytes)`);
                    } else {
                        window.__loe_captures[key] = {
                            url: url,
                            type: typeof this.response,
                            size: (this.responseText || '').length,
                            data: this.responseText || this.response
                        };
                        console.log(`[INTERCEPT] Captured text: ${key} (${(this.responseText || '').length} chars)`);
                    }
                    captureCount++;
                } catch(e) {
                    console.error('[INTERCEPT] Capture error:', e);
                }
            });
        }
        return origXHRSend.call(this, ...args);
    };

    // --- 2. Hook fetch() API ---
    const origFetch = window.fetch;
    window.fetch = async function(input, init) {
        const url = typeof input === 'string' ? input : input.url;
        const isConfig = url && (url.includes('.dat') || url.includes('.zip') ||
                         url.includes('Config/') || url.includes('config'));

        const response = await origFetch.call(this, input, init);

        if (isConfig) {
            console.log('[INTERCEPT] fetch:', url);
            const clone = response.clone();
            try {
                const buf = await clone.arrayBuffer();
                const key = url.split('/').pop();
                window.__loe_captures[key] = {
                    url: url,
                    type: 'fetch-arraybuffer',
                    size: buf.byteLength,
                    data: Array.from(new Uint8Array(buf).slice(0, 200)),
                    fullData: buf
                };
                console.log(`[INTERCEPT] Captured fetch: ${key} (${buf.byteLength} bytes)`);
                captureCount++;
            } catch(e) {}
        }
        return response;
    };

    // --- 3. Hook WebSocket to capture binary config frames ---
    const origWS = window.WebSocket;
    window.WebSocket = function(url, protocols) {
        console.log('[INTERCEPT] WebSocket connecting:', url);
        const ws = protocols ? new origWS(url, protocols) : new origWS(url);

        const origOnMessage = null;
        let msgCount = 0;
        const configFrames = [];

        ws.addEventListener('message', function(event) {
            msgCount++;
            if (event.data instanceof ArrayBuffer || event.data instanceof Blob) {
                // Log first 50 binary messages and any large ones (likely config)
                const size = event.data instanceof Blob ? event.data.size :
                             event.data instanceof ArrayBuffer ? event.data.byteLength : 0;

                if (msgCount <= 50 || size > 10000) {
                    const label = `ws_msg_${msgCount}_${size}b`;
                    if (event.data instanceof ArrayBuffer) {
                        const arr = new Uint8Array(event.data);
                        window.__loe_captures[label] = {
                            type: 'websocket',
                            msgNum: msgCount,
                            size: size,
                            header: Array.from(arr.slice(0, 20))
                        };
                    } else if (event.data instanceof Blob) {
                        event.data.arrayBuffer().then(buf => {
                            const arr = new Uint8Array(buf);
                            window.__loe_captures[label] = {
                                type: 'websocket-blob',
                                msgNum: msgCount,
                                size: size,
                                header: Array.from(arr.slice(0, 20))
                            };
                        });
                    }

                    if (size > 100000) {
                        console.log(`[INTERCEPT] Large WS frame #${msgCount}: ${(size/1024).toFixed(1)}KB`);
                    }
                }
            }
        });

        return ws;
    };
    // Preserve WebSocket constants
    window.WebSocket.CONNECTING = origWS.CONNECTING;
    window.WebSocket.OPEN = origWS.OPEN;
    window.WebSocket.CLOSING = origWS.CLOSING;
    window.WebSocket.CLOSED = origWS.CLOSED;
    window.WebSocket.prototype = origWS.prototype;

    // --- 4. Export helper ---
    window.__loe_export = function() {
        const exportData = {};
        for (const [key, val] of Object.entries(window.__loe_captures)) {
            if (val.fullData instanceof ArrayBuffer) {
                // Convert ArrayBuffer to base64 for JSON export
                const bytes = new Uint8Array(val.fullData);
                let binary = '';
                for (let i = 0; i < bytes.length; i++) {
                    binary += String.fromCharCode(bytes[i]);
                }
                exportData[key] = {
                    ...val,
                    fullData: btoa(binary),
                    encoding: 'base64'
                };
            } else {
                exportData[key] = val;
            }
        }

        const jsonStr = JSON.stringify(exportData, null, 2);
        console.log(`[EXPORT] Total captures: ${Object.keys(exportData).length}`);
        console.log(`[EXPORT] Size: ${(jsonStr.length / 1024 / 1024).toFixed(2)} MB`);

        const blob = new Blob([jsonStr], { type: 'application/json' });
        const url = URL.createObjectURL(blob);
        const a = document.createElement('a');
        a.href = url;
        a.download = 'loe_intercepted_data.json';
        a.click();
        URL.revokeObjectURL(url);
        console.log('[EXPORT] Download triggered');
    };

    console.log('[INTERCEPT] Hooks installed. Play the game, then run __loe_export() to download.');
    console.log('[INTERCEPT] Monitoring: XHR, fetch, WebSocket');
})();
