import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import apisettings from '../apisettings';

@Injectable()
export class SearchService{
    constructor(private http: HttpClient){

    }

    private capitalize = (str) => (`${str[0].toUpperCase()}${str.slice(1).toLowerCase()}`);

    getMedia(str) {
        if (str.indexOf(' ') === -1) {
          return str.toLowerCase();
        }
        const sg = str.split(' ');
        return `${sg[0].toLowerCase()}${this.capitalize(sg[1])}`;
    }

    private getSearchUrl({
        media,
        query
      }) {
        return `${apisettings.url.search}?media=${this.getMedia(media || 'all')}&term=${query.split(' ').join('+')}`;
      };

    search(media: string = 'all', query:string=''){
        return this.http.get(this.getSearchUrl({media, query}));
    }
}