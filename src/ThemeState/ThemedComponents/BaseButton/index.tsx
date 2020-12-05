import React from 'react';
import { useRecoilValue } from 'recoil';
import { fractalThemeInteractiveColorsAtomFamily } from '../../fractalThemeAtomFamily';
import { useBaseButtonAnimations } from './useBaseButtonAnimations';
import { StyledText, StyledButton } from './Styles';
import { BaseButtonProps } from './BaseButtonProps';

export function BaseButton(props: BaseButtonProps): JSX.Element {
    const { text, colorStyle, children, ...others } = props;
    const color = useRecoilValue(fractalThemeInteractiveColorsAtomFamily(colorStyle));
    const [handlePressIn, handlePressOut, finalStyle] = useBaseButtonAnimations(props, color);

    return (
        <StyledButton
            {...others}
            onPressIn={handlePressIn}
            onPressOut={handlePressOut}
            style={finalStyle}
            backgroundColor={color.base}
            backgroundShadow={color.base300}
        >
            {text != null ? (
                <StyledText textColor={color.base100} selectable={false}>
                    {text}
                </StyledText>
            ) : (
                children
            )}
        </StyledButton>
    );
}
