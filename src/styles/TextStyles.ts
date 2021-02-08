export interface TextStyles {
    fontSize?: number;
    fontWeight?: number | string;
    color?: string;
}

export function extractTextStyles({ fontSize, fontWeight, color }: TextStyles): string {
    return `
        ${fontSize ? `font-size: ${fontSize}px` : undefined};
        ${fontWeight ? `font-weight: ${fontWeight}` : undefined};
        ${color ? `color: ${color}` : undefined};
    `;
}
