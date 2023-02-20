import { Prop, SchemaFactory } from "@nestjs/mongoose";
import { Schema } from "@nestjs/mongoose";
import { HydratedDocument } from "mongoose";

export type HistoryDocument = HydratedDocument<History>;

@Schema({
  timestamps: true,
})
export class History {
  @Prop({ type: Number, required: true })
  correct: number;

  @Prop({ type: Number, required: true })
  incorrect: number;

  @Prop({ type: String, required: true, default: "match" })
  pageTitle: string;
}

const HistorySchema = SchemaFactory.createForClass(History);
export default HistorySchema;
