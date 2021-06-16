import { Controller } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { UpdateMedicoService } from 'src/medico/services/update-medico/update-medico.service';
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
}
