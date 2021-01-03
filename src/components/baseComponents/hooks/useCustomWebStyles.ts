import { useMemo } from 'react';
import { useRestyle } from '@shopify/restyle';
import { Platform } from 'react-native';
import { restyleFunctions } from '../restyleFunctions';

export function useCustomWebStyles(customStyles: unknown, props?: unknown): unknown {
    const { style, ...restyleProps } = useRestyle(restyleFunctions, props as any) as any;

    const finalStyles = useMemo(() => [style, Platform.OS === 'web' ? customStyles : undefined], [style, customStyles]);

    return useMemo(() => {
        return { style: finalStyles, ...restyleProps };
    }, [finalStyles, restyleProps]);
}
