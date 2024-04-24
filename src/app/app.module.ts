import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { IndexComponent } from './index/index.component';
import { LoginComponent } from './login/login.component';
import { ProfilComponent } from './profile/profil.component';
import { EditprofilComponent } from './editprofil/editprofil.component';
import { CattaloComponent } from './cattalo/cattalo.component';
import { CardComponent } from './card/card.component';
import { ProductComponent } from './product/product.component';
import { HeaderComponent } from './header/header.component';
import { SingUpComponent } from './sing-up/sing-up.component';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [
    AppComponent,
    IndexComponent,
    LoginComponent,
    ProfilComponent,
    EditprofilComponent,
    CattaloComponent,
    CardComponent,
    ProductComponent,
    HeaderComponent,
    SingUpComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    RouterModule,
    

    
    
    
    
  ],
  
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
