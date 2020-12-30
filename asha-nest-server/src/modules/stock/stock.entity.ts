import { Entity, Column, OneToOne, OneToMany, ManyToOne,JoinColumn,BeforeInsert, BeforeUpdate  } from 'typeorm';
import { Transform } from 'class-transformer';
import {BaseEntity} from './../../com/base.entity';
import {ProduitEntity} from './../produit/produit.entity';

@Entity("stock")
export class StockEntity extends BaseEntity {

@Column()
numero_lot:string;

@Column()
stock_initial:string;

@Column()
qte_Stock:number;

@OneToMany(type => ProduitEntity, produit => produit.stock)
produit:ProduitEntity[];

}
