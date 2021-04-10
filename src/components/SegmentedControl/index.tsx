import React from 'react';
import { motion, AnimateSharedLayout } from 'framer-motion';
import styled from 'styled-components';
import { SegmentedControlProps } from './types';
import {
    extractBackgroundProps,
    extractBorderProps,
    extractDimensionProps,
    extractDisplayProps,
    extractShadowProps,
    extractWebProps
} from '../../sharedProps';
import { useTheme } from '../../core/context/hooks/useTheme';
import { SegmentedControlTab } from './SegmentControlTap';
import { getButtonGroupAccessibilityProps } from './accessibility/getButtonGroupAccessibilityProps';

const Container = styled(motion.ol as any)`
    list-style: none;
    ${extractBackgroundProps};
    ${extractDimensionProps};
    ${extractDisplayProps};
    ${extractBorderProps};
    ${extractShadowProps};
    ${extractWebProps};
`;

export function SegmentedControl({
    onChange,
    onValueChange,
    selectedIndex = 0,
    values,
    tintColor,
    backgroundColor,
    textStyle,
    activeTextStyle,
    ...layerProps
}: SegmentedControlProps): JSX.Element {
    const { colors, borderRadius, sizes } = useTheme();

    return (
        <AnimateSharedLayout>
            <Container
                backgroundColor={backgroundColor ?? colors.background}
                margin={0}
                padding={2}
                width={'100%'}
                height={sizes.segmentedControlSize}
                borderRadius={borderRadius.s}
                display={'inline-flex'}
                flexDirection={'row'}
                {...layerProps}
                {...getButtonGroupAccessibilityProps()}
            >
                {values.map((item, index) => {
                    return (
                        <SegmentedControlTab
                            selected={selectedIndex === index}
                            hideDivider={
                                backgroundColor != undefined ||
                                tintColor != undefined ||
                                selectedIndex === index ||
                                index === selectedIndex - 1
                            }
                            key={index}
                            value={item}
                            tintColor={tintColor}
                            textStyle={textStyle}
                            activeTextStyle={activeTextStyle}
                            onSelect={() => {
                                onChange?.(item, index);
                                onValueChange?.(item);
                            }}
                        />
                    );
                })}
            </Container>
        </AnimateSharedLayout>
    );
}
