import { CreateHistoryDto } from "./dto/create.history";
import { Injectable } from "@nestjs/common";
import { InjectModel } from "@nestjs/mongoose";
import { History, HistoryDocument } from "./schema/history.schema";
import { Model } from "mongoose";

@Injectable()
export class HistoryService {
  constructor(
    @InjectModel(History.name)
    private readonly historyModel: Model<HistoryDocument>
  ) {}

  create(createHistoryDto: CreateHistoryDto) {
    return this.historyModel.create(createHistoryDto);
  }

  async getAll(pageTitle: string) {
    return await this.historyModel.find({ pageTitle: pageTitle }).exec();
  }
}
// , correct: "", incorrect: ""
