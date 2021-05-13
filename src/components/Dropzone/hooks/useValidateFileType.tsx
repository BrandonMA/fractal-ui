import { useCallback } from 'react';

export function useValidateFileType(acceptedTypes: Array<string> | undefined): (file: File) => boolean {
    return useCallback(
        (file: File) => {
            if (acceptedTypes && acceptedTypes.indexOf(file.type) === -1) {
                return false;
            }
            return true;
        },
        [acceptedTypes]
    );
}
