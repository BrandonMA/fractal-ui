import { WidthSizeClass } from '../types';
import { useSizeValue } from './useSizeValue';
import { useDeviceType } from './useDeviceType';
import { SizeGroup } from '../types/SizeGroup';
import { getSizeGroup } from '../util/getSizeGroup';

export function useWidthSizeGroup(): SizeGroup {
    const type = useDeviceType();
    const width = useSizeValue('width');
    return getSizeGroup(type, width, WidthSizeClass);
}
