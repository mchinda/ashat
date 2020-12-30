import { Injectable,BadRequestException, InternalServerErrorException, NotFoundException} from '@nestjs/common';
import { InjectRepository } from "@nestjs/typeorm";
import { JwtService } from '@nestjs/jwt';
import { Repository, UpdateResult, DeleteResult,MoreThan, MoreThanOrEqual, LessThan, LessThanOrEqual, Between, IsNull, Equal, In } from "typeorm";
import { Pagination, PaginationOptionsInterface } from './../paginate';
import {BaseService} from "./../../com/base.service";
import { LigneCommandeEntity } from "./../ligne-commande/ligne-commande.entity";

@Injectable()
export class LigneCommandeService extends BaseService {

  constructor(@InjectRepository(LigneCommandeEntity) private readonly ligneCommandeRepository:Repository<LigneCommandeEntity>){
    super(ligneCommandeRepository);
  }

}
