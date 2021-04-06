import * as React from 'react';
import { Animated, Easing } from 'react-native';
import styled from 'styled-components/native';
import { SegmentedControlProps } from './types';
import { SegmentedControlTab } from './SegmentControlTap';
import { SegmentsSeparators } from './SegmentsSeparators';
import { Layer } from '../../containers/Layer/index.native';
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

const Slider = styled(Animated.View)`
    position: absolute;
    top: 2px;
    bottom: 2px;
    right: 2px;
    left: 2px;
    elevation: 1;
    ${extractShadowProps};
    ${extractBorderProps};
`;

export const SegmentedControl = ({
    onChange,
    onValueChange,
    selectedIndex = 0,
    values,
    tintColor,
    backgroundColor,
    textStyle,
    activeTextStyle,
    ...layerProps
}: SegmentedControlProps): JSX.Element => {
    const { colors, shadows, borderRadius, sizes } = useTheme();
    const [segmentWidth, setSegmentWidth] = React.useState(0);
    const animation = React.useRef(new Animated.Value(0)).current;

    const handleChange = (index: number) => {
        onChange?.(values[index], index);
        onValueChange?.(values[index]);
    };

    React.useEffect(() => {
        if (animation && segmentWidth) {
            Animated.timing(animation, {
                toValue: segmentWidth * selectedIndex,
                duration: 300,
                easing: Easing.out(Easing.quad),
                useNativeDriver: true
            }).start();
        }
    }, [animation, segmentWidth, selectedIndex]);

    return (
        <Layer
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
                    animation.setValue(newSegmentWidth * (selectedIndex || 0));
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
                                    handleChange(index);
                                }}
                            />
                        );
                    })}
            </SegmentsContainer>
            {selectedIndex != null && segmentWidth ? (
                <Slider
                    boxShadow={shadows.mainShadow}
                    borderRadius={borderRadius.s}
                    style={[
                        {
                            transform: [{ translateX: animation }],
                            width: segmentWidth - 4,
                            backgroundColor: tintColor || colors.foreground
                        }
                    ]}
                />
            ) : null}
        </Layer>
    );
};
