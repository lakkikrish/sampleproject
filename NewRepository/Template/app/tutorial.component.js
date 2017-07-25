"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require('@angular/core');
var classbinding_component_1 = require('./classbinding.component');
var tutorials = (function () {
    function tutorials() {
        this.applycolor = true;
        this.applystyle = false;
        this.bind_varible = true;
        this.name = "lakki";
        this.mname = "lovely";
    }
    tutorials.prototype.onClick = function (value) {
        console.log('event binding' + value);
    };
    tutorials = __decorate([
        core_1.Component({
            selector: 'my-tutorials',
            template: "<h2 [style.color]=\"applycolor? 'darkred' :'blue' \" >style binding</h2>\n              <h4 [class.myclass]=\"applystyle\">class binding</h4>\n                <p>{{title}}</p>\n                <h5 [class.classbinding]=\"bind_varible\">author:{{title}}</h5> \n                <button (click)=\"onClick(demoInput.value)\">clickme</button> \n                <input type=\"text\" #demoInput>\n                <input type=\"text\" [(ngModel)]=\"fname\">\n                <input type=\"text\" [(ngModel)]=\"lname\">\n                <input type=\"text\" #mname value=\"mname\">\n                full name:{{fname}}{{lname}}{{mname}}",
            directives: [classbinding_component_1.classbinding],
            styles: [".myclass{\n    color: red ;\n    text-decoration:underline}"]
        }), 
        __metadata('design:paramtypes', [])
    ], tutorials);
    return tutorials;
}());
exports.tutorials = tutorials;
//# sourceMappingURL=tutorial.component.js.map