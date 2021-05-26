import React from 'react';
import { useTheme } from '../../../context';
import { TouchableOpacity } from '../../buttons/TouchableOpacity';
import { Check } from '../../CheckBox/Check';
import { HorizontalLayer } from '../../containers/HorizontalLayer';
import { Text } from '../../text/Text';

const activeBackground = 'rgba(128, 128, 128, 0.2)';

interface SuggestionItemProps {
    label: string;
    isSelected: boolean;
    isMultiple?: boolean;
    onPress: () => void;
}

export function SuggestionItem({ label, isSelected, isMultiple, onPress }: SuggestionItemProps): JSX.Element {
    const { spacings } = useTheme();
    return (
        <TouchableOpacity
            paddingTop={spacings.xs}
            paddingBottom={spacings.xs}
            paddingRight={spacings.m}
            paddingLeft={spacings.m}
            backgroundColor={isSelected && !isMultiple ? activeBackground : undefined}
            whileHover={{ backgroundColor: activeBackground }}
            onPress={onPress}
        >
            <HorizontalLayer alignItems='center'>
                {isMultiple ? <Check value={isSelected} /> : null}
                <Text variant={'normal'} flexShrink={1} marginLeft={isMultiple ? spacings.xs : undefined} style={{ textAlign: 'left' }}>
                    {label}
                </Text>
            </HorizontalLayer>
        </TouchableOpacity>
    );
}
