import React from 'react';
import { BaseTextProps, BaseText } from './baseComponents/BaseText';

export function Text(props: BaseTextProps): JSX.Element {
    return <BaseText selectable={false} {...props} />;
}
