import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';
import {MatSelectModule} from '@angular/material/select';
import {MatInputModule} from '@angular/material/input';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';

import { ServiceWorkerModule } from '@angular/service-worker';
import { AppComponent } from './app.component';

import { environment } from '../environments/environment';
import { RouterModule } from '@angular/router';
import { LoginComponent } from './pages/login/login.component';
import { UpvotesComponent } from './pages/upvotes/upvotes.component';
import { HomeComponent } from './pages/home/home.component';
import { SearchComponent } from './components/search/search.component';
import { MessageComponent } from './components/message/message.component';
import { HeaderComponent } from './components/header/header.component';

import {SearchService} from './services/search.service';
import {UpvoteService} from './services/upvote.service';
import {AuthenticationService} from './services/authentication.service';
import {SubscriptionService} from './services/subscription.service';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    UpvotesComponent,
    HomeComponent,
    SearchComponent,
    MessageComponent,
    HeaderComponent
  ],
  imports: [
    BrowserModule.withServerTransition({ appId: 'serverApp' }),
    AppRoutingModule,
    BrowserAnimationsModule,
    MatSelectModule,
    MatInputModule,
    MatProgressSpinnerModule,
    HttpClientModule,
    ServiceWorkerModule.register('/ngsw-worker.js', { enabled: environment.production }),
    RouterModule
  ],
  providers: [
    SearchService,
    UpvoteService,
    AuthenticationService,
    SubscriptionService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
