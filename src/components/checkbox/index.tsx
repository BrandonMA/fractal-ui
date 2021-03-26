import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { useTheme } from '../../core/context/hooks/useTheme';
import { Layer } from '../containers';
import { Text } from '../text';
import { extractDimensionProps } from '../../sharedProps/DimensionProps';
import { CheckBoxProps } from './types';
import { Check } from './Check';

const Wrapper = styled(motion.label)`
    cursor: pointer;
    display: inline-flex;
    -webkit-box-align: center;
    align-items: center;
    vertical-align: top;
    position: relative;
    ${extractDimensionProps};
`;

const CheckBoxInput = styled(motion.input)`
    border: 0px;
    clip: rect(0px, 0px, 0px, 0px);
    height: 1px;
    width: 1px;
    margin: -1px;
    padding: 0px;
    overflow: hidden;
    white-space: nowrap;
    position: absolute;
`;

const StyledLayer = styled(Layer)`
    border-style: solid;
`;

export function CheckBox({ value, onValueChange, label, ...others }: CheckBoxProps): JSX.Element {
    const { colors, spacings } = useTheme();

    const handleValueChange = (): void => {
        onValueChange(!value);
    };

    return (
        <Wrapper {...others}>
            <CheckBoxInput type='checkbox' checked={value} onChange={handleValueChange} />
            <StyledLayer
                width={16}
                height={16}
                borderWidth={2}
                borderRadius={4}
                borderColor={value ? colors.mainInteractiveColor : colors.placeholder}
            >
                <Check value={value} />
            </StyledLayer>
            <Text marginLeft={spacings.xs} variant='normal'>
                {label}
            </Text>
        </Wrapper>
    );
}
