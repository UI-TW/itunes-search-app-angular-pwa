import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import apisettings from '../apisettings';

@Injectable()
export class SubscriptionService{
    private vapidKey;
    constructor(private http: HttpClient){

    }

    requestVapidKey(){
        this.http.get(apisettings.url.getVapidKey)
            .subscribe((res: any) => {
                this.vapidKey = res.key;
            });
    }

    subscribe(){
        
    }

    addSubscription(subscription: PushSubscription){
        this.http.post(apisettings.url.subscribe, {
            subscription
        });
    }
}