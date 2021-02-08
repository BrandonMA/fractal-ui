import React, { memo } from 'react';
import styled from 'styled-components/native';
import { TextProps } from './types';
import { extractBackgroundColor } from '../../../styles/BackgroundStyles';
import { extractBorderStyles } from '../../../styles/BorderStyles';
import { extractDimensionStyles } from '../../../styles/DimensionStyles';
import { extractDisplayStyles } from '../../../styles/DisplayStyles';
import { extractShadowStyles } from '../../../styles/ShadowStyles';
import { extractTextStyles } from '../../../styles/TextStyles';
import { Text } from 'react-native';

const StyledText = styled(Text)`
    ${extractBackgroundColor};
    ${extractDimensionStyles};
    ${extractDisplayStyles};
    ${extractBorderStyles};
    ${extractShadowStyles};
    ${extractTextStyles};
` as typeof Text;

export const BaseText = memo(
    (props: TextProps): JSX.Element => {
        return <StyledText {...props} />;
    }
);
