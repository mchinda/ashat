import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { PassportModule } from '@nestjs/passport';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ConfigModule } from '@nestjs/config';
import { ConfigService } from 'nestjs-config';
import { UsersModule,RolesModule,ProduitModule,LigneCommandeModule,FournisseurModule,
         AutorisationModule,EmailConfigModule,FactureModule,CommandeModule,CategorieModule} from './modules/';
import { join } from 'path';
import { HandlebarsAdapter, MailerModule,PugAdapter } from '@nest-modules/mailer';

@Module({
  imports: [
    ConfigModule.forRoot(),
            TypeOrmModule.forRoot({
                  database :"asha",
                  type: "mysql",
                  host: "127.0.0.1",
                  username: "root",
                  port:3306,
                  password:"",
                  entities: [join(__dirname, 'modules/**/**.entity{.ts,.js}')],
                  synchronize: true,
                  dropSchema : true
            }),
            MailerModule.forRoot({
               transport: 'smtp://mchinda.mohamed@gmail.com:OpenJanvier2021,@smtp.gmail.com',
               defaults: {
                 from:'"nest-modules" <modules@nestjs.com>',
               },
               template: {
                 dir: __dirname + '/templates',
                 adapter: new PugAdapter(), // or new PugAdapter()
                 options: {
                   strict: true,
                 },
               },
             }),
        UsersModule,
        RolesModule,
        ProduitModule,
        LigneCommandeModule,
        FournisseurModule,
        AutorisationModule,
        EmailConfigModule,
        FactureModule,
        CommandeModule,
        CategorieModule
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
