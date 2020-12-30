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
import {LigneCommandeService} from "./ligne-commande.service";

@Controller('ligne-commande')
export class LigneCommandeController extends BaseController {

  constructor(private readonly ligneCommandeService: LigneCommandeService){
    super(ligneCommandeService);
  }

}
