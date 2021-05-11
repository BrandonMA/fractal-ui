import React, { DragEvent, useState, useEffect } from 'react';
import styled, { StyledComponent } from 'styled-components';
import { useTheme } from '../../context';
import { Text } from '../text';
import { Layer } from '../containers/Layer';
import { LayerProps } from '../containers/Layer/types';

const FileInput = styled.input`
    display: none;
`;

const UploadBox = styled(Layer)`
    border-style: dashed;
    border-width: 1px;
    justify-content: center;
    align-items: center;
` as StyledComponent<'div', any, LayerProps>;

interface DropzoneProps {
    acceptedTypes?: Array<string>;
    pickMultipleFiles?: boolean;
    onChangeSelectedFiles: (selectedFiles: Array<File>) => void;
}

export function Dropzone({ acceptedTypes, pickMultipleFiles, onChangeSelectedFiles }: DropzoneProps): JSX.Element {
    const { sizes, colors } = useTheme();
    const [selectedFiles, setSelectedFiles] = useState<Array<File>>([]);

    const handlePreventDefault = (dragEvent: DragEvent) => {
        dragEvent.preventDefault();
    };

    const validateFile = (file: File) => {
        if (acceptedTypes && acceptedTypes.indexOf(file.type) === -1) {
            return false;
        }
        return true;
    };

    const handleFiles = (files: FileList) => {
        for (let i = 0; i < files.length; i++) {
            if (validateFile(files[i])) {
                setSelectedFiles((prevArray) => {
                    const newSelectedFiles = [...prevArray, files[i]];
                    onChangeSelectedFiles(newSelectedFiles);
                    return newSelectedFiles;
                });
            }
        }
    };

    const fileDrop = (dragEvent: DragEvent) => {
        handlePreventDefault(dragEvent);
        const files = dragEvent.dataTransfer.files;
        if (files.length > 0) {
            handleFiles(files);
        }
    };

    return (
        <Layer>
            <UploadBox
                height={sizes.interactiveItemHeight}
                borderColor={colors.placeholder}
                onDragOver={handlePreventDefault}
                onDragEnter={handlePreventDefault}
                onDragLeave={handlePreventDefault}
                onDrop={fileDrop}
            >
                <FileInput accept={acceptedTypes?.join(',')} multiple={pickMultipleFiles} type={'file'} />
                <Text variant='normal'>Seleccionar archivo</Text>
            </UploadBox>
            {selectedFiles.map((file, index) => (
                <Text key={`${index}`} variant='normal'>
                    {file.name}
                </Text>
            ))}
        </Layer>
    );
}
