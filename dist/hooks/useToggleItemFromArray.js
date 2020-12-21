import { useEffect } from 'react';
import produce from 'immer';
export function useToggleItemFromArray(active, item, setArray) {
    useEffect(function () {
        setArray(function (currentArray) {
            var arrayIncludesItem = currentArray.includes(item);
            if (!active && arrayIncludesItem) {
                var index_1 = currentArray.indexOf(item);
                return produce(currentArray, function (draft) {
                    draft.splice(index_1, 1);
                });
            }
            else if (active && !arrayIncludesItem) {
                return produce(currentArray, function (draft) {
                    draft.push(item);
                });
            }
            else {
                return currentArray;
            }
        });
    }, [active, setArray, item]);
}
//# sourceMappingURL=useToggleItemFromArray.js.map