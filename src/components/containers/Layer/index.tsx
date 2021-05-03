import React, { forwardRef } from 'react';
import styled from 'styled-components';
import { LayerProps } from './types';
import { motion } from 'framer-motion';
import { extractBackgroundProps } from '../../../sharedProps/BackgroundProps';
import { extractBorderProps } from '../../../sharedProps/BorderProps';
import { extractDimensionProps } from '../../../sharedProps/DimensionProps';
import { extractDisplayProps } from '../../../sharedProps/DisplayProps';
import { extractShadowProps } from '../../../sharedProps/ShadowProps';
import { extractWebProps } from '../../../sharedProps/WebProps';

const StyledLayer = styled(motion.div as any)`
    ${extractBackgroundProps};
    ${extractDimensionProps};
    ${extractDisplayProps};
    ${extractBorderProps};
    ${extractShadowProps};
    ${extractWebProps};
` as typeof motion.div;

const Layer = forwardRef(
    ({ transition = { type: 'spring' }, ...others }: LayerProps, ref: any): JSX.Element => {
        return <StyledLayer ref={ref} transition={transition} {...others} />;
    }
);

Layer.displayName = 'Layer';

export { Layer };
