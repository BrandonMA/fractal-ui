import React from 'react';
import { useTheme, Box, Text, ErrorMessage } from '../../src';
import { BuggyComponent } from '../../documentation/examples/BuggyComponent';

function logErrorToService(error: Error, componentStack: string) {
    console.log('Log Error To Service: ', { error, componentStack });
}

function ErrorMessageFragment(): JSX.Element {
    const { spacings } = useTheme();

    return (
        <Box marginTop={spacings.s} marginBottom={spacings.xl}>
            <ErrorMessage onError={logErrorToService}>
                <BuggyComponent />
            </ErrorMessage>
        </Box>
    );
}

export function MessagesFragments(): JSX.Element {
    return (
        <>
            <Text variant={'title'}>Error Message Example</Text>
            <ErrorMessageFragment />
        </>
    );
}
