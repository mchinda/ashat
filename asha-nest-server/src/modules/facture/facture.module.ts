import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { FactureService } from './facture.service';
import { FactureController } from './facture.controller';
import { CommandeEntity } from './../commande/commande.entity';
import { UsersEntity } from './../users/users.entity';
import { FactureEntity } from './facture.entity';

@Module({
  imports: [TypeOrmModule.forFeature([CommandeEntity,UsersEntity,FactureEntity])],
  providers: [FactureService],
  controllers: [FactureController]
})
export class FactureModule {}
