import styled from 'styled-components/native';
import { Pressable } from 'react-native';
import { getCursorStyle } from '../../../../src/Layout/util';

export const SharedFilterRowStyles = styled(Pressable)`
    background-color: #f6f6f6;
    height: 36px;
    border-radius: 8px;
    justify-content: center;
    padding: 0 12px;
    margin-bottom: 12px;
    ${getCursorStyle}
`;
