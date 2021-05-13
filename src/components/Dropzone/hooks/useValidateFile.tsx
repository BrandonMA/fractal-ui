import { useCallback } from 'react';
import { useValidateFileType } from './useValidateFileType';

export function useValidateFile(acceptedTypes: Array<string> | undefined, maxFileSize: number | undefined): (file: File) => boolean {
    const validateFileType = useValidateFileType(acceptedTypes);

    const validateFileSize = useCallback(
        (file: File) => {
            if (maxFileSize && file.size > maxFileSize) {
                return false;
            }
            return true;
        },
        [maxFileSize]
    );

    return useCallback(
        (file: File) => {
            return validateFileType(file) && validateFileSize(file);
        },
        [validateFileSize, validateFileType]
    );
}
