import { ReactNode } from 'react';
import { TableContainerProps } from './types';
interface ScrollableTableContainerProps extends TableContainerProps {
    nonScrollableChildren: ReactNode | Array<ReactNode>;
}
export declare function ScrollableTableContainer({ children, nonScrollableChildren, ...others }: ScrollableTableContainerProps): JSX.Element;
export {};
