import { HeightSizeClass } from '../types';
import { useSizeValue } from './useSizeValue';
import { useDeviceType } from './useDeviceType';
import { SizeGroup } from '../types/SizeGroup';
import { getSizeGroup } from '../util/getSizeGroup';

export function useHeightSizeGroup(): SizeGroup {
    const type = useDeviceType();
    const height = useSizeValue('height');
    return getSizeGroup(type, height, HeightSizeClass);
}
