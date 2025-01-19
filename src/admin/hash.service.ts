import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { hash, compare } from 'bcrypt';
import { Admin } from './admin.schema';
import { Model } from 'mongoose';

@Injectable()
export class HashService {
  constructor(@InjectModel(Admin.name) private readonly adminModel: Model<Admin>) {}

  async hashPassword(password: string): Promise<string> {
    return await hash(password, 10);
  }
  async comparePassword(idUser: string, password: string): Promise<boolean> {
    const buffer = await this.adminModel.findById(idUser).select('password');
    return await compare(password, buffer.password);
  }
}
