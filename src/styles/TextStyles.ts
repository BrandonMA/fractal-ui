export interface TextStyles {
    fontSize?: number;
    fontWeight?: number | string;
    color?: string;
    fontFamily?: string;
}

export function extractTextStyles({ fontSize, fontWeight, fontFamily, color }: TextStyles): string {
    return `
        ${fontSize ? `font-size: ${fontSize}px` : undefined};
        ${fontWeight ? `font-weight: ${fontWeight}` : undefined};
        ${color ? `color: ${color}` : undefined};
        ${fontFamily ? `font-family: ${fontFamily}` : undefined};
    `;
}
