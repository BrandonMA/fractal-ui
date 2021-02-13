export interface BackgroundStyles {
    backgroundColor?: string;
    bg?: string;
}

export function extractBackgroundColor({ backgroundColor, bg }: BackgroundStyles): string {
    return `
        background-color: ${bg ?? 'transparent'};
        background-color: ${backgroundColor ?? 'transparent'};
    `;
}
