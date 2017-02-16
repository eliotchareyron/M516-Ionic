import { Component } from '@angular/core';
import { Http, Headers } from '@angular/http';
import 'rxjs/add/operator/map';
import { AlertController } from 'ionic-angular';
export var AboutPage = (function () {
    function AboutPage(http, alertCtrl) {
        this.http = http;
        this.alertCtrl = alertCtrl;
    }
    AboutPage.prototype.login = function () {
        var _this = this;
        var emailInput;
        var passwordInput;
        emailInput = this.emailInput;
        passwordInput = this.passwordInput;
        if (emailInput != null && passwordInput != null) {
            var creds = "email=" + emailInput + "&password=" + passwordInput;
            var url = ' http://checkin-api.dev.cap-liberte.com/auth';
            var header = new Headers();
            header.append('Content-Type', 'application/x-www-form-urlencoded');
            this.http.post(url, creds, {
                headers: header
            })
                .map(function (res) { return res.json(); })
                .subscribe(function (token) {
                _this.posts = token;
                console.log(_this.posts.token);
            });
        }
        else {
            this.presentAlert();
        }
    };
    AboutPage.prototype.presentAlert = function () {
        var alert = this.alertCtrl.create({
            title: 'Error',
            subTitle: 'Champ requis',
            buttons: ['Dismiss']
        });
        alert.present();
    };
    AboutPage.decorators = [
        { type: Component, args: [{
                    selector: 'page-about',
                    templateUrl: 'about.html'
                },] },
    ];
    /** @nocollapse */
    AboutPage.ctorParameters = [
        { type: Http, },
        { type: AlertController, },
    ];
    return AboutPage;
}());
//# sourceMappingURL=about.js.map