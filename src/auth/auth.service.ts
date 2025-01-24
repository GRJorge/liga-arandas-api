import { BadRequestException, Injectable } from '@nestjs/common';
import { LoginDto } from './dto/login.dto';
import { AdminService } from 'src/admin/admin.service';
import { Admin } from 'src/admin/admin.schema';
import { HashService } from 'src/hash/hash.service';

@Injectable()
export class AuthService {
  constructor(
    private readonly adminService: AdminService,
    private readonly hashService: HashService,
  ) {}

  async login(loginData: LoginDto): Promise<string> {
    const admin: Admin = await this.adminService.getAdminByEmail(loginData.email);

    if (!admin) {
      throw new BadRequestException('Non exist admin with this email');
    } else if (!(await this.hashService.compare(loginData.password, admin.password))) {
      throw new BadRequestException('Incorrect password');
    } else {
      return 'Token';
    }
  }
}
