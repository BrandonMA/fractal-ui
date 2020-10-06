export function applyTabBarInsets(props) {
    var _a;
    var insets = (_a = props.insets) !== null && _a !== void 0 ? _a : {
        top: 0,
        right: 0,
        bottom: 0,
        left: 0
    };
    if (props.tabBarPosition === 'right') {
        return "padding: " + insets.top + "px " + insets.right + "px " + insets.bottom + "px 0px";
    }
    else if (props.tabBarPosition === 'bottom') {
        return "padding-bottom: " + insets.bottom + "px";
    }
    else if (props.tabBarPosition === 'top') {
        return "padding-top: " + insets.top + "px";
    }
    else {
        return "padding: " + insets.top + "px 0px " + insets.bottom + "px " + insets.left + "px";
    }
}
//# sourceMappingURL=applyTabBarInsets.js.map