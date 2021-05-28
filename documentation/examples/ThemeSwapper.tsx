import React, { useCallback } from 'react';
import { Button, useSetThemeIdentifier } from '../../src';

export function ThemeSwapper(): JSX.Element {
    const setThemeIdentifier = useSetThemeIdentifier();
    const handlePress = useCallback(() => setThemeIdentifier((current) => (current === 'light' ? 'dark' : 'light')), [setThemeIdentifier]);

    return <Button onPress={handlePress} variant='alternative' text='Swap Theme' />;
}
