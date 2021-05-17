import { useCallback } from 'react';

export function useValidateFileType(acceptedTypes: Array<string> | undefined): (fileType: string) => boolean {
    return useCallback(
        (fileType: string) => {
            if (acceptedTypes && acceptedTypes.indexOf(fileType) === -1) {
                return false;
            }
            return true;
        },
        [acceptedTypes]
    );
}
