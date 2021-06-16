import { Test, TestingModule } from '@nestjs/testing';
import { ListMedicoService } from './list-medico.service';

describe('ListMedicoService', () => {
  let service: ListMedicoService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [ListMedicoService],
    }).compile();

    service = module.get<ListMedicoService>(ListMedicoService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
