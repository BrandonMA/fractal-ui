import { InlineStyles } from './InlineStyles';

export function extractBackgroundColor({ backgroundColor }: InlineStyles): string {
    return `background-color: ${backgroundColor ?? 'transparent'};`;
}
