import { useCallback } from 'react';

export function useValidateFile(acceptedTypes: Array<string> | undefined, maxFileSize: number | undefined): (file: File) => boolean {
    const validateFileType = useCallback(
        (file: File) => {
            if (acceptedTypes && acceptedTypes.indexOf(file.type) === -1) {
                return false;
            }
            return true;
        },
        [acceptedTypes]
    );

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
