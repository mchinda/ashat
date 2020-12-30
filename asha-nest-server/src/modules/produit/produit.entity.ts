import { Entity, Column, OneToOne, OneToMany, ManyToOne,JoinColumn,BeforeInsert, BeforeUpdate  } from 'typeorm';
import { Transform } from 'class-transformer';
import {BaseEntity} from './../../com/base.entity';
import {LigneCommandeEntity} from './../ligne-commande/ligne-commande.entity';
import {CategorieEntity} from './../categorie/categorie.entity';
import {FournisseurEntity} from './../fournisseur/fournisseur.entity';
import {StockEntity} from './../stock/stock.entity';

@Entity("produit")
export class ProduitEntity extends BaseEntity {

  @Column()
  code_produit:string;

  @Column()
  libelle:string

  @Column()
  image:string;

  @Column({ type: "float"})
  prix_unitaire: number;

  @OneToMany(type => LigneCommandeEntity, ligneCommande => ligneCommande.produit)
  ligne_commande:LigneCommandeEntity[];

  @ManyToOne(type => CategorieEntity, cat => cat.produit)
  @JoinColumn()
  categorie:CategorieEntity;

  @ManyToOne(type => FournisseurEntity, fournisseur => fournisseur.produit)
  @JoinColumn()
  fournisseur:FournisseurEntity;

  @ManyToOne(type => StockEntity, stock => stock.produit)
  @JoinColumn()
  stock:StockEntity;
  
}
