export function applyFullscreenInsets(props) {
    var insets = props.insets;
    if (insets != null) {
        return "padding: " + insets.top + "px " + insets.right + "px " + insets.bottom + "px " + insets.left + "px";
    }
    return '';
}
//# sourceMappingURL=applyFullscreenInsets.js.map