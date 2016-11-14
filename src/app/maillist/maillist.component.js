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
var core_1 = require("@angular/core");
var http_1 = require("@angular/http");
var MaillistComponent = (function () {
    function MaillistComponent(_jsonp) {
        this._jsonp = _jsonp;
    }
    MaillistComponent.prototype.onSubmit = function (email) {
        if (email.valid) {
            this.subscribe(email.value);
        }
    };
    MaillistComponent.prototype.subscribe = function (address) {
        var _this = this;
        var url = '//jonasjohansson.us14.list-manage.com/subscribe/post-json?u=218abe1ceb94c87c87f853351&id=680fa7325a&subscribe=Subscribe&EMAIL=jan.jonas.johansson@gmail.com&c=JSONP_CALLBACK';
        this._jsonp.request(url, { method: 'Get' })
            .subscribe(function (res) {
            _this.result = res.json();
        });
        this.response = "Tack! Du har nu fått ett mail där du kan bekräfta prenumerationen.";
        console.log("subscribtion sent");
    };
    return MaillistComponent;
}());
MaillistComponent = __decorate([
    core_1.Component({
        selector: 'mail-list',
        template: require('./maillist.component.html'),
        styles: [String(require('./maillist.component.styl'))]
    }),
    __metadata("design:paramtypes", [http_1.Jsonp])
], MaillistComponent);
exports.MaillistComponent = MaillistComponent;
//# sourceMappingURL=maillist.component.js.map