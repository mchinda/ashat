import { Injectable,BadRequestException, InternalServerErrorException, NotFoundException} from '@nestjs/common';
import { InjectRepository } from "@nestjs/typeorm";
import { JwtService } from '@nestjs/jwt';
import { Repository, UpdateResult, DeleteResult,MoreThan, MoreThanOrEqual, LessThan, LessThanOrEqual, Between, IsNull, Equal, In } from "typeorm";
import { Pagination, PaginationOptionsInterface } from './../paginate';
import {BaseService} from "./../../com/base.service";
import { FournisseurEntity } from "./../fournisseur/fournisseur.entity";

@Injectable()
export class FournisseurService extends BaseService {

  constructor(@InjectRepository(FournisseurEntity) private readonly fournisseurRepository:Repository<FournisseurEntity>){
    super(fournisseurRepository);
  }
}
