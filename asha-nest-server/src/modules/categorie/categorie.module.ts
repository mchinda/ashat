import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CategorieService } from './categorie.service';
import { CategorieController } from './categorie.controller';
import {ProduitEntity} from './../produit/produit.entity';
import {CategorieEntity} from './categorie.entity';

@Module({
  imports: [TypeOrmModule.forFeature([CategorieEntity,ProduitEntity])],
  providers: [CategorieService],
  controllers: [CategorieController]
})
export class CategorieModule {}
