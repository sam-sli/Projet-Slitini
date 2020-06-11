import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [
  
  {
    path: "",
    loadChildren: () => import('./cars/cars.module').then(m => m.CarsModule) 
  },
  
   
{ path: 'Cars', loadChildren: () => import('./cars/cars.module').then(m => m.CarsModule) }, 
{ path: 'Cardetails/:car', loadChildren: () => import('./cardetails/cardetails.module').then(m => m.CardetailsModule) },
{ path: '404', loadChildren: () => import('./page-not-found/page-not-found.module').then(m => m.PageNotFoundModule) },

{path:'**',
redirectTo:'404'}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
