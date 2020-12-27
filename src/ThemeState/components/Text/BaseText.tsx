import React, { memo } from 'react';
import { useThemeColor } from '../../hooks/useThemeColor';
import { TextType } from '../types';
import { InternalText, InternalTextProps } from './InternalText';

interface BaseTextProps extends Omit<InternalTextProps, 'color'> {
    textType?: TextType;
}

export const BaseText = memo(
    (props: BaseTextProps): JSX.Element => {
        const { textType, ...others } = props;
        const textColor = useThemeColor('textColor');

        const color = () => {
            switch (textType) {
                case 'placeholder':
                    return textColor.base300;
                case 'label':
                    return textColor.base200;
                default:
                    return textColor.base900;
            }
        };

        return <InternalText selectable={false} {...others} color={color()} />;
    }
);
