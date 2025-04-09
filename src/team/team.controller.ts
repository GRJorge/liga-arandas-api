import { BadRequestException, Body, Controller, Get, Post, Query, UploadedFile, UseGuards, UseInterceptors } from '@nestjs/common';
import { CreateTeamDto } from './dto/createTeam.dto';
import { TeamService } from './team.service';
import { AuthGuard } from 'src/guards/auth.guard';
import { FileInterceptor } from '@nestjs/platform-express';
import { shieldStorage } from 'src/multer/multer.storages';
import { GetTeamDto } from './dto/getTeam.dto';

@Controller('team')
export class TeamController {
  constructor(private readonly teamService: TeamService) {}

  @Post('/create')
  @UseGuards(AuthGuard)
  @UseInterceptors(FileInterceptor('shield', shieldStorage))
  create(@UploadedFile() shield: Express.Multer.File, @Body() team: CreateTeamDto) {
    if (!shield) throw new BadRequestException('shield image required');
    return this.teamService.createTeam({ shield: shield.filename, ...team });
  }

  @Get('/get')
  get(@Query() teamQuerys: GetTeamDto) {
    return this.teamService.getTeam(teamQuerys);
  }
}
