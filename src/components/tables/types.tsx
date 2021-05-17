import { LayerProps } from '../containers/Layer/types';
import { TextProps } from '../text/BaseText/types';
import { TextProps as FractalTextProps } from '../../sharedProps/TextProps';

export interface TableCellTextProps extends FractalTextProps, Omit<LayerProps, 'children'> {
    textVariant?: TextProps['variant'];
    children: TextProps['children'];
    textProps?: FractalTextProps;
}
