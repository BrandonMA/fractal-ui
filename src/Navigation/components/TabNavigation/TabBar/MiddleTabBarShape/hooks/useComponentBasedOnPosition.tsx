import { TabBarPosition } from '../../types';
import { MiddleTopShape } from '../MiddleTopShape';
import { SvgProps } from 'react-native-svg';
import { useMemo } from 'react';
import { MiddleRightShape } from '../MiddleRightShape';
import { MiddleLeftShape } from '../MiddleLeftShape';
import { MiddleBottomShape } from '../MiddleBottomShape';

export function useComponentBasedOnPosition(position?: TabBarPosition): (props: SvgProps) => JSX.Element {
    return useMemo(() => {
        if (position === 'top') {
            return MiddleTopShape;
        } else if (position === 'right') {
            return MiddleRightShape;
        } else if (position === 'left') {
            return MiddleLeftShape;
        } else {
            return MiddleBottomShape;
        }
    }, [position]);
}
