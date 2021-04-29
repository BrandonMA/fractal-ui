import React, { useEffect, forwardRef } from 'react';
import Reanimated, { withTiming, useSharedValue, useAnimatedStyle, Easing } from 'react-native-reanimated';
import styled from 'styled-components/native';
import { BaseSegmentedControlProps } from '../types';
import { SegmentedControlTab } from '../SegmentControlTap';
import { SegmentsSeparators } from '../SegmentsSeparators';
import { Layer } from '../../containers/Layer';
import { useTheme } from '../../../core/context/hooks/useTheme';
import { extractBorderProps, extractShadowProps } from '../../../sharedProps';

const SegmentsContainer = styled.View`
    flex: 1;
    flex-direction: row;
    justify-content: space-evenly;
    align-items: center;
    background-color: transparent;
    z-index: 99;
    elevation: 2;
`;

const Slider = styled(Reanimated.View)`
    position: absolute;
    top: 2px;
    bottom: 2px;
    right: 2px;
    left: 2px;
    elevation: 1;
    ${extractShadowProps};
    ${extractBorderProps};
`;

export const BaseSegmentedControl = forwardRef(
    (
        {
            selectedIndex,
            values,
            tintColor,
            backgroundColor,
            textStyle,
            activeTextStyle,
            onTabPress,
            ...layerProps
        }: BaseSegmentedControlProps,
        ref: any
    ): JSX.Element => {
        const { colors, shadows, borderRadius, sizes } = useTheme();
        const [segmentWidth, setSegmentWidth] = React.useState(0);
        const translateX = useSharedValue(0);

        useEffect(() => {
            if (translateX && segmentWidth) {
                translateX.value = withTiming(segmentWidth * selectedIndex, { duration: 300, easing: Easing.out(Easing.quad) });
            }
        }, [segmentWidth, selectedIndex, translateX]);

        const sliderStyle = useAnimatedStyle(() => ({
            transform: [{ translateX: translateX.value }],
            width: segmentWidth - 4,
            backgroundColor: tintColor || colors.foreground
        }));

        return (
            <Layer
                ref={ref}
                overflow={'hidden'}
                position={'relative'}
                height={sizes.segmentedControlSize}
                backgroundColor={backgroundColor ?? colors.background}
                borderRadius={borderRadius.s}
                onLayout={({
                    nativeEvent: {
                        layout: { width }
                    }
                }) => {
                    const newSegmentWidth = values.length ? width / values.length : 0;
                    if (newSegmentWidth !== segmentWidth) {
                        translateX.value = newSegmentWidth * (selectedIndex || 0);
                        setSegmentWidth(newSegmentWidth);
                    }
                }}
                {...layerProps}
            >
                {!backgroundColor && !tintColor && <SegmentsSeparators values={values.length} selectedIndex={selectedIndex} />}
                <SegmentsContainer>
                    {values &&
                        values.map((value, index) => {
                            return (
                                <SegmentedControlTab
                                    selected={selectedIndex === index}
                                    key={index}
                                    value={value}
                                    tintColor={tintColor}
                                    textStyle={textStyle}
                                    activeTextStyle={activeTextStyle}
                                    onSelect={() => {
                                        onTabPress(index);
                                    }}
                                />
                            );
                        })}
                </SegmentsContainer>
                {selectedIndex != null && segmentWidth ? (
                    <Slider boxShadow={shadows.mainShadow} borderRadius={borderRadius.s} style={sliderStyle} />
                ) : null}
            </Layer>
        );
    }
);
