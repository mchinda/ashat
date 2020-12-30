import { Controller } from '@nestjs/common';
import { Injectable,BadRequestException, InternalServerErrorException, NotFoundException} from '@nestjs/common';
import { InjectRepository } from "@nestjs/typeorm";
import { JwtService } from '@nestjs/jwt';
import { Repository, UpdateResult, DeleteResult,MoreThan, MoreThanOrEqual, LessThan, LessThanOrEqual, Between, IsNull, Equal, In } from "typeorm";
import { Pagination, PaginationOptionsInterface } from './../paginate';
import {ProduitService} from "./produit.service";
import { BaseController } from "./../../com/base.controller";

@Controller('produit')
export class ProduitController extends BaseController {

  constructor(private readonly produitService: ProduitService){
    super(produitService);
  }

}
