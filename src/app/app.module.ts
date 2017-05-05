import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule  } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { SideNavComponent } from './side-nav/side-nav.component';
import { HeaderComponent } from './header/header.component';
import { BinaryTreeComponent } from './binary-tree/binary-tree.component';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { HomeComponent } from './home/home.component';
// import {MdSnackBar} from '@angular/material';
import { SimpleNotificationsModule } from 'angular2-notifications';



const appRoutes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'binary-tree', component: BinaryTreeComponent }

];


@NgModule({
  declarations: [
    AppComponent,
    SideNavComponent,
    HeaderComponent,
    BinaryTreeComponent,    
    HomeComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    HttpModule,
    NgbModule.forRoot(),
    SimpleNotificationsModule.forRoot(),
    RouterModule.forRoot(appRoutes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
