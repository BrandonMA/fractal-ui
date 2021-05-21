import React, { forwardRef, useState } from 'react';
import { ChipProps } from './types';
import { useTheme } from '../../context/hooks/useTheme';
import { Box } from '../containers/Box';
import { Text } from '../text';
import { CrossButton } from '../buttons/CrossButton';

const Chip = forwardRef(
    ({ text, children, ...others }: ChipProps, ref: any): JSX.Element => {
        const { colors, spacings } = useTheme();
        const [display, setDisplay] = useState(true);
        const handleButtonPress = () => setDisplay(false);

        return (
            <Box
                ref={ref}
                maxWidth={200}
                flexDirection={'row'}
                alignItems={'center'}
                justifyContent={'center'}
                display={display ? 'flex' : 'none'}
                padding={spacings.xs}
                backgroundColor={colors.foreground}
                {...others}
            >
                {text != null ? (
                    <Text variant='button' color={colors.black}>
                        {text}
                    </Text>
                ) : null}
                {children}
                <CrossButton marginLeft={spacings.xs} onPress={handleButtonPress} />
            </Box>
        );
    }
);

Chip.displayName = 'Chip';

export { Chip };
