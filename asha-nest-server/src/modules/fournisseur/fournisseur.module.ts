import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { FournisseurService } from './../fournisseur/fournisseur.service';
import { FournisseurController } from './../fournisseur/fournisseur.controller';
import {LivraisonEntity} from './../livraison/livraison.entity';
import {FournisseurEntity} from './../fournisseur/fournisseur.entity';

@Module({
  imports: [TypeOrmModule.forFeature([FournisseurEntity,LivraisonEntity])],
  providers: [FournisseurService],
  controllers: [FournisseurController]
})
export class FournisseurModule {}
