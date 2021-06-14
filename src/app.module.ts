import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { MedicoModule } from './medico/medico.module';

@Module({
  imports: [
    MongooseModule.forRoot(
      'mongodb+srv://robsonlira:uux3a2RtIztE6ugs@cluster0.cfjbb.mongodb.net/test',
    ),
    MedicoModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule { }
