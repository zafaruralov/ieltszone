import { FlashCardService } from "./flashcard.service";
import { FlashCardController } from "./flashcard.controller";
import { MongooseModule } from "@nestjs/mongoose";
import { Module } from "@nestjs/common";
import FlashCardSchema from "./schema/flashcard.schema";

@Module({
  imports: [
    MongooseModule.forFeature([{ name: "FlashCard", schema: FlashCardSchema }]),
  ],
  controllers: [FlashCardController],
  providers: [FlashCardService],
  exports: [FlashCardService],
})
export class FalshCardModule {}
