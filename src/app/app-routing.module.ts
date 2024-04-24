import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { IndexComponent } from './index/index.component';
import { LoginComponent } from './login/login.component';
import { ProfilComponent } from './profile/profil.component';
import { EditprofilComponent } from './editprofil/editprofil.component';
import { CattaloComponent } from './cattalo/cattalo.component';
import { ProductComponent } from './product/product.component';
import {SingUpComponent} from'./sing-up/sing-up.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: '/index',
    pathMatch: 'full'
  },
  {
    path: 'index',
    component: IndexComponent,
   
  },
  {
    path: 'login',
    component: LoginComponent,
    
    

  },
  {
    path: 'profile',
    component: ProfilComponent,
    
    

  },
  {
    path: 'editprofile',
    component: EditprofilComponent,
    
    

  },
  {
    path: 'singup',
    component: SingUpComponent,
    
    

  },
  {
    path: 'cattalo',
    component: CattaloComponent,
    
    

  },
  // {
  //   path: 'product',
  //   component: ProductComponent,
    
    

  // },
  {
    path: 'product/:product_id',
    component: ProductComponent,
    // children: []
    
    

  },


  { path: '**', redirectTo: 'index', pathMatch: 'full' },



];

@NgModule({
  imports: [
    RouterModule.forRoot(routes) // หรือ RouterModule.forChild(routes)
  ]
  ,
  exports: [RouterModule]
})
export class AppRoutingModule { }
