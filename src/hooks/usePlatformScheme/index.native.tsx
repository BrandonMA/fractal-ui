import { useColorScheme } from 'react-native';

export function usePlatformScheme(): 'light' | 'dark' {
    return useColorScheme() ?? 'light';
}
