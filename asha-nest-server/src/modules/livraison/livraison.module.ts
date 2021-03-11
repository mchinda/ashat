import { Module } from '@nestjs/common';
import { LivraisonService } from './livraison.service';
import { LivraisonController } from './livraison.controller';
import {LigneLivraisonEntity} from './../ligne-livraison/ligne-livraison.entity';
import {UsersEntity} from './../users/users.entity';
import {LivraisonEntity} from './livraison.entity';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [TypeOrmModule.forFeature([LivraisonEntity,UsersEntity,LigneLivraisonEntity])],
  providers: [LivraisonService],
  controllers: [LivraisonController]
})
export class LivraisonModule {}
