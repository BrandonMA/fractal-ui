import { EdgeInsets } from 'react-native-safe-area-context';
interface NavigationInsets {
    totalInsets: EdgeInsets;
    noSafeAreaInsets: EdgeInsets;
}
export declare function useNavigationInsets(): NavigationInsets;
export {};
