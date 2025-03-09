import { Body, Controller, Post } from '@nestjs/common';
import { CreateTeamDto } from './dto/createTeam.dto';
import { TeamService } from './team.service';

@Controller('team')
export class TeamController {
  constructor(private readonly teamService: TeamService) {}

  @Post('/create')
  create(@Body() team: CreateTeamDto) {
    return this.teamService.createTeam(team);
  }
}
