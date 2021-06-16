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

  async findMedicoId(id: string) {
    const medico = await this.medicoModel.findById(id);

    if (!medico) {
      return new AppError('Medico nao existe verifique o ID');
    }
    return medico;
  }

  async findMedicoName(name: string) {
    const medico = await this.medicoModel.find({ name: name });

    if (!medico) {
      return new AppError('Medico nao existe verifique o ID');
    }
    return medico;
  }

  async findMedicoCep(cep: number) {
    const medico = await this.medicoModel.find({ cep: cep });

    if (!medico) {
      return new AppError('Medico nao existe verifique o ID');
    }
    return medico;
  }

  async findMedicoCrm(crm: number) {
    const medico = await this.medicoModel.find({ crm: crm });

    if (!medico) {
      return new AppError('Medico nao existe verifique o ID');
    }
    return medico;
  }

  async findMedicoTelefone(telefone: number) {
    const medico = await this.medicoModel.find({
      telefone: telefone,
    });

    if (!medico) {
      return new AppError('Medico nao existe verifique o ID');
    }
    return medico;
  }

  async findMedicoEspecialidade(especialidade: string) {
    const medico = await this.medicoModel.findOne({
      especialidade: especialidade,
    });

    if (!medico) {
      return new AppError('Medico nao existe verifique o ID');
    }
    return medico;
  }
}
