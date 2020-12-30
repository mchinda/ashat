import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ClientService } from './client.service';
import { ClientController } from './client.controller';
import {CommandeEntity} from './../commande/commande.entity';
import {FactureEntity} from './../facture/facture.entity';
import {ClientEntity} from './client.entity';

@Module({
  imports: [TypeOrmModule.forFeature([ClientEntity,FactureEntity,CommandeEntity])],
  providers: [ClientService],
  controllers: [ClientController]
})
export class ClientModule {}
