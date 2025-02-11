import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';

export type LeagueDocument = HydratedDocument<League>;

@Schema({ timestamps: true, versionKey: false })
export class League {
  _id: string;

  @Prop({ unique: true })
  logoUrl: string;

  @Prop({ unique: true })
  name: string;
}

export const LeagueSchema = SchemaFactory.createForClass(League);
