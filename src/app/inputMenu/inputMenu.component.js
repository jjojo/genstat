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
var statistics_service_1 = require("../services/statistics.service");
var InputMenuComponent = (function () {
    function InputMenuComponent(statisticsService) {
        this.statisticsService = statisticsService;
        this.notify = new core_1.EventEmitter();
        this.options = {
            workgroup: null,
            yearFrom: 0,
            yearTo: 0
        };
        this.selValues = {};
        this.workgroup = {};
        this.yearFrom = {};
        this.yearTo = {};
        this.menu = {
            subject: "",
            title: "",
            options: []
        };
        this.disabled = true;
    }
    InputMenuComponent.prototype.ngOnInit = function () {
        this.getOptions();
        this.win = window;
    };
    InputMenuComponent.prototype.refreshValue = function (value, type) {
        var values = this.selValues;
        this.menu['options'].forEach(function (option) {
            if (type == option.id) {
                values[type] = value.id;
            }
        });
        this.disabled = this.disable();
    };
    InputMenuComponent.prototype.disable = function () {
        if (this.menu['options'].length === Object.keys(this.selValues).length) {
            for (var option in this.selValues) {
                if (option === "yearFrom") {
                    if (parseInt(this.selValues[option]) > parseInt(this.selValues["yearTo"])) {
                        return true;
                    }
                    else {
                        return false;
                    }
                }
            }
            return false;
        }
        else {
            return true;
        }
    };
    InputMenuComponent.prototype.getStatistics = function () {
        this.win = window;
        var t = this;
        var args = [];
        for (var option in this.selValues) {
            if (this.selValues.hasOwnProperty(option)) {
                args.push(this.selValues[option]);
            }
        }
        this.statisticsService
            .fetchData(args, this.subject['subject'], this.subject['optionsUrl'])
            .then(function (data) {
            t.notify.emit(t.subject['subjectNr']);
        });
    };
    InputMenuComponent.prototype.getOptions = function () {
        var t = this;
        this.statisticsService
            .getOptions(this.subject['subject'], this.subject['optionsUrl'])
            .then(function (data) {
            t.menu = data;
        });
    };
    return InputMenuComponent;
}());
__decorate([
    core_1.Input(),
    __metadata("design:type", Object)
], InputMenuComponent.prototype, "subject", void 0);
__decorate([
    core_1.Output(),
    __metadata("design:type", core_1.EventEmitter)
], InputMenuComponent.prototype, "notify", void 0);
InputMenuComponent = __decorate([
    core_1.Component({
        selector: 'input-menu',
        template: require('./inputMenu.component.html'),
        styles: [String(require('./inputMenu.component.styl'))]
    }),
    __metadata("design:paramtypes", [statistics_service_1.StatisticsService])
], InputMenuComponent);
exports.InputMenuComponent = InputMenuComponent;
//# sourceMappingURL=inputMenu.component.js.map