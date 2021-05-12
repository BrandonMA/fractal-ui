import React from 'react';
import styled, { StyledComponent } from 'styled-components';
import { useTheme } from '../../context';
import { Text } from '../text';
import { Layer } from '../containers/Layer';
import { LayerProps } from '../containers/Layer/types';
import { UploadIcon } from '../../assets/UploadIcon';
import { extractTextProps } from '../../sharedProps/TextProps';
import { motion } from 'framer-motion';
import { useDropzone } from './hooks/useDropzone';

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
    &:hover {
        text-decoration: underline;
    }
    ${extractTextProps};
`;

const UploadBox = styled(Layer)`
    border-style: dashed;
    border-width: 1px;
    justify-content: center;
    align-items: center;
    flex-direction: row;
` as StyledComponent<'div', any, LayerProps>;

interface DropzoneProps {
    acceptedTypes?: Array<string>;
    pickMultipleFiles?: boolean;
    maxNumberFiles?: number;
    maxFileSize?: number;
    onChangeAcceptedFiles: (acceptedFiles: Array<File>) => void;
}

export function Dropzone({
    acceptedTypes,
    pickMultipleFiles,
    maxNumberFiles,
    maxFileSize,
    onChangeAcceptedFiles
}: DropzoneProps): JSX.Element {
    const { sizes, colors, spacings, textVariants } = useTheme();
    const { fontSize, fontWeight, color, fontFamily } = textVariants.normal;
    const finalColor = colors[color];
    const { acceptedFiles, containerProps, fileInputProps, openFileDialog, dragFocused } = useDropzone(
        acceptedTypes,
        pickMultipleFiles,
        maxNumberFiles,
        maxFileSize,
        onChangeAcceptedFiles
    );

    return (
        <Layer>
            <UploadBox
                minHeight={sizes.interactiveItemHeight}
                padding={spacings.s}
                borderColor={dragFocused ? colors.mainInteractiveColor : colors.placeholder}
                {...containerProps}
            >
                <FileInput {...fileInputProps} />
                <UploadIcon width={24} height={24} fill={colors.text} />
                <Layer width={spacings.xs} />
                <StyledText selectable={false} fontFamily={fontFamily} fontSize={fontSize} fontWeight={fontWeight} color={finalColor}>
                    Suelta los archivos para adjuntarlos o{' '}
                    <StyledButton onClick={openFileDialog} color={colors.mainInteractiveColor}>
                        explorar
                    </StyledButton>
                </StyledText>
            </UploadBox>
            {acceptedFiles.map((file, index) => (
                <Text key={`${index}`} variant='normal'>
                    {file.name}
                </Text>
            ))}
        </Layer>
    );
}
