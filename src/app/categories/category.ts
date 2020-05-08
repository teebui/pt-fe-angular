import { IItem } from '../items/item';

export interface ICategory {
    categoryId: number,
    name: string,
    description: string,
    itemsCount: number
}

export interface ICategoryWithItems extends ICategory {
    items: IItem[]
}