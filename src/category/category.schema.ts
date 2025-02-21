import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument, Schema as MongooseSchema } from 'mongoose';
import { League } from 'src/league/league.schema';

export type CategoryDocument = HydratedDocument<Category>;

@Schema({ timestamps: true, versionKey: false })
export class Category {
  _id: string;

  @Prop({ unique: true })
  name: string;

  @Prop({ type: MongooseSchema.Types.ObjectId, ref: 'League' })
  league: MongooseSchema.Types.ObjectId;
}

export const CategorySchema = SchemaFactory.createForClass(Category);
