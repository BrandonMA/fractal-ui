import React, { useCallback } from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { useTheme } from '../../../core/context/hooks/useTheme';
import { Layer } from '../../containers';
import { Text } from '../../text';
import { Check } from '../Check';
import { BaseCheckBoxProps } from '../types';
import { getCheckBoxAccessibilityProps } from '../accessibility/getCheckBoxAccessibilityProps';

const Wrapper = styled(motion.label)`
    cursor: pointer;
    display: inline-flex;
    -webkit-box-align: center;
    align-items: center;
    vertical-align: top;
    position: relative;
`;

const CheckBoxInput = styled(motion.input)`
    border: 0;
    clip: rect(0px, 0px, 0px, 0px);
    height: 1px;
    width: 1px;
    margin: -1px;
    padding: 0;
    overflow: hidden;
    white-space: nowrap;
    position: absolute;
`;

const StyledLayer = styled(Layer)`
    box-sizing: border-box;
`;

export function BaseCheckBox({ value, onValueChange, label }: BaseCheckBoxProps): JSX.Element {
    const { colors, spacings, sizes, borderRadius } = useTheme();

    const handleValueChange = useCallback((): void => {
        onValueChange(!value);
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [value]);

    return (
        <Wrapper>
            <CheckBoxInput type='checkbox' checked={value} onChange={handleValueChange} {...getCheckBoxAccessibilityProps(value)} />
            <StyledLayer
                width={sizes.checkBoxSize}
                height={sizes.checkBoxSize}
                borderWidth={2}
                borderRadius={borderRadius.xs}
                borderColor={value ? colors.mainInteractiveColor : colors.placeholder}
                borderStyle={'solid'}
                overflow={'hidden'}
            >
                <Check value={value} />
            </StyledLayer>
            {label && (
                <Text marginLeft={spacings.xs} variant='normal'>
                    {label}
                </Text>
            )}
        </Wrapper>
    );
}
