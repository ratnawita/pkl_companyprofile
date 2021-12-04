import { HomeComponent } from "./pages/home/home.component";
import { AboutComponent } from "./pages/about/about.component";
import { ContactComponent } from "./pages/contact/contact.component";
import { BlogComponent } from "./pages/blog/blog.component";
import { DetailblogComponent } from "./pages/detailblog/detailblog.component";

import { NgModule } from '@angular/core';
import { Routes, RouterModule } from "@angular/router";

const routes: Routes = [
    { path: '', component: HomeComponent},
    { path: 'home', component: HomeComponent},
    { path: 'about', component: AboutComponent},
    { path: 'home/about', component: AboutComponent},
    { path: 'contact', component: ContactComponent},
    { path: 'blog', component: BlogComponent},
    { path: 'blog/detailblog/:id', component: DetailblogComponent},
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})

export class AppRoutingModule { }