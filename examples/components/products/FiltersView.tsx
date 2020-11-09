import React, { useCallback, useState } from 'react';
import styled from 'styled-components/native';
import { Dimensions, LayoutAnimation, Pressable } from 'react-native';
import { FilterIcon } from '../../icons/FilterIcon';
import { Label } from '../Label';
import { FiltersList } from './FiltersList';
import { applyCursorStyle } from '../../util/applyCursorStyle';
import { LayoutConfig } from '../../animations/LayoutConfig';

interface ContainerProps {
    fullScreen: boolean;
}

const Container = styled.View`
    background-color: white;
    height: ${(props: ContainerProps) => (props.fullScreen ? `${Dimensions.get('window').height / 3}px` : '40px')};
    border-radius: 8px;
    margin: 0 12px;
    padding: 12px;
    flex-direction: column;
    justify-content: space-between;
    align-items: ${(props: ContainerProps) => (props.fullScreen ? 'flex-start' : 'center')};
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
        LayoutAnimation.configureNext(LayoutConfig);
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
