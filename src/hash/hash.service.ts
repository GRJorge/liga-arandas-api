import { Injectable } from '@nestjs/common';
import { hash, compare } from 'bcrypt';

@Injectable()
export class HashService {
  async hash(data: string): Promise<string> {
    return await hash(data, 10);
  }
  async compare(plain: string, encrypted: string): Promise<boolean> {
    return await compare(plain, encrypted);
  }
}
