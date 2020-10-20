export function createTabBarConfig(config) {
    var _a, _b, _c, _d;
    return Object.freeze({
        tabBarVariant: (_a = config === null || config === void 0 ? void 0 : config.tabBarVariant) !== null && _a !== void 0 ? _a : 'basic',
        tabBarPosition: (_b = config === null || config === void 0 ? void 0 : config.tabBarPosition) !== null && _b !== void 0 ? _b : 'bottom',
        activeItemColor: (_c = config === null || config === void 0 ? void 0 : config.activeItemColor) !== null && _c !== void 0 ? _c : '#1281FF',
        inactiveItemColor: (_d = config === null || config === void 0 ? void 0 : config.inactiveItemColor) !== null && _d !== void 0 ? _d : '#999999'
    });
}
//# sourceMappingURL=createTabBarConfig.js.map