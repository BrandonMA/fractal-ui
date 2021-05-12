import { useRef, ChangeEvent, useCallback } from 'react';
import { useAcceptedFiles } from './useAcceptedFiles';
import { useDragAndDropEventHandlers } from './useDragAndDropEventHandlers';

export function useDropzone(
    acceptedTypes: Array<string> | undefined,
    pickMultipleFiles: boolean | undefined,
    maxNumberFiles: number | undefined,
    maxFileSize: number | undefined,
    onChangeAcceptedFiles: (acceptedFiles: Array<File>) => void
): {
    acceptedFiles: Array<File>;
    dragFocused: boolean;
    openFileDialog: () => void;
    containerProps: Record<string, unknown>;
    fileInputProps: Record<string, unknown>;
} {
    const fileInputRef = useRef<HTMLInputElement>(null);
    const [acceptedFiles, setAcceptedFiles] = useAcceptedFiles(acceptedTypes, maxFileSize, maxNumberFiles, onChangeAcceptedFiles);
    const { dragFocused, onDragEnter, onDragLeave, onDragOver, onDrop } = useDragAndDropEventHandlers(setAcceptedFiles);

    const openFileDialog = useCallback(() => {
        if (fileInputRef.current) {
            fileInputRef.current.click();
        }
    }, []);

    const handlePickedFiles = useCallback(
        (event: ChangeEvent<HTMLInputElement>) => {
            if (event.target.files?.length) {
                setAcceptedFiles(event.target.files);
            }
        },
        [setAcceptedFiles]
    );

    return {
        acceptedFiles,
        dragFocused,
        openFileDialog,
        containerProps: {
            onDragOver,
            onDragEnter,
            onDragLeave,
            onDrop
        },
        fileInputProps: {
            ref: fileInputRef,
            accept: acceptedTypes?.join(','),
            multiple: pickMultipleFiles,
            type: 'file',
            onChange: handlePickedFiles
        }
    };
}
