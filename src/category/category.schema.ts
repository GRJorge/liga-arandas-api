import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';

export type CategoryDocument = HydratedDocument<Category>;

@Schema({ timestamps: true, versionKey: false })
export class Category {
  _id: string;

  @Prop({ unique: true })
  name: string;
}

export const CategorySchema = SchemaFactory.createForClass(Category);
