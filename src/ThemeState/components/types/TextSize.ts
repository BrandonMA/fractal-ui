export type TextSize = 'sm' | 'md' | 'lg' | 'xl';

export function getFontSize(textSize: TextSize): string {
    const fontSize = () => {
        switch (textSize) {
            case 'xl':
                return 21;
            case 'lg':
                return 17;
            case 'md':
                return 15;
            case 'sm':
                return 13;
        }
    };
    return `${fontSize()} px`;
}
