import { Types } from "mongoose";
import { PipeTransform } from "@nestjs/common";
export default class ObjectIdPipe implements PipeTransform<string, Types.ObjectId> {
    transform(value: string): Types.ObjectId;
}
