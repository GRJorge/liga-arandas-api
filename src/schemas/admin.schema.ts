import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';

export type AdminDocument = HydratedDocument<Admin>;

@Schema({ timestamps: true, versionKey: false })
export class Admin {
  @Prop()
  email: string;
  @Prop()
  username: string;
  @Prop()
  password: string;
}

export const AdminSchema = SchemaFactory.createForClass(Admin);
