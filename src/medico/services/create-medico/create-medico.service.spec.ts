import { Test, TestingModule } from '@nestjs/testing';
import { CreateMedicoService } from './create-medico.service';

describe('CreateMedicoService', () => {
  let service: CreateMedicoService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [CreateMedicoService],
    }).compile();

    service = module.get<CreateMedicoService>(CreateMedicoService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
