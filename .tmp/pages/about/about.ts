import { Component } from '@angular/core';
import { Http , Headers } from '@angular/http';
import 'rxjs/add/operator/map';
import { NavController } from 'ionic-angular';
import{AlertController } from 'ionic-angular';

@Component({
  selector: 'page-about',
  templateUrl: 'about.html'
})
export class AboutPage {
 emailInput : string;
passwordInput : string;
 posts : any;
 
 constructor(public http: Http, private alertCtrl: AlertController) {

  }

login() : void {
  var emailInput : string;
var passwordInput : string;


  emailInput = this.emailInput;
  passwordInput = this.passwordInput;
if(emailInput != null && passwordInput != null) {


var creds = "email=" + emailInput + "&password=" + passwordInput;
const url = ' http://checkin-api.dev.cap-liberte.com/auth';

var header = new Headers();
  header.append('Content-Type','application/x-www-form-urlencoded');
  
  this.http.post(url, creds, {
    headers: header
    })
    .map(res => res.json())
    .subscribe(token => {
        this.posts = token;
        console.log(this.posts.token);
    });

}else {
  this.presentAlert();
}

}
presentAlert() {
  let alert = this.alertCtrl.create({
    title: 'Error',
    subTitle: 'Champ requis',
    buttons: ['Dismiss']
  });
  alert.present();
}
}
