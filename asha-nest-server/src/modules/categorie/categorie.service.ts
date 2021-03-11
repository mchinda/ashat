import { Injectable,BadRequestException, InternalServerErrorException, NotFoundException} from '@nestjs/common';
import { InjectRepository } from "@nestjs/typeorm";
import { JwtService } from '@nestjs/jwt';
import { Repository, UpdateResult, DeleteResult,MoreThan, MoreThanOrEqual, LessThan, LessThanOrEqual, Between, IsNull, Equal, In } from "typeorm";
import { Pagination, PaginationOptionsInterface } from './../paginate';
import {BaseService} from "./../../com/base.service";
import { CategorieEntity } from "./../categorie/categorie.entity";

@Injectable()
export class CategorieService extends BaseService {

  constructor(@InjectRepository(CategorieEntity) private readonly categorieRepository:Repository<CategorieEntity>){
    super(categorieRepository);
  }

    async getCategories(){
      let listCats = await this.categorieRepository.find({
        select : [`id`,`libelle`]
      });
      return listCats;
    }
}
