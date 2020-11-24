import { mainURL } from '../../mainURL';
import { Product } from '../../models/Product';
import { rawProductToProduct, ServerRawProduct } from '../../models/ServerRawProduct';

export async function fetchProducts(page: number): Promise<Array<Product>> {
    const url = mainURL + '/products' + `/${page}`;
    const response = await fetch(url);
    const rawProducts = (await response.json()) as Array<ServerRawProduct>;
    return rawProducts.map((product) => rawProductToProduct(product));
}
