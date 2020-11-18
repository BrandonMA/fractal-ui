import React, { useCallback } from 'react';
import styled from 'styled-components/native';
import { useIsFilterActive } from '../../../BusinessLogic/hooks/filters/useAddFilterToActiveState';
import { useRemoveFilterFromActiveState } from '../../../BusinessLogic/hooks/filters/useRemoveFilterFromActiveState';
import { useAddFilterToActiveState } from '../../../BusinessLogic/hooks/filters/useIsFilterActive';
import { LayoutAnimation, Pressable } from 'react-native';
import { LayoutConfig } from '../../animations/LayoutConfig';
import { getCursorStyle } from '../../../../src/Layout/util';

interface StyledProps {
    active: boolean;
}

const Container = styled(Pressable)`
    background-color: ${(props: StyledProps) => (props.active ? '#005CB3' : '#f6f6f6')};
    height: 32px;
    border-radius: 8px;
    justify-content: center;
    width: 90%;
    padding: 0 12px;
    margin-bottom: 12px;
    ${getCursorStyle}
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
        LayoutAnimation.configureNext(LayoutConfig);
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
