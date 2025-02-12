import { Body, Controller, Post } from '@nestjs/common';
import { CreateLeagueDto } from './dto/createLeague.dto';
import { LeagueService } from './league.service';

@Controller('league')
export class LeagueController {
  constructor(private readonly leagueService: LeagueService) {}

  @Post('/create')
  async create(@Body() league: CreateLeagueDto) {
    return this.leagueService.createLeague(league);
  }
}
