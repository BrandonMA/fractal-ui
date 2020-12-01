import React, { useCallback } from 'react';
import { BaseButton, useHistory } from '../../../../src';
import { tabRoutes } from '../../navigation/tabRoutes';

export function SearchButton(): JSX.Element {
    const history = useHistory();
    const search = useCallback(() => {
        history.push(`${tabRoutes.bills}/2020`);
    }, []);

    return <BaseButton backgroundColor='#005cb3' text='Buscar estados de cuenta' onPress={search} />;
}
