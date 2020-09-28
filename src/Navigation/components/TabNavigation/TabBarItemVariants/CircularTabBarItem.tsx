import styled from 'styled-components/native';
import { SharedTabBarItemStyles } from './SharedTabBarItemStyles';

interface Props {
    bg?: string;
}

export const CircularTabBarItem = styled(SharedTabBarItemStyles)`
    height: 52px;
    width: 52px;
    border-radius: 26px;
    position: absolute;
    bottom: 22px;
    align-self: center;
    background-color: ${(props: Props) => props.bg};
`;
