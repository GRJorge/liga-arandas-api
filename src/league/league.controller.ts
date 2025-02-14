import { BadRequestException, Body, Controller, Get, Post, Query, UploadedFile, UseGuards, UseInterceptors } from '@nestjs/common';
import { LeagueService } from './league.service';
import { FileInterceptor } from '@nestjs/platform-express';
import { imageStorage } from 'src/multer/multer.storages';
import { CreateLeagueDto } from './dto/createLeague.dto';
import { AuthGuard } from 'src/guards/auth.guard';
import { GetLeagueDto } from './dto/getLeague.dto';

@Controller('league')
export class LeagueController {
  constructor(private readonly leagueService: LeagueService) {}

  @Post('/create')
  @UseGuards(AuthGuard)
  @UseInterceptors(FileInterceptor('logo', imageStorage))
  create(@UploadedFile() logo: Express.Multer.File, @Body() league: CreateLeagueDto) {
    if (!logo) throw new BadRequestException('Logo image required');
    return this.leagueService.create({ logo: logo.filename, name: league.name });
  }

  @Get('/get')
  get(@Query() leagueQuerys: GetLeagueDto) {
    return this.leagueService.get(leagueQuerys);
  }
}
