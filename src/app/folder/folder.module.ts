import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { FolderPageRoutingModule } from './folder-routing.module';

import { FolderPage } from './folder.page';
import {LoginComponent} from '../auth/login/login.component';
import {RegistrationComponent} from '../auth/registration/registration.component';
import {DashboardComponent} from "../dashboard/dashboard.component";

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    FolderPageRoutingModule
  ],
  declarations: [FolderPage, LoginComponent, RegistrationComponent, DashboardComponent]
})
export class FolderPageModule {}
