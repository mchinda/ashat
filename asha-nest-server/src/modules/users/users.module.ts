import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { JwtModule } from '@nestjs/jwt';
import { UsersEntity } from './users.entity';
import { RoleEntity } from './../roles/roles.entity';
import { UsersService } from './users.service';
import { UsersController } from './users.controller';
import { RolesModule } from "./../roles/roles.module";
import { EmailConfigService } from "./../emailconfig/emailconfig.service";
import { EmailConfigModule } from "./../emailconfig/emailconfig.module";
import { PassportModule } from '@nestjs/passport';
import {LivraisonEntity} from './../livraison/livraison.entity';

@Module({
  imports:[
    PassportModule.register({ defaultStrategy: 'jwt',session: true }),
    UsersModule,
    JwtModule.register({
      secret: 'secretKey',
      signOptions: {
        expiresIn: 3600,
      },
    }),
  TypeOrmModule.forFeature([UsersEntity,RoleEntity,LivraisonEntity]),RolesModule,EmailConfigModule],
  controllers: [UsersController],
  providers: [UsersService,EmailConfigService],
  exports:[UsersService]
})
export class UsersModule {}
