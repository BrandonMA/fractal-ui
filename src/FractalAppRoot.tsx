import React, { Fragment } from 'react';
import { FractalThemeIdentifierProvider } from './context/FractalThemeIdentifierProvider';
import { FractalThemeUpdater, FractalThemeUpdaterProps } from './FractalThemeUpdater';

export type FractalAppRootProps = FractalThemeUpdaterProps;

export function FractalAppRoot(props: FractalAppRootProps): JSX.Element {
    const { handleThemeManually } = props;
    const Wrapper = handleThemeManually ? FractalThemeIdentifierProvider : Fragment;

    return (
        <Wrapper>
            <FractalThemeUpdater {...props} />
        </Wrapper>
    );
}
