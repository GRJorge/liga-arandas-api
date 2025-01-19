import { IsNotEmpty, IsString } from 'class-validator';

export class DeleteAdminDto {
  @IsString()
  @IsNotEmpty()
  id: string;
}
