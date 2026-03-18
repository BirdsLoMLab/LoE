# LoE Network Endpoints — Code-Extracted

> **Source:** `bundle-ac7a6.js` URLs, `embedded_data/urls_and_endpoints.json`

## Game Servers

| Type | URL | Notes |
|------|-----|-------|
| Dev Server | `http://172.16.12.193/` | Internal IP, hardcoded |
| Dev WebSocket | `ws://172.16.12.193:24000` | Dev WS endpoint |
| Zone List | `http://172.16.12.193/monica_zonelist.json` | Server list |
| CDN (Config) | `https://sydh-us-cdnres.joynetgame.com/cdnconfig_` | CDN config |
| CDN (Assets) | `https://sydh-us-cdnres.joynetgame.com/US/stable/mix_wx_pangu/20240724_web/` | Game assets |
| CDN (Engine) | `sydh-cdnres.joyagegames.com/EN/stable/mix_wx_pangu/common/` | From engine config |

## H5 Web Client
| URL | Purpose |
|-----|---------|
| `elementsh5.joynetgame.com` | H5 game client host |

## Analytics & Monitoring
| URL | Purpose |
|-----|---------|
| `https://apiapm.joynetgame.com/api/apm/19258715e23f80911` | APM monitoring |
| `https://apiapm.ssgamescenter.com/api/v2/ip/query` | IP query service |
| `https://y.qq499.com/datacf/api/push` | Analytics push |
| `https://y2.4399data.com/datacf/api/push` | Analytics push (alt) |
| `https://mkt.qq499.com/api/wxxyx-attr/channelinfo` | Channel attribution |

## Payment Endpoints
| URL | Platform |
|-----|----------|
| `https://fnsdk.4399sy.com/zzsjhwkyxfx/huawei_h5/pay.php` | Huawei H5 |
| `https://fnsdk.aiysm.com/zzsjwxxyxgnml/4399wx/pay.php` | WeChat |
| `https://fnsdk.aiysm.com/zzsjwxgnmlios/4399wx_ios/pay.php` | WeChat iOS |
| `https://fnsdk.aiysm.com/zzsjdyxyxgnml/4399dy/pay.php` | Douyin |
| `https://chat-api.4399sy.com/api/wx/add_wx` | WeChat integration |

## Social Links (Hardcoded)
| Platform | URL |
|----------|-----|
| Discord | `https://discord.gg/SfCyzJ3pkr` |
| Facebook | `https://www.facebook.com/legendofelement/` |
| TikTok | `https://www.tiktok.com/@legend.of.element` |
| YouTube | `https://www.youtube.com/@LegendofElementsOfficial` |
| X/Twitter | `https://x.com/legendofelement` |
| VK | `https://vk.com/legendofelements` |

## Package Info
| Key | Value |
|-----|-------|
| Android Package | `com.zzsjus.google` |
| Game ID in bundle | `zzsjhwkyxfx` (Huawei), `zzsjwxxyxgnml` (WeChat) |
| Regulatory | `https://beian.miit.gov.cn/` (Chinese ICP reference) |
