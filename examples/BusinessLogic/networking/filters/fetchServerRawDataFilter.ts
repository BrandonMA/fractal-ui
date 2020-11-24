import { ServerRawDataFilter } from '../../models/ServerRawDataFilter';
import { mainURL } from '../../mainURL';

export async function fetchServerRawDataFilter(path: string, id?: number): Promise<Array<ServerRawDataFilter>> {
    const url = mainURL + `/${path}` + (id != null ? `/${id}` : '');
    const response = await fetch(url);
    return await response.json();
}
