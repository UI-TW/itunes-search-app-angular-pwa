import { Component, OnInit } from '@angular/core';
import {AuthenticationService} from '../../services/authentication.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  constructor(private authService: AuthenticationService) { }
  requestInProgress = false;
  ngOnInit() {
    
  }

  login(email: string, password: string){    
    if(email && password){
      this.requestInProgress = true;
      this.authService
          .login({email, password})
          .subscribe(() => {
            this.requestInProgress = false;
          });
    }
    
  }

  signup(email: string, password: string){
    if(email && password){
      this.requestInProgress = true;
      this.authService
          .signup({email, password})
          .subscribe(() => {
            this.requestInProgress = false;
          });
    }
  }

}
