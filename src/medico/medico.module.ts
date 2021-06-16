import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { Medico, MedicoSchema } from 'src/entities/medico.entity';
import { CreateMedicoController } from './controller/create-medico/create-medico.controller';
import { DeleteMedicoController } from './controller/delete-medico/delete-medico.controller';
import { ListMedicoController } from './controller/list-medico/list-medico.controller';
import { CreateMedicoService } from './services/create-medico/create-medico.service';
import { DeleteMedicoService } from './services/delete-medico/delete-medico.service';
import { ListMedicoService } from './services/list-medico/list-medico.service';
import { UpdateMedicoService } from './services/update-medico/update-medico.service';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: Medico.name, schema: MedicoSchema }]),
  ],
  providers: [
    CreateMedicoService,
    DeleteMedicoService,
    ListMedicoService,
    UpdateMedicoService,
  ],
  controllers: [
    CreateMedicoController,
    DeleteMedicoController,
    ListMedicoController,
  ],
})
export class MedicoModule { }
