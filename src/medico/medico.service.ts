import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { CreateMedicoDto } from './dto/create-medico.dto';
import { UpdateMedicoDto } from './dto/update-medico.dto';
import { Medico, MedicoDocument } from './entities/medico.entity';

@Injectable()
export class MedicoService {
  constructor(
    @InjectModel(Medico.name) private medicoModel: Model<MedicoDocument>,
  ) { }
  create(createMedicoDto: CreateMedicoDto) {
    const medico = new this.medicoModel(createMedicoDto);
    return medico.save();
  }

  findAll() {
    return this.medicoModel.find();
  }

  findOne(id: number) {
    return this.medicoModel.findById(id);
  }

  update(id: number, updateMedicoDto: UpdateMedicoDto) {
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

  remove(id: number) {
    return this.medicoModel.deleteOne({ _id: id }).exec();
  }
}
