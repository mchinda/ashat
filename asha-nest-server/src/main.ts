import { NestFactory } from '@nestjs/core';
import { join } from 'path';
import { AppModule } from './app.module';
import * as session from 'express-session';
import * as cors from "cors";
import * as bodyParser from "body-parser";
import * as express from "express";
import { NestSessionOptions, SessionModule } from 'nestjs-session';

var FileStore = require('session-file-store')(session);
async function bootstrap() {
const app = await NestFactory.create(AppModule);
let allowedOrigins = process.env.ALLOWED_ORIGIN.split(",");

  app.use(session({
      // store : new FileStore({}),
      // inMemory:
      secret: 'eg[isfd-8yF9-7w2315df{}+Ijsli;;to8',
      resave : false,
      saveUninitialized : true,
      rolling : false,
      cookie : {
        expires : new Date(Date.now() + 3600000),
        httpOnly: false,
        secure : true,
        maxAge : 60000
    }

  }));

  app.use(cors({
              origin: (origin, callback) => {
                  if(!origin) return callback(null, true);
                  if(allowedOrigins.indexOf(origin) == -1){
                    var msg = `The CORS policy for this site does not allow access from the specified Origin ${origin}.`;
                    return callback(new Error(msg), false);
                  }
                  return callback(null, true);
                },
                credentials: true
            }));

app.use('/', express.static(__dirname+'/public/asha'));
app.use('/dashboard', express.static(__dirname+'/public/dashboard'));
app.use(bodyParser.json({limit: '50mb'}));
app.use(bodyParser.urlencoded({limit: '50mb', extended: true}));

  await app.listen(process.env.PORT || 3000);

}
bootstrap();
