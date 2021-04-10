import React from 'react';
import { useTheme } from '../../../core/context/hooks/useTheme';
import { Layer } from '../../containers/Layer';
import { RadioControl } from './RadioControl';

export function Radio({ active }: { active: boolean }): JSX.Element {
    const { colors } = useTheme();

    const circleVariants = {
        active: { scale: 1 },
        inactive: { scale: 0 }
    };

    return (
        <RadioControl active={active}>
            <Layer
                width={10}
                height={10}
                borderRadius={10}
                backgroundColor={colors.mainInteractiveColor}
                initial={'inactive'}
                animate={active ? 'active' : 'inactive'}
                variants={circleVariants}
            />
        </RadioControl>
    );
}
