import { Body, Controller, Post } from '@nestjs/common';
import { CreateAdminDto } from './dto/createAdmin.dto';
import { AdminService } from './admin.service';

@Controller('admin')
export class AdminController {
  constructor(private readonly adminService: AdminService) {}

  @Post()
  async create(@Body() admin: CreateAdminDto) {
    return this.adminService.createAdmin(admin);
  }
}
