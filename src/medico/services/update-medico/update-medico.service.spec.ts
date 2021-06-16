import { Test, TestingModule } from '@nestjs/testing';
import { UpdateMedicoService } from './update-medico.service';

describe('UpdateMedicoService', () => {
  let service: UpdateMedicoService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [UpdateMedicoService],
    }).compile();

    service = module.get<UpdateMedicoService>(UpdateMedicoService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
