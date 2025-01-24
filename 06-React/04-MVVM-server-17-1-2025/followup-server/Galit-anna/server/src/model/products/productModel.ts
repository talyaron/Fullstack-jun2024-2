import { Schema, model, Document } from 'mongoose';

interface IProduct extends Document {
    name: string;
    price: number;
    description: string;
    category: string;
    inStock: boolean;
    image?: string;
}

const productSchema = new Schema<IProduct>({
    image: { type: String, required: false },
    name: { type: String, required: true },
    price: { type: Number, required: true },
    description: { type: String, required: true },
    category: { type: String, required: true },
    inStock: { type: Boolean, default: true }
});

const Product = model<IProduct>('Product', productSchema);

export default Product;