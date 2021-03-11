import { Entity, Column, OneToOne, OneToMany, ManyToOne,JoinColumn,BeforeInsert, BeforeUpdate  } from 'typeorm';
import { Transform } from 'class-transformer';
import {BaseEntity} from './../../com/base.entity';
import {FournisseurEntity} from './../fournisseur/fournisseur.entity';
import {LigneLivraisonEntity} from './../ligne-livraison/ligne-livraison.entity';
import {UsersEntity} from './../users/users.entity';
import { BaseService } from "./../../com/base.service";

@Entity("livraison")
export class LivraisonEntity extends BaseEntity {

  @Column()
  libele_Livraison:string;

  @ManyToOne(type => FournisseurEntity, fournisseur => fournisseur.livraison)
  @JoinColumn()
  fournisseur:FournisseurEntity;

  @ManyToOne(type => UsersEntity, user => user.livraison)
  @JoinColumn()
  user:UsersEntity;

  @OneToMany(type => LigneLivraisonEntity, ligne_livraison => ligne_livraison.livraison)
  ligne_livraison:LigneLivraisonEntity[];
}
