import { Entity, Column, OneToOne, OneToMany, ManyToOne,JoinColumn,BeforeInsert, BeforeUpdate  } from 'typeorm';
import { Transform } from 'class-transformer';
import {BaseEntity} from './../../com/base.entity';
import {LigneCommandeEntity} from './../ligne-commande/ligne-commande.entity';
import {LigneLivraisonEntity} from './../ligne-livraison/ligne-livraison.entity';
import {CategorieEntity} from './../categorie/categorie.entity';
import {StockEntity} from './../stock/stock.entity';

@Entity("produit")
export class ProduitEntity extends BaseEntity {

  @Column()
  code_produit:string;

  @Column()
  libelle:string

  @Column()
  image:string;

  @OneToMany(type => LigneCommandeEntity, ligneCommande => ligneCommande.produit)
  ligne_commande:LigneCommandeEntity[];

  @OneToMany(type => LigneLivraisonEntity, ligne_livraison => ligne_livraison.livraison)
  ligne_livraison:LigneLivraisonEntity[];

  @ManyToOne(type => CategorieEntity, cat => cat.produit)
  @JoinColumn()
  categorie:CategorieEntity;

  @ManyToOne(type => StockEntity, stock => stock.produit)
  @JoinColumn()
  stock:StockEntity;

}
