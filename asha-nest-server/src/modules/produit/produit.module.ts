import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ProduitService } from './produit.service';
import { ProduitController } from './produit.controller';
import { LigneCommandeEntity } from './../ligne-commande/ligne-commande.entity';
import { CategorieEntity } from './../categorie/categorie.entity';
import { FournisseurEntity } from './../fournisseur/fournisseur.entity';
import { StockEntity } from './../stock/stock.entity';
import { ProduitEntity } from './produit.entity';

@Module({
  imports: [TypeOrmModule.forFeature([ProduitEntity,LigneCommandeEntity,CategorieEntity,FournisseurEntity,StockEntity])],
  providers: [ProduitService],
  controllers: [ProduitController],
  exports:[ProduitService]
})
export class ProduitModule {}
