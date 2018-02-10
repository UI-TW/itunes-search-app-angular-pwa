import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import apisettings from '../apisettings';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import {Router} from '@angular/router';

@Injectable()
export class AuthenticationService{
    loginSubscription: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);

    constructor(
        private http: HttpClient,
        private router: Router
    ){

    }

    isLoggedIn(){
        return !!sessionStorage.getItem('token');
    }

    login(credentials: {email: string, password: string}){
        this.http.post(apisettings.url.login, credentials)
            .subscribe((res: any) => {
                this.loginSubscription.next(res.success);
                this.setAuthToken(res.token);
                this.setLoggedInUserName(res.email);
            });
    }

    signup(userDetails: {email: string, password: string}){
        this.http.post(apisettings.url.signup, userDetails)
            .subscribe((res: any) => {
                this.loginSubscription.next(res.success);
                this.setAuthToken(res.token);
                this.setLoggedInUserName(res.email);
            });
    }

    logout(){

    }

    private setAuthToken(token: string){
        sessionStorage.setItem('token', token);        
        this.router.navigateByUrl('/');
    }

    private setLoggedInUserName(email: string){
        sessionStorage.setItem('email', email);
    }

    getAuthToken(){
        return sessionStorage.getItem('token');
    }

    getUsername(){
        return sessionStorage.getItem('email');
    }
}