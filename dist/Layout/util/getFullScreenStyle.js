import { Platform } from 'react-native';
export function getFullScreenStyle(props) {
    var presentationType = props.presentationType;
    return Platform.OS === 'web' ? (presentationType === 'push' ? 'height: 100vh' : 'height: 100%') : 'flex-grow: 1';
}
//# sourceMappingURL=getFullScreenStyle.js.map