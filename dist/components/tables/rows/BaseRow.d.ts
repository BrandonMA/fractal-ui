import React from 'react';
import { LayerProps } from '../../containers/Layer/types';
export interface BaseRowProps extends LayerProps {
    addSeparator?: boolean;
}
declare const BaseRow: React.ForwardRefExoticComponent<BaseRowProps & React.RefAttributes<unknown>>;
export { BaseRow };
