import { Dimensions } from 'react-native';
import { DisplayMetrics } from './DisplayMetrics';

export function getWindowDimensions(): DisplayMetrics {
    return Dimensions.get('window');
}
