import { Schema, Prop, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument, Schema as MongooseSchema } from 'mongoose';

export type TeamDocument = HydratedDocument<Team>;

@Schema({ timestamps: true, versionKey: false })
export class Team {
  _id: string;

  @Prop({ unique: true })
  name: string;

  @Prop({ unique: true })
  shortName: string;

  @Prop({ unique: true })
  shield: string;

  @Prop({ type: MongooseSchema.Types.ObjectId, ref: 'Category' })
  category: MongooseSchema.Types.ObjectId;

  @Prop({ default: true })
  active: boolean;

  @Prop({ type: MongooseSchema.Types.ObjectId, ref: 'League' })
  league: MongooseSchema.Types.ObjectId;
}

export const TeamSchema = SchemaFactory.createForClass(Team);
