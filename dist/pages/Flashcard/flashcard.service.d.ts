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
import { UpdateFlashCardDto } from "./dto/update-flashcard.dto";
import { CreateFlashCardDto } from "./dto/create-flashcard.dto";
import { FlashCard, FlashCardDocument } from "./schema/flashcard.schema";
import { Model } from "mongoose";
export declare class FlashCardService {
    private readonly flashCardModel;
    constructor(flashCardModel: Model<FlashCardDocument>);
    create(createFlashCardDto: CreateFlashCardDto): Promise<import("mongoose").Document<unknown, any, FlashCard> & FlashCard & {
        _id: import("mongoose").Types.ObjectId;
    } & Required<{
        _id: import("mongoose").Types.ObjectId;
    }>>;
    update(id: string, updateFlashCardDto: UpdateFlashCardDto): Promise<import("mongoose").Document<unknown, any, FlashCard> & FlashCard & {
        _id: import("mongoose").Types.ObjectId;
    } & Required<{
        _id: import("mongoose").Types.ObjectId;
    }>>;
    remove(id: string): import("mongoose").Query<import("mongoose").Document<unknown, any, FlashCard> & FlashCard & {
        _id: import("mongoose").Types.ObjectId;
    } & Required<{
        _id: import("mongoose").Types.ObjectId;
    }>, import("mongoose").Document<unknown, any, FlashCard> & FlashCard & {
        _id: import("mongoose").Types.ObjectId;
    } & Required<{
        _id: import("mongoose").Types.ObjectId;
    }>, {}, import("mongoose").Document<unknown, any, FlashCard> & FlashCard & {
        _id: import("mongoose").Types.ObjectId;
    }>;
    getAll(page?: number): Promise<(import("mongoose").Document<unknown, any, FlashCard> & FlashCard & {
        _id: import("mongoose").Types.ObjectId;
    } & Required<{
        _id: import("mongoose").Types.ObjectId;
    }>)[]>;
}
