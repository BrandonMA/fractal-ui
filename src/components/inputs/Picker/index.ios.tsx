import React, { useCallback, useState } from 'react';
import { PickerProps } from './types/PickerProps';
import { BottomCellModal } from '../../modals/BottomCellModal';
import { PickerButton } from '../PickerButton';
import { PickerModalContent } from './components/PickerModalContent';
import { getInitialPickerIndex } from './util/getInitialPickerIndex';

export function Picker({ items, initialValue, onChange, iosDoneText, ...others }: PickerProps): JSX.Element {
    const initialIndex = getInitialPickerIndex(initialValue, items);
    const [finalIndex, setFinalIndex] = useState(initialIndex);
    const [modalActive, setModalActive] = useState(false);
    const initialValueForContent = items[finalIndex][0]; // Content is unmounted when is not visible.

    const toggleModal = useCallback(() => setModalActive((current) => !current), [setModalActive]);

    return (
        <>
            <PickerButton onPress={toggleModal} {...others}>
                {items[finalIndex][1]}
            </PickerButton>
            <BottomCellModal visible={modalActive} onDismiss={toggleModal}>
                <PickerModalContent
                    onChange={onChange}
                    iosDoneText={iosDoneText}
                    items={items}
                    initialValue={initialValueForContent}
                    onFinalIndexChange={setFinalIndex}
                />
            </BottomCellModal>
        </>
    );
}
