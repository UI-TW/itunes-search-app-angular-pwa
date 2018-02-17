import { Component, OnInit } from '@angular/core';
import {AuthenticationService} from '../../services/authentication.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  isLoggedIn = false;
  email = '';
  constructor(private auth: AuthenticationService) { }

  ngOnInit() {
    this.auth.initializeFromStorage();
    this.auth.loginSubscription.subscribe((isLoggedIn: boolean) => {
      this.isLoggedIn = isLoggedIn;
      this.email = isLoggedIn ? this.auth.getUsername() : 'Guest';
    });
  }

  logout(){
    this.auth.logout();
  }

}
