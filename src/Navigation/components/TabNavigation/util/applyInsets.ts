import { TabBarProps } from '../types/TabBarProps';

export function applyInsets(props: TabBarProps): string {
    const insets = props.insets ?? {
        top: 0,
        right: 0,
        bottom: 0,
        left: 0
    };
    if (props.position === 'left' || props.position === 'right') {
        return `padding: 0px`;
    } else if (props.position === 'bottom') {
        return `padding-bottom: ${insets.bottom}px`;
    } else {
        return `padding-top: ${insets.top}px`;
    }
}

export function applyDimension(props: TabBarProps): string {
    if (props.position === 'left' || props.position === 'right') {
        return 'height: 100%';
    } else {
        return 'width: 100%';
    }
}
