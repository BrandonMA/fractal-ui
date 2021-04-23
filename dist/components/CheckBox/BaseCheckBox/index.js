import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { useTheme } from '../../../core/context/hooks/useTheme';
import { Layer } from '../../containers';
import { Text } from '../../text';
import { Check } from '../Check';
import { getCheckBoxAccessibilityProps } from '../accessibility/getCheckBoxAccessibilityProps';
const Wrapper = styled(motion.label) `
    cursor: pointer;
    display: inline-flex;
    -webkit-box-align: center;
    align-items: center;
    vertical-align: top;
    position: relative;
`;
const CheckBoxInput = styled(motion.input) `
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
const StyledLayer = styled(Layer) `
    box-sizing: border-box;
`;
export function BaseCheckBox({ value, onValueChange, label }) {
    const { colors, spacings, sizes, borderRadius } = useTheme();
    const handleValueChange = () => {
        onValueChange(!value);
    };
    return (React.createElement(Wrapper, null,
        React.createElement(CheckBoxInput, Object.assign({ type: 'checkbox', checked: value, onChange: handleValueChange }, getCheckBoxAccessibilityProps(value))),
        React.createElement(StyledLayer, { width: sizes.checkBoxSize, height: sizes.checkBoxSize, borderWidth: 2, borderRadius: borderRadius.xs, borderColor: value ? colors.mainInteractiveColor : colors.placeholder, borderStyle: 'solid', overflow: 'hidden' },
            React.createElement(Check, { value: value })),
        label && (React.createElement(Text, { marginLeft: spacings.xs, variant: 'normal' }, label))));
}
//# sourceMappingURL=index.js.map