import { Injectable } from '@nestjs/common';
import { hash } from 'bcrypt';

@Injectable()
export class HashService {
  async hashPassword(password: string): Promise<string> {
    return await hash(password, 10);
  }
}
