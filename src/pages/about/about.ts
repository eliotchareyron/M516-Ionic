import { Component } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';
import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-about',
  templateUrl: 'about.html'
})
export class AboutPage {
 emailInput : string;
passwordInput : string;
 posts: any;
  constructor(public navCtrl: NavController) {

  }

login() : void {
  var emailInput : string;
var passwordInput : string;

  emailInput = this.emailInput;
  passwordInput = this.passwordInput;

const url = ' http://checkin-api.dev.cap-liberte.com/auth'

  
}

}
