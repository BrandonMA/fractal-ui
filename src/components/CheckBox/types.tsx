import { DimensionProps } from '../../sharedProps/DimensionProps';

export interface CheckBoxProps extends DimensionProps {
    value: boolean;
    onValueChange: (value: boolean) => void;
    label: string;
}
