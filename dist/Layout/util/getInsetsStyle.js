export function getInsetsStyle(props) {
    var insets = props.insets, insetsStyleConfig = props.insetsStyleConfig;
    var top = (insetsStyleConfig.removeVertical ? 0 : insets.top) + "px";
    var right = (insetsStyleConfig.removeHorinzontal ? 0 : insets.right) + "px";
    var bottom = (insetsStyleConfig.removeVertical ? 0 : insets.bottom) + "px";
    var left = (insetsStyleConfig.removeHorinzontal ? 0 : insets.left) + "px";
    return insetsStyleConfig.type + ": " + top + " " + right + " " + bottom + " " + left + " ";
}
//# sourceMappingURL=getInsetsStyle.js.map