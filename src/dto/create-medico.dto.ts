import { ApiProperty } from '@nestjs/swagger';

export class CreateMedicoDto {
  @ApiProperty()
  name: string;

  @ApiProperty()
  crm: number;

  @ApiProperty()
  telefone: number;

  @ApiProperty()
  cep: number;

  @ApiProperty()
  especialidade: string;
}
