import { TextSize } from '../types/TextSize';

export function getFontSize(textSize: TextSize): string {
    const fontSize = () => {
        switch (textSize) {
            case 'xl':
                return 21;
            case 'lg':
                return 19;
            case 'md':
                return 17;
            case 'sm':
                return 15;
        }
    };
    return `${fontSize()}px`;
}
