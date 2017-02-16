import { Component } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';
 
@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
 
  posts: any;
 
  constructor(public http: Http) {
 
    this.http.get('http://checkin-api.dev.cap-liberte.com/checkin').map(res => res.json()).subscribe(id => {
        this.posts = id;
    });
 
  }
}