import { Body, Controller, Delete, Patch, Post, Query } from '@nestjs/common';
import { CreateAdminDto } from './dto/createAdmin.dto';
import { AdminService } from './admin.service';
import { EditAdminDto } from './dto/editAdmin.dto';
import { DeleteAdminDto } from './dto/deleteAdmin.dto';

@Controller('admin')
export class AdminController {
  constructor(private readonly adminService: AdminService) {}

  @Post()
  async create(@Body() admin: CreateAdminDto) {
    return this.adminService.createAdmin(admin);
  }
  @Patch('/edit')
  async edit(@Body() editAdmin: EditAdminDto) {
    return this.adminService.editAdmin(editAdmin);
  }
  @Delete('/delete')
  async delete(@Query() id: DeleteAdminDto) {
    return this.adminService.deleteAdmin(id.id);
  }
}
