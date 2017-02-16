import { Component } from '@angular/core';

import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-about',
  templateUrl: 'about.html'
})
export class AboutPage {
 emailInput : string;
passwordInput : string;
  constructor(public navCtrl: NavController) {

  }

login() : void {
  var emailInput : string;
var passwordInput : string;

  emailInput = this.emailInput;
  passwordInput = this.passwordInput;

  
}

}
