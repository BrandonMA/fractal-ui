import React, { useEffect, useRef } from 'react';
import { Animated, StyleSheet } from 'react-native';
import { useHideAnimation } from '../../../Animations/hooks/useHideAnimation';
import { useShowAnimation } from '../../../Animations/hooks/useShowAnimation';
import { isMatchExact } from '../../util/isMatchExact';
export function AnimatedRouteContainer(props) {
    var opacityValue = useRef(new Animated.Value(1)).current;
    var match = props.match, children = props.children;
    var hide = useHideAnimation(opacityValue);
    var show = useShowAnimation(opacityValue);
    useEffect(function () {
        if (isMatchExact(match)) {
            show();
        }
        else {
            hide();
        }
    }, [match, hide, show]);
    return (React.createElement(Animated.View, { style: [StyleSheet.absoluteFill, { opacity: opacityValue, zIndex: isMatchExact(match) ? 1000 : 0 }] }, children));
}
//# sourceMappingURL=AnimatedRouteContainer.js.map