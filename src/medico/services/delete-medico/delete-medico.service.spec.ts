import { Test, TestingModule } from '@nestjs/testing';
import { DeleteMedicoService } from './delete-medico.service';

describe('DeleteMedicoService', () => {
  let service: DeleteMedicoService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [DeleteMedicoService],
    }).compile();

    service = module.get<DeleteMedicoService>(DeleteMedicoService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
