import React, { forwardRef, useState } from 'react';
import { ChipProps } from './types';
import { Button } from '../buttons';
import { CrossButton } from '../buttons/CrossButton';
import { useTheme } from '../../context/hooks/useTheme';

const Chip = forwardRef(
    ({ children, ...others }: ChipProps, ref: any): JSX.Element => {
        const { colors, spacings } = useTheme();
        const [display, setDisplay] = useState(true);

        const handleButtonPress = () => setDisplay(false);

        return (
            <Button
                ref={ref}
                width={120}
                variant={'content'}
                flexDirection={'row'}
                display={display ? 'flex' : 'none'}
                padding={spacings.xs}
                backgroundColor={colors.foreground}
                pressedBackgroundColor={colors.foreground}
                {...others}
            >
                {children}
                <CrossButton marginLeft={spacings.xs} onPress={handleButtonPress} />
            </Button>
        );
    }
);

Chip.displayName = 'Chip';

export { Chip };
