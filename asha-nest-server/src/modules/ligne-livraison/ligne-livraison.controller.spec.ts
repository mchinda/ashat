import { Test, TestingModule } from '@nestjs/testing';
import { LigneLivraisonController } from './ligne-livraison.controller';

describe('LigneLivraisonController', () => {
  let controller: LigneLivraisonController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [LigneLivraisonController],
    }).compile();

    controller = module.get<LigneLivraisonController>(LigneLivraisonController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
