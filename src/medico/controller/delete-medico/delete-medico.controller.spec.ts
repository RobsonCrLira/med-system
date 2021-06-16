import { Test, TestingModule } from '@nestjs/testing';
import { DeleteMedicoController } from './delete-medico.controller';

describe('DeleteMedicoController', () => {
  let controller: DeleteMedicoController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [DeleteMedicoController],
    }).compile();

    controller = module.get<DeleteMedicoController>(DeleteMedicoController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
