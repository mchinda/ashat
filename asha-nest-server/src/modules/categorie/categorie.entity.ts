import { Entity, Column, OneToOne, OneToMany, ManyToOne,JoinColumn,BeforeInsert, BeforeUpdate  } from 'typeorm';
import { Transform } from 'class-transformer';
import {BaseEntity} from './../../com/base.entity';
import {ProduitEntity} from './../produit/produit.entity';

@Entity("categorie", {schema:process.env.TYPEORM_DATABASE})
export class CategorieEntity extends BaseEntity{

  @Column()
  libelle: string;

  @OneToMany(type => ProduitEntity, produit => produit.categorie)
  produit:ProduitEntity[];


}
