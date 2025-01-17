import { ConflictException, Injectable } from '@nestjs/common';
import { CreateAdminDto } from './dto/createAdmin.dto';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Admin } from './admin.schema';

@Injectable()
export class AdminService {
  constructor(
    @InjectModel(Admin.name) private readonly adminModel: Model<Admin>,
  ) {}

  async createAdmin(admin: CreateAdminDto): Promise<Admin> {
    try {
      return await this.adminModel.create(admin);
    } catch (error) {
      if (error.code === 11000) {
        const duplicateField = Object.keys(error.keyValue)[0];
        throw new ConflictException(`${duplicateField} is already in use`);
      }
      throw error;
    }
  }
}
