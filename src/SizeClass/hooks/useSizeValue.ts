import { useEffect, useState } from 'react';
import { DimensionsListenerParameter } from '../types/DimensionsListenerParameter';
import { Dimensions } from 'react-native';

export function useSizeValue(dimensionType: 'width' | 'height'): number {
    const [dimension, setDimension] = useState(Dimensions.get('window')[dimensionType]);

    const onChange = (dimensions: DimensionsListenerParameter) => {
        setDimension(dimensions.window[dimensionType]);
    };

    useEffect(() => {
        Dimensions.addEventListener('change', onChange);
        return () => {
            Dimensions.removeEventListener('change', onChange);
        };
    }, []);

    return dimension;
}
