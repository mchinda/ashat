import { Module } from '@nestjs/common';
import { LigneLivraisonService } from './ligne-livraison.service';
import { LigneLivraisonController } from './ligne-livraison.controller';
import { ProduitEntity } from './../produit/produit.entity';
import { LivraisonEntity } from './../livraison/livraison.entity';
import { LigneLivraisonEntity } from './ligne-livraison.entity';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [TypeOrmModule.forFeature([LigneLivraisonEntity,LivraisonEntity,ProduitEntity])],
  providers: [LigneLivraisonService],
  controllers: [LigneLivraisonController]
})
export class LigneLivraisonModule {}
