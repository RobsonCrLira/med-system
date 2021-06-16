import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { CreateMedicoDto } from 'src/dto/create-medico.dto';
import { Medico, MedicoDocument } from 'src/entities/medico.entity';
import { AppError } from 'src/errors/AppError';

@Injectable()
export class CreateMedicoService {
  constructor(
    @InjectModel(Medico.name) private medicoModel: Model<MedicoDocument>,
  ) { }

  async createMedico(createMedicoDto: CreateMedicoDto): Promise<Medico> {
    const medicoExistCrm = await this.medicoModel.findOne({
      crm: createMedicoDto.crm,
    });
    const medicoExistTelefone = await this.medicoModel.findOne({
      telefone: createMedicoDto.telefone,
    });

    if (medicoExistCrm || medicoExistTelefone) {
      return medicoExistCrm || medicoExistTelefone;
    }

    const medico = new this.medicoModel(createMedicoDto);
    return medico.save();
  }
}
