import { SetterOrUpdater } from 'recoil';
import { useEffect } from 'react';
import produce from 'immer';

export function useToggleItemFromMap<Key, T>(active: boolean, key: Key, item: T, setMap: SetterOrUpdater<Map<Key, T>>): void {
    useEffect(() => {
        setMap((currentMap) => {
            const mapIncludesItem = currentMap.has(key);
            if (!active && mapIncludesItem) {
                return produce(currentMap, (draft: Map<Key, T>) => {
                    draft.delete(key);
                });
            } else if (active && !mapIncludesItem) {
                return produce(currentMap, (draft: Map<Key, T>) => {
                    draft.set(key, item);
                });
            } else {
                return currentMap;
            }
        });
    }, [active, setMap, item, key]);
}
