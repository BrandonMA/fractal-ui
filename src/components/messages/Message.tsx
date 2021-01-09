import React from 'react';
import { BaseBox, BaseBoxProps } from '../baseComponents/BaseBox';
import { Text } from '../Text';
import { HorizontalView } from '../containers';
import { useTheme } from '@shopify/restyle';
import { FractalTheme } from '../../themes/FractalTheme';

export interface MessageProps extends Partial<Omit<BaseBoxProps, 'children'>> {
    messageType: 'main' | 'alternative' | 'success' | 'warning' | 'danger';
    title: string;
    icon?: (color: string) => JSX.Element;
    description: string;
}

export function Message({ messageType, title, icon, description, ...others }: MessageProps): JSX.Element {
    const { colors } = useTheme<FractalTheme>();
    const backgroundColor = `${messageType}InteractiveColor100`;
    const titleVariant = `${messageType}InteractiveTitle`;
    const textVariant = `${messageType}InteractiveColor`;

    return (
        <BaseBox padding='cell' borderRadius={'cellRadius'} backgroundColor={backgroundColor} {...others}>
            <HorizontalView alignItems='center' marginBottom='xs'>
                {icon != null ? icon(colors[textVariant]) : null}
                <Text marginLeft={icon != null ? 's' : undefined} variant={titleVariant}>
                    {title}
                </Text>
            </HorizontalView>
            <Text variant={textVariant}>{description}</Text>
        </BaseBox>
    );
}
