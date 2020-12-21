import { DeviceType, getDeviceTypeAsync } from 'expo-device';
import { useLayoutEffect, useState } from 'react';
import { Platform } from 'react-native';
// Provide a basic implementation for the first run
function getDefaultValueBasedOnPlatform() {
    if (Platform.OS === 'ios' || Platform.OS === 'android') {
        return DeviceType.PHONE;
    }
    else {
        return DeviceType.DESKTOP;
    }
}
export function useDeviceType() {
    var _a = useState(getDefaultValueBasedOnPlatform()), type = _a[0], setType = _a[1];
    useLayoutEffect(function () {
        getDeviceTypeAsync()
            .then(function (type) {
            return setType(type);
        })["catch"](function (error) {
            console.log(error);
        });
    }, []);
    return type;
}
//# sourceMappingURL=useDeviceType.js.map