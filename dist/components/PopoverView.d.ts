import { ReactNode } from 'react';
import { BaseBoxProps } from './baseComponents/BaseBox';
import { LayoutRectangle } from 'react-native';
interface PopoverViewProps extends BaseBoxProps {
    active: boolean;
    popoverChildren: (mainViewLayout: LayoutRectangle) => ReactNode;
    popoverContainerProps?: Omit<BaseBoxProps, 'children'>;
}
export declare function PopoverView(props: PopoverViewProps): JSX.Element;
export {};
