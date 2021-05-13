import React, { Fragment, useCallback } from 'react';
import { useTheme } from '../../context';
import { Layer } from '../containers/Layer';
import { UploadedFileListProps } from './types';
import { UploadedFileItem } from './UploadedFileItem';
import { AnimatePresence } from 'framer-motion';

export function UploadedFileList({ files, removeFile }: UploadedFileListProps): JSX.Element {
    const { spacings } = useTheme();
    const renderItem = useCallback(
        (file: File, index: number): JSX.Element => {
            const isLastItem = index === files.length - 1;
            return (
                <Fragment key={`${index}`}>
                    <UploadedFileItem file={file} onDeletePress={() => removeFile(index)} />
                    {isLastItem ? null : <Layer marginBottom={spacings.s} />}
                </Fragment>
            );
        },
        [files.length, removeFile, spacings.s]
    );

    return (
        <Layer paddingTop={spacings.s} paddingBottom={spacings.s}>
            <AnimatePresence>{files.map(renderItem)}</AnimatePresence>
        </Layer>
    );
}
