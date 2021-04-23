import { getUserSelectProp } from './utils/getUserSelectProp';
export function extractTextProps({ fontSize, fontWeight, fontFamily, color, fontStyle, selectable }) {
    return `
        ${fontSize != null ? `font-size: ${fontSize}px` : ''};
        ${fontWeight != null ? `font-weight: ${fontWeight}` : ''};
        ${color != null ? `color: ${color}` : ''};
        ${fontFamily != null ? `font-family: ${fontFamily}` : ''};
        ${fontStyle != null ? `font-family: ${fontStyle}` : ''};
        ${getUserSelectProp(selectable)};
    `;
}
//# sourceMappingURL=TextProps.js.map