import { ImageSourcePropType } from 'react-native';
import { TabBarPosition } from '../types/TabBarPosition';

export function getImageBasedOnPosition(position?: TabBarPosition): ImageSourcePropType {
    if (position === 'top') {
        return require(`../assets/middle-top.png`);
    } else if (position === 'right') {
        return require(`../assets/middle-right.png`);
    } else if (position === 'left') {
        return require(`../assets/middle-left.png`);
    } else {
        return require(`../assets/middle-bottom.png`);
    }
}
