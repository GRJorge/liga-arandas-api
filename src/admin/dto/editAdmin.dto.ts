import { IsBoolean, IsNotEmpty, IsOptional, IsString, MinLength } from 'class-validator';

export class EditAdminDto {
  @IsString()
  @IsNotEmpty()
  id: string;

  @IsString()
  @MinLength(3)
  @IsOptional()
  username?: string;

  @IsString()
  @IsOptional()
  actualPassword?: string;

  @IsString()
  @MinLength(6)
  @IsOptional()
  password?: string;

  @IsBoolean()
  @IsOptional()
  super?: boolean;
}
