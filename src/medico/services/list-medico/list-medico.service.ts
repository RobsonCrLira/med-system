import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Medico, MedicoDocument } from 'src/entities/medico.entity';
import { AppError } from 'src/errors/AppError';

@Injectable()
export class ListMedicoService {
  constructor(
    @InjectModel(Medico.name) private medicoModel: Model<MedicoDocument>,
  ) { }

  async findAllMedico(): Promise<Medico[]> {
    return this.medicoModel.find();
  }

  async findOneMedicoId(id: string) {
    const medico = await this.medicoModel.findById(id);

    if (!medico) {
      return new AppError('Medico nao existe verifique o ID');
    }
    return medico;
  }

  async findOneMedicoName(name: string) {
    const medico = await this.medicoModel.findOne({ name: name });

    if (!medico) {
      return new AppError('Medico nao existe verifique o ID');
    }
    return medico;
  }

  async findOneMedicoCep(cep: number) {
    const medico = await this.medicoModel.findOne({ cep: cep });

    if (!medico) {
      return new AppError('Medico nao existe verifique o ID');
    }
    return medico;
  }

  async findOneMedicoCrm(crm: number) {
    const medico = await this.medicoModel.findOne({ crm: crm });

    if (!medico) {
      return new AppError('Medico nao existe verifique o ID');
    }
    return medico;
  }

  async findOneMedicoTelefone(telefone: number) {
    const medico = await this.medicoModel.findOne({
      telefone: telefone,
    });

    if (!medico) {
      return new AppError('Medico nao existe verifique o ID');
    }
    return medico;
  }

  async findOneMedicoEspecialidade(especialidade: string) {
    const medico = await this.medicoModel.findOne({
      especialidade: especialidade,
    });

    if (!medico) {
      return new AppError('Medico nao existe verifique o ID');
    }
    return medico;
  }
}
