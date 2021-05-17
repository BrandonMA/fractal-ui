import React, { memo } from 'react';
import { AnimatePresence } from 'framer-motion';
import { Layer } from '../../containers';
import { PauseIcon } from '../../../assets/PauseIcon';
import { PlayIcon } from '../../../assets/PlayIcon';

const ICON_SIZE = 20;

const variants = {
    initial: { opacity: 0 },
    animate: { opacity: 1 },
    exit: { opacity: 0 }
};

interface PlayPauseIconProps {
    tintColor: string;
    isPlaying: boolean;
}

const PlayPauseIcon = memo(
    ({ tintColor, isPlaying }: PlayPauseIconProps): JSX.Element => {
        return (
            <AnimatePresence>
                {isPlaying ? (
                    <Layer initial={variants.initial} animate={variants.animate} exit={variants.exit}>
                        <PauseIcon fill={tintColor} width={ICON_SIZE} height={ICON_SIZE} />
                    </Layer>
                ) : (
                    <Layer paddingLeft={2} initial={variants.initial} animate={variants.animate} exit={variants.exit}>
                        <PlayIcon fill={tintColor} width={ICON_SIZE} height={ICON_SIZE} />
                    </Layer>
                )}
            </AnimatePresence>
        );
    }
);

PlayPauseIcon.displayName = 'PlayPauseIcon';

export { PlayPauseIcon };
