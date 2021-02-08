export interface DisplayStyles {
    display?: 'flow' | 'table' | 'flex' | 'grid' | 'ruby' | 'subgrid' | 'block' | 'inline' | 'none';
    flex?: 'none' | 'auto' | number;
    justifyContent?: 'center' | 'flex-start' | 'flex-end' | 'space-between' | 'space-around';
    alignItems?: 'flex-start' | 'flex-end' | 'center' | 'stretch' | 'baseline';
    flexDirection?: 'column' | 'row';
}

export function extractDisplayStyles({ flex, display, justifyContent, alignItems, flexDirection }: DisplayStyles): string {
    return `
        display: ${display ?? 'flex'};
        ${flex ? `flex: ${flex}` : undefined};
        ${justifyContent ? `justify-content: ${justifyContent}` : undefined};
        ${alignItems ? `align-items: ${alignItems}` : undefined};
        flex-direction: ${flexDirection ?? 'column'};
    `;
}
