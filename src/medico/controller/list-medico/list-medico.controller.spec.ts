import { Test, TestingModule } from '@nestjs/testing';
import { ListMedicoController } from './list-medico.controller';

describe('ListMedicoController', () => {
  let controller: ListMedicoController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [ListMedicoController],
    }).compile();

    controller = module.get<ListMedicoController>(ListMedicoController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
