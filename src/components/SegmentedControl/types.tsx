import { TextProps } from '../../sharedProps/TextProps';
import { LayerProps } from '../containers/Layer/types';

type TextStyle = Omit<TextProps, 'selectable'>;

interface TextStyleProps {
    textStyle?: TextStyle;
    activeTextStyle?: TextStyle;
}

interface BaseControlTabProps {
    value: string;
    onSelect: () => void;
    tintColor?: string;
    hideDivider?: boolean;
}

export interface BaseSegmentedControlTabProps extends TextStyle, BaseControlTabProps {
    selected: boolean;
}

export interface SegmentedControlTabProps extends TextStyleProps, BaseControlTabProps {
    selected: boolean;
}

export interface SegmentedControlProps extends TextStyleProps, Omit<LayerProps, 'children'> {
    /**
     * The labels for the control's segment buttons, in order.
     */
    values: Array<string>;
    /**
     * The index in `props.values` of the segment to be (pre)selected.
     */
    selectedIndex?: number;
    /**
     * Callback that is called when the user taps a segment;
     * passes the segment's value as an argument
     */
    onValueChange?: (value: string) => void;
    /**
     * Callback that is called when the user taps a segment;
     * passes the event as an argument
     */
    onChange?: (value: string, index: number) => void;
    /**
     * Accent color of the control.
     */
    tintColor?: string;
}
