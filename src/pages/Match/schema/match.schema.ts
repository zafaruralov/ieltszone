import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import { HydratedDocument } from "mongoose";

export type MatchDocument = HydratedDocument<Match>;

@Schema({
  timestamps: true,
})
export class Match {
  @Prop({ type: String, required: true })
  question: string;

  @Prop({ type: String, required: true })
  answer: string;

  @Prop({ type: Boolean, required: true, default: false })
  matched: boolean;
}
const MatchSchema = SchemaFactory.createForClass(Match);
export default MatchSchema;
