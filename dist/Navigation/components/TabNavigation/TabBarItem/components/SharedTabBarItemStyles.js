import { Platform } from 'react-native';
import { constants } from '../../../../constants';
var sharedTabBarItemStyles = {
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'column',
    minHeight: constants.tabBarButtonSize,
    minWidth: constants.tabBarButtonSize
};
if (Platform.OS === 'web') {
    sharedTabBarItemStyles['cursor'] = 'pointer';
}
export { sharedTabBarItemStyles };
//# sourceMappingURL=SharedTabBarItemStyles.js.map