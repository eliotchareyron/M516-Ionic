import { Component } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';
export var HomePage = (function () {
    function HomePage(http) {
        var _this = this;
        this.http = http;
        this.http.get('http://checkin-api.dev.cap-liberte.com/checkin').map(function (res) { return res.json(); }).subscribe(function (id) {
            _this.posts = id;
        });
    }
    HomePage.decorators = [
        { type: Component, args: [{
                    selector: 'page-home',
                    templateUrl: 'home.html'
                },] },
    ];
    /** @nocollapse */
    HomePage.ctorParameters = [
        { type: Http, },
    ];
    return HomePage;
}());
//# sourceMappingURL=home.js.map