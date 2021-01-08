import React, { memo } from 'react';
import { BaseTextProps, BaseText } from './baseComponents/BaseText';

export const Text = memo(
    (props: BaseTextProps): JSX.Element => {
        return <BaseText selectable={false} {...props} />;
    }
);
