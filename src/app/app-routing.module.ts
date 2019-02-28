import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { DisplayQuizComponent } from './display-quiz/display-quiz.component';
import { MortenComponent } from './morten/morten.component';
import { JosefComponent } from './josef/josef.component';
import { HomeComponent } from './home/home.component';
import { PortalComponent } from './portal/portal.component';

const routes: Routes = [
  { path: '', redirectTo: 'home/login', pathMatch: 'full' }, // if baseUrl => go to login

  {path: 'home', component: HomeComponent, children: [
    {path: 'about', component: AboutComponent},
    {path: 'contact', component: ContactComponent},
    {path: 'login', component: LoginComponent, children: [
      { path: 'morten', component: MortenComponent },
      { path: 'josef', component: JosefComponent }
    ]},
    {path: 'register', component: RegisterComponent}
  ]},
  
  {path: 'portal', component:PortalComponent, children: [
    {path: 'display-quiz', component:DisplayQuizComponent},  
  ]},
  

  { path: '**', component: PageNotFoundComponent } // wildcard - if no routes matched, display this
 ];
 

// Define available routes

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
