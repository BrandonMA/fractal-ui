import { useCustomWebStyles } from './useCustomWebStyles';

const webStyles = {
    cursor: 'pointer'
};

export function useCursorStyles<T>(props: T): T {
    return useCustomWebStyles(webStyles, props) as T;
}
