/// <reference types="mongoose/types/aggregate" />
/// <reference types="mongoose/types/callback" />
/// <reference types="mongoose/types/collection" />
/// <reference types="mongoose/types/connection" />
/// <reference types="mongoose/types/cursor" />
/// <reference types="mongoose/types/document" />
/// <reference types="mongoose/types/error" />
/// <reference types="mongoose/types/expressions" />
/// <reference types="mongoose/types/helpers" />
/// <reference types="mongoose/types/middlewares" />
/// <reference types="mongoose/types/indexes" />
/// <reference types="mongoose/types/models" />
/// <reference types="mongoose/types/mongooseoptions" />
/// <reference types="mongoose/types/pipelinestage" />
/// <reference types="mongoose/types/populate" />
/// <reference types="mongoose/types/query" />
/// <reference types="mongoose/types/schemaoptions" />
/// <reference types="mongoose/types/schematypes" />
/// <reference types="mongoose/types/session" />
/// <reference types="mongoose/types/types" />
/// <reference types="mongoose/types/utility" />
/// <reference types="mongoose/types/validation" />
/// <reference types="mongoose/types/virtuals" />
/// <reference types="mongoose/types/inferschematype" />
import { HydratedDocument, Types } from "mongoose";
export type OrderDocument = HydratedDocument<Order>;
export declare enum OrderStatus {
    New = 0,
    InProcess = 1,
    Delivering = 2,
    Delivered = 3,
    Canceled = -1
}
export declare enum OrderSource {
    Telegram = 0,
    Web = 1
}
export declare class Order {
    title?: string;
    price?: number;
    status: OrderStatus;
    client: Types.ObjectId;
    source: OrderSource;
    tgFileId?: string;
    path?: string;
}
declare const OrderSchema: import("mongoose").Schema<Order, import("mongoose").Model<Order, any, any, any, any>, {}, {}, {}, {}, import("mongoose").DefaultSchemaOptions, Order>;
export default OrderSchema;
