import { SizeGroup } from '../types/SizeGroup';
import { DeviceType } from 'expo-device';
import { isDesktop } from './isDesktop';
import { Size } from '../types';
import { SizeClass } from '../types/SizeClass';

export function getSizeGroup(type: DeviceType | null, dimension: number, SizeClass: SizeClass): SizeGroup {
    if (type != null) {
        if (isDesktop()) {
            if (dimension >= SizeClass.extraLargeDesktop) {
                return [Size.extraLarge, type];
            } else if (dimension >= SizeClass.largeDesktop) {
                return [Size.large, type];
            } else if (dimension >= SizeClass.compactDesktop) {
                return [Size.medium, type];
            } else {
                return [Size.compact, type];
            }
        } else {
            if (type === DeviceType.TABLET) {
                if (dimension >= SizeClass.extraLargeTablet) {
                    // Show a bigger iPad UI for the biggest one
                    return [Size.extraLarge, type];
                } else if (dimension >= SizeClass.largeTablet) {
                    // Show the ideal iPad UI
                    return [Size.large, type];
                } else if (dimension >= SizeClass.compactTablet) {
                    // Show a slightly reduced interface
                    return [Size.medium, type];
                } else {
                    // Show a phone interface
                    return [Size.compact, type];
                }
            } else {
                if (dimension >= SizeClass.largePhone) {
                    // Landscape, you can show more content
                    return [Size.medium, type];
                } else {
                    // Normal phone interface
                    return [Size.compact, type];
                }
            }
        }
    }
    return null;
}
