import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import apisettings from '../apisettings';
import {AuthenticationService} from './authentication.service';

@Injectable()
export class UpvoteService{
    constructor(
        private http: HttpClient,
        private auth: AuthenticationService
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
                    console.log(res);
                });
        }
        
    }
}