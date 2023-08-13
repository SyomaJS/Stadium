import { ApiProperty } from '@nestjs/swagger';
import { Column, DataType, Model, Table } from 'sequelize-typescript';

interface IOtpAttr {
  id: string;
  otp: string;
  expiration_time: Date;
  verified: boolean;
  check: string; // phone
}

@Table({ tableName: 'otp' })
export class Otp extends Model<Otp, IOtpAttr> {
  @ApiProperty({
    example: '123e4567-e89b-12d3-a456-426655440000',
    description: 'Unique ID of the OTP',
  })
  @Column({
    type: DataType.UUID,
    primaryKey: true,
    allowNull: false,
  })
  id: string;

  @ApiProperty({
    example: '123456',
    description: 'OTP code',
  })
  @Column({
    type: DataType.STRING,
    allowNull: false,
  })
  otp: string;

  @ApiProperty({
    example: '2023-08-08T12:34:56Z',
    description: 'Expiration time of the OTP',
  })
  @Column({
    type: DataType.DATE,
    allowNull: false,
  })
  expiration_time: Date;

  @ApiProperty({
    example: false,
    description: 'Flag indicating if the OTP has been verified',
  })
  @Column({
    type: DataType.BOOLEAN,
    defaultValue: false,
  })
  verified: boolean;

  @ApiProperty({
    example: 'phone',
    description: 'Type of check (e.g., phone)',
  })
  @Column({
    type: DataType.STRING,
    allowNull: false,
  })
  check: string;
}
