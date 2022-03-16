import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule }   from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { ToastrModule } from 'ngx-toastr';
import { NavbarComponent } from './navbar/navbar.component';
import { RegisterComponent } from './register/register.component';
import { ProfileComponent } from './profile/profile.component';
import { InfoItemComponent } from './profile/info-item/info-item/info-item.component';
import { HomePageComponent } from './home-page/home-page.component';
import { NgxChartsModule } from '@swimlane/ngx-charts';
import { PiechartComponent } from './home-page/piechart/piechart.component';
import { HistogramComponent } from './home-page/histogram/histogram.component';
import { ManageVaccinationsComponent } from './manage-vaccinations/manage-vaccinations.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    NavbarComponent,
    RegisterComponent,
    ProfileComponent,
    InfoItemComponent,
    HomePageComponent,
    PiechartComponent,
    HistogramComponent,
    ManageVaccinationsComponent,
  ],
  imports: [
    BrowserAnimationsModule,
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ToastrModule.forRoot(),
    NgxChartsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
