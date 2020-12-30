import { Entity, Column, OneToOne, OneToMany, ManyToOne,JoinColumn,BeforeInsert, BeforeUpdate  } from 'typeorm';
import { Transform } from 'class-transformer';
import {BaseEntity} from './../../com/base.entity';
import {LigneCommandeEntity} from './../ligne-commande/ligne-commande.entity';
import {ClientEntity} from './../client/client.entity';
import {FactureEntity} from './../facture/facture.entity';

@Entity("commande")
export class CommandeEntity extends BaseEntity {

@Column()
numeroCommande:string;

@Column({type: "timestamp"})
date_commande:Date;

@Column()
adresse_livraison:string;

@OneToMany(type => LigneCommandeEntity, ligneCommande => ligneCommande.commande)
ligne_commande:LigneCommandeEntity[];

@ManyToOne(type => ClientEntity, client => client.commande)
@JoinColumn()
client:ClientEntity;


@OneToMany(type => FactureEntity, facture => facture.commande)
facture:FactureEntity[];
}
