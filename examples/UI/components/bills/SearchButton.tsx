import React, { useCallback } from 'react';
import { useHistory } from '../../../../src';
import { tabRoutes } from '../../navigation/tabRoutes';
import { ButtonText } from '../ButtonText';
import { Button } from '../Button';

export function SearchButton(): JSX.Element {
    const history = useHistory();
    const search = useCallback(() => {
        history.push(`${tabRoutes.bills}/2020`);
    }, []);

    return (
        <Button onPress={search}>
            <ButtonText>Buscar estados de cuenta</ButtonText>
        </Button>
    );
}
