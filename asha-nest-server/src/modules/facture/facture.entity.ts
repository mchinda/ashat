import { Entity, Column, OneToOne, OneToMany, ManyToOne,JoinColumn,BeforeInsert, BeforeUpdate  } from 'typeorm';
import { Transform } from 'class-transformer';
import {BaseEntity} from './../../com/base.entity';
import {ClientEntity} from './../client/client.entity';
import {CommandeEntity} from './../commande/commande.entity';
import {UsersEntity} from './../users/users.entity';

@Entity("facture")
export class FactureEntity extends BaseEntity {

@Column()
numero_facture:string;

@Column({type:"timestamp"})
date_facture:Date;

@Column({type:"float"})
montant:number;

@Column({type:"float"})
quantite:number;

@Column({type:"float"})
prix_unitaire:number;

@Column()
designation:string;

@ManyToOne(type => CommandeEntity, commende => commende.facture)
@JoinColumn()
commande:CommandeEntity;

@ManyToOne(type => UsersEntity, user => user.facture)
@JoinColumn()
user:UsersEntity;

}
