import { CreateMatchDto } from "./dto/create-match.dto";
import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Query,
} from "@nestjs/common";
import { MatchService } from "./match.service";
import { PaginationParams } from "./dto/paginationParams";

@Controller("match")
export class MatchController {
  constructor(private readonly matchService: MatchService) {}

  @Post()
  async create(@Body() createMatchDto: CreateMatchDto) {
    try {
      return await this.matchService.create(createMatchDto);
    } catch (error) {
      return error.message;
    }
  }
  @Get()
  findAll(@Query() { skip, limit }: PaginationParams) {
    return this.matchService.getAll(skip, limit);
  }
  @Delete()
  remove(@Param("id") id: string) {
    return this.matchService.remove(id);
  }
}
