import { Injectable,BadRequestException, InternalServerErrorException, NotFoundException} from '@nestjs/common';
import { InjectRepository } from "@nestjs/typeorm";
import { JwtService } from '@nestjs/jwt';
import { Repository, UpdateResult, DeleteResult,MoreThan, MoreThanOrEqual, LessThan, LessThanOrEqual, Between, IsNull, Equal, In } from "typeorm";
import { Pagination, PaginationOptionsInterface } from './../paginate';
import {BaseService} from "./../../com/base.service";
import {CommandeEntity} from "./../commande/commande.entity";

@Injectable()
export class CommandeService extends BaseService {

  constructor(@InjectRepository(CommandeEntity) private readonly commandeRepository:Repository<CommandeEntity>){
    super(commandeRepository);
  }
}
