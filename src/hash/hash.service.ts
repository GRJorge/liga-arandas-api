import { Injectable } from '@nestjs/common';
import bcrypt from 'bcrypt';

@Injectable()
export class HashService {
  async hash(data: string): Promise<string> {
    return await bcrypt.hash(data, 10);
  }
  async compare(plain: string, encrypted: string): Promise<boolean> {
    return await bcrypt.compare(plain, encrypted);
  }
}
