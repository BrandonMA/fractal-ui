import React, { useCallback } from 'react';
import { TouchableOpacity } from 'react-native';
import { useHistory } from '../../../src';
import { tabRoutes } from '../../navigation/tabRoutes';
import { PlusIcon } from '../../icons/PlusIcon';

export function CreateAddressButton(): JSX.Element {
    const history = useHistory();
    const navigateToAddressSelector = useCallback(() => {
        history.push(tabRoutes.addressCreator);
    }, [history]);

    return (
        <TouchableOpacity onPress={navigateToAddressSelector}>
            <PlusIcon width={24} height={24} stroke='#005cb3' />
        </TouchableOpacity>
    );
}
