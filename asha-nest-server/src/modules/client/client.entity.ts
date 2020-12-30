import { Entity, Column, OneToOne, OneToMany, ManyToOne,JoinColumn,BeforeInsert, BeforeUpdate  } from 'typeorm';
import { Transform } from 'class-transformer';
import {BaseEntity} from './../../com/base.entity';
import {CommandeEntity} from './../commande/commande.entity';
import {FactureEntity} from './../facture/facture.entity';

@Entity("client")
export class ClientEntity extends BaseEntity{

@Column()
numero_client:String;

@Column()
nom:string;

@Column()
prenom:string;

@Column({type: "timestamp"})
date_naissance:Date;

@Column()
adresse:string;

@Column()
code_postal:string;

@Column()
ville:string;

@Column()
telephone:string;

@OneToMany(type => CommandeEntity, commande => commande.client)
commande:CommandeEntity[];

}
