import { IsBoolean, IsNotEmpty, IsString } from "class-validator";

export class CreateMatchDto {
  @IsString()
  @IsNotEmpty()
  question: string;

  @IsString()
  @IsNotEmpty()
  answer: string;

  @IsBoolean()
  matched: boolean = false;
}
