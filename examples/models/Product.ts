export interface Product {
    name: string;
    imageURL: string;
    price: number;
    description: string;
    sku: string;
    filters: Array<string>;
}
