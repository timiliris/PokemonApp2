import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { FolderPageRoutingModule } from './folder-routing.module';

import { FolderPage } from './folder.page';
import {LoginComponent} from '../auth/login/login.component';
import {RegistrationComponent} from '../auth/registration/registration.component';
import {DashboardComponent} from "../dashboard/dashboard.component";
import {PasswordResetComponent} from "../auth/password-reset/password-reset.component";
import {HomeComponent} from "../home/home.component";
import {LogoutComponent} from "../auth/logout/logout.component";
import {PokedexComponent} from "../pokedex/pokedex.component";
import {VerifyEmailComponent} from "../auth/verify-email/verify-email.component";
import {InfoComponent} from "../info/info.component";
import {CarddetailsComponent} from "../carddetails/carddetails.component";

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    FolderPageRoutingModule
  ],
  declarations: [FolderPage, LoginComponent, RegistrationComponent, DashboardComponent, PasswordResetComponent, HomeComponent, LogoutComponent, PokedexComponent, VerifyEmailComponent, InfoComponent, CarddetailsComponent]
})
export class FolderPageModule {}
