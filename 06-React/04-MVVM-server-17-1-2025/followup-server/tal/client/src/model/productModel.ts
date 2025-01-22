export interface Product {
    _id?: string;
    name: string;
    price: number;
    description: string;
    category: string;
    inStock: boolean;
    image?: string;
}
