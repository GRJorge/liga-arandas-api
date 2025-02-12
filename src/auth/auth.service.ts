import { BadRequestException, Injectable } from '@nestjs/common';
import { LoginDto } from './dto/login.dto';
import { AdminService } from 'src/admin/admin.service';
import { Admin } from 'src/admin/admin.schema';
import { HashService } from 'src/hash/hash.service';
import { JwtService } from '@nestjs/jwt';
import { env } from 'process';

@Injectable()
export class AuthService {
  constructor(
    private readonly adminService: AdminService,
    private readonly hashService: HashService,
    private readonly jwtService: JwtService,
  ) {}

  async login(loginData: LoginDto): Promise<{ accessToken: string }> {
    const admin: Admin = await this.adminService.getAdminByEmail(loginData.email);

    if (!admin) {
      throw new BadRequestException('Non exist admin with this email');
    } else if (!(await this.hashService.compare(loginData.password, admin.password))) {
      throw new BadRequestException('Incorrect password');
    } else {
      const payload = { id: admin._id.toString(), email: loginData.email };

      return { accessToken: await this.jwtService.signAsync(payload, { secret: env.SECRET }) };
    }
  }
}
