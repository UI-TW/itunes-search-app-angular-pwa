import { Component, OnInit } from '@angular/core';
import {AuthenticationService} from '../../services/authentication.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  constructor(private authService: AuthenticationService) { }

  ngOnInit() {
    
  }

  login(email: string, password: string){
    this.authService.login({email, password});
  }

  signup(email: string, password: string){
    this.authService.signup({email, password});
  }

}
