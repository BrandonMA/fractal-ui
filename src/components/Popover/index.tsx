import React, { forwardRef, useRef } from 'react';
import { AnimatePresence } from 'framer-motion';
import { Layer } from '../containers';
import { styleVariants } from './utils/styleVariants';
import { PopoverProps } from './types';
import { getWebPlacementOffsetStyle } from './utils/getWebPlacementOffsetStyle';
import { OutsideClickListener } from './OutsideClickListener';

const Popover = forwardRef(
    (
        { active, placement = 'bottom', popoverChildren, popoverContainerProps, onRequestClose, ...others }: PopoverProps,
        ref: any
    ): JSX.Element => {
        const anchorElementRef = useRef<HTMLDivElement>();

        const placementOffsetStyle = getWebPlacementOffsetStyle(anchorElementRef, placement);

        return (
            <OutsideClickListener onOutsideClick={onRequestClose}>
                <Layer ref={ref} position={'relative'} display={'inline-block'}>
                    <Layer ref={anchorElementRef} display={'table'} {...others} />
                    <AnimatePresence>
                        {active ? (
                            <Layer
                                initial={styleVariants.initial}
                                animate={styleVariants.visible}
                                exit={styleVariants.initial}
                                position={'absolute'}
                                minWidth={200}
                                zIndex={2000}
                                style={placementOffsetStyle}
                                {...popoverContainerProps}
                            >
                                {popoverChildren()}
                            </Layer>
                        ) : null}
                    </AnimatePresence>
                </Layer>
            </OutsideClickListener>
        );
    }
);

Popover.displayName = 'Popover';

export { Popover };
