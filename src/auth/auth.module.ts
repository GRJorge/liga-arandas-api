import { Module } from '@nestjs/common';
import { AuthService } from './auth.service';
import { AuthController } from './auth.controller';
import { AdminModule } from 'src/admin/admin.module';
import { HashModule } from 'src/hash/hash.module';
import { JwtModule } from '@nestjs/jwt';

@Module({
  imports: [AdminModule, HashModule, JwtModule.register({ global: true })],
  providers: [AuthService],
  controllers: [AuthController],
})
export class AuthModule {}
