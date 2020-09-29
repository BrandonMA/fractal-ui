import React from 'react';
import { ViewProps } from 'react-native';
import { EdgeInsets } from 'react-native-safe-area-context';
import { TabBarPosition } from '../types/TabBarPosition';

export interface TabBarProps extends Omit<ViewProps, 'children'> {
    children: React.ReactNode;
    position?: TabBarPosition;
    insets?: EdgeInsets;
}
