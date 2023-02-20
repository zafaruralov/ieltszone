import { CreateFlashCardDto } from "./create-flashcard.dto";
import { PartialType } from "@nestjs/mapped-types";

export class UpdateFlashCardDto extends PartialType(CreateFlashCardDto) {}
