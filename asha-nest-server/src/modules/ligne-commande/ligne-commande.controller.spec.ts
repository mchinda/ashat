import { Test, TestingModule } from '@nestjs/testing';
import { LigneCommandeController } from './ligne-commande.controller';

describe('LigneCommandeController', () => {
  let controller: LigneCommandeController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [LigneCommandeController],
    }).compile();

    controller = module.get<LigneCommandeController>(LigneCommandeController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
