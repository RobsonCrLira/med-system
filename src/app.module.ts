import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { MongooseModule } from '@nestjs/mongoose';
import { MedicoModule } from './medico/medico.module';
import { CorreiosConsultaService } from './correios-consulta/correios-consulta.service';
import { CorreiosConsultaController } from './correios-consulta/correios-consulta.controller';

@Module({
  imports: [
    ConfigModule.forRoot(),
    MongooseModule.forRoot(process.env.MONGODB_URI),
    MedicoModule,
  ],
  controllers: [CorreiosConsultaController],
  providers: [CorreiosConsultaService],
})
export class AppModule {}
