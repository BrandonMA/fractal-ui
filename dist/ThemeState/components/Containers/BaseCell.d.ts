import { ReactNode } from 'react';
export interface BaseCellProps {
    children: JSX.Element | Array<JSX.Element> | ReactNode;
    isLastItem?: boolean;
}
export declare function BaseCell(props: BaseCellProps): JSX.Element;
