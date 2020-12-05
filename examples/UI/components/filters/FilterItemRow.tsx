import React, { memo, useCallback } from 'react';
import styled from 'styled-components/native';
import { LayoutAnimation } from 'react-native';
import { LayoutConfig } from '../../animations/LayoutConfig';
import { useFilterSectionStatus } from '../../../BusinessLogic/hooks/filters/useFilterSectionStatus';
import { useToggleFilterSectionStatus } from '../../../BusinessLogic/hooks/filters/useToggleFilterSectionStatus';
import { Filter } from '../../../BusinessLogic/models/Filter';
import { BaseButton } from '../../../../src/Layout/components';
import { colors } from '../../../../src/ThemeState/Colors';

interface StyledProps {
    active: boolean;
}

const StyledButton = styled(BaseButton)`
    justify-content: center;
    width: 90%;
    margin-bottom: 12px;
`;

export const Label = styled.Text`
    color: ${(props: StyledProps) => (props.active ? '#fff' : '#999')};
`;

interface FilterItemRowProps {
    filter: Filter;
}

export const FilterItemRow = memo(
    (props: FilterItemRowProps): JSX.Element => {
        const { filter } = props;
        const active = useFilterSectionStatus(filter.id);
        const toggleFilter = useToggleFilterSectionStatus(filter);

        const toggleActive = useCallback(() => {
            LayoutAnimation.configureNext(LayoutConfig);
            toggleFilter();
        }, [toggleFilter]);

        return (
            <StyledButton
                onPress={toggleActive}
                text={props.filter.name}
                backgroundColor={active ? '#005cb3' : colors.white.base}
                backgroundShadow={active ? undefined : colors.white.shadow}
                color={active ? undefined : colors.white.base100}
            />
        );
    }
);
