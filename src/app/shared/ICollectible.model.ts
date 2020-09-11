export class ICollectible {
    id: number;
    name: string;
    type: string;
    brand: string;
    price: string;
    condition: string;
    img: string;
}

export class ICollectibleList {
    name: string;
    details: ICollectible[]
}