import { Body, Controller, Param, Patch, UsePipes } from '@nestjs/common';
import { ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';
import { UpdateMedicoDto } from 'src/dto/update-medico.dto';
import { Medico } from 'src/entities/medico.entity';
import { AppError } from 'src/errors/AppError';
import { UpdateMedicoService } from 'src/medico/services/update-medico/update-medico.service';
import { YupValidationPipe } from 'src/pipes/yupValidationPipe';
import * as yup from 'yup';

const schema = yup.object().shape({
  name: yup.string().required(),
  crm: yup.number().required(),
  telefone: yup.number().required(),
  cep: yup.number().required(),
  especialidade: yup.string(),
});
@ApiTags('medicos')
@Controller('medicos')
export class UpdateMedicoController {
  constructor(private readonly updateMedicoService: UpdateMedicoService) { }

  @Patch('id/:id')
  @UsePipes(new YupValidationPipe(schema))
  @ApiOperation({ summary: 'Busca o medico Pelo por seu ID e atualizacao  ' })
  @ApiResponse({ status: 200, description: 'Encontrado', type: Medico })
  async update(
    @Param('id') id: string,
    @Body() updateMedicoDto: UpdateMedicoDto,
  ) {
    try {
      const medico = await this.updateMedicoService.update(id, updateMedicoDto);
      return medico;
    } catch (error) {
      throw new AppError(error);
    }
  }
}
