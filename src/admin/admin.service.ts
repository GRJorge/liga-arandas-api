import { BadRequestException, ConflictException, Injectable } from '@nestjs/common';
import { CreateAdminDto } from './dto/createAdmin.dto';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Admin } from './admin.schema';
import { EditAdminDto } from './dto/editAdmin.dto';
import { HashService } from 'src/hash/hash.service';

@Injectable()
export class AdminService {
  constructor(
    @InjectModel(Admin.name) private readonly adminModel: Model<Admin>,
    private readonly hashService: HashService,
  ) {}

  async createAdmin(admin: CreateAdminDto): Promise<Admin> {
    try {
      admin.password = await this.hashService.hash(admin.password);
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
    if (editAdmin.actualPassword && editAdmin.password) {
      const admin = await this.adminModel.findById(editAdmin.id).select('password');

      if (await this.hashService.compare(editAdmin.actualPassword, admin.password)) {
        editAdmin.password = await this.hashService.hash(editAdmin.password);
      } else {
        throw new BadRequestException('Incorrect password');
      }
    }
    return await this.adminModel.findByIdAndUpdate(editAdmin.id, editAdmin);
  }

  async deleteAdmin(id: string): Promise<Admin> {
    return await this.adminModel.findByIdAndDelete(id);
  }

  async getAdminByEmail(email: string): Promise<Admin> {
    return await this.adminModel.findOne({ email });
  }
}
