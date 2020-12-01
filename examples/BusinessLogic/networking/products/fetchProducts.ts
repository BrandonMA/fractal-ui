import { mainURL } from '../../mainURL';
import { Product } from '../../models/Product';
import { rawProductToProduct, ServerRawProduct } from '../../models/ServerRawProduct';

export async function fetchProducts(page: number, filter?: Array<number>, text?: string): Promise<Map<number, Product>> {
    const url =
        mainURL +
        `/products?page=${page}${filter != null && filter.length > 0 ? `&filters=${filter.toString()}` : ''}${
            text != null && text !== '' ? `&search=${text}` : ''
        }`;
    const response = await fetch(url);
    const rawProducts = (await response.json()) as Array<ServerRawProduct>;
    return new Map(
        rawProducts.map((product) => {
            const finalProduct = rawProductToProduct(product);
            return [finalProduct.sku, finalProduct];
        })
    );
}
