import { IsEmail, IsNotEmpty, IsString } from 'class-validator';

export class LoginUserDto {
  @IsString()
  email: string;

  @IsString()
  @IsNotEmpty()
  password: string;
}
