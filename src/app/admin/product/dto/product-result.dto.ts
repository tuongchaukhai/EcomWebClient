export interface ProductResultDto {
    productId: number;
    productName: string;
    shortDesc: string;
    description: string;
    price: number;
    discount: number;
    thumb: string;
    video: string;
    createdDate: Date;
    lastModified: Date;
    bestSeller: boolean;
    homeFlag: boolean;
    active: boolean;
    tags: string;
    alias: string;
    metaDesc: string;
    metaKey: string;
    unitInStock: number;
    categoryName: string;
}