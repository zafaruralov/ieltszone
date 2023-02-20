import { HydratedDocument } from "mongoose";
import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";

export type FlashCardDocument = HydratedDocument<FlashCard>;

@Schema({
  timestamps: true,
})
export class FlashCard {
  @Prop({ type: String, required: true })
  question: string;

  @Prop({ type: String, required: true })
  answer: string;
}

const FlashCardSchema = SchemaFactory.createForClass(FlashCard);
export default FlashCardSchema;
