import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { UpdateMedicoDto } from 'src/dto/update-medico.dto';
import { Medico, MedicoDocument } from 'src/entities/medico.entity';

@Injectable()
export class UpdateMedicoService {
  constructor(
    @InjectModel(Medico.name) private medicoModel: Model<MedicoDocument>,
  ) { }

  async update(id: string, updateMedicoDto: UpdateMedicoDto) {
    return this.medicoModel.findByIdAndUpdate(
      {
        _id: id,
      },
      {
        $set: updateMedicoDto,
      },
      {
        new: true,
      },
    );
  }
}
