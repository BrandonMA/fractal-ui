import React, { useCallback } from 'react';
import { HelpIcon } from '../../icons/HelpIcon';
import { useHistory } from '../../../src';
import { tabRoutes } from '../../navigation/tabRoutes';
import styled from 'styled-components/native';

const Button = styled.TouchableOpacity`
    flex: 1;
`;

export function HelpButton(): JSX.Element {
    const history = useHistory();

    const handleOnPress = useCallback(() => {
        history.push(tabRoutes.help);
    }, [history]);
    return (
        <Button onPress={handleOnPress}>
            <HelpIcon width={24} height={24} fill='#005cb3' />
        </Button>
    );
}
