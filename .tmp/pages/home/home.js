import { Component } from '@angular/core';
export var Hero = (function () {
    function Hero() {
    }
    return Hero;
}());
var HEROES = [
    { id: 11, name: 'Mr. Nice' },
    { id: 12, name: 'Narco' },
    { id: 13, name: 'Bombasto' },
    { id: 14, name: 'Celeritas' },
    { id: 15, name: 'Magneta' },
    { id: 16, name: 'RubberMan' },
    { id: 17, name: 'Dynama' },
    { id: 18, name: 'Dr IQ' },
    { id: 19, name: 'Magma' },
    { id: 20, name: 'Tornado' }
];
export var HomePage = (function () {
    function HomePage() {
        this.heroes = HEROES;
    }
    HomePage.prototype.onSelect = function (hero) {
        this.selectedHero = hero;
    };
    HomePage.decorators = [
        { type: Component, args: [{
                    selector: 'page-home',
                    templateUrl: 'home.html'
                },] },
    ];
    /** @nocollapse */
    HomePage.ctorParameters = [];
    return HomePage;
}());
//# sourceMappingURL=home.js.map