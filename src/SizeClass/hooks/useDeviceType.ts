import { DeviceType, getDeviceTypeAsync } from 'expo-device';
import { useEffect, useState } from 'react';

export function useDeviceType(): DeviceType | null {
    const [type, setType] = useState<DeviceType | null>(null);

    useEffect(() => {
        getDeviceTypeAsync()
            .then((type) => {
                return setType(type);
            })
            .catch((error) => {
                console.log(error);
            });
    }, []);

    return type;
}
