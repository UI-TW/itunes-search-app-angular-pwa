import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import apisettings from '../apisettings';
import {AuthenticationService} from './authentication.service';
import {MatSnackBar} from '@angular/material';


@Injectable()
export class UpvoteService{
    constructor(
        private http: HttpClient,
        private auth: AuthenticationService,
        private snackBar: MatSnackBar
    ){
        
    }

    getUpvotes(){
        return this.http.get(apisettings.url.upvote);
    }

    upvoteCollection(collection){
        if(this.auth.isLoggedIn()){
            const httpOptions = {
                headers: new HttpHeaders({
                    'authorization': this.auth.getAuthToken()
                })
            };
            this.http
                .post(apisettings.url.upvote, collection, httpOptions)
                .subscribe((res: any) => {
                    this.snackBar.open('Upvoted successfully', null, {
                        duration: 2000
                    });
                });
        }
        
    }
}