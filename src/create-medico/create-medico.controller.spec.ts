import { Test, TestingModule } from '@nestjs/testing';
import { CreateMedicoController } from './create-medico.controller';

describe('CreateMedicoController', () => {
  let controller: CreateMedicoController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [CreateMedicoController],
    }).compile();

    controller = module.get<CreateMedicoController>(CreateMedicoController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
