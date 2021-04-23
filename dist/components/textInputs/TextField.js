import React, { forwardRef } from 'react';
import { useTheme } from '../../core/context/hooks/useTheme';
import { sizes } from '../../themes/templates/lightFractalTheme';
import { BaseTextField } from './BaseTextField';
export const TextField = forwardRef((props, ref) => {
    const { colors, borderRadius, spacings } = useTheme();
    return (React.createElement(BaseTextField, Object.assign({ ref: ref, borderRadius: borderRadius.s, color: colors.text, backgroundColor: colors.textField, placeholderTextColor: colors.placeholder, fontSize: 14, paddingRight: spacings.s, paddingLeft: spacings.s, height: sizes.textFieldHeight }, props)));
});
//# sourceMappingURL=TextField.js.map