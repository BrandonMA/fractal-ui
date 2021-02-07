export interface DimensionStyles {
    width?: string | number;
    height?: string | number;
}

export function extractDimensionStyles({ height, width }: DimensionStyles): string {
    return `
        ${height ? `height: ${typeof height === 'number' ? `${height}px` : height}` : undefined};
        ${width ? `width: ${typeof width === 'number' ? `${width}px` : width}` : undefined};
    `;
}
