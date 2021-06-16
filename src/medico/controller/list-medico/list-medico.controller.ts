import { Controller, Get, Param } from '@nestjs/common';
import {
  ApiOkResponse,
  ApiOperation,
  ApiResponse,
  ApiTags,
} from '@nestjs/swagger';
import { Medico } from 'src/entities/medico.entity';
import { AppError } from 'src/errors/AppError';
import { ListMedicoService } from 'src/medico/services/list-medico/list-medico.service';

@ApiTags('medicos')
@Controller('medicos')
export class ListMedicoController {
  constructor(private readonly medicoService: ListMedicoService) { }

  @Get()
  @ApiOkResponse({ type: Medico })
  @ApiResponse({ status: 200, description: 'Encontrado', type: Medico })
  async findAll() {
    try {
      return this.medicoService.findAllMedico();
    } catch (error) {
      throw new AppError(error);
    }
  }

  @Get('id/:id')
  @ApiOperation({ summary: 'Busca o medico Pelo seu id' })
  @ApiResponse({ status: 200, description: 'Encontrado', type: Medico })
  async findId(@Param('id') id: string) {
    try {
      return this.medicoService.findMedicoId(id);
    } catch (error) {
      throw new AppError(error);
    }
  }

  @Get('name/:name')
  @ApiOperation({ summary: 'Busca o medico Pelo seu nome' })
  @ApiResponse({ status: 200, description: 'Encontrado', type: Medico })
  async findName(@Param('name') name: string) {
    try {
      return this.medicoService.findMedicoName(name);
    } catch (error) {
      throw new AppError(error);
    }
  }

  @Get('cep/:cep')
  @ApiOperation({ summary: 'Busca o medico Pelo seu cep' })
  @ApiResponse({ status: 200, description: 'Encontrado', type: Medico })
  async findCep(@Param('cep') cep: string) {
    try {
      return this.medicoService.findMedicoCep(parseInt(cep));
    } catch (error) {
      throw new AppError(error);
    }
  }

  @Get('crm/:crm')
  @ApiOperation({ summary: 'Busca o medico Pelo seu crm' })
  @ApiResponse({ status: 200, description: 'Encontrado', type: Medico })
  async findCrm(@Param('crm') crm: string) {
    try {
      return this.medicoService.findMedicoCrm(parseInt(crm));
    } catch (error) {
      throw new AppError(error);
    }
  }

  @Get('telefone/:telefone')
  @ApiOperation({ summary: 'Busca o medico Pelo seu telefone' })
  @ApiResponse({ status: 200, description: 'Encontrado', type: Medico })
  async findTelefone(@Param('telefone') telefone: string) {
    try {
      return this.medicoService.findMedicoTelefone(parseInt(telefone));
    } catch (error) {
      throw new AppError(error);
    }
  }

  @Get('especialidade/:especialidade')
  @ApiOperation({ summary: 'Busca o medico Pelo seu especialidade' })
  @ApiResponse({ status: 200, description: 'Encontrado', type: Medico })
  async findEspecialidade(@Param('especialidade') especialidade: string) {
    try {
      return this.medicoService.findMedicoId(especialidade);
    } catch (error) {
      throw new AppError(error);
    }
  }
}
