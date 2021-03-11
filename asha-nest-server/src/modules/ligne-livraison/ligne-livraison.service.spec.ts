import { Test, TestingModule } from '@nestjs/testing';
import { LigneLivraisonService } from './ligne-livraison.service';

describe('LigneLivraisonService', () => {
  let service: LigneLivraisonService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [LigneLivraisonService],
    }).compile();

    service = module.get<LigneLivraisonService>(LigneLivraisonService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
