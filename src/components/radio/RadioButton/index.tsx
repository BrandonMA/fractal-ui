import React from 'react';
import { motion } from 'framer-motion';
import { Text } from '../../text';
import { useTheme } from '../../../core/context/hooks/useTheme';
import { RadioButtonProps } from '../types';
import styled from 'styled-components';
import { extractDimensionProps } from '../../../sharedProps/DimensionProps';
import { Radio } from './Radio';

const Wrapper = styled(motion.label)`
    display: inline-flex;
    -webkit-box-align: center;
    align-items: center;
    vertical-align: top;
    cursor: pointer;
    ${extractDimensionProps};
`;

const RadioInput = styled(motion.input)`
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

export function RadioButton({ label, onPress, active, value, ...others }: RadioButtonProps): JSX.Element {
    const { spacings } = useTheme();

    return (
        <Wrapper {...others}>
            <RadioInput value={value} type='radio' checked={active} onChange={() => onPress()} />
            <Radio active={active} />
            <Text marginLeft={spacings.xs} variant='normal'>
                {label}
            </Text>
        </Wrapper>
    );
}
