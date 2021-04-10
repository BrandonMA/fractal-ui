export function extractWebProps(_a) {
    var cursor = _a.cursor, pointerEvents = _a.pointerEvents;
    return "\n        " + (cursor ? "cursor: " + cursor : '') + ";\n        " + (pointerEvents ? "pointer-events: " + (pointerEvents === 'box-none' ? 'none' : pointerEvents) : '') + ";\n    ";
}
//# sourceMappingURL=WebProps.js.map