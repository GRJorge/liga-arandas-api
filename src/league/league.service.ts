import { ConflictException, Injectable, InternalServerErrorException } from '@nestjs/common';
import { CreateLeagueDto } from './dto/createLeague.dto';
import { League } from './league.schema';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';

@Injectable()
export class LeagueService {
  constructor(@InjectModel(League.name) private readonly leagueModel: Model<League>) {}

  async createLeague(league: CreateLeagueDto): Promise<League> {
    try {
      return await this.leagueModel.create(league);
    } catch (error) {
      if (error.code === 11000) {
        const duplicateField = Object.keys(error.keyValue)[0];
        throw new ConflictException(`${duplicateField} already exist`);
      }
      throw InternalServerErrorException;
    }
  }
}
