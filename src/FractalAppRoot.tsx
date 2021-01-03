import React from 'react';
import { FractalThemeIdentifierProvider } from './context/FractalThemeIdentifierProvider';
import { FractalThemeUpdater, FractalThemeUpdaterProps } from './FractalThemeUpdater';

export type FractalAppRootProps = FractalThemeUpdaterProps;

export function FractalAppRoot(props: FractalAppRootProps): JSX.Element {
    const { handleThemeManually } = props;

    return (
        <FractalThemeIdentifierProvider handleThemeManually={handleThemeManually ?? false}>
            <FractalThemeUpdater {...props} />
        </FractalThemeIdentifierProvider>
    );
}
