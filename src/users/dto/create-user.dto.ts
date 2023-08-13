import { ApiProperty } from '@nestjs/swagger';
import {
  IsNotEmpty,
  IsString,
  IsEmail,
  IsUrl,
  IsDateString,
  MinLength,
} from 'class-validator';

export class CreateUserDto {
  @ApiProperty({
    description: 'The first name of the user.',
    example: 'John',
  })
  @IsNotEmpty()
  @IsString()
  first_name: string;

  @ApiProperty({
    description: 'The last name of the user.',
    example: 'Doe',
  })
  @IsNotEmpty()
  @IsString()
  last_name: string;

  @ApiProperty({
    description: 'The username of the user.',
    example: 'johndoe',
  })
  @IsNotEmpty()
  @IsString()
  username: string;

  @ApiProperty({
    description: 'The  password of the user.',
    example: '123456',
  })
  @IsNotEmpty()
  @IsString()
  @MinLength(6)
  password: string;

  @ApiProperty({
    description: 'The confirm password of the user.',
    example: 'confirm_password',
  })
  @IsNotEmpty()
  @IsString()
  @MinLength(6)
  confirm_password: string;


  @ApiProperty({
    description: 'The email address of the user.',
    example: 'johndoe@example.com',
  })
  @IsNotEmpty()
  @IsEmail()
  email: string;

  @ApiProperty({
    description: 'The phone number of the user.',
    example: '1234567890',
  })
  @IsNotEmpty()
  @IsString()
  phone: string;

  @ApiProperty({
    description: 'The URL of the user photo.',
    example: 'https://example.com/user_photo.jpg',
  })
  @IsUrl()
  user_photo: string;

  @ApiProperty({
    description: 'The birthday of the user.',
    example: '1990-01-01',
  })
  @IsNotEmpty()
  @IsDateString()
  birthday: Date;
}