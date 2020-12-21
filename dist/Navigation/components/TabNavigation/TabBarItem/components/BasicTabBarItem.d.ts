import React from 'react';
import { SizeGroup } from '../../../../../SizeGroup/types';
export interface BasicTabBarItemProps {
    widthSizeGroup: SizeGroup;
    highlightColor?: string;
    children: React.ReactNode;
}
export declare const BasicTabBarItem: React.MemoExoticComponent<(props: BasicTabBarItemProps) => JSX.Element>;
