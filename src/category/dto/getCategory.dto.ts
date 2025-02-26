import { IsOptional, IsString } from 'class-validator';

export class GetCategoryDto {
  @IsString()
  @IsOptional()
  _id?: string;

  @IsString()
  @IsOptional()
  name?: string;

  @IsString()
  @IsOptional()
  league?: string;
}
