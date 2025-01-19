import { ConflictException, Injectable } from '@nestjs/common';
import { CreateAdminDto } from './dto/createAdmin.dto';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Admin } from './admin.schema';
import { EditAdminDto } from './dto/editAdmin.dto';
import { HashService } from './hash.service';

@Injectable()
export class AdminService {
  constructor(
    @InjectModel(Admin.name) private readonly adminModel: Model<Admin>,
    private readonly hashService: HashService,
  ) {}

  async createAdmin(admin: CreateAdminDto): Promise<Admin> {
    try {
      admin.password = await this.hashService.hashPassword(admin.password);
      return await this.adminModel.create(admin);
    } catch (error) {
      if (error.code === 11000) {
        const duplicateField = Object.keys(error.keyValue)[0];
        throw new ConflictException(`${duplicateField} is already in use`);
      }
      throw error;
    }
  }

  async editAdmin(editAdmin: EditAdminDto): Promise<Admin> {
    return await this.adminModel.findByIdAndUpdate(editAdmin.id, editAdmin);
  }
}
