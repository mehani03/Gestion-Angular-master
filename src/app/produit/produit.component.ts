import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ProduitService } from './produit.service';
import { Produit } from '../shared/produit';
import { from } from 'rxjs';
import { ThrowStmt } from '@angular/compiler';
@Component({
    selector: 'app-produit',
    templateUrl: './produit.component.html',
    styleUrls: ['./produit.component.css']

})
export class ProduitComponent implements OnInit {
    produits: Produit[];
    produitForm: FormGroup;
    operation: string = 'add';
    selectedProduit: Produit;

    constructor(private produitService: ProduitService, private fb: FormBuilder) {
        this.createForm();
    }

    ngOnInit() {
        this.initProduit();
        this.loadProduits();
    }

    createForm(){
        this.produitForm = this.fb.group({
            ref: ['', Validators.required],
            quantite: '',
            prixUnitaire: ''
        });
    }

    loadProduits() {
        this.produitService.getProduit().subscribe(
            data => { this.produits = data; },
            error => { console.log('An error was occured.'); },
            () => { console.log('loading produits was done.'); }
        );
    }

    addProduit() {
        const p = this.produitForm.value;
        this.produitService.addProduit(p).subscribe(
            res => {
                this.initProduit();
                this.loadProduits();
            }
        );
    }

    updateProduit() {
        this.produitService.updateProduit(this.selectedProduit).subscribe(
            res => {
                this.initProduit();
                this.loadProduits();
            }
        );
    }

    initProduit() {
        this.selectedProduit = new Produit();
        this.createForm();
    }

    deleteProduit(){
        this.produitService.deleteProduit(this.selectedProduit.ref).subscribe(
            res => {
                this.selectedProduit = new Produit();
                this.loadProduits();
            }

        );



    }
}
