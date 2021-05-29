import { AnimatePresence } from 'framer-motion';
import React from 'react';
import { useTheme } from '../../../context';
import { Chip } from '../../Chip';
import { Layer } from '../../containers/Layer';
import { IDEnabled } from '../AutoComplete/types';

const styleVariants = {
    hidden: { opacity: 0, scale: 0 },
    visible: { opacity: 1, scale: 1 }
};

interface ChosenItemsListProps<T> {
    data: Array<T>;
    getLabel: (item: T) => string;
    onItemPress: (item: T) => void;
}

export function ChosenItemsList<T extends IDEnabled>({ data, getLabel, onItemPress }: ChosenItemsListProps<T>): JSX.Element {
    const { spacings, colors, borderRadius } = useTheme();

    const renderItem = (item: T): JSX.Element => {
        return (
            <Chip
                initial={styleVariants.hidden}
                animate={styleVariants.visible}
                exit={styleVariants.hidden}
                margin={spacings.s}
                key={item.id}
                onCrossButtonPress={() => onItemPress(item)}
                text={getLabel(item)}
            />
        );
    };

    return (
        <Layer
            overflow={'scroll'}
            flexDirection={'row'}
            flexWrap={'wrap'}
            marginTop={spacings.s}
            marginBottom={spacings.s}
            borderRadius={borderRadius.s}
            backgroundColor={colors.background}
        >
            <AnimatePresence>{data.map(renderItem)}</AnimatePresence>
        </Layer>
    );
}
