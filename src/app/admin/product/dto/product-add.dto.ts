export interface ProductAddDto{
    productName: string;
    shortDesc: string;
    description: string;
    price: number;
    discount: number;
    thumb: string;
    video: string;
    bestSeller: boolean;
    homeFlag: boolean;
    active: boolean;
    tags: string;
    alias: string;
    metaDesc: string;
    metaKey: string;
    unitInStock: number;
    categoryId: number;
}