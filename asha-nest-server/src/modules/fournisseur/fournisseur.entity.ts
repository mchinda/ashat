import { Entity, Column, OneToOne, OneToMany, ManyToOne,JoinColumn,BeforeInsert, BeforeUpdate  } from 'typeorm';
import { Transform } from 'class-transformer';
import {BaseEntity} from './../../com/base.entity';
import {LivraisonEntity} from './../livraison/livraison.entity';


@Entity("fournisseur")
export class FournisseurEntity extends BaseEntity {

@Column()
codeFourn:string;

@Column()
nom:string;

@Column()
prenom:string;

@Column()
adresse:string;

@Column()
code_postal:string;

@Column()
ville:string;

@Column()
email_fournisseur:string;

@OneToMany(type => LivraisonEntity, livraison => livraison.fournisseur)
livraison:LivraisonEntity[];

}
