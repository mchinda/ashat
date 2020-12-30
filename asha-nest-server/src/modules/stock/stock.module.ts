import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { StockService } from './stock.service';
import { StockController } from './stock.controller';
import { ProduitEntity } from './../produit/produit.entity';
import { StockEntity } from './stock.entity';

@Module({
  imports: [TypeOrmModule.forFeature([ProduitEntity,StockEntity])],
  controllers: [StockController],
  providers: [StockService]
})
export class StockModule {}
