import { EdgeInsets } from 'react-native-safe-area-context';

interface InsetsStyleConfig {
    type: 'margin' | 'padding';
    removeHorinzontal?: boolean;
    removeVertical?: boolean;
}

interface Props {
    insets: EdgeInsets;
    insetsStyleConfig: InsetsStyleConfig;
}

export function getInsetsStyle(props: Props): string {
    const { insets, insetsStyleConfig } = props;
    const top = `${insetsStyleConfig.removeVertical ? 0 : insets.top}px`;
    const right = `${insetsStyleConfig.removeHorinzontal ? 0 : insets.right}px`;
    const bottom = `${insetsStyleConfig.removeVertical ? 0 : insets.bottom}px`;
    const left = `${insetsStyleConfig.removeHorinzontal ? 0 : insets.left}px`;
    return `${insetsStyleConfig.type}: ${top} ${right} ${bottom} ${left} `;
}
