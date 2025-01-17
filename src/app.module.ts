import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { env } from 'process';
import { Connection } from 'mongoose';

@Module({
  imports: [
    MongooseModule.forRoot('mongodb://127.0.0.1:27017/' + env.DB_NAME, {
      onConnectionCreate: (connection: Connection) => {
        connection.on('connected', () => console.log('Database connected'));
      },
    }),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
