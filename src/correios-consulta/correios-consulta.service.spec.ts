import { Test, TestingModule } from '@nestjs/testing';
import { CorreiosConsultaService } from './correios-consulta.service';

describe('CorreiosConsultaService', () => {
  let service: CorreiosConsultaService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [CorreiosConsultaService],
    }).compile();

    service = module.get<CorreiosConsultaService>(CorreiosConsultaService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
