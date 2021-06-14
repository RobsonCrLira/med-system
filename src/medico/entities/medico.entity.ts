import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type MedicoDocument = Medico & Document;

@Schema()
export class Medico {
  @Prop()
  name: string;

  @Prop()
  crm: string;

  @Prop()
  telefone: string;

  @Prop()
  cep: string;

  @Prop()
  especialidade: string;
}

export const MedicoSchema = SchemaFactory.createForClass(Medico);
