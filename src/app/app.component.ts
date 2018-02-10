import { Component } from '@angular/core';
import {SubscriptionService} from './services/subscription.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'app';

  constructor(private subscriptionService: SubscriptionService){

  }

  ngOnInit(){
    this.subscriptionService.requestVapidKey();
  }

  subscribe(){
    this.subscriptionService.subscribe();
  }
}
