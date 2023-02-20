import { UpdateFlashCardDto } from "./dto/update-flashcard.dto";
import { CreateFlashCardDto } from "./dto/create-flashcard.dto";
import { FlashCardService } from "./flashcard.service";
import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
  Query,
} from "@nestjs/common";

@Controller("flashcards")
export class FlashCardController {
  constructor(private readonly flashCardService: FlashCardService) {}

  @Post()
  async create(@Body() createFlashCardDto: CreateFlashCardDto) {
    try {
      const user = await this.flashCardService.create(createFlashCardDto);
      return user;
    } catch (error) {
      return error.message;
    }
  }

  @Get()
  findAll(@Query("page") page: number) {
    return this.flashCardService.getAll(page);
  }
  // @Get('/')
  // async getAllUsers(@Query() query): Promise<User[]> {
  //   const { limit, offset } = query;
  //   const users = await this.myService.getUsers(limit, offset);

  //   return users;
  // }

  @Patch(":id")
  update(
    @Param("id") id: string,
    @Body() updateFlashCardDto: UpdateFlashCardDto
  ) {
    return this.flashCardService.update(id, updateFlashCardDto);
  }

  @Delete()
  remove(@Param("id") id: string) {
    return this.flashCardService.remove(id);
  }
}
