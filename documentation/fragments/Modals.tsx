import React, { useState } from 'react';
import { useTheme, Box, Button, Text, BlurrediOSModal, MiddleCellModal, BottomCellModal } from '../../src';

function BlurredModalFragment(): JSX.Element {
    const { spacings } = useTheme();
    const [blurredModalVisible, setBlurredModalVisible] = useState(false);

    const toggleBlurredModal = () => setBlurredModalVisible((currentValue) => !currentValue);

    return (
        <Box marginTop={spacings.s} marginBottom={spacings.xl}>
            <Button variant='main' text='Show Blurred Modal' onPress={toggleBlurredModal} />
            <BlurrediOSModal visible={blurredModalVisible} dismissText={'Done'} onDismiss={toggleBlurredModal}>
                <Box margin={spacings.m}>
                    <Button variant='warning' text='Dismiss Modal' onPress={toggleBlurredModal} />
                </Box>
            </BlurrediOSModal>
        </Box>
    );
}

function MiddleCellModalFragment(): JSX.Element {
    const { spacings } = useTheme();
    const [middleCellVisible, setMiddleCellVisible] = useState(false);

    const toggleMiddleCell = () => setMiddleCellVisible((currentValue) => !currentValue);

    return (
        <Box marginTop={spacings.s} marginBottom={spacings.xl}>
            <Button variant='main' text='Show Middle Cell Modal' onPress={toggleMiddleCell} />
            <MiddleCellModal visible={middleCellVisible} onDismiss={toggleMiddleCell}>
                <Box>
                    <Button variant='warning' text='Dismiss Cell Modal' onPress={toggleMiddleCell} />
                </Box>
            </MiddleCellModal>
        </Box>
    );
}

function BottomCellModalFragment(): JSX.Element {
    const { spacings } = useTheme();
    const [bottomCellVisible, setBottomCellVisible] = useState(false);

    const toggleBottomCell = () => setBottomCellVisible((currentValue) => !currentValue);

    return (
        <Box marginTop={spacings.s} marginBottom={spacings.xl}>
            <Button variant='main' text='Show Bottom Cell Modal' onPress={toggleBottomCell} />
            <BottomCellModal visible={bottomCellVisible} onDismiss={toggleBottomCell}>
                <Box>
                    <Button variant='warning' text='Dismiss Cell Modal' onPress={toggleBottomCell} />
                </Box>
            </BottomCellModal>
        </Box>
    );
}

export function ModalsFragments(): JSX.Element {
    return (
        <>
            <Text variant={'title'}>Blurred Modal Example</Text>
            <BlurredModalFragment />
            <Text variant={'title'}>Middle Cell Modal Example</Text>
            <MiddleCellModalFragment />
            <Text variant={'title'}>Bottom Cell Modal Example</Text>
            <BottomCellModalFragment />
        </>
    );
}
