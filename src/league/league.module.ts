import { Module } from '@nestjs/common';
import { LeagueController } from './league.controller';
import { LeagueService } from './league.service';
import { MongooseModule } from '@nestjs/mongoose';
import { League, LeagueSchema } from './league.schema';

@Module({
  imports: [MongooseModule.forFeature([{ name: League.name, schema: LeagueSchema }])],
  controllers: [LeagueController],
  providers: [LeagueService],
})
export class LeagueModule {}
