import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
// import { SwPush } from '@angular/service-worker';
import apisettings from '../apisettings';


@Injectable()
export class SubscriptionService{
    private vapidKey;
    constructor(
        private http: HttpClient
        // private swPush: SwPush
    ){

    }

    requestVapidKey(){
        this.http.get(apisettings.url.getVapidKey)
            .subscribe((res: any) => {
                this.vapidKey = res.key;
            });
    }

    private urlB64ToUint8Array(base64String) {
        var padding = '='.repeat((4 - base64String.length % 4) % 4);
        var base64 = (base64String + padding)
          .replace(/\-/g, '+')
          .replace(/_/g, '/');
      
        var rawData = window.atob(base64);
        var outputArray = new Uint8Array(rawData.length);
      
        for (var i = 0; i < rawData.length; ++i) {
          outputArray[i] = rawData.charCodeAt(i);
        }
        return outputArray;
    }

    subscribe(){
        // this.swPush.requestSubscription({
        //     serverPublicKey: this.vapidKey
        // })
        // .then(subscription => {
        //     this.http.post(apisettings.url.subscribe, {
        //         subscription
        //     });
        // });
    }

    private addSubscription(subscription: PushSubscription){
        this.http.post(apisettings.url.subscribe, {
            subscription
        });
    }
}