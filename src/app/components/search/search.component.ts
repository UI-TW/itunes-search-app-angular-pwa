import { Component, OnInit } from '@angular/core';
import {SearchService} from '../../services/search.service';
import {UpvoteService} from '../../services/upvote.service';
import {AuthenticationService} from '../../services/authentication.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit {
  isLoggedIn = false;
  media='All';
  results = [];
  options = [
    'All',
    'Audiobook',
    'eBook',
    'Movie',
    'Music',
    'Music Video',
    'Podcast',
    'TV Show',
    'Software'
  ];


  constructor(
    private searchService: SearchService,
    private upvoteService: UpvoteService,
    private auth: AuthenticationService
  ) { }

  ngOnInit() {
    this.auth.loginSubscription.subscribe((isLoggedIn: boolean) => {
      this.isLoggedIn = isLoggedIn;
    });
  }

  upvoteCollection(collection: any){
    this.upvoteService.upvoteCollection(collection);
  }

  onSearch(query){
    this.searchService
        .search(this.media, query)
        .subscribe((res: any) => {
          this.results = res.results;
        });
  }

}
