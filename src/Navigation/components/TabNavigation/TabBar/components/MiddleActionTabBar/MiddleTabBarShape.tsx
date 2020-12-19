import React, { memo } from 'react';
import Svg, { Path, SvgProps } from 'react-native-svg';
import { TabBarPosition } from '../../types/TabBarPosition';

const LeftShape = memo(
    (props: SvgProps): JSX.Element => {
        return (
            <Svg width={61} height={75} viewBox='0 0 61 75' {...props}>
                <Path d='M61 75.2H0V0h61c0 4.1-3.1 7.4-7.1 7.9C39.3 10 28 22.5 28 37.7c0 15.2 11.3 27.7 25.9 29.7 4 .5 7.1 3.9 7.1 7.9v-.1z' />
            </Svg>
        );
    }
);

const BottomShape = memo(
    (props: SvgProps): JSX.Element => {
        return (
            <Svg width={75} height={61} viewBox='0 0 75 61' {...props}>
                <Path d='M75.2 0v61H0V0c4.1 0 7.4 3.1 7.9 7.1C10 21.7 22.5 33 37.7 33c15.2 0 27.7-11.3 29.7-25.9.5-4 3.9-7.1 7.9-7.1h-.1z' />
            </Svg>
        );
    }
);

const RightShape = memo(
    (props: SvgProps): JSX.Element => {
        return (
            <Svg width={61} height={75} viewBox='0 0 61 75' {...props}>
                <Path d='M0 .1h61v75.2H0c0-4.1 3.1-7.4 7.1-7.9C21.7 65.3 33 52.8 33 37.6 33 22.4 21.7 9.9 7.1 7.9 3.1 7.4 0 4 0 0v.1z' />
            </Svg>
        );
    }
);

interface MiddleTabBarShapeProps extends SvgProps {
    tabBarPosition: TabBarPosition;
}

export const MiddleTabBarShape = memo(
    (props: MiddleTabBarShapeProps): JSX.Element => {
        const { tabBarPosition, ...others } = props;
        switch (tabBarPosition) {
            case 'right':
                return <RightShape {...others} />;
            case 'left':
                return <LeftShape {...others} />;
            case 'bottom':
                return <BottomShape {...others} />;
        }
    }
);
