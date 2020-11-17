import { WidthSizeClass } from '../types';
import { useSizeValue } from './useSizeValue';
import { useDeviceType } from './useDeviceType';
import { SizeGroup } from '../types/SizeGroup';
import { getSizeForType } from '../util/getSizeForType';

export function useWidthSizeGroup(): SizeGroup {
    const type = useDeviceType();
    const width = useSizeValue('width');
    return [getSizeForType(type, width, WidthSizeClass), type];
}
