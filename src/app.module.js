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
var platform_browser_1 = require("@angular/platform-browser");
var forms_1 = require("@angular/forms");
var angular2_chartjs_1 = require("angular2-chartjs");
var line_chart_1 = require("./app/lineChart/line-chart");
var ng2_sharebuttons_1 = require("ng2-sharebuttons");
var app_routing_ts_1 = require("./app.routing.ts");
var app_1 = require("./app/app");
var about_1 = require("./app/about/about");
var home_1 = require("./app/home/home");
var start_component_1 = require("./app/start/start.component");
var statistics_component_1 = require("./app/statistics/statistics.component");
var menu_component_1 = require("./app/menu/menu.component");
var footer_component_1 = require("./app/footer/footer.component");
var econ_component_1 = require("./app/econ/econ.component");
var inputMenu_component_1 = require("./app/inputMenu/inputMenu.component");
var statistics_service_1 = require("./app/services/statistics.service");
var econ_service_1 = require("./app/services/econ.service");
var health_service_1 = require("./app/services/health.service");
var power_service_1 = require("./app/services/power.service");
var drugs_service_1 = require("./app/services/drugs.service");
var family_service_1 = require("./app/services/family.service");
var select_1 = require("./app/components/select/select");
var select_pipes_1 = require("./app/components/select/select-pipes");
var off_click_1 = require("./app/components/select/off-click");
var ng2_page_scroll_1 = require("ng2-page-scroll");
var WINDOW_PROVIDER = {
    provide: Window,
    useValue: window
};
var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    core_1.NgModule({
        imports: [
            platform_browser_1.BrowserModule,
            http_1.HttpModule,
            app_routing_ts_1.ROUTING,
            angular2_chartjs_1.ChartModule,
            forms_1.FormsModule,
            ng2_sharebuttons_1.ShareButtonsModule,
            ng2_page_scroll_1.Ng2PageScrollModule
        ],
        declarations: [
            app_1.MyApp,
            about_1.About,
            home_1.Home,
            line_chart_1.LineChartComponent,
            menu_component_1.MenuComponent,
            econ_component_1.EconComponent,
            inputMenu_component_1.InputMenuComponent,
            start_component_1.StartComponent,
            statistics_component_1.StatisticsComponent,
            select_1.SelectComponent,
            select_pipes_1.HighlightPipe,
            off_click_1.OffClickDirective,
            footer_component_1.FooterComponent
        ],
        bootstrap: [app_1.MyApp],
        providers: [
            statistics_service_1.StatisticsService,
            econ_service_1.EconService,
            health_service_1.HealthService,
            power_service_1.PowerService,
            drugs_service_1.DrugsService,
            family_service_1.FamilyService,
            WINDOW_PROVIDER
        ]
    }),
    __metadata("design:paramtypes", [])
], AppModule);
exports.AppModule = AppModule;
//# sourceMappingURL=app.module.js.map