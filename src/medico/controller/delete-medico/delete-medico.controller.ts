import { Delete } from '@nestjs/common';
import { Param } from '@nestjs/common';
import { Controller } from '@nestjs/common';
import { ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';
import { DeleteMedicoService } from 'src/medico/services/delete-medico/delete-medico.service';

@ApiTags('medicos')
@Controller('medicos')
export class DeleteMedicoController {
  constructor(private readonly medicoService: DeleteMedicoService) { }

  @Delete(':id')
  @ApiOperation({ summary: 'Deleta o Medico' })
  @ApiResponse({ status: 202, description: 'Deletado' })
  async remove(@Param('id') id: string) {
    return this.medicoService.remove(id);
  }
}
