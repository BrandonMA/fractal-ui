export interface ShadowStyles {
    boxShadow?: string;
}

export function extractShadowStyles({ boxShadow }: ShadowStyles): string {
    return `
        ${boxShadow ? `box-shadow: ${boxShadow}` : undefined};
    `;
}
