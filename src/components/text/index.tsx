import React, { memo } from 'react';
import styled from 'styled-components';
import { TextProps } from './types';
import { motion } from 'framer-motion';
import { extractBackgroundColor } from '../../styles/BackgroundStyles';
import { extractBorderStyles } from '../../styles/BorderStyles';
import { extractDimensionStyles } from '../../styles/DimensionStyles';
import { extractDisplayStyles } from '../../styles/DisplayStyles';
import { extractShadowStyles } from '../../styles/ShadowStyles';
import { extractTextStyles } from '../../styles/TextStyles';

const StyledText = styled(motion.span as any)`
    ${extractBackgroundColor};
    ${extractDimensionStyles};
    ${extractDisplayStyles};
    ${extractBorderStyles};
    ${extractShadowStyles};
    ${extractTextStyles};
` as typeof motion.span;

export const Text = memo(
    (props: TextProps): JSX.Element => {
        return <StyledText {...props} />;
    }
);
