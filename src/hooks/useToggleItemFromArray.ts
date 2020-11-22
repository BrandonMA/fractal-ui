import { SetterOrUpdater } from 'recoil';
import { useEffect } from 'react';

export function useToggleItemFromArray<T>(active: boolean, item: T, setArray: SetterOrUpdater<Array<T>>) {
    useEffect(() => {
        setArray((currentArray) => {
            const arrayIncludesItem = currentArray.includes(item);
            if (!active && arrayIncludesItem) {
                const index = currentArray.indexOf(item);
                const newActiveFiltersList = [...currentArray];
                newActiveFiltersList.splice(index, 1);
                return newActiveFiltersList;
            } else if (active && !arrayIncludesItem) {
                return [...currentArray, item];
            } else {
                return currentArray;
            }
        });
    }, [active, setArray, item]);
}
