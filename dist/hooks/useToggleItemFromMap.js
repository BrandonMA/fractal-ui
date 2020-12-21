import { useEffect } from 'react';
import produce from 'immer';
export function useToggleItemFromMap(active, key, item, setMap) {
    useEffect(function () {
        setMap(function (currentMap) {
            var mapIncludesItem = currentMap.has(key);
            if (!active && mapIncludesItem) {
                return produce(currentMap, function (draft) {
                    draft["delete"](key);
                });
            }
            else if (active && !mapIncludesItem) {
                return produce(currentMap, function (draft) {
                    draft.set(key, item);
                });
            }
            else {
                return currentMap;
            }
        });
    }, [active, setMap, item, key]);
}
//# sourceMappingURL=useToggleItemFromMap.js.map