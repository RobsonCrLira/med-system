import { Test, TestingModule } from '@nestjs/testing';
import { CorreiosConsultaController } from './correios-consulta.controller';

describe('CorreiosConsultaController', () => {
  let controller: CorreiosConsultaController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [CorreiosConsultaController],
    }).compile();

    controller = module.get<CorreiosConsultaController>(CorreiosConsultaController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
