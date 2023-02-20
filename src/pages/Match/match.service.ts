import { CreateMatchDto } from "./dto/create-match.dto";
import { Injectable } from "@nestjs/common";
import { InjectModel } from "@nestjs/mongoose";
import { Match, MatchDocument } from "./schema/match.schema";
import { Model } from "mongoose";
@Injectable()
export class MatchService {
  constructor(
    @InjectModel(Match.name)
    private readonly matchModel: Model<MatchDocument>
  ) {}

  create(createMatchDto: CreateMatchDto) {
    return this.matchModel.create(createMatchDto);
  }

  remove(id: string) {
    return this.matchModel.findByIdAndDelete(id);
  }
  async getAll(documentsToSkip = 0, limitOfDocuments?: number) {
    const query = this.matchModel.find().sort({ _id: 1 });
    if (limitOfDocuments) {
      query.limit(limitOfDocuments);
    }
    const result = await query;
    const count = await this.matchModel.count();
    return { result, count };
  }
}
