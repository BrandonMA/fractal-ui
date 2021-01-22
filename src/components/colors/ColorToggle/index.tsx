import React, { useCallback } from 'react';
import { BasePressable, BasePressableProps } from '../../baseComponents/BasePressable';
import { useColorToggleAnimation } from './hooks/useColorToggleAnimation';
import { CheckIcon } from '../../assets/CheckIcon';
import { BaseBox } from '../../baseComponents';

export interface ColorToggleProps extends Partial<Omit<BasePressableProps, 'backgroundColor'>> {
    onActiveChange?: (active: boolean, color: string) => void;
    backgroundColor: string;
    active?: boolean;
}

export function ColorToggle({ onActiveChange, backgroundColor, active, ...others }: ColorToggleProps): JSX.Element {
    const [, setActive, iconStyle] = useColorToggleAnimation(active);

    const handleControlledActiveToggle = useCallback(() => {
        if (onActiveChange) {
            onActiveChange(!active, backgroundColor);
        }
    }, [onActiveChange, active, backgroundColor]);

    const handleUncontrolledActiveToggle = useCallback(() => {
        setActive((internalActive) => {
            if (onActiveChange != null) {
                onActiveChange(!internalActive, backgroundColor);
            }
            return !internalActive;
        });
    }, [setActive, onActiveChange, backgroundColor]);

    const handlePress = useCallback(() => {
        if (active != null) {
            handleControlledActiveToggle();
        } else {
            handleUncontrolledActiveToggle();
        }
    }, [active, handleUncontrolledActiveToggle, handleControlledActiveToggle]);

    return (
        <BasePressable
            onPress={handlePress}
            width={40}
            height={40}
            borderRadius={'xl'}
            justifyContent={'center'}
            alignItems={'center'}
            style={{ backgroundColor }}
            {...others}
        >
            <BaseBox style={iconStyle}>
                <CheckIcon height={24} width={24} fill={'white'} />
            </BaseBox>
        </BasePressable>
    );
}
