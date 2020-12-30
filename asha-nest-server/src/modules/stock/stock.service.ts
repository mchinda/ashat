import { Injectable,BadRequestException, InternalServerErrorException, NotFoundException} from '@nestjs/common';
import { InjectRepository } from "@nestjs/typeorm";
import { JwtService } from '@nestjs/jwt';
import { Repository, UpdateResult, DeleteResult,MoreThan, MoreThanOrEqual, LessThan, LessThanOrEqual, Between, IsNull, Equal, In } from "typeorm";
import { Pagination, PaginationOptionsInterface } from './../paginate';
import {BaseService} from "./../../com/base.service";
import { StockEntity } from "./../stock/stock.entity";

@Injectable()
export class StockService extends BaseService {

  constructor(@InjectRepository(StockEntity) private readonly stockRepository:Repository<StockEntity>){
    super(stockRepository);
  }

}
