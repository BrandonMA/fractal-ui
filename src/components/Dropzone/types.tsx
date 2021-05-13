import { ChangeEvent, DragEventHandler, RefObject } from 'react';

export interface DropzoneProps {
    acceptedTypes?: Array<string>;
    pickMultipleFiles?: boolean;
    maxNumberFiles?: number;
    maxFileSize?: number; // maximum file size (in bytes)
    onChangeAcceptedFiles: (acceptedFiles: Array<File>) => void;
}

export interface DragAndDropEventHandlers {
    onDragOver: DragEventHandler;
    onDragEnter: DragEventHandler;
    onDragLeave: DragEventHandler;
    onDrop: DragEventHandler;
}

export interface fileInputProps {
    ref: RefObject<HTMLInputElement>;
    accept: string | undefined;
    multiple: boolean | undefined;
    type: 'file';
    onChange: (event: ChangeEvent<HTMLInputElement>) => void;
}

export interface DragAndDropProps extends DragAndDropEventHandlers {
    dragFocused: boolean;
}

export interface DropBoxProps {
    dragFocused: boolean;
    dropContainerProps: DragAndDropEventHandlers;
    fileInputProps: fileInputProps;
    onButtonPress: () => void;
    textButton?: string;
    text?: string;
}

export interface UploadedFileItemProps {
    file: File;
    onDeletePress: () => void;
}

export interface UploadedFileListProps {
    files: Array<File>;
    removeFile: (fileIndex: number) => void;
}
