import React, { forwardRef } from 'react';
import { useTheme } from '../../context/hooks/useTheme';
import { sizes } from '../../themes/templates/lightFractalTheme';
import { BaseTextField } from './BaseTextField';
const TextField = forwardRef((props, ref) => {
    const { colors, borderRadius, spacings } = useTheme();
    return (React.createElement(BaseTextField, Object.assign({ ref: ref, borderRadius: borderRadius.s, color: colors.text, backgroundColor: colors.textField, placeholderTextColor: colors.placeholder, fontSize: 14, paddingRight: spacings.s, paddingLeft: spacings.s, height: sizes.textFieldHeight }, props)));
});
TextField.displayName = 'TextField';
export { TextField };
//# sourceMappingURL=TextField.js.map