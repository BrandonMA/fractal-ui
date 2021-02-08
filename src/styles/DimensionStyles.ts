export interface DimensionStyles {
    width?: string | number;
    height?: string | number;
    // Padding
    padding?: number;
    paddingTop?: number;
    paddingBottom?: number;
    paddingRight?: number;
    paddingLeft?: number;
    // Margin
    margin?: number;
    marginTop?: number;
    marginBottom?: number;
    marginRight?: number;
    marginLeft?: number;
}

export function extractDimensionStyles({
    height,
    width,
    padding,
    paddingBottom,
    paddingLeft,
    paddingRight,
    paddingTop,
    margin,
    marginBottom,
    marginLeft,
    marginRight,
    marginTop
}: DimensionStyles): string {
    return `
        ${height ? `height: ${typeof height === 'number' ? `${height}px` : height}` : undefined};
        ${width ? `width: ${typeof width === 'number' ? `${width}px` : width}` : undefined};
        ${padding ? `padding: ${padding}px` : undefined};
        ${paddingTop ? `padding-top: ${paddingTop}px` : undefined};
        ${paddingBottom ? `padding-bottom: ${paddingBottom}px` : undefined};
        ${paddingLeft ? `padding-left: ${paddingLeft}px` : undefined};
        ${paddingRight ? `padding-right: ${paddingRight}px` : undefined};
        ${margin ? `margin: ${margin}px` : undefined};
        ${marginTop ? `margin-top: ${marginTop}px` : undefined};
        ${marginBottom ? `margin-bottom: ${marginBottom}px` : undefined};
        ${marginLeft ? `margin-left: ${marginLeft}px` : undefined};
        ${marginRight ? `margin-right: ${marginRight}px` : undefined};
    `;
}
