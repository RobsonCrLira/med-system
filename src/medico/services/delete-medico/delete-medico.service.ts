import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Medico, MedicoDocument } from 'src/entities/medico.entity';
import { AppError } from 'src/errors/AppError';

@Injectable()
export class DeleteMedicoService {
  constructor(
    @InjectModel(Medico.name) private medicoModel: Model<MedicoDocument>,
  ) {}

  async remove(id: string) {
    const medicoExist = await this.medicoModel.findById(id);

    if (!medicoExist) {
      return new AppError('Medico nao existe verifique o ID');
    }
    return this.medicoModel.deleteOne({ _id: id }).exec();
  }
}
