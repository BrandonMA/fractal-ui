import React, { ReactNode, useEffect, useRef, useState } from 'react';
import { BaseBox, BaseBoxProps } from './baseComponents/BaseBox';
import { Animated, LayoutRectangle } from 'react-native';
import { useShowAnimation } from '../animationHooks/useShowAnimation';
import { useHideAnimation } from '../animationHooks/useHideAnimation';

interface PopoverViewProps extends BaseBoxProps {
    active: boolean;
    popoverChildren: (mainViewLayout: LayoutRectangle) => ReactNode;
    popoverContainerProps?: Omit<BaseBoxProps, 'children'>;
}

// Not ready, implementation is not final
export function PopoverView(props: PopoverViewProps): JSX.Element {
    const { active, popoverChildren, popoverContainerProps, ...others } = props;
    const [mainViewLayout, setMainViewLayout] = useState<LayoutRectangle>({ x: 0, y: 0, height: 0, width: 0 });
    const yValueWithOffset = mainViewLayout.y + mainViewLayout.height + 16;
    const animatedValue = useRef(new Animated.Value(0)).current;
    const showAnimation = useShowAnimation(animatedValue);
    const hideAnimation = useHideAnimation(animatedValue);

    useEffect(() => {
        if (active) {
            showAnimation();
        } else {
            hideAnimation();
        }
    }, [active, showAnimation, hideAnimation]);

    return (
        <>
            <BaseBox
                {...others}
                onLayout={(nativeElement) => {
                    setMainViewLayout(nativeElement.nativeEvent.layout);
                }}
            />
            <BaseBox
                position={'absolute'}
                style={{
                    opacity: animatedValue,
                    transform: [{ scale: animatedValue }],
                    left: mainViewLayout.x,
                    top: yValueWithOffset,
                    zIndex: 2000
                }}
                {...popoverContainerProps}
            >
                {popoverChildren(mainViewLayout)}
            </BaseBox>
        </>
    );
}
