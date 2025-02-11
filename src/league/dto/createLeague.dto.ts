import { IsNotEmpty, IsString, MinLength } from 'class-validator';

export class CreateLeagueDto {
  @IsString()
  @IsNotEmpty()
  logo: string;

  @IsString()
  @MinLength(3)
  @IsNotEmpty()
  name: string;
}
