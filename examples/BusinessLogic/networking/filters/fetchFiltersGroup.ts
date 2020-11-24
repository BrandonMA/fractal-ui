import { ServerRawDataFilter } from '../../models/ServerRawDataFilter';
import { FiltersGroup } from '../../models/FiltersGroup';
import { fetchServerRawDataFilter } from './fetchServerRawDataFilter';

export async function fetchFiltersGroup(category: ServerRawDataFilter): Promise<FiltersGroup> {
    const subFamilyProducts = await fetchServerRawDataFilter('sub_family_products', category.id);
    return {
        title: category.name,
        filters: subFamilyProducts
    };
}
