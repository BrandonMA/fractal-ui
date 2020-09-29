import { TabBarProps } from '../types/TabBarProps';

export function applyInsets(props: TabBarProps): string {
    const insets = props.insets ?? {
        top: 0,
        right: 0,
        bottom: 0,
        left: 0
    };
    if (props.position === 'left' || props.position === 'right') {
        return `margin: ${insets.top}px ${insets.right}px ${insets.bottom}px ${insets.left}px`;
    } else {
        return `padding-bottom: ${insets.bottom}px`;
    }
}
