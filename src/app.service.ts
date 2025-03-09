import { ConflictException, Injectable, InternalServerErrorException } from '@nestjs/common';

@Injectable()
export class AppService {
  async createDocumentMiddleware(promise: Promise<any>): Promise<any> {
    try {
      return await promise;
    } catch (error) {
      if (error.code === 11000) {
        const duplicateField = Object.keys(error.keyValue)[0];
        throw new ConflictException(`${duplicateField} is already in use`);
      }
      throw InternalServerErrorException;
    }
  }
}
