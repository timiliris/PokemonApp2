import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {VerifyEmailComponent} from "./verify-email.component";
import {IonicModule} from "@ionic/angular";



const routes: Routes = [
  {
    path: '',
    component: VerifyEmailComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes),IonicModule],
  exports: [RouterModule],
})
export class verifyEmailRoutingModule {}
