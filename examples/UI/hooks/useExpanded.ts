import { useCallback, useState } from 'react';
import { LayoutAnimation } from 'react-native';
import { LayoutConfig } from '../animations/LayoutConfig';

export function useExpanded(): [boolean, () => void] {
    const [expanded, setExpanded] = useState(false);

    const toggleExpanded = useCallback(() => {
        LayoutAnimation.configureNext(LayoutConfig);
        setExpanded((value) => !value);
    }, []);

    return [expanded, toggleExpanded];
}
