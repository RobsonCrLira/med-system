import { Body, Controller, Post, UsePipes } from '@nestjs/common';
import { ApiCreatedResponse, ApiTags } from '@nestjs/swagger';
import { CreateMedicoDto } from 'src/dto/create-medico.dto';
import { Medico } from 'src/entities/medico.entity';
import { AppError } from 'src/errors/AppError';
import { CreateMedicoService } from 'src/medico/services/create-medico/create-medico.service';
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
export class CreateMedicoController {
  constructor(private readonly createMedicoService: CreateMedicoService) { }

  @Post()
  @ApiCreatedResponse({
    type: Medico,
  })
  @UsePipes(new YupValidationPipe(schema))
  async create(@Body() createMedicoDto: CreateMedicoDto): Promise<Medico> {
    try {
      return await this.createMedicoService.createMedico(createMedicoDto);
    } catch (error) {
      throw new AppError(error);
    }
  }
}
