import { IsNotEmpty, IsNumber } from "class-validator";
import { IsString } from "class-validator";
export class CreateHistoryDto {
  @IsNumber()
  @IsNotEmpty()
  correct: number;

  @IsNumber()
  @IsNotEmpty()
  incorrect: number;

  @IsString()
  @IsNotEmpty()
  pageTitle: string;
}
