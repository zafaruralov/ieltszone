import { IsNotEmpty, IsString } from "class-validator";
export declare class CreateClientBody {
  @IsNotEmpty()
  @IsString()
  name: string;

  @IsNotEmpty()
  @IsString()
  phone: string;
}
