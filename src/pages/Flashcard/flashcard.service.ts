import { UpdateFlashCardDto } from "./dto/update-flashcard.dto";
import { CreateFlashCardDto } from "./dto/create-flashcard.dto";
import { FlashCard, FlashCardDocument } from "./schema/flashcard.schema";
import { Injectable } from "@nestjs/common";
import { InjectModel } from "@nestjs/mongoose";
import { Model } from "mongoose";

@Injectable()
export class FlashCardService {
  constructor(
    @InjectModel(FlashCard.name)
    private readonly flashCardModel: Model<FlashCardDocument>
  ) {}

  create(createFlashCardDto: CreateFlashCardDto) {
    const result = this.flashCardModel.create(createFlashCardDto);
    return result;
  }

  async update(id: string, updateFlashCardDto: UpdateFlashCardDto) {
    return await this.flashCardModel.findByIdAndUpdate(id, updateFlashCardDto);
  }

  remove(id: string) {
    return this.flashCardModel.findByIdAndDelete(id);
  }

  // async findAll(data: any) {
  //   try {
  //     let page = 1;
  //     let pageSize = 10;

  //     if (data?.page) {
  //       page = data.page;
  //     }

  //     if (data?.pageSize) {
  //       pageSize = data.pageSize;
  //     }

  //     const allExamples = await this.exampleRepository.findAndCount({
  //       skip: pageSize * (page - 1),
  //       take: pageSize,
  //     });

  //     return Object.assign({
  //       data: allExamples[0],
  //       totalPages: Math.ceil(allExamples[1] / pageSize),
  //     });
  //   } catch (err) {
  //     throw err;
  //   }
  // }

  async getAll(page: number = 1) {
    const pages = await this.flashCardModel
      .find()
      .skip(1 * (page - 1))
      .limit(1);

    return pages;
  }
}
