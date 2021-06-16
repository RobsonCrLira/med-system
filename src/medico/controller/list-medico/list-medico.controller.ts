import { Controller, Get, Param } from '@nestjs/common';
import {
  ApiOkResponse,
  ApiOperation,
  ApiResponse,
  ApiTags,
} from '@nestjs/swagger';
import { Medico } from 'src/entities/medico.entity';
import { ListMedicoService } from 'src/medico/services/list-medico/list-medico.service';

@ApiTags('medicos')
@Controller('medicos')
export class ListMedicoController {
  constructor(private readonly medicoService: ListMedicoService) { }

  @Get()
  @ApiOkResponse({ type: Medico })
  @ApiResponse({ status: 200, description: 'Encontrado', type: Medico })
  async findAll() {
    return this.medicoService.findAllMedico();
  }

  @Get('id/:id')
  @ApiOperation({ summary: 'Busca o medico Pelo seu id' })
  @ApiResponse({ status: 200, description: 'Encontrado', type: Medico })
  async findId(@Param('id') id: string) {
    return this.medicoService.findMedicoId(id);
  }

  @Get('name/:name')
  @ApiOperation({ summary: 'Busca o medico Pelo seu nome' })
  @ApiResponse({ status: 200, description: 'Encontrado', type: Medico })
  async findName(@Param('name') name: string) {
    return this.medicoService.findMedicoName(name);
  }

  @Get('cep/:cep')
  @ApiOperation({ summary: 'Busca o medico Pelo seu cep' })
  @ApiResponse({ status: 200, description: 'Encontrado', type: Medico })
  async findCep(@Param('cep') cep: string) {
    return this.medicoService.findMedicoCep(parseInt(cep));
  }

  @Get('crm/:crm')
  @ApiOperation({ summary: 'Busca o medico Pelo seu crm' })
  @ApiResponse({ status: 200, description: 'Encontrado', type: Medico })
  async findCrm(@Param('crm') crm: string) {
    return this.medicoService.findMedicoCrm(parseInt(crm));
  }

  @Get('telefone/:telefone')
  @ApiOperation({ summary: 'Busca o medico Pelo seu telefone' })
  @ApiResponse({ status: 200, description: 'Encontrado', type: Medico })
  async findTelefone(@Param('telefone') telefone: string) {
    return this.medicoService.findMedicoTelefone(parseInt(telefone));
  }

  @Get('especialidade/:especialidade')
  @ApiOperation({ summary: 'Busca o medico Pelo seu especialidade' })
  @ApiResponse({ status: 200, description: 'Encontrado', type: Medico })
  async findEspecialidade(@Param('especialidade') especialidade: string) {
    return this.medicoService.findMedicoId(especialidade);
  }
}
