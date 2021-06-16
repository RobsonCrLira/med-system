import { Test, TestingModule } from '@nestjs/testing';
import { UpdateMedicoController } from './update-medico.controller';

describe('UpdateMedicoController', () => {
  let controller: UpdateMedicoController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [UpdateMedicoController],
    }).compile();

    controller = module.get<UpdateMedicoController>(UpdateMedicoController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
