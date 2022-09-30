import {Component, OnInit, ViewChild} from '@angular/core';
import {AuthenticationService} from '../shared/authentication.service';
import { LazyLoadImageModule } from 'ng-lazyload-image';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
})
export class DashboardComponent implements OnInit {
  @ViewChild('popover') popover;

  isOpen = false;
  defaultImage = 'https://cours-informatique-gratuit.fr/wp-content/uploads/2017/10/avatar.png';
  presentPopover(e: Event) {
    this.popover.event = e;
    this.isOpen = true;

  };
  userdata: any;
  useruid: any;
  username: any;
  userphoto: string;
  useremail: any;
  emailOk: any;


  constructor(
  public authService: AuthenticationService,
    public  lazyLoad: LazyLoadImageModule,
  ) {

  }
  ngOnInit() {

    this.userdata = this.authService.userData;
    this.useruid = this.userdata.uid;
    this.username = this.userdata.displayName;
    this.userphoto = this.userdata.photoURL;
    this.useremail = this.userdata.email
    this.emailOk = this.userdata.emailVerified;
    console.log(this.userphoto)
  }
  comfirmSignOut(){
    this.isOpen = false;
    this.authService.signOut();
  }
}


