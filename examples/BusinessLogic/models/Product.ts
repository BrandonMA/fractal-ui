export interface Product {
    name: string;
    imageURL: string;
    price: number;
    description: string;
    sku: number;
    filter: number;
    details: Map<string, string>;
}
