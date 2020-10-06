export function applyDimensionBasedOnTabBarPosition(props) {
    if (props.tabBarPosition === 'left' || props.tabBarPosition === 'right') {
        return 'height: 100%;';
    }
    else {
        return 'width: 100%';
    }
}
//# sourceMappingURL=applyDimensionBasedOnTabBarPosition.js.map