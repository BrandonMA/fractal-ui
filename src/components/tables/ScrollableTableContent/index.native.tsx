import React from 'react';
import { ScrollView } from 'react-native';
import { ScrollableTableContentProps } from './types';

export function ScrollableTableContent({ children }: ScrollableTableContentProps): JSX.Element {
    return <ScrollView horizontal>{children}</ScrollView>;
}
