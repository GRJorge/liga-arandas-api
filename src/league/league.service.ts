import { BadRequestException, Injectable, InternalServerErrorException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { League } from './league.schema';
import { Model } from 'mongoose';
import { CreateLeagueDto } from './dto/createLeague.dto';

@Injectable()
export class LeagueService {
  constructor(@InjectModel(League.name) private readonly leagueModel: Model<League>) {}

  async create(league: CreateLeagueDto): Promise<League> {
    try {
      return await this.leagueModel.create(league);
    } catch (error) {
      if (error.code === 11000) throw new BadRequestException('League already exists');
      throw new InternalServerErrorException();
    }
  }
}
