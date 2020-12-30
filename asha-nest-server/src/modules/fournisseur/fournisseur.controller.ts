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
import {FournisseurService} from "./fournisseur.service";

@Controller('fournisseur')
export class FournisseurController extends BaseController {

  constructor(private readonly fournisseurService: FournisseurService){
    super(fournisseurService);
  }
}
