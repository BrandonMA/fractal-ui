import { useState } from 'react';
import { useValidateFile } from './useValidateFile';

export function useAcceptedFiles(
    acceptedTypes: Array<string> | undefined,
    maxFileSize: number | undefined,
    maxNumberFiles: number | undefined,
    onChangeAcceptedFiles: (acceptedFiles: Array<File>) => void
): [acceptedFiles: Array<File>, setAcceptedFiles: (files: FileList) => void] {
    const [acceptedFiles, setAcceptedFiles] = useState<Array<File>>([]);
    const validateFile = useValidateFile(acceptedTypes, maxFileSize);

    const addAcceptedFiles = (files: FileList, endIndex: number) => {
        for (let i = 0; i < endIndex; i++) {
            if (validateFile(files[i])) {
                setAcceptedFiles((prevArray) => {
                    const newSelectedFiles = [...prevArray, files[i]];
                    onChangeAcceptedFiles(newSelectedFiles);
                    return newSelectedFiles;
                });
            }
        }
    };

    const handleFiles = (files: FileList) => {
        if (maxNumberFiles) {
            if (acceptedFiles.length < maxNumberFiles) {
                const filesLength = maxNumberFiles - acceptedFiles.length;
                addAcceptedFiles(files, filesLength);
            }
        } else {
            addAcceptedFiles(files, files.length);
        }
    };

    return [acceptedFiles, handleFiles];
}
