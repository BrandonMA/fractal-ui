import React from 'react';
import { ViewProps } from 'react-native';
import { LayoutProps } from '../../../../../Layout/types/LayoutProps';
import { TabBarVariant } from './TabBarVariant';
export interface TabBarProps extends Omit<ViewProps, 'children'>, LayoutProps {
    children?: React.ReactNode;
    variant?: TabBarVariant;
}
