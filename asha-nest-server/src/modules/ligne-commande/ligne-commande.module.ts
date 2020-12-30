import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { LigneCommandeService } from './ligne-commande.service';
import { LigneCommandeController } from './ligne-commande.controller';
import { CommandeEntity } from './../commande/commande.entity';
import { ProduitEntity } from './../produit/produit.entity';
import { LigneCommandeEntity } from './ligne-commande.entity';

@Module({
  imports: [TypeOrmModule.forFeature([LigneCommandeEntity,ProduitEntity])],
  providers: [LigneCommandeService],
  controllers: [LigneCommandeController]
})
export class LigneCommandeModule {}
