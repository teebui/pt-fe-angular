import { IItem } from '../items/item';


export interface IBaseCategory {
    name: string,
    description: string,
}

export interface ICategory extends IBaseCategory {
    categoryId: number,
    itemsCount: number
}

export interface ICategoryWithItems extends ICategory {
    items: IItem[]
}
