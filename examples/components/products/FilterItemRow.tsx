import React, { useCallback } from 'react';
import styled from 'styled-components/native';
import { applyCursorStyle } from '../../util/applyCursorStyle';
import { useIsFilterActive } from '../../hooks/products/useAddFilterToActiveState';
import { useRemoveFilterFromActiveState } from '../../hooks/products/useRemoveFilterFromActiveState';
import { useAddFilterToActiveState } from '../../hooks/products/useIsFilterActive';

interface StyledProps {
    active: boolean;
}

const Container = styled.TouchableOpacity`
    background-color: ${(props: StyledProps) => (props.active ? '#005CB3' : '#f6f6f6')};
    height: 32px;
    border-radius: 8px;
    justify-content: center;
    width: 90%;
    padding: 0 12px;
    margin-bottom: 12px;
    ${applyCursorStyle}
`;

export const Label = styled.Text`
    color: ${(props: StyledProps) => (props.active ? '#fff' : '#999')};
`;

interface FilterItemRowProps {
    value: string;
}

export function FilterItemRow(props: FilterItemRowProps): JSX.Element {
    const { value } = props;
    const active = useIsFilterActive(value);
    const removeFilterFromActiveState = useRemoveFilterFromActiveState();
    const addFilterToActiveState = useAddFilterToActiveState();

    const toggleActive = useCallback(() => {
        if (active) {
            removeFilterFromActiveState(value);
        } else {
            addFilterToActiveState(value);
        }
    }, [active, value, removeFilterFromActiveState, addFilterToActiveState]);

    return (
        <Container active={active} onPress={toggleActive}>
            <Label active={active}>{props.value}</Label>
        </Container>
    );
}
