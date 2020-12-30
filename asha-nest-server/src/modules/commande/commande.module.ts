import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CommandeService } from './commande.service';
import { CommandeController } from './commande.controller';
import {LigneCommandeEntity} from './../ligne-commande/ligne-commande.entity';
import {ClientEntity} from './../client/client.entity';
import {FactureEntity} from './../facture/facture.entity';
import {CommandeEntity} from './commande.entity';

@Module({
  imports: [TypeOrmModule.forFeature([CommandeEntity,FactureEntity,ClientEntity,LigneCommandeEntity])],
  providers: [CommandeService],
  controllers: [CommandeController]
})
export class CommandeModule {}
