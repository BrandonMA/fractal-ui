import React from 'react';
import { Layer } from '../containers/Layer';
import styled from 'styled-components';
import { LayerProps } from '../containers/Layer/types';
import { useTheme } from '../../context/hooks/useTheme';

const BaseRow = styled(Layer)`
    width: 100%;
    display: flex;
    flex-flow: row nowrap;
`;

export function TableRow(props: LayerProps): JSX.Element {
    const { colors } = useTheme();
    return <BaseRow borderWidth={0} borderBottomWidth={1} borderStyle={'solid'} borderColor={colors.background} {...props} />;
}
