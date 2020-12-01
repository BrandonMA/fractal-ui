import React, { memo } from 'react';
import styled from 'styled-components/native';
import { Dimensions, Pressable } from 'react-native';
import { FilterIcon } from '../../icons/FilterIcon';
import { Label } from '../Label';
import { FiltersSectionList } from './FiltersSectionList';
import { getCursorStyle } from '../../../../src/Layout/util';
import { useExpanded } from '../../hooks/useExpanded';
import { BaseInputContainer } from '../../../../src/Layout/components/BaseInputContainer';

interface ContainerProps {
    fullScreen: boolean;
}

const Container = styled(BaseInputContainer)`
    height: ${(props: ContainerProps) => (props.fullScreen ? `${Dimensions.get('window').height / 3}px` : '40px')};
    flex-direction: column;
    overflow: hidden;
`;

const InnerContainer = styled(Pressable)`
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    margin-bottom: 12px;
    ${getCursorStyle};
`;

export const FiltersView = memo(
    (): JSX.Element => {
        const [expanded, setExpanded] = useExpanded();

        return (
            <Container fullScreen={expanded}>
                <InnerContainer onPress={setExpanded}>
                    <Label>Todos los productos</Label>
                    <FilterIcon />
                </InnerContainer>
                {expanded ? <FiltersSectionList /> : null}
            </Container>
        );
    }
);
