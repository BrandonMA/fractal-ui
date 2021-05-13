import React, { Fragment, useCallback } from 'react';
import { Layer } from '../containers/Layer';
import { UploadedFileListProps } from './types';
import { UploadedFileItem } from './UploadedFileItem';
import { AnimatePresence } from 'framer-motion';

export function UploadedFileList({ files, removeFile }: UploadedFileListProps): JSX.Element {
    const renderItem = useCallback(
        (file: File, index: number): JSX.Element => {
            return (
                <Fragment key={`${index}`}>
                    <UploadedFileItem file={file} onDeletePress={() => removeFile(index)} />
                </Fragment>
            );
        },
        [removeFile]
    );

    return (
        <Layer>
            <AnimatePresence>{files.map(renderItem)}</AnimatePresence>
        </Layer>
    );
}
