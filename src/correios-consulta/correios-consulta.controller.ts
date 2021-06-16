import { Controller, Get, Param } from '@nestjs/common';
import { CorreiosConsultaService } from './correios-consulta.service';

@Controller('correios')
export class CorreiosConsultaController {
  constructor(private readonly consultaService: CorreiosConsultaService) { }

  @Get(':cep')
  async consulta(@Param('cep') cep: string) {
    return await this.consultaService.opcao1(cep);
  }
}
