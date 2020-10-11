import { LayoutProps } from '../types';

export function applyFullscreenInsets(props: LayoutProps): string {
    const { insets } = props;
    if (insets != null) {
        return `padding: ${insets.top}px ${insets.right}px ${insets.bottom}px ${insets.left}px`;
    }
    return '';
}
