import { IsOptional, IsString } from 'class-validator';

export class GetLeagueDto {
  @IsString()
  @IsOptional()
  _id?: string;

  @IsString()
  @IsOptional()
  name?: string;
}
