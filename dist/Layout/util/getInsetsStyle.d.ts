import { EdgeInsets } from 'react-native-safe-area-context';
export interface InsetsStyleConfig {
    type: 'margin' | 'padding';
    removeHorinzontal?: boolean;
    removeVertical?: boolean;
}
interface Props {
    insets: EdgeInsets;
    insetsStyleConfig: InsetsStyleConfig;
}
export declare function getInsetsStyle(props: Props): string;
export {};
