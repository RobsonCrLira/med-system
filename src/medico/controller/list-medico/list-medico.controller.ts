import { Get } from '@nestjs/common';
import { Param } from '@nestjs/common';
import { Controller } from '@nestjs/common';
import {
  ApiOkResponse,
  ApiOperation,
  ApiResponse,
  ApiTags,
} from '@nestjs/swagger';
import { Medico, MedicoSchema } from 'src/entities/medico.entity';
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

  @Get(':id')
  @ApiOperation({ summary: 'Busca o medico Pelo seu id' })
  @ApiResponse({ status: 200, description: 'Encontrado', type: Medico })
  async findOne(@Param('id') id: string) {
    return this.medicoService.findOneMedicoId(id);
  }
}
