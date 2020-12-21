import { Animated } from 'react-native';
import { BaseButtonProps } from '../types/BaseButtonProps';
export declare function useBaseButtonAnimations(props: BaseButtonProps): (((event: any) => void) | (false | import("react-native").ViewStyle | import("react-native").RegisteredStyle<import("react-native").ViewStyle> | import("react-native").RecursiveArray<false | import("react-native").ViewStyle | import("react-native").RegisteredStyle<import("react-native").ViewStyle> | null | undefined> | ((state: import("react-native").PressableStateCallbackType) => import("react-native").StyleProp<import("react-native").ViewStyle>) | {
    shadowOpacity: number | Animated.Value;
    transform: {
        scale: Animated.Value;
    }[];
} | null | undefined)[])[];
