import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { ApiProperty } from '@nestjs/swagger';
import { Document } from 'mongoose';

export type MedicoDocument = Medico & Document;

@Schema()
export class Medico {
  @ApiProperty({ example: 'Joaquim', description: 'Nome do medico' })
  @Prop()
  name: string;

  @ApiProperty({ example: 23132132, description: 'CRM do medico' })
  @Prop()
  crm: number;

  @ApiProperty({ example: 16123456789, description: 'telefone do medico' })
  @Prop()
  telefone: number;

  @ApiProperty({
    example: 15920000,
    description: 'CEP de onde o medico reside',
  })
  @Prop()
  cep: number;

  @ApiProperty({
    example: 'Angiologia, Alergologia',
    description: 'Especialidade(s) do medico',
  })
  @Prop()
  especialidade: string;
}

export const MedicoSchema = SchemaFactory.createForClass(Medico);
