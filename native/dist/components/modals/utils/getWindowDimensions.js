export function getWindowDimensions() {
    var win = window;
    var docEl = win.document.documentElement;
    return {
        fontScale: 1,
        height: docEl.clientHeight,
        scale: win.devicePixelRatio || 1,
        width: docEl.clientWidth
    };
}
//# sourceMappingURL=getWindowDimensions.js.map