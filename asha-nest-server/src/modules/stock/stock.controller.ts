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
import {StockService} from "./stock.service";
import {EmailConfigService} from "./../emailconfig/emailconfig.service";
import { FileInterceptor } from '@nestjs/platform-express';
import { Request } from 'express';
import { BaseController } from "./../../com/base.controller";
import {StockEntity} from "./../stock/stock.entity";

@Controller('stock')
export class StockController extends BaseController{
  constructor(private readonly stockService:StockService) {
      super(stockService);
  }

}
