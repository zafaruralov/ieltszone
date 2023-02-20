import { IsString, IsNotEmpty } from "class-validator";
export class CreateFlashCardDto {
  @IsString()
  @IsNotEmpty()
  question: string;

  @IsString()
  @IsNotEmpty()
  answer: string;
}
