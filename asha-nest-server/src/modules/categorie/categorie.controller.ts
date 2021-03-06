import {
  Controller,
  Get,
  Post,
  Body,
  Param,
  Req,
  Delete,
  Put,Session,Res,
  UseInterceptors,
  UploadedFile
} from '@nestjs/common';
import {EmailConfigService} from "./../emailconfig/emailconfig.service";
import { FileInterceptor } from '@nestjs/platform-express';
import { Request } from 'express';
import { BaseController } from "./../../com/base.controller";
import {CategorieService} from "./categorie.service";

@Controller('categorie')
export class CategorieController extends BaseController {

  constructor(private readonly categorieService: CategorieService){
    super(categorieService);
  }

  @Get('list')
  getAllPoste() {
   return this.categorieService.getCategories();
   }

}
