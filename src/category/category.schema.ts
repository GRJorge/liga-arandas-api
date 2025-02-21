import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';
import { League } from 'src/league/league.schema';

export type CategoryDocument = HydratedDocument<Category>;

@Schema({ timestamps: true, versionKey: false })
export class Category {
  _id: string;

  @Prop({ unique: true })
  name: string;

  @Prop({ ref: 'League' })
  league: League;
}

export const CategorySchema = SchemaFactory.createForClass(Category);
