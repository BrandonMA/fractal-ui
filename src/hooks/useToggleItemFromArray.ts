import { SetterOrUpdater } from 'recoil';
import { useEffect } from 'react';
import produce from 'immer';

export function useToggleItemFromArray<T>(active: boolean, item: T, setArray: SetterOrUpdater<Array<T>>): void {
    useEffect(() => {
        setArray((currentArray) => {
            const arrayIncludesItem = currentArray.includes(item);
            if (!active && arrayIncludesItem) {
                const index = currentArray.indexOf(item);
                return produce(currentArray, (draft) => {
                    draft.splice(index, 1);
                });
            } else if (active && !arrayIncludesItem) {
                return produce(currentArray, (draft: Array<T>) => {
                    draft.push(item);
                });
            } else {
                return currentArray;
            }
        });
    }, [active, setArray, item]);
}
