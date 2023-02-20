import { CreateHistoryDto } from "./dto/create.history";
import { Body } from "@nestjs/common";
import { Get, Post } from "@nestjs/common";
import { Controller } from "@nestjs/common";
import { HistoryService } from "./history.service";

@Controller("history")
export class HistoryController {
  constructor(private readonly historyService: HistoryService) {}

  @Post()
  async create(@Body() createHistoryDto: CreateHistoryDto) {
    try {
      return await this.historyService.create(createHistoryDto);
    } catch (error) {
      return error.message;
    }
  }

  @Get()
  findAll(@Body("pageTitle") pageTitle: string) {
    return this.historyService.getAll(pageTitle);
  }
}
