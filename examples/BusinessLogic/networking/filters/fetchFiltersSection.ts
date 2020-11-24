import { ServerRawDataFilter } from '../../models/ServerRawDataFilter';
import { FiltersSection } from '../../models/FiltersSection';
import { fetchServerRawDataFilter } from './fetchServerRawDataFilter';
import { fetchFiltersGroup } from './fetchFiltersGroup';

export async function fetchFiltersSection(category: ServerRawDataFilter): Promise<FiltersSection> {
    const familyProducts = await fetchServerRawDataFilter('family_products', category.id);
    const filterSection: FiltersSection = {
        title: category.name,
        groups: []
    };
    for (const familyProduct of familyProducts) {
        const group = await fetchFiltersGroup(familyProduct);
        filterSection.groups.push(group);
    }
    return filterSection;
}
