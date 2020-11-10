export interface Order {
    id: string;
    creationDate: Date;
    distributor: string;
    vendor: string;
    total: number;
    key: string;
    estimatedArrival: Date;
    status: string;
}
