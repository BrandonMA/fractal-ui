import React, { memo, useCallback } from 'react';
import styled from 'styled-components/native';
import { LayoutAnimation, Pressable } from 'react-native';
import { LayoutConfig } from '../../animations/LayoutConfig';
import { getCursorStyle } from '../../../../src/Layout/util';
import { useFilterSectionStatus } from '../../../BusinessLogic/hooks/filters/useFilterSectionStatus';
import { useToggleFilterSectionStatus } from '../../../BusinessLogic/hooks/filters/useToggleFilterSectionStatus';

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
    filter: string;
}

export const FilterItemRow = memo(
    (props: FilterItemRowProps): JSX.Element => {
        const { filter } = props;
        const active = useFilterSectionStatus(filter);
        const toggleFilter = useToggleFilterSectionStatus(filter);

        const toggleActive = useCallback(() => {
            LayoutAnimation.configureNext(LayoutConfig);
            toggleFilter();
        }, [toggleFilter]);

        return (
            <Container active={active} onPress={toggleActive}>
                <Label active={active}>{props.filter}</Label>
            </Container>
        );
    }
);
