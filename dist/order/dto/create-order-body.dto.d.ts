import { Types } from "mongoose";
export declare function toMongoObjectId({ value, key }: {
    value: any;
    key: any;
}): Types.ObjectId;
export default class CreateOrderBody {
    title: string;
    price: number;
    client: string;
}
