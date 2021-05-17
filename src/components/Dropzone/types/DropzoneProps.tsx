import { NativeFileInfo } from './FractalFile';

export interface DropzoneProps {
    acceptedTypes?: Array<string>;
    pickMultipleFiles?: boolean;
    maxNumberFiles?: number;
    maxFileSize?: number; // maximum file size (in bytes)
    onChangeAcceptedFiles: (acceptedFiles: Array<File | NativeFileInfo>) => void;
}
