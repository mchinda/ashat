import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { FournisseurService } from './fournisseur.service';
import { FournisseurController } from './fournisseur.controller';
import {ProduitEntity} from './../produit/produit.entity';
import {FournisseurEntity} from './fournisseur.entity';

@Module({
  imports: [TypeOrmModule.forFeature([ProduitEntity,FournisseurEntity])],
  providers: [FournisseurService],
  controllers: [FournisseurController]
})
export class FournisseurModule {}
