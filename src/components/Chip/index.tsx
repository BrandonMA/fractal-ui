import React, { forwardRef } from 'react';
import { ChipProps } from './types';
import { useTheme } from '../../context/hooks/useTheme';
import { Box } from '../containers/Box';
import { Text } from '../text';
import { CrossButton } from '../buttons/CrossButton';

const Chip = forwardRef(
    ({ text, children, onCrossButtonPress, ...others }: ChipProps, ref: any): JSX.Element => {
        const { colors, spacings } = useTheme();

        return (
            <Box
                ref={ref}
                maxWidth={200}
                flexDirection={'row'}
                alignItems={'center'}
                justifyContent={'center'}
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
                <CrossButton marginLeft={spacings.xs} onPress={onCrossButtonPress} />
            </Box>
        );
    }
);

Chip.displayName = 'Chip';

export { Chip };
