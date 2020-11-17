import { Size } from '../types';
import { SizeClass } from '../types/SizeClass';

export function getPhoneSize(dimension: number, SizeClass: SizeClass): Size {
    if (dimension >= SizeClass.largePhone) {
        // Landscape, you can show more content
        return Size.medium;
    } else {
        // Normal phone interface
        return Size.compact;
    }
}
