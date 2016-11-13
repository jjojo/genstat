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
var angular2_chartjs_1 = require("angular2-chartjs");
var LineChartComponent = (function () {
    function LineChartComponent(statisticsService) {
        this.statisticsService = statisticsService;
        this.data = { labels: [],
            datasets: [
                {
                    label: "kvinnor",
                    data: [],
                    backgroundColor: 'rgba(247,183,51,0.8)',
                    borderColor: 'rgba(247,183,51,1)',
                    pointBackgroundColor: '#4c4c4c',
                    pointBorderColor: '#f2f2f2',
                    pointRadius: 4,
                    pointBorderWidth: 2,
                    pointHoverBackgroundColor: '#fff',
                    pointHoverBorderColor: 'rgba(252,74,26,0.8)'
                },
                {
                    label: "män",
                    data: [],
                    backgroundColor: 'rgba(252,74,26,0.8)',
                    borderColor: 'rgba(252,74,26,1)',
                    pointBackgroundColor: '#4c4c4c',
                    pointBorderColor: '#f2f2f2',
                    pointRadius: 4,
                    pointBorderWidth: 2,
                    pointHoverBackgroundColor: '#fff',
                    pointHoverBorderColor: 'rgba(252,74,26,1)'
                },
            ]
        };
    }
    LineChartComponent.prototype.ngOnInit = function () {
        console.log(this.subject['subject']);
        this.id = this.subject['subject'] + "Chart";
        if (window.outerWidth < 1050) {
            this.chartFontSize = 20;
        }
        else {
            this.chartFontSize = 14;
        }
        if (this.subject['subject'] === "health" || this.subject['subject'] === "drugs") {
            this.type = 'bar';
            this.options = {
                responsive: true,
                maintainAspectRatio: false,
                scales: {
                    yAxes: [{
                            ticks: {
                                max: 100,
                                min: 0,
                                fontSize: this.chartFontSize
                            },
                            scaleLabel: {
                                display: true,
                                fontSize: this.chartFontSize
                            }
                        }],
                    xAxes: [{
                            ticks: {
                                fontSize: this.chartFontSize
                            },
                            scaleLabel: {
                                display: true,
                                fontSize: this.chartFontSize
                            }
                        }]
                }
            };
        }
        else {
            this.type = 'line';
            this.options = {
                responsive: true,
                maintainAspectRatio: false,
                scales: {
                    yAxes: [{
                            ticks: {
                                beginAtZero: false,
                                fontSize: this.chartFontSize
                            },
                            scaleLabel: {
                                display: true,
                                fontSize: this.chartFontSize
                            }
                        }],
                    xAxes: [{
                            ticks: {
                                fontSize: this.chartFontSize
                            },
                            scaleLabel: {
                                display: true,
                                fontSize: this.chartFontSize
                            }
                        }]
                }
            };
        }
    };
    LineChartComponent.prototype.getData = function () {
        var t = this;
        this.statisticsService.getData(this.subject['subject']).then(function (data) {
            t.data.labels = data['labels'];
            t.data.datasets[0].data = data['femaleData'];
            t.data.datasets[1].data = data['maleData'];
            t.chartComponent.chart.options.scales.yAxes[0].scaleLabel.labelString = data['yLabel'];
            t.chartComponent.chart.options.scales.xAxes[0].scaleLabel.labelString = data['xLabel'];
            t.chartComponent.chart.update();
        });
    };
    return LineChartComponent;
}());
__decorate([
    core_1.Input(),
    __metadata("design:type", Object)
], LineChartComponent.prototype, "subject", void 0);
__decorate([
    core_1.ViewChild(angular2_chartjs_1.ChartComponent),
    __metadata("design:type", angular2_chartjs_1.ChartComponent)
], LineChartComponent.prototype, "chartComponent", void 0);
LineChartComponent = __decorate([
    core_1.Component({
        selector: 'line-chart',
        template: require('./line-chart.html'),
        styles: [String(require('./lineChart.styl'))]
    }),
    __metadata("design:paramtypes", [statistics_service_1.StatisticsService])
], LineChartComponent);
exports.LineChartComponent = LineChartComponent;
//# sourceMappingURL=line-chart.js.map