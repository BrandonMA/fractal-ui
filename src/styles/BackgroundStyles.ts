export interface BackgroundStyles {
    backgroundColor?: string;
}

export function extractBackgroundColor({ backgroundColor }: BackgroundStyles): string {
    return `background-color: ${backgroundColor ?? 'transparent'};`;
}
