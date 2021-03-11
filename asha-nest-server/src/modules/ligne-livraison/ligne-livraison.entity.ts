import { Entity, Column, OneToOne, OneToMany, ManyToOne,JoinColumn,BeforeInsert, BeforeUpdate } from 'typeorm';
import { Transform } from 'class-transformer';
import {BaseEntity} from './../../com/base.entity';
import { BaseService } from "./../../com/base.service";
import {ProduitEntity} from './../produit/produit.entity';
import {LivraisonEntity} from './../livraison/livraison.entity';

@Entity("ligneLivraison")
export class LigneLivraisonEntity extends BaseEntity {

@Column({ type: "float"})
quantite_livre: number;

@Column({type: "timestamp"})
date_livraison:Date;

@Column({ type: "float"})
prix_achat: number;

@ManyToOne(type => LivraisonEntity, livraison => livraison.ligne_livraison)
@JoinColumn()
livraison:LivraisonEntity;

@ManyToOne(type => ProduitEntity, produit => produit.ligne_livraison)
@JoinColumn()
 produit:ProduitEntity;

}
