import React from 'react';
import { BaseBox, BaseBoxProps } from '../baseComponents/BaseBox';
import { Text } from '../Text';
import { HorizontalView } from '../containers';
import { useTheme } from '@shopify/restyle';
import { FractalTheme } from '../../themes/FractalTheme';

interface MessageProps extends Omit<BaseBoxProps, 'children'> {
    messageType: 'main' | 'alternative' | 'success' | 'warning' | 'danger';
    title: string;
    icon?: (color: string) => JSX.Element;
    description: string;
}

export function Message(props: MessageProps): JSX.Element {
    const { messageType, title, icon, description, ...others } = props;
    const theme = useTheme<FractalTheme>();
    const backgroundColor = `${messageType}InteractiveColor100`;
    const titleVariant = `${messageType}InteractiveTitle`;
    const textVariant = `${messageType}InteractiveColor`;

    return (
        <BaseBox padding='cell' borderRadius={'cellRadius'} backgroundColor={backgroundColor} {...others}>
            <HorizontalView alignItems='center' marginBottom='xs'>
                {icon != null ? icon(theme.colors[textVariant]) : null}
                <Text marginLeft={icon != null ? 's' : undefined} variant={titleVariant}>
                    {title}
                </Text>
            </HorizontalView>
            <Text variant={textVariant}>{description}</Text>
        </BaseBox>
    );
}
