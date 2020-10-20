import { Platform, Pressable } from 'react-native';
import styled from 'styled-components/native';

export const SharedTabBarItemStyles = styled(Pressable)`
    justify-content: center;
    align-items: center;
    flex-direction: column;
    ${Platform.OS === 'web' ? 'cursor: pointer' : null}
`;
