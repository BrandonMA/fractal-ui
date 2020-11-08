import { useCallback, useState } from 'react';
import { LayoutAnimation } from 'react-native';

export function useExpanded(): [boolean, () => void] {
    const [expanded, setExpanded] = useState(false);

    const toggleExpanded = useCallback(() => {
        LayoutAnimation.configureNext(LayoutAnimation.Presets.easeInEaseOut);
        setExpanded((value) => !value);
    }, []);

    return [expanded, toggleExpanded];
}
