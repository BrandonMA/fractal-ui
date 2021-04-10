import Reanimated from 'react-native-reanimated';
export declare function useReanimatedValueCallback(initialValue?: number | string, finalValue?: number | string): [Reanimated.SharedValue<number | string | undefined>, () => void, () => void];
