export function getTabBarSafeAreaPadding(props) {
    var safeAreaInsets = props.safeAreaInsets, tabBarPosition = props.tabBarPosition;
    switch (tabBarPosition) {
        case 'bottom':
            return "padding-bottom: " + safeAreaInsets.bottom + "px";
        case 'left':
            return "padding-left: " + safeAreaInsets.left + "px";
        case 'right':
            return "padding-right: " + safeAreaInsets.right + "px";
    }
}
//# sourceMappingURL=getTabBarSafeAreaPadding.js.map