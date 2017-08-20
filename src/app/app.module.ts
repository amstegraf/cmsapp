import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import {RouterModule} from "@angular/router";

import { ROUTES } from './app.routes';
import { AppComponent } from './app.component';

import { LeftnavComponent } from './shared/leftnav/leftnav.component';

import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { CategoriesComponent } from './pages/categories/categories.component';
import { VideosComponent } from './pages/videos/videos.component';
import { ImagesComponent } from './pages/images/images.component';
import{ UsersComponent } from './pages/users/users.component';
import{ PagesComponent } from './pages/pages/pages.component';
import{ LoginComponent } from './pages/login/login.component'



 

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    CategoriesComponent,
    LeftnavComponent,
    VideosComponent,
    ImagesComponent,
    UsersComponent,
    PagesComponent,
    LoginComponent,
    
    
    
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot(ROUTES, { useHash:true })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
