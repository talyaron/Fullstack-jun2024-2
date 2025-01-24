export interface ProductModel {
    name: string;
    price: number;
    description: string;
    category: string;
    inStock: boolean;
    _id: string;
    image?: string;
}