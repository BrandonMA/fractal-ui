import React, { ReactNode } from 'react';
import { Button, ButtonProps } from './Button';
import { useTheme } from '../../context/hooks/useTheme';

export interface CircularIconButtonProps extends ButtonProps {
    children?: (color: string) => ReactNode | Array<ReactNode>;
}

const CircularIconButton = (props: CircularIconButtonProps): JSX.Element => {
    const { variant, children, ...others } = props;
    const { colors, sizes } = useTheme();

    const colorName = `${variant}InteractiveColor800`;
    const color = colors[colorName];

    return (
        <Button
            variant={variant}
            height={sizes.interactiveItemHeight}
            width={sizes.interactiveItemHeight}
            borderRadius={sizes.interactiveItemHeight / 2}
            {...others}
        >
            {children?.(color)}
        </Button>
    );
};

CircularIconButton.displayName = 'CircularIconButton';

export { CircularIconButton };
