export function applyInsets(props) {
    var _a;
    var insets = (_a = props.insets) !== null && _a !== void 0 ? _a : {
        top: 0,
        right: 0,
        bottom: 0,
        left: 0
    };
    if (props.position === 'left' || props.position === 'right') {
        return "padding: 0px";
    }
    else if (props.position === 'bottom') {
        return "padding-bottom: " + insets.bottom + "px";
    }
    else {
        return "padding-top: " + insets.top + "px";
    }
}
export function applyDimension(props) {
    if (props.position === 'left' || props.position === 'right') {
        return 'height: 100%';
    }
    else {
        return 'width: 100%';
    }
}
//# sourceMappingURL=applyInsets.js.map