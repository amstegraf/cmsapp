import {Routes} from "@angular/router";
import {URIProvider} from "./static/uri-provider";
import {DashboardComponent} from "./pages/dashboard/dashboard.component";
import {CategoriesComponent} from "./pages/categories/categories.component";
import {VideosComponent} from "./pages/videos/videos.component";
import {ImagesComponent} from "./pages/images/images.component";
import { UsersComponent } from "./pages/users/users.component";
import { PagesComponent } from "./pages/pages/pages.component";
import { LoginComponent } from "./pages/login/login.component";









export const ROUTES = [
    {path: "", component:DashboardComponent},
    {path: URIProvider.HOME, component:DashboardComponent},
    {path: URIProvider.CATEGORIES, component:CategoriesComponent},
    {path: URIProvider.VIDEOS, component:VideosComponent},
    {path: URIProvider.IMAGES, component:ImagesComponent},
    {path: URIProvider.USERS, component:UsersComponent},
    {path: URIProvider.PAGES, component:PagesComponent},
    {path: URIProvider.LOGIN, component:LoginComponent},
    
    
    
    
    
    
    
];