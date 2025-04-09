import { IsOptional, IsString } from 'class-validator';

export class GetTeamDto {
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
