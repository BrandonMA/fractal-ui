import { ButtonVariant } from '../types';
import { useTheme } from '../../../context';

export function useCircularButtonColors(variant: ButtonVariant, reduceColor = false): [string, string, string] {
    const { colors } = useTheme();
    const backgroundColorName = (() => {
        if (variant === 'content') {
            return reduceColor ? `${variant}InteractiveColor100` : `${variant}InteractiveColor`;
        } else {
            return reduceColor ? `${variant}InteractiveColor100` : `${variant}InteractiveColor400`;
        }
    })();

    const foregroundColorName = (() => {
        if (variant === 'content') {
            return 'text';
        } else {
            return `${variant}InteractiveColor600`;
        }
    })();

    const pressedColorName = (() => {
        if (variant === 'content') {
            return `${variant}InteractiveColor600`;
        } else {
            return reduceColor ? `${variant}InteractiveColor200` : `${variant}InteractiveColor`;
        }
    })();

    const backgroundColor = colors[backgroundColorName];
    const foregroundColor = colors[foregroundColorName];
    const pressedColor = colors[pressedColorName];

    return [backgroundColor, foregroundColor, pressedColor];
}
