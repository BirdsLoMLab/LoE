// ============================================================
// LoE Config Dumper — paste into browser DevTools console
// Run AFTER the game has fully loaded (past login, into gameplay)
// ============================================================

(function() {
    'use strict';

    const results = {};

    // --- 1. Dump ConfigManager data (parsed config tables) ---
    try {
        const cm = ConfigManager.inst || ConfigManager._instance;
        if (cm) {
            // Raw config string data (pre-parsed JSON)
            if (cm._cfgStr && Object.keys(cm._cfgStr).length > 0) {
                results.cfgStr = {};
                for (const [key, val] of Object.entries(cm._cfgStr)) {
                    try {
                        results.cfgStr[key] = JSON.parse(val);
                    } catch(e) {
                        results.cfgStr[key] = val;
                    }
                }
                console.log('[DUMP] cfgStr keys:', Object.keys(results.cfgStr));
            }

            // Parsed config data objects
            if (cm._configDatas && Object.keys(cm._configDatas).length > 0) {
                results.configDatas = {};
                for (const [key, val] of Object.entries(cm._configDatas)) {
                    try {
                        results.configDatas[key] = JSON.parse(JSON.stringify(val));
                    } catch(e) {
                        results.configDatas[key] = String(val);
                    }
                }
                console.log('[DUMP] configDatas keys:', Object.keys(results.configDatas));
            }

            // XML config data
            if (cm._xmlConfigDatas && Object.keys(cm._xmlConfigDatas).length > 0) {
                results.xmlConfigDatas = {};
                for (const [key, val] of Object.entries(cm._xmlConfigDatas)) {
                    try {
                        results.xmlConfigDatas[key] = JSON.parse(JSON.stringify(val));
                    } catch(e) {
                        results.xmlConfigDatas[key] = String(val);
                    }
                }
                console.log('[DUMP] xmlConfigDatas keys:', Object.keys(results.xmlConfigDatas));
            }

            // Config class registry
            if (cm._configCls && Object.keys(cm._configCls).length > 0) {
                results.configClsKeys = Object.keys(cm._configCls);
                console.log('[DUMP] configCls keys:', results.configClsKeys);
            }
        } else {
            console.warn('[DUMP] ConfigManager not found');
        }
    } catch(e) {
        console.error('[DUMP] ConfigManager error:', e);
    }

    // --- 2. Dump known Cfg* singletons ---
    const cfgNames = [
        'CfgskillDecData', 'CfgskillStarData', 'CfgskillCareerData',
        'Cfgskill_desData', 'CfgitemBase', 'CfgBuff',
        'Cfgelement_level', 'Cfgpet_skill', 'Cfgpet_hybrid_extra',
        'Cfgqiling_star', 'Cfgcallskill_pool',
        'CfgUnitConfig', 'CfgcareerDisplay',
        'Cfgmartial_level', 'Cfgmonster_invade_event',
        'Cfgbeast_siege_beast', 'CfgSkillJudgeConfig',
        'CfgfaXiangBase', 'CfgfaXiangEquipMain',
        'CfgfaXiangBaoshi', 'CfgfaXiangHuanhua',
        'CfgDungeonData', 'CfgColor'
    ];

    results.cfgSingletons = {};
    for (const name of cfgNames) {
        try {
            const obj = eval(name);
            if (obj && obj._datas) {
                // Map-based storage
                const data = {};
                if (obj._datas instanceof Map) {
                    obj._datas.forEach((v, k) => {
                        try { data[k] = JSON.parse(JSON.stringify(v)); }
                        catch(e) { data[k] = String(v); }
                    });
                } else {
                    Object.assign(data, JSON.parse(JSON.stringify(obj._datas)));
                }
                results.cfgSingletons[name] = data;
                console.log(`[DUMP] ${name}: ${Object.keys(data).length} entries`);
            } else if (obj && typeof obj.get === 'function') {
                // Try to access the internal data store
                const internal = obj._data || obj.data || obj._map || obj.map;
                if (internal) {
                    results.cfgSingletons[name] = JSON.parse(JSON.stringify(internal));
                    console.log(`[DUMP] ${name}: found data store`);
                } else {
                    results.cfgSingletons[name] = '[has .get() but no _datas]';
                    console.log(`[DUMP] ${name}: has .get() but couldn't extract data`);
                }
            }
        } catch(e) {
            // Not in global scope, skip
        }
    }

    // --- 3. Scan window for all Cfg* globals ---
    try {
        const allCfg = Object.keys(window).filter(k =>
            k.startsWith('Cfg') || k.startsWith('cfg') ||
            k.startsWith('CFG') || k.includes('Config')
        );
        results.allCfgGlobals = allCfg;
        console.log('[DUMP] All Cfg* globals:', allCfg);
    } catch(e) {}

    // --- 4. Try to find damage formula constants ---
    try {
        results.constants = {};
        // Search for MathUtil or similar utility classes
        if (typeof MathUtil !== 'undefined') {
            results.constants.MathUtil = {};
            for (const key of Object.keys(MathUtil)) {
                const val = MathUtil[key];
                if (typeof val === 'number') {
                    results.constants.MathUtil[key] = val;
                }
            }
        }
        // Search for battle/combat config
        const battleNames = ['BattleConfig', 'CombatConfig', 'DamageConfig',
                           'BattleHelper', 'CombatHelper', 'FightConfig'];
        for (const name of battleNames) {
            try {
                const obj = eval(name);
                if (obj) {
                    results.constants[name] = {};
                    for (const key of Object.getOwnPropertyNames(obj)) {
                        const val = obj[key];
                        if (typeof val === 'number' || typeof val === 'string') {
                            results.constants[name][key] = val;
                        }
                    }
                    // Also check prototype
                    if (obj.prototype) {
                        for (const key of Object.getOwnPropertyNames(obj.prototype)) {
                            const val = obj.prototype[key];
                            if (typeof val === 'number') {
                                results.constants[name + '.prototype'][key] = val;
                            }
                        }
                    }
                }
            } catch(e) {}
        }
    } catch(e) {}

    // --- 5. Dump NumericType enum ---
    try {
        const nt = eval('_NumericType') || eval('NumericType');
        if (nt) {
            results.NumericType = {};
            for (const key of Object.keys(nt)) {
                if (typeof nt[key] === 'number') {
                    results.NumericType[key] = nt[key];
                }
            }
            console.log(`[DUMP] NumericType: ${Object.keys(results.NumericType).length} entries`);
        }
    } catch(e) {
        console.log('[DUMP] NumericType not in global scope');
    }

    // --- 6. Dump SkillHelper constants ---
    try {
        if (typeof SkillHelper !== 'undefined') {
            results.SkillHelper = {};
            for (const key of Object.getOwnPropertyNames(SkillHelper)) {
                const val = SkillHelper[key];
                if (typeof val === 'number' || typeof val === 'string') {
                    results.SkillHelper[key] = val;
                }
            }
            console.log('[DUMP] SkillHelper:', results.SkillHelper);
        }
    } catch(e) {}

    // --- Output ---
    const jsonStr = JSON.stringify(results, null, 2);
    console.log('[DUMP] Total size:', (jsonStr.length / 1024 / 1024).toFixed(2), 'MB');
    console.log('[DUMP] ====== COMPLETE ======');

    // Download as file
    const blob = new Blob([jsonStr], { type: 'application/json' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = 'loe_config_dump.json';
    a.click();
    URL.revokeObjectURL(url);

    console.log('[DUMP] File download triggered: loe_config_dump.json');
    return results;
})();
