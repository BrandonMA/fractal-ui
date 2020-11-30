import { Product } from './Product';

export interface ServerRawProduct {
    id: number;
    title: string;
    type_product_id: number;
    measuarement_unit_id: number;
    category_id: number;
    family_id: number;
    subfamily_id: number;
    gama_id: number;
    brand_id: number;
    country_origin_id: number;
    material: string;
    description: string;
    packing: number;
    measure: number;
    weight: number;
    price: number;
    price_special: number;
    price_bulk: number;
    price_special_bulk: number;
    status: number;
    favorite: number;
    created_at: string;
    updated_at: string;
    deleted: number;
    group: string;
    promotion_id: number;
    is_commercialized: number;
}

export function rawProductToProduct(value: ServerRawProduct): Product {
    const { title, price, description, id, subfamily_id, ...others } = value;
    return {
        name: title,
        imageURL: 'https://windsorciclismo.com/wp-content/uploads/2019/02/WINLZ10.jpg',
        price: price,
        description: description,
        sku: id,
        filter: subfamily_id,
        details: new Map(Object.entries(others))
    };
}
