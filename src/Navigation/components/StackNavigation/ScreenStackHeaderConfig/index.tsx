import React from 'react';
import { Platform, Pressable, View } from 'react-native';
import { ScreenStackHeaderConfigProps } from 'react-native-screens';
import styled from 'styled-components/native';
import { ChevronLeft } from '../../../../Icons/ChevronLeft';

interface StyleProps {
    color: string | undefined;
    backgroundColor: string;
    titleColor: string | undefined;
}

const StyledText = styled.Text`
    color: ${(props: StyleProps) => props.color ?? '#1281FF'};
    font-size: 15px;
`;

const StyledTitle = styled(StyledText)`
    color: ${(props: StyleProps) => (props.titleColor != null ? props.titleColor : props.color ?? '#000000')};
    font-weight: 700;
    font-size: 17px;
    text-align: center;
`;

const Container = styled(View)`
    flex-direction: row;
    justify-content: space-between;
    height: 50px;
    background-color: ${(props: StyleProps) => props.backgroundColor};
    box-shadow: 0px 1px 4px rgba(0, 0, 0, 0.08);
`;

const LeftContainer = styled.View`
    flex-grow: 1;
    padding-left: 16px;
    flex-direction: row;
    justify-content: flex-start;
    align-items: center;
    flex-basis: 0;
`;

const MiddleContainer = styled.View`
    flex-grow: 1;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    flex-basis: 0;
`;

const RightContainer = styled.View`
    flex-grow: 1;
    padding-right: 16px;
    flex-direction: row;
    justify-content: flex-end;
    align-items: center;
    flex-basis: 0;
`;

const StyledBackButtonContainer = styled(Pressable)`
    flex-direction: row;
    align-items: center;
    justify-content: flex-start;
    ${() => (Platform.OS === 'web' ? 'cursor: pointer' : '')};
`;

export function ScreenStackHeaderConfig(props: ScreenStackHeaderConfigProps): JSX.Element | null {
    const { hidden, title, color, backgroundColor, titleColor } = props;

    const styleProps: StyleProps = {
        backgroundColor: backgroundColor ?? 'white',
        color,
        titleColor
    };

    if (hidden) {
        return null;
    } else {
        return (
            <Container {...styleProps}>
                <LeftContainer>
                    <StyledBackButtonContainer>
                        <ChevronLeft height={19} width={25} fill={styleProps.color ?? '#1281FF'} />
                        <StyledText {...styleProps}>{title}</StyledText>
                    </StyledBackButtonContainer>
                </LeftContainer>
                <MiddleContainer>
                    <StyledTitle {...styleProps}>{title}</StyledTitle>
                </MiddleContainer>
                <RightContainer />
            </Container>
        );
    }
}
