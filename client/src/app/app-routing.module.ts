import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {HomeComponent} from "./home/home/home.component";
import {TestErrorComponent} from "./core/test-error/test-error.component";
import {ServerErrorComponent} from "./core/server-error/server-error.component";
import {NotFoundComponent} from "./core/not-found/not-found.component";
import {AuthGuard} from "./core/guards/auth.guard";

const routes: Routes = [
  {path: '', component: HomeComponent, data: {breadcrumb: 'Strona główna'}},
  {path: 'shop', loadChildren: () => import('./shop/shop.module').then(mod => mod.ShopModule),
    data: {breadcrumb: 'Wypożyczalnia'}},
  {path: 'basket', loadChildren: () => import('./basket/basket.module').then(mod => mod.BasketModule),
    data: {breadcrumb: 'Koszyk'}},
  {path: 'checkout', canActivate: [AuthGuard], loadChildren: () => import('./checkout/checkout.module').then(mod => mod.CheckoutModule),
    data: {breadcrumb: 'Podgląd'}},
  {path: 'account', loadChildren: () => import('./account/account.module').then(mod => mod.AccountModule),
    data: {breadcrumb: {skip: true}}},
  {path: '**', redirectTo: 'not-found', pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
