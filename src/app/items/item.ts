import { ICategory } from '../categories/category';

interface IBaseItem {
    name: string,
    description?: string,
    purchaseDate: Date,
    purchasePrice?: number,
}

export interface INewItem extends IBaseItem {
    categoryId: number
}

export interface IItem extends IBaseItem {
    id: number,
    category: ICategory
}

