import { FiltersSection } from '../../models/FiltersSection';
import { fetchServerRawDataFilter } from './fetchServerRawDataFilter';
import { fetchFiltersSection } from './fetchFiltersSection';

export async function fetchFiltersSections(): Promise<Array<FiltersSection>> {
    const categories = await fetchServerRawDataFilter('categories');
    const sections: Array<FiltersSection> = [];
    for (const category of categories) {
        const filterSection = await fetchFiltersSection(category);
        sections.push(filterSection);
    }
    return sections;
}
