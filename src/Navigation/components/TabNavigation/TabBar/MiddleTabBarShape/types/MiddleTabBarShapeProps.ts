import { SvgProps } from 'react-native-svg';
import { TabBarPosition } from '../../types';

export interface MiddleTabBarShapeProps extends SvgProps {
    backgroundColor: string;
    position?: TabBarPosition;
}
