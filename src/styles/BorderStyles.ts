export interface BorderStyles {
    borderRadius?: number;
}

export function extractBorderStyles({ borderRadius }: BorderStyles): string {
    return `
        ${borderRadius ? `border-radius: ${borderRadius}px` : undefined}
    `;
}
