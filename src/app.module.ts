import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { env } from 'process';
import { Connection } from 'mongoose';
import { AdminModule } from './admin/admin.module';
import { AuthModule } from './auth/auth.module';
import { HashService } from './hash/hash.service';
import { HashModule } from './hash/hash.module';

@Module({
  imports: [
    MongooseModule.forRoot('mongodb://127.0.0.1:27017/' + env.DB_NAME, {
      onConnectionCreate: (connection: Connection) => {
        connection.on('connected', () => console.log('Database connected'));
      },
    }),
    AdminModule,
    AuthModule,
    HashModule,
  ],
  controllers: [AppController],
  providers: [AppService, HashService],
})
export class AppModule {}
