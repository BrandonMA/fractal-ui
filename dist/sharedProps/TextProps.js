export function extractTextProps(_a) {
    var fontSize = _a.fontSize, fontWeight = _a.fontWeight, fontFamily = _a.fontFamily, color = _a.color, fontStyle = _a.fontStyle, selectable = _a.selectable;
    return "\n        " + (fontSize != null ? "font-size: " + fontSize + "px" : '') + ";\n        " + (fontWeight != null ? "font-weight: " + fontWeight : '') + ";\n        " + (color != null ? "color: " + color : '') + ";\n        " + (fontFamily != null ? "font-family: " + fontFamily : '') + ";\n        " + (fontStyle != null ? "font-family: " + fontStyle : '') + ";\n        " + (window.document != null ? "user-select: " + (selectable ? 'text' : 'none') : '') + ";\n    ";
}
//# sourceMappingURL=TextProps.js.map