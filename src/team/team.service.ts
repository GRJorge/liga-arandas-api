import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Team } from './team.schema';
import { Model } from 'mongoose';
import { CreateTeamDto } from './dto/createTeam.dto';
import { AppService } from 'src/app.service';

@Injectable()
export class TeamService {
  constructor(
    @InjectModel(Team.name) private readonly teamModel: Model<Team>,
    private readonly appService: AppService,
  ) {}

  async createTeam(team: CreateTeamDto): Promise<Team> {
    const promise = this.teamModel.create(team);
    return await this.appService.createDocumentMiddleware(promise);
  }
}
