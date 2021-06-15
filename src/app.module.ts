import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CreateMedicoController } from './create-medico/create-medico.controller';
import { CreateMedicoService } from './create-medico/create-medico.service';
import { Medico } from './entities/medico.entity';

@Module({
  imports: [
    ConfigModule.forRoot(),
    TypeOrmModule.forRoot({
      //@ts-ignore
      type: process.env.TYPEORM_CONNECTION,
      host: process.env.TYPEORM_HOST,
      port: parseInt(process.env.TYPEORM_PORT),
      usename: process.env.TYPEORM_USERNAME,
      password: process.env.TYPEORM_USERNAME,
      database: process.env.TYPEORM_DATABASE,
      entities: [Medico],
    }),
    TypeOrmModule.forFeature([Medico]),
  ],
  controllers: [CreateMedicoController],
  providers: [CreateMedicoService],
})
export class AppModule { }
