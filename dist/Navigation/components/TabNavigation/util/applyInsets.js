export function applyInsets(props) {
    var _a;
    var insets = (_a = props.insets) !== null && _a !== void 0 ? _a : {
        top: 0,
        right: 0,
        bottom: 0,
        left: 0
    };
    if (props.position === 'left' || props.position === 'right') {
        return "margin: " + insets.top + "px " + insets.right + "px " + insets.bottom + "px " + insets.left + "px";
    }
    else {
        return "padding-bottom: " + insets.bottom + "px";
    }
}
//# sourceMappingURL=applyInsets.js.map