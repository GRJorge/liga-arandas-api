import { Body, Controller, Post, UseGuards } from '@nestjs/common';
import { CreateLeagueDto } from './dto/createLeague.dto';
import { LeagueService } from './league.service';
import { AuthGuard } from 'src/guards/auth.guard';

@Controller('league')
export class LeagueController {
  constructor(private readonly leagueService: LeagueService) {}

  @Post('/create')
  @UseGuards(AuthGuard)
  async create(@Body() league: CreateLeagueDto) {
    return this.leagueService.createLeague(league);
  }
}
