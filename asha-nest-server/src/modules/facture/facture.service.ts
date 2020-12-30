import { Injectable,BadRequestException, InternalServerErrorException, NotFoundException} from '@nestjs/common';
import { InjectRepository } from "@nestjs/typeorm";
import { JwtService } from '@nestjs/jwt';
import { Repository, UpdateResult, DeleteResult,MoreThan, MoreThanOrEqual, LessThan, LessThanOrEqual, Between, IsNull, Equal, In } from "typeorm";
import { Pagination, PaginationOptionsInterface } from './../paginate';
import {BaseService} from "./../../com/base.service";
import {FactureEntity} from "./../facture/facture.entity";

@Injectable()
export class FactureService extends BaseService {

  constructor(@InjectRepository(FactureEntity) private readonly factureRepository:Repository<FactureEntity>){
    super(factureRepository);
  }
}
