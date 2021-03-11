import { Entity, Column, OneToOne, OneToMany, ManyToOne,JoinColumn,BeforeInsert, BeforeUpdate  } from 'typeorm';
import { Transform } from 'class-transformer';
import {BaseEntity} from './../../com/base.entity';
import {CommandeEntity} from './../commande/commande.entity';
import {ProduitEntity} from './../produit/produit.entity';

@Entity("ligneCommande")
export class LigneCommandeEntity extends BaseEntity {

@Column()
quantite:number;

@Column({type: "timestamp"})
date_commande:Date;

@Column({ type: "float"})
prix_vente: number;

@ManyToOne(type => CommandeEntity, commande=> commande.ligne_commande)
@JoinColumn()
commande:CommandeEntity;

@ManyToOne(type => ProduitEntity, produit => produit.ligne_commande)
@JoinColumn()
produit:ProduitEntity;

}
