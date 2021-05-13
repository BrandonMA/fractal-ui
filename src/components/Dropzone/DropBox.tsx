import { motion } from 'framer-motion';
import React from 'react';
import styled, { StyledComponent } from 'styled-components';
import { UploadIcon } from '../../assets/UploadIcon';
import { useTheme } from '../../context/hooks/useTheme';
import { extractTextProps } from '../../sharedProps/TextProps';
import { Layer } from '../containers/Layer';
import { LayerProps } from '../containers/Layer/types';
import { DropBoxProps } from './types';

const FileInput = styled.input`
    display: none;
`;

const StyledText = styled(motion.span)`
    ${extractTextProps};
`;

const StyledButton = styled(motion.button)`
    position: relative;
    cursor: pointer;
    background: transparent;
    padding: 0;
    border: 0;
    font-family: inherit;
    font-size: inherit;
    ${extractTextProps};
    &:hover {
        text-decoration: underline;
    }
`;

const UploadBox = styled(Layer)`
    border-style: dashed;
    border-width: 1px;
    justify-content: center;
    align-items: center;
    flex-direction: row;
` as StyledComponent<'div', any, LayerProps>;

export function DropBox({
    dropContainerProps,
    dragFocused,
    fileInputProps,
    onButtonPress,
    textButton = 'explorar',
    text = 'Suelta los archivos para adjuntarlos o '
}: DropBoxProps): JSX.Element {
    const { sizes, colors, spacings, textVariants } = useTheme();
    const { fontSize, fontWeight, color, fontFamily } = textVariants.normal;
    const finalColor = colors[color];

    const variants = {
        normal: {
            scale: 1,
            borderColor: colors.placeholder,
            backgroundColor: 'transparent'
        },
        focus: {
            scale: 1.02,
            borderColor: colors.mainInteractiveColor,
            backgroundColor: colors.background
        }
    };

    return (
        <UploadBox
            minHeight={sizes.interactiveItemHeight}
            padding={spacings.xs}
            variants={variants}
            animate={dragFocused ? 'focus' : 'normal'}
            {...dropContainerProps}
        >
            <FileInput {...fileInputProps} />
            <UploadIcon width={24} height={24} fill={colors.text} />
            <Layer width={spacings.xs} />
            <StyledText selectable={false} fontFamily={fontFamily} fontSize={fontSize} fontWeight={fontWeight} color={finalColor}>
                {text}
                <StyledButton onClick={onButtonPress} color={colors.mainInteractiveColor}>
                    {textButton}
                </StyledButton>
            </StyledText>
        </UploadBox>
    );
}
