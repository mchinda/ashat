import { Injectable,BadRequestException, InternalServerErrorException, NotFoundException} from '@nestjs/common';
import { InjectRepository } from "@nestjs/typeorm";
import { JwtService } from '@nestjs/jwt';
import { Repository, UpdateResult, DeleteResult,MoreThan, MoreThanOrEqual, LessThan, LessThanOrEqual, Between, IsNull, Equal, In } from "typeorm";
import { Pagination, PaginationOptionsInterface } from './../paginate';
import {BaseService} from "./../../com/base.service";
import {ClientEntity} from "./../client/client.entity";

@Injectable()
export class ClientService extends BaseService {

  constructor(@InjectRepository(ClientEntity) private readonly clientRepository:Repository<ClientEntity>){
    super(clientRepository);
  }
}
