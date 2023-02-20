import { MatchController } from "./match.controller";
import { MongooseModule } from "@nestjs/mongoose";
import { Module } from "@nestjs/common";
import MatchSchema from "./schema/match.schema";
import { MatchService } from "./match.service";

@Module({
  imports: [
    MongooseModule.forFeature([{ name: "Match", schema: MatchSchema }]),
  ],
  controllers: [MatchController],
  providers: [MatchService],
  exports: [MatchService],
})
export class MatchModule {}
