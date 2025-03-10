import { Module } from '@nestjs/common';
import { AdminService } from './admin.service';
import { AdminController } from './admin.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { Admin, AdminSchema } from './admin.schema';
import { HashModule } from 'src/hash/hash.module';

@Module({
  imports: [HashModule, MongooseModule.forFeature([{ name: Admin.name, schema: AdminSchema }])],
  providers: [AdminService],
  controllers: [AdminController],
  exports: [AdminService],
})
export class AdminModule {}
