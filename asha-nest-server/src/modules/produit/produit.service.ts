import { Injectable,BadRequestException, InternalServerErrorException, NotFoundException} from '@nestjs/common';
import { InjectRepository } from "@nestjs/typeorm";
import { JwtService } from '@nestjs/jwt';
import { Repository, UpdateResult, DeleteResult,MoreThan, MoreThanOrEqual, LessThan, LessThanOrEqual, Between, IsNull, Equal, In } from "typeorm";
import { Pagination, PaginationOptionsInterface } from './../paginate';
import {BaseService} from "./../../com/base.service";
import { ProduitEntity } from "./../produit/produit.entity";

@Injectable()
export class ProduitService extends BaseService {

  constructor(@InjectRepository(ProduitEntity) private readonly produitRepository:Repository<ProduitEntity>){
    super(produitRepository);
  }

}
