import styled from 'styled-components/native';
import { SafeAreaFullScreenScrollView } from '../../../src/Layout/components';
import { colors } from '../../../src/ThemeState/Colors';

export const BackgroundScrollView = styled(SafeAreaFullScreenScrollView)`
    background-color: ${colors.white.base400};
`;
