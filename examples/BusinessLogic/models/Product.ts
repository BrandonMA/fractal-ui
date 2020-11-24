export interface Product {
    name: string;
    imageURL: string;
    price: number;
    description: string;
    sku: string;
    filter: number;
    details: Map<string, string>;
}
