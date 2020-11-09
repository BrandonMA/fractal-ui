import React, { useCallback, useState } from 'react';
import styled from 'styled-components/native';
import { LayoutAnimation, Pressable } from 'react-native';
import { FilterIcon } from '../../icons/FilterIcon';
import { Label } from '../Label';
import { FiltersList } from './FiltersList';
import { applyCursorStyle } from '../../util/applyCursorStyle';

interface ContainerProps {
    fullScreen: boolean;
}

const Container = styled.View`
    background-color: white;
    height: 40px;
    border-radius: 8px;
    margin: 0 12px;
    padding: 12px;
    flex-direction: column;
    justify-content: space-between;
    align-items: ${(props: ContainerProps) => (props.fullScreen ? 'flex-start' : 'center')};
    flex-grow: ${(props: ContainerProps) => (props.fullScreen ? 2 : 0)};
`;

const InnerContainer = styled(Pressable)`
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    margin-bottom: 12px;
    ${applyCursorStyle()};
`;

export function FiltersView(): JSX.Element {
    const [fullScreen, setFullScreen] = useState(false);

    const toggleFullScreen = useCallback(() => {
        LayoutAnimation.configureNext(LayoutAnimation.Presets.easeInEaseOut);
        setFullScreen((value) => !value);
    }, []);

    return (
        <Container fullScreen={fullScreen}>
            <InnerContainer onPress={toggleFullScreen}>
                <Label>Todos los productos</Label>
                <FilterIcon />
            </InnerContainer>
            {fullScreen ? <FiltersList /> : null}
        </Container>
    );
}
