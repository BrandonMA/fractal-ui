import { useCallback, useState } from 'react';
import { useValidateFile } from './useValidateFile';

export function useAcceptedFiles(
    acceptedTypes: Array<string> | undefined,
    maxFileSize: number | undefined,
    maxNumberFiles: number | undefined,
    onChangeAcceptedFiles: (acceptedFiles: Array<File>) => void
): [acceptedFiles: Array<File>, setAcceptedFiles: (files: FileList) => void, removeFile: (fileIndex: number) => void] {
    const [acceptedFiles, setAcceptedFiles] = useState<Array<File>>([]);
    const validateFile = useValidateFile(acceptedTypes, maxFileSize);

    const updateAcceptedFiles = useCallback(
        (newFiles: Array<File>) => {
            setAcceptedFiles(newFiles);
            onChangeAcceptedFiles(newFiles);
        },
        [onChangeAcceptedFiles]
    );

    const getValidFiles = useCallback(
        (files: FileList, endIndex: number): Array<File> => {
            let validFiles: Array<File> = [];
            for (let i = 0; i < endIndex; i++) {
                if (validateFile(files[i])) {
                    validFiles = [...validFiles, files[i]];
                }
            }
            return validFiles;
        },
        [validateFile]
    );

    const getAcceptedFiles = useCallback(
        (files: FileList): Array<File> => {
            if (maxNumberFiles) {
                if (acceptedFiles.length < maxNumberFiles) {
                    const filesLength = maxNumberFiles - acceptedFiles.length;
                    return getValidFiles(files, filesLength);
                } else {
                    return [];
                }
            }

            return getValidFiles(files, files.length);
        },
        [acceptedFiles.length, getValidFiles, maxNumberFiles]
    );

    const addAcceptedFiles = useCallback(
        (newSelectedFiles: FileList) => {
            const newAddedFiles = getAcceptedFiles(newSelectedFiles);

            if (newAddedFiles.length > 0) {
                const newAcceptedFiles = [...acceptedFiles, ...newAddedFiles];
                updateAcceptedFiles(newAcceptedFiles);
            }
        },
        [acceptedFiles, getAcceptedFiles, updateAcceptedFiles]
    );

    const removeFile = (fileIndex: number) => {
        acceptedFiles.splice(fileIndex, 1);
        updateAcceptedFiles([...acceptedFiles]);
    };

    return [acceptedFiles, addAcceptedFiles, removeFile];
}
