import { Component, OnInit } from '@angular/core';
import {UpvoteService} from '../../services/upvote.service';

@Component({
  selector: 'app-upvotes',
  templateUrl: './upvotes.component.html',
  styleUrls: ['./upvotes.component.scss']
})
export class UpvotesComponent implements OnInit {
  upvotes = [];
  constructor(private upvoteService: UpvoteService) { }

  ngOnInit() {
    this.upvoteService
      .getUpvotes()
      .subscribe((res : any) => {
        this.upvotes = res.favorites;
      });

  }

}
