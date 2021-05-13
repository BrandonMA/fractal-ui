import { useCallback, useState } from 'react';
import { useValidateFile } from './useValidateFile';

export function useAcceptedFiles(
    acceptedTypes: Array<string> | undefined,
    maxFileSize: number | undefined,
    maxNumberFiles: number | undefined,
    onChangeAcceptedFiles: (acceptedFiles: Array<File>) => void
): [acceptedFiles: Array<File>, setAcceptedFiles: (files: FileList) => void] {
    const [acceptedFiles, setAcceptedFiles] = useState<Array<File>>([]);
    const validateFile = useValidateFile(acceptedTypes, maxFileSize);

    const pushAcceptedFiles = useCallback(
        (newFiles: Array<File>) => {
            setAcceptedFiles((currentAcceptedFile) => {
                const newAcceptedFiles = [...currentAcceptedFile, ...newFiles];
                onChangeAcceptedFiles(newAcceptedFiles);
                return newAcceptedFiles;
            });
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

    const updateAcceptedFiles = useCallback(
        (newSelectedFiles: FileList) => {
            const newAcceptedFiles = getAcceptedFiles(newSelectedFiles);

            if (newAcceptedFiles.length > 0) {
                pushAcceptedFiles(newAcceptedFiles);
            }
        },
        [getAcceptedFiles, pushAcceptedFiles]
    );

    return [acceptedFiles, updateAcceptedFiles];
}
