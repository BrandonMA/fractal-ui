import React, { useEffect } from 'react';
import { Layer } from '../../containers';
import { LayerProps } from '../../containers/Layer/types';
import { useIsPresent } from 'framer-motion';

export function ModalContent({ children, ...others }: LayerProps): JSX.Element {
    const isPresent = useIsPresent();
    console.log(isPresent);
    useEffect(() => {
        document.body.style.overflow = 'hidden';

        return () => {
            document.body.style.overflow = 'scroll';
        };
    }, []);

    return (
        <Layer position={'fixed'} top={0} right={0} bottom={0} left={0} {...others}>
            {children}
        </Layer>
    );
}
