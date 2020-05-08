import { ICategory } from '../categories/category';

export interface IItem {
    id: number,
    name: string,
    description: string,
    purchaseDate: Date,
    purchasePrice?: number,
    category: ICategory
}