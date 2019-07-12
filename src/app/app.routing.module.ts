import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Route, Router, Routes } from '@angular/router';
import { ProduitComponent } from './produit/produit.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ProduitResolver } from './produit/produit.resolver';

export const appRoutes: Routes = [
    {
        path: 'produit',
        component: ProduitComponent,
        resolve: {
            produit: ProduitResolver
        }
    },
    { path: 'dashboard', component: DashboardComponent },
    { path: '', redirectTo: '/dashboard', pathMatch: 'full' }
];

@NgModule({
    declarations: [],
    imports: [CommonModule, RouterModule.forRoot(appRoutes, { enableTracing: true })],
    exports: [RouterModule],
    providers: [ProduitResolver],
})
export class AppRoutingModule {

}
