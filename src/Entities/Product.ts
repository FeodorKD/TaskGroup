export interface IProduct {
    id: number,
    title: string,
    price: number,
    description: string,
    rating: {
        rate: number,
        count: 120,
    },
    category: ICategory
    image: string
}

export enum ICategory {
    ELECTRONICS = "electronics",
    JEWELLERY = "jewelery",
    MEN_S_CLOTHING = "men's%20clothing",
    WOMEN_S_CLOTHING = "women's%20clothing"
}

export type CategoryUrl =
    ICategory.ELECTRONICS |
    ICategory.JEWELLERY |
    ICategory.WOMEN_S_CLOTHING |
    ICategory.MEN_S_CLOTHING