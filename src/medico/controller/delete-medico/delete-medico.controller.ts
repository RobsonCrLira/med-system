import { Delete } from '@nestjs/common';
import { Param } from '@nestjs/common';
import { Controller } from '@nestjs/common';
import { ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';
import { AppError } from 'src/errors/AppError';
import { DeleteMedicoService } from 'src/medico/services/delete-medico/delete-medico.service';

@ApiTags('medicos')
@Controller('medicos')
export class DeleteMedicoController {
  constructor(private readonly medicoService: DeleteMedicoService) { }

  @Delete(':id')
  @ApiOperation({ summary: 'Deleta o Medico' })
  @ApiResponse({ status: 202, description: 'Deletado' })
  async remove(@Param('id') id: string) {
    try {
      return await this.medicoService.remove(id);
    } catch (error) {
      throw new AppError(error);
    }
  }
}
