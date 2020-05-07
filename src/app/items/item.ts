import { Category } from '../categories/category';

export interface Item {
    id: number,
    name: string,
    description: string,
    purchaseDate: Date,
    purchasePrice?: number,
    category: Category[]
}
