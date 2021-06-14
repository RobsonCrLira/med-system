import { Module } from '@nestjs/common';
import { MedicoService } from './medico.service';
import { MedicoController } from './medico.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { Medico, MedicoSchema } from './entities/medico.entity';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: Medico.name, schema: MedicoSchema }]),
  ],
  controllers: [MedicoController],
  providers: [MedicoService],
})
export class MedicoModule { }
