import styled from 'styled-components/native';
import { getCursorStyle } from '../../../src/Layout/util';

interface ContainerProps {
    lastItem: boolean;
    index?: number;
    isTwoColumnsCell?: boolean;
}

function handleLastItemBottom(props: ContainerProps): string {
    return props.lastItem ? '12px' : '0';
}

function handleTwoColumnsCell(props: ContainerProps): string {
    if (props.index != null && props.index % 2 === 0) {
        // Left
        return `12px 6px ${handleLastItemBottom(props)} 12px`;
    } else {
        // Right
        return `12px 12px ${handleLastItemBottom(props)} 6px`;
    }
}

function handleNormalCell(props: ContainerProps): string {
    return `12px 12px ${handleLastItemBottom(props)}`;
}

export const BasicCellContainer = styled.View`
    background-color: white;
    border-radius: 8px;
    padding: 12px;
    margin: ${(props: ContainerProps) => (props.isTwoColumnsCell ? handleTwoColumnsCell(props) : handleNormalCell(props))};
    ${getCursorStyle}
`;
