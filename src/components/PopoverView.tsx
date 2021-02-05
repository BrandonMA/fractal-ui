import React, { ReactNode, useCallback, useEffect, useMemo, useRef, useState } from 'react';
import { BaseBox, BaseBoxProps } from './baseComponents/BaseBox';
import { Animated, LayoutRectangle } from 'react-native';
import { useShowAnimation } from '../animationHooks/useShowAnimation';
import { useHideAnimation } from '../animationHooks/useHideAnimation';

interface PopoverViewProps extends BaseBoxProps {
    active: boolean;
    popoverChildren: (mainViewLayout: LayoutRectangle) => ReactNode;
    popoverContainerProps?: Omit<BaseBoxProps, 'children'>;
}

export function PopoverView(props: PopoverViewProps): JSX.Element {
    const { active, popoverChildren, popoverContainerProps, ...others } = props;
    const [mainViewLayout, setMainViewLayout] = useState<LayoutRectangle>({ x: 0, y: 0, height: 0, width: 0 });
    const yValueWithOffset = mainViewLayout.y + mainViewLayout.height + 16;
    const animatedValue = useRef(new Animated.Value(0)).current;
    const showAnimation = useShowAnimation(animatedValue);
    const hideAnimation = useHideAnimation(animatedValue);

    const styles = useMemo(() => {
        return {
            opacity: animatedValue,
            transform: [{ scale: animatedValue }],
            left: mainViewLayout.x,
            top: yValueWithOffset,
            width: mainViewLayout.width,
            zIndex: 2000
        };
    }, [animatedValue, yValueWithOffset, mainViewLayout]);

    const onLayout = useCallback(
        (nativeElement) => {
            setMainViewLayout(nativeElement.nativeEvent.layout);
        },
        [setMainViewLayout]
    );

    useEffect(() => {
        if (active) {
            showAnimation();
        } else {
            hideAnimation();
        }
    }, [active, showAnimation, hideAnimation]);

    return (
        <>
            <BaseBox {...others} onLayout={onLayout} />
            <BaseBox position={'absolute'} style={styles} {...popoverContainerProps}>
                {popoverChildren(mainViewLayout)}
            </BaseBox>
        </>
    );
}
