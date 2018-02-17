import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import apisettings from '../apisettings';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import {Router} from '@angular/router';
import {tap} from 'rxjs/operators';

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
        return this.http.post(apisettings.url.login, credentials)
            .pipe(
                tap((res: any) => {
                    if(res.success){
                        this.loginSubscription.next(res.success);
                        this.setAuthToken(res.token);
                        this.setLoggedInUserName(res.email);
                        this.router.navigateByUrl('/');
                    }
                    else {
                        
                    }
                })
            );
    }

    signup(userDetails: {email: string, password: string}){
        return this.http.post(apisettings.url.signup, userDetails)
            .pipe(
                tap((res: any) => {
                    if(res.success){
                        this.loginSubscription.next(res.success);
                        this.setAuthToken(res.token);
                        this.setLoggedInUserName(res.email);
                        this.router.navigateByUrl('/');
                    }
                    else {
    
                    }
                })
            );
    }

    initializeFromStorage(){
        if(this.isLoggedIn()){
            this.loginSubscription.next(true);
        }
    }

    logout(){
        sessionStorage.clear();
        this.loginSubscription.next(false);
        this.router.navigateByUrl('/');
    }

    private setAuthToken(token: string){
        sessionStorage.setItem('token', token);                
    }

    private setLoggedInUserName(email: string){
        const regex = /@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/;
        email = email.replace(regex, '');
        sessionStorage.setItem('email', email);
    }

    getAuthToken(){
        return sessionStorage.getItem('token');
    }

    getUsername(){
        return sessionStorage.getItem('email');
    }
}