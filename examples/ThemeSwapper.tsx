import React, { useCallback } from 'react';
import { Button, useThemeIdentifier } from '../src';

export function ThemeSwapper(): JSX.Element {
    const [, setThemeIdentifier] = useThemeIdentifier();
    const handlePress = useCallback(() => setThemeIdentifier((current) => (current === 'light' ? 'dark' : 'light')), [setThemeIdentifier]);

    return <Button onPress={handlePress} variant='alternativeInteractiveColor' text='Swap Theme' marginBottom='m' />;
}
