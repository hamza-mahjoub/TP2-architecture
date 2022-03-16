import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomePageComponent } from './home-page/home-page.component';
import { LoginComponent } from './login/login.component';
import { ManageVaccinationsComponent } from './manage-vaccinations/manage-vaccinations.component';
import { ProfileComponent } from './profile/profile.component';
import { RegisterComponent } from './register/register.component';

const routes: Routes = [
  { path: 'login', component:LoginComponent},
  { path: 'register', component:RegisterComponent},
  { path: 'profile', component:ProfileComponent},
  { path: 'home', component:HomePageComponent},
  { path: 'affect-vaccination', component:ManageVaccinationsComponent},
  { path: '**' , component:HomePageComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
