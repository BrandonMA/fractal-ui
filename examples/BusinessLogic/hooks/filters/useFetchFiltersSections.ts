import { useEffect, useState } from 'react';
import { fetchFiltersSections } from '../../networking/filters/fetchFiltersSections';
import { useSetRecoilState } from 'recoil';
import { filtersSectionsAtom } from '../../atoms/filters/filtersSectionsAtom';

export function useFetchFiltersSections(): boolean {
    const [ready, setReady] = useState(false);
    const setFiltersSections = useSetRecoilState(filtersSectionsAtom);

    useEffect(() => {
        fetchFiltersSections()
            .then((filtersSections) => {
                setFiltersSections(filtersSections);
                setReady(true);
            })
            .catch((error) => console.log(error.message));
    }, []);

    return ready;
}
