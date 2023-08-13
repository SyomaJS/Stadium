import { ApiProperty } from '@nestjs/swagger';
import { Table, Model, Column, DataType } from 'sequelize-typescript';

interface UserAttrs {
  first_name: string;
  last_name: string;
  username: string;
  hashed_password: string;
  telegram_link: string;
  email: string;
  phone: string;
  user_photo: string;
  birthday: Date;
  is_owner: string;
  is_active: string;
  hashed_refresh_token: string;
}

@Table({ tableName: 'users' })
export class User extends Model<User, UserAttrs> {
  @ApiProperty({ example: 1, description: 'UNique ID' })
  @Column({
    type: DataType.INTEGER,
    autoIncrement: true,
    primaryKey: true,
  })
  id: number;

  @ApiProperty({ example: 'Kimdir', description: 'Name of user' })
  @Column({
    type: DataType.STRING,
  })
  first_name: string;

  @ApiProperty({ example: 'Kimdirov', description: 'Surname of user' })
  @Column({
    type: DataType.STRING,
  })
  last_name: string;

  @ApiProperty({ example: 'User', description: 'Username of user' })
  @Column({
    type: DataType.STRING,
  })
  username: string;

  @ApiProperty({
    example: 'http://t.me/user',
    description: 'Telegram link of user',
  })
  @Column({
    type: DataType.STRING,
  })
  telegram_link: string;

  @ApiProperty({ example: 'password', description: 'Password of user' })
  @Column({
    type: DataType.STRING,
  })
  hashed_password: string;

  @ApiProperty({ example: '...@gmail.com', description: 'Email of user' })
  @Column({
    type: DataType.STRING,
    unique: true,
  })
  email: string;

  @ApiProperty({ example: '+998 .. ... .. ..', description: 'Phone of user' })
  @Column({
    type: DataType.STRING,
  })
  phone: string;

  @ApiProperty({ example: 'photo link', description: 'Photo of user' })
  @Column({
    type: DataType.STRING,
  })
  user_photo: string;

  @ApiProperty({ example: '..|..|....', description: 'Bithday of user' })
  @Column({
    type: DataType.DATE,
  })
  birthday: Date;

  @ApiProperty({ example: 'false', description: 'Owner of place' })
  @Column({
    type: DataType.BOOLEAN,
    defaultValue: false,
  })
  is_owner: boolean;

  @ApiProperty({ example: 'false', description: 'Avtive of user' })
  @Column({
    type: DataType.BOOLEAN,
    defaultValue: false,
  })
  is_active: boolean;

  @ApiProperty({ example: 'Token', description: 'User Allowed to ' })
  @Column({
    type: DataType.STRING,
  })
  hashed_refresh_token: string;

  @Column({
    type: DataType.STRING,
  })
  activation_link: string;
}
