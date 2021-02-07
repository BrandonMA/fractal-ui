import { InlineStyles } from './InlineStyles';

export function extractLayoutStyles({ flex, display, height, width, borderRadius }: InlineStyles): string {
    return `
        display: ${display ?? 'flex'};
        flex: ${flex ?? 'none'};
        ${height ? `height: ${height}` : undefined};
        ${width ? `height: ${width}` : undefined};
        ${borderRadius ? `border-radius: ${borderRadius}px` : undefined}
    `;
}
