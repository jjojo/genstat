webpackJsonp([0],Array(23).concat([
/* 23 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
"use strict";
var AsyncAction_1 = __webpack_require__(80);
var AsyncScheduler_1 = __webpack_require__(81);
exports.async = new AsyncScheduler_1.AsyncScheduler(AsyncAction_1.AsyncAction);
//# sourceMappingURL=async.js.map

/***/ },
/* 24 */,
/* 25 */,
/* 26 */,
/* 27 */,
/* 28 */,
/* 29 */
/***/ function(module, exports) {

/*
	MIT License http://www.opensource.org/licenses/mit-license.php
	Author Tobias Koppers @sokra
*/
// css base code, injected by the css-loader
module.exports = function() {
	var list = [];

	// return the list of modules as css string
	list.toString = function toString() {
		var result = [];
		for(var i = 0; i < this.length; i++) {
			var item = this[i];
			if(item[2]) {
				result.push("@media " + item[2] + "{" + item[1] + "}");
			} else {
				result.push(item[1]);
			}
		}
		return result.join("");
	};

	// import a list of modules into the list
	list.i = function(modules, mediaQuery) {
		if(typeof modules === "string")
			modules = [[null, modules, ""]];
		var alreadyImportedModules = {};
		for(var i = 0; i < this.length; i++) {
			var id = this[i][0];
			if(typeof id === "number")
				alreadyImportedModules[id] = true;
		}
		for(i = 0; i < modules.length; i++) {
			var item = modules[i];
			// skip already imported module
			// this implementation is not 100% perfect for weird media query combinations
			//  when a module is imported multiple times with different media queries.
			//  I hope this will never occur (Hey this way we have smaller bundles)
			if(typeof item[0] !== "number" || !alreadyImportedModules[item[0]]) {
				if(mediaQuery && !item[2]) {
					item[2] = mediaQuery;
				} else if(mediaQuery) {
					item[2] = "(" + item[2] + ") and (" + mediaQuery + ")";
				}
				list.push(item);
			}
		}
	};
	return list;
};


/***/ },
/* 30 */,
/* 31 */,
/* 32 */,
/* 33 */,
/* 34 */,
/* 35 */,
/* 36 */,
/* 37 */,
/* 38 */,
/* 39 */,
/* 40 */,
/* 41 */,
/* 42 */,
/* 43 */,
/* 44 */,
/* 45 */,
/* 46 */,
/* 47 */,
/* 48 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
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
var core_1 = __webpack_require__(1);
var http_1 = __webpack_require__(26);
var econ_service_1 = __webpack_require__(432);
var health_service_1 = __webpack_require__(434);
var power_service_1 = __webpack_require__(435);
var drugs_service_1 = __webpack_require__(431);
var family_service_1 = __webpack_require__(433);
__webpack_require__(51);
var StatisticsService = (function () {
    function StatisticsService(http, _econ, _health, _power, _drugs, _family) {
        this.http = http;
        this._econ = _econ;
        this._health = _health;
        this._power = _power;
        this._drugs = _drugs;
        this._family = _family;
        // Titles, descriptions, technically meta data for the statistics components
        this.subjects = {
            subjects: [{
                    subject: "econ",
                    subjectNr: 0,
                    optionsUrl: "http://api.scb.se/OV0104/v1/doris/sv/ssd/START/AM/AM0112/TidsserieUtbinr",
                    title: "ekonomi",
                    iconUrl: "../../assets/img/pig-coin",
                    color: "rgba(120, 173, 181, 1)",
                    description: "Hur ser statistiken ut för kvinnors & mäns löner, besparingar och kapital?",
                    source: ['http://www.statistikdatabasen.scb.se/pxweb/sv/ssd/START__AM__AM0112/TidsserieUtbinr/?rxid=2c9e7695-e4ce-4e90-9729-81e1b67a9686']
                },
                {
                    subject: "health",
                    subjectNr: 1,
                    optionsUrl: "http://api.scb.se/OV0104/v1/doris/sv/ssd/START/LE/LE0101/LE0101H/LE0101H01",
                    title: "hälsa",
                    iconUrl: "../../assets/img/health",
                    color: "rgba(208, 134, 146, 1)",
                    description: "Hur ser statistiken ut för kvinnors & mäns hälsa, sjukdommar och stress?",
                    source: ['http://www.statistikdatabasen.scb.se/pxweb/sv/ssd/START__LE__LE0101__LE0101H/LE0101H01/?rxid=e2f49d74-cf23-4ca1-a09f-ea1de0a27e49']
                },
                {
                    subject: "power",
                    subjectNr: 2,
                    optionsUrl: "http://api.scb.se/OV0104/v1/doris/sv/ssd/START/ME/ME0107/ME0107C/Riksdagsledamoter",
                    title: "inflytande",
                    iconUrl: "../../assets/img/tie",
                    color: "rgba(149, 134, 122, 1)",
                    description: "Hur ser inflytandet ut i samhället? hur många kvinnor & män väljs in i riksdagen till exempel",
                    source: ['http://www.statistikdatabasen.scb.se/pxweb/sv/ssd/START__ME__ME0107__ME0107C/Riksdagsledamoter/?rxid=a6313680-1685-4c1e-af1c-f603c4fd927e']
                },
                {
                    subject: "drugs",
                    subjectNr: 3,
                    optionsUrl: "http://api.scb.se/OV0104/v1/doris/sv/ssd/START/LE/LE0101/LE0101H/LE0101H25",
                    title: "tobak",
                    iconUrl: "../../assets/img/drink",
                    color: "rgba(174, 200, 137, 1)",
                    description: "Hur ser tobaksvanorna ut för kvinnor & män?",
                    source: ['http://www.statistikdatabasen.scb.se/pxweb/sv/ssd/START__LE__LE0101__LE0101H/LE0101H25/?rxid=dc163be6-69d0-4285-9e05-2dbdacdf0e0f']
                },
                {
                    subject: "family",
                    subjectNr: 4,
                    optionsUrl: "http://api.scb.se/OV0104/v1/doris/sv/ssd/START/SF/SF0101/ForaldraPenning",
                    title: "familj",
                    iconUrl: "../../assets/img/fam",
                    color: "rgba(239, 153, 98, 1)",
                    description: "Hur ser statistik för familjelivet ut för kvinnor & män?",
                    source: ['http://www.statistikdatabasen.scb.se/pxweb/sv/ssd/START__SF__SF0101/ForaldraPenning/?rxid=2c9e7695-e4ce-4e90-9729-81e1b67a9686']
                }
            ]
        };
    }
    StatisticsService.prototype.getData = function (type) {
        switch (type) {
            case "econ":
                return Promise.resolve(this._econ.econData);
            case "health":
                return Promise.resolve(this._health.healthData);
            case "power":
                return Promise.resolve(this._power.powerData);
            case "drugs":
                return Promise.resolve(this._drugs.drugsData);
            case "family":
                return Promise.resolve(this._family.familyData);
        }
        console.error("Could not get data from statistics.Service.getData() function");
    };
    StatisticsService.prototype.getOptions = function (type, url) {
        switch (type) {
            case "econ":
                return this.http.get(url).toPromise().then(this._econ.econOptions).catch(this.handleError);
            case "health":
                return this.http.get(url).toPromise().then(this._health.healthOptions).catch(this.handleError);
            case "power":
                return this.http.get(url).toPromise().then(this._power.powerOptions).catch(this.handleError);
            case "drugs":
                return this.http.get(url).toPromise().then(this._drugs.drugsOptions).catch(this.handleError);
            case "family":
                return this.http.get(url).toPromise().then(this._family.familyOptions).catch(this.handleError);
        }
        console.error("Could not get options from statistics.Service.getOptions() function");
    };
    StatisticsService.prototype.fetchData = function (menuSettings, type, url) {
        //console.log(menuSettings)
        switch (type) {
            case "econ":
                return this._econ.fetchEconData(menuSettings[0], menuSettings[1], menuSettings[2], url);
            case "health":
                return this._health.fetchHealthData(menuSettings[0], menuSettings[1], menuSettings[2], url);
            case "power":
                return this._power.fetchPowerData(menuSettings[0], menuSettings[1], menuSettings[2], url);
            case "drugs":
                return this._drugs.fetchDrugsData(menuSettings[0], menuSettings[1], url);
            case "family":
                return this._family.fetchFamilyData(menuSettings[0], menuSettings[1], menuSettings[2], url);
        }
        console.error("Could not fetch data from statistics.Service.fetchData() function");
    };
    StatisticsService.prototype.extractData = function (res) {
        var body = res.json();
        return body || {};
    };
    StatisticsService.prototype.handleError = function (error) {
        var errMsg = (error.message) ? error.message :
            error.status ? error.status + " - " + error.statusText : 'Server error';
        console.error(errMsg); // log to console instead
        return Promise.reject(errMsg);
    };
    StatisticsService = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [http_1.Http, econ_service_1.EconService, health_service_1.HealthService, power_service_1.PowerService, drugs_service_1.DrugsService, family_service_1.FamilyService])
    ], StatisticsService);
    return StatisticsService;
}());
exports.StatisticsService = StatisticsService;


/***/ },
/* 49 */,
/* 50 */,
/* 51 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
"use strict";
var Observable_1 = __webpack_require__(0);
var toPromise_1 = __webpack_require__(415);
Observable_1.Observable.prototype.toPromise = toPromise_1.toPromise;
//# sourceMappingURL=toPromise.js.map

/***/ },
/* 52 */,
/* 53 */,
/* 54 */,
/* 55 */,
/* 56 */,
/* 57 */,
/* 58 */,
/* 59 */,
/* 60 */,
/* 61 */,
/* 62 */,
/* 63 */,
/* 64 */,
/* 65 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
"use strict";
var MulticastObservable_1 = __webpack_require__(399);
var ConnectableObservable_1 = __webpack_require__(291);
/**
 * Returns an Observable that emits the results of invoking a specified selector on items
 * emitted by a ConnectableObservable that shares a single subscription to the underlying stream.
 *
 * <img src="./img/multicast.png" width="100%">
 *
 * @param {Function|Subject} Factory function to create an intermediate subject through
 * which the source sequence's elements will be multicast to the selector function
 * or Subject to push source elements into.
 * @param {Function} Optional selector function that can use the multicasted source stream
 * as many times as needed, without causing multiple subscriptions to the source stream.
 * Subscribers to the given source will receive all notifications of the source from the
 * time of the subscription forward.
 * @return {Observable} an Observable that emits the results of invoking the selector
 * on the items emitted by a `ConnectableObservable` that shares a single subscription to
 * the underlying stream.
 * @method multicast
 * @owner Observable
 */
function multicast(subjectOrSubjectFactory, selector) {
    var subjectFactory;
    if (typeof subjectOrSubjectFactory === 'function') {
        subjectFactory = subjectOrSubjectFactory;
    }
    else {
        subjectFactory = function subjectFactory() {
            return subjectOrSubjectFactory;
        };
    }
    return !selector ?
        new ConnectableObservable_1.ConnectableObservable(this, subjectFactory) :
        new MulticastObservable_1.MulticastObservable(this, subjectFactory, selector);
}
exports.multicast = multicast;
//# sourceMappingURL=multicast.js.map

/***/ },
/* 66 */,
/* 67 */,
/* 68 */,
/* 69 */,
/* 70 */,
/* 71 */,
/* 72 */,
/* 73 */,
/* 74 */,
/* 75 */,
/* 76 */,
/* 77 */,
/* 78 */,
/* 79 */,
/* 80 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
"use strict";
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var root_1 = __webpack_require__(20);
var Action_1 = __webpack_require__(863);
/**
 * We need this JSDoc comment for affecting ESDoc.
 * @ignore
 * @extends {Ignored}
 */
var AsyncAction = (function (_super) {
    __extends(AsyncAction, _super);
    function AsyncAction(scheduler, work) {
        _super.call(this, scheduler, work);
        this.scheduler = scheduler;
        this.work = work;
        this.pending = false;
    }
    AsyncAction.prototype.schedule = function (state, delay) {
        if (delay === void 0) { delay = 0; }
        if (this.closed) {
            return this;
        }
        // Always replace the current state with the new state.
        this.state = state;
        // Set the pending flag indicating that this action has been scheduled, or
        // has recursively rescheduled itself.
        this.pending = true;
        var id = this.id;
        var scheduler = this.scheduler;
        //
        // Important implementation note:
        //
        // Actions only execute once by default, unless rescheduled from within the
        // scheduled callback. This allows us to implement single and repeat
        // actions via the same code path, without adding API surface area, as well
        // as mimic traditional recursion but across asynchronous boundaries.
        //
        // However, JS runtimes and timers distinguish between intervals achieved by
        // serial `setTimeout` calls vs. a single `setInterval` call. An interval of
        // serial `setTimeout` calls can be individually delayed, which delays
        // scheduling the next `setTimeout`, and so on. `setInterval` attempts to
        // guarantee the interval callback will be invoked more precisely to the
        // interval period, regardless of load.
        //
        // Therefore, we use `setInterval` to schedule single and repeat actions.
        // If the action reschedules itself with the same delay, the interval is not
        // canceled. If the action doesn't reschedule, or reschedules with a
        // different delay, the interval will be canceled after scheduled callback
        // execution.
        //
        if (id != null) {
            this.id = this.recycleAsyncId(scheduler, id, delay);
        }
        this.delay = delay;
        // If this action has already an async Id, don't request a new one.
        this.id = this.id || this.requestAsyncId(scheduler, this.id, delay);
        return this;
    };
    AsyncAction.prototype.requestAsyncId = function (scheduler, id, delay) {
        if (delay === void 0) { delay = 0; }
        return root_1.root.setInterval(scheduler.flush.bind(scheduler, this), delay);
    };
    AsyncAction.prototype.recycleAsyncId = function (scheduler, id, delay) {
        if (delay === void 0) { delay = 0; }
        // If this action is rescheduled with the same delay time, don't clear the interval id.
        if (delay !== null && this.delay === delay) {
            return id;
        }
        // Otherwise, if the action's delay time is different from the current delay,
        // clear the interval id
        return root_1.root.clearInterval(id) && undefined || undefined;
    };
    /**
     * Immediately executes this action and the `work` it contains.
     * @return {any}
     */
    AsyncAction.prototype.execute = function (state, delay) {
        if (this.closed) {
            return new Error('executing a cancelled action');
        }
        this.pending = false;
        var error = this._execute(state, delay);
        if (error) {
            return error;
        }
        else if (this.pending === false && this.id != null) {
            // Dequeue if the action didn't reschedule itself. Don't call
            // unsubscribe(), because the action could reschedule later.
            // For example:
            // ```
            // scheduler.schedule(function doWork(counter) {
            //   /* ... I'm a busy worker bee ... */
            //   var originalAction = this;
            //   /* wait 100ms before rescheduling the action */
            //   setTimeout(function () {
            //     originalAction.schedule(counter + 1);
            //   }, 100);
            // }, 1000);
            // ```
            this.id = this.recycleAsyncId(this.scheduler, this.id, null);
        }
    };
    AsyncAction.prototype._execute = function (state, delay) {
        var errored = false;
        var errorValue = undefined;
        try {
            this.work(state);
        }
        catch (e) {
            errored = true;
            errorValue = !!e && e || new Error(e);
        }
        if (errored) {
            this.unsubscribe();
            return errorValue;
        }
    };
    AsyncAction.prototype._unsubscribe = function () {
        var id = this.id;
        var scheduler = this.scheduler;
        var actions = scheduler.actions;
        var index = actions.indexOf(this);
        this.work = null;
        this.delay = null;
        this.state = null;
        this.pending = false;
        this.scheduler = null;
        if (index !== -1) {
            actions.splice(index, 1);
        }
        if (id != null) {
            this.id = this.recycleAsyncId(scheduler, id, null);
        }
    };
    return AsyncAction;
}(Action_1.Action));
exports.AsyncAction = AsyncAction;
//# sourceMappingURL=AsyncAction.js.map

/***/ },
/* 81 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
"use strict";
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var Scheduler_1 = __webpack_require__(616);
var AsyncScheduler = (function (_super) {
    __extends(AsyncScheduler, _super);
    function AsyncScheduler() {
        _super.apply(this, arguments);
        this.actions = [];
        /**
         * A flag to indicate whether the Scheduler is currently executing a batch of
         * queued actions.
         * @type {boolean}
         */
        this.active = false;
        /**
         * An internal ID used to track the latest asynchronous task such as those
         * coming from `setTimeout`, `setInterval`, `requestAnimationFrame`, and
         * others.
         * @type {any}
         */
        this.scheduled = undefined;
    }
    AsyncScheduler.prototype.flush = function (action) {
        var actions = this.actions;
        if (this.active) {
            actions.push(action);
            return;
        }
        var error;
        this.active = true;
        do {
            if (error = action.execute(action.state, action.delay)) {
                break;
            }
        } while (action = actions.shift()); // exhaust the scheduler queue
        this.active = false;
        if (error) {
            while (action = actions.shift()) {
                action.unsubscribe();
            }
            throw error;
        }
    };
    return AsyncScheduler;
}(Scheduler_1.Scheduler));
exports.AsyncScheduler = AsyncScheduler;
//# sourceMappingURL=AsyncScheduler.js.map

/***/ },
/* 82 */,
/* 83 */,
/* 84 */,
/* 85 */,
/* 86 */,
/* 87 */,
/* 88 */,
/* 89 */,
/* 90 */,
/* 91 */,
/* 92 */,
/* 93 */,
/* 94 */,
/* 95 */,
/* 96 */,
/* 97 */,
/* 98 */,
/* 99 */,
/* 100 */,
/* 101 */,
/* 102 */,
/* 103 */,
/* 104 */,
/* 105 */,
/* 106 */,
/* 107 */,
/* 108 */,
/* 109 */,
/* 110 */,
/* 111 */,
/* 112 */,
/* 113 */,
/* 114 */,
/* 115 */,
/* 116 */,
/* 117 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(exports, "a", function() { return PageScrollUtilService; });
/**
 * Created by sebastianfuss on 02.09.16.
 */
var PageScrollUtilService = (function () {
    function PageScrollUtilService() {
    }
    /**
     * Util method to check whether a given variable is either undefined or null
     * @param variable
     * @returns {boolean} true the variable is undefined or null
     */
    PageScrollUtilService.isUndefinedOrNull = function (variable) {
        return (typeof variable === 'undefined') || variable === undefined || variable === null;
    };
    PageScrollUtilService.extractElementPosition = function (document, scrollTargetElement) {
        var body = document.body;
        var docEl = document.documentElement;
        var windowPageYOffset = document.defaultView && document.defaultView.pageYOffset || undefined;
        var windowPageXOffset = document.defaultView && document.defaultView.pageXOffset || undefined;
        var scrollTop = windowPageYOffset || docEl.scrollTop || body.scrollTop;
        var scrollLeft = windowPageXOffset || docEl.scrollLeft || body.scrollLeft;
        var clientTop = docEl.clientTop || body.clientTop || 0;
        var clientLeft = docEl.clientLeft || body.clientLeft || 0;
        if (PageScrollUtilService.isUndefinedOrNull(scrollTargetElement)) {
            // No element found, so return the current position to not cause any change in scroll position
            return { top: scrollTop, left: scrollLeft };
        }
        var box = scrollTargetElement.getBoundingClientRect();
        var top = box.top + scrollTop - clientTop;
        var left = box.left + scrollLeft - clientLeft;
        return { top: Math.round(top), left: Math.round(left) };
    };
    return PageScrollUtilService;
}());
//# sourceMappingURL=ng2-page-scroll-util.service.js.map

/***/ },
/* 118 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
"use strict";
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var Subject_1 = __webpack_require__(10);
var Subscription_1 = __webpack_require__(15);
/**
 * @class AsyncSubject<T>
 */
var AsyncSubject = (function (_super) {
    __extends(AsyncSubject, _super);
    function AsyncSubject() {
        _super.apply(this, arguments);
        this.value = null;
        this.hasNext = false;
        this.hasCompleted = false;
    }
    AsyncSubject.prototype._subscribe = function (subscriber) {
        if (this.hasCompleted && this.hasNext) {
            subscriber.next(this.value);
            subscriber.complete();
            return Subscription_1.Subscription.EMPTY;
        }
        else if (this.hasError) {
            subscriber.error(this.thrownError);
            return Subscription_1.Subscription.EMPTY;
        }
        return _super.prototype._subscribe.call(this, subscriber);
    };
    AsyncSubject.prototype.next = function (value) {
        if (!this.hasCompleted) {
            this.value = value;
            this.hasNext = true;
        }
    };
    AsyncSubject.prototype.complete = function () {
        this.hasCompleted = true;
        if (this.hasNext) {
            _super.prototype.next.call(this, this.value);
        }
        _super.prototype.complete.call(this);
    };
    return AsyncSubject;
}(Subject_1.Subject));
exports.AsyncSubject = AsyncSubject;
//# sourceMappingURL=AsyncSubject.js.map

/***/ },
/* 119 */,
/* 120 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
"use strict";
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var Subject_1 = __webpack_require__(10);
var queue_1 = __webpack_require__(418);
var observeOn_1 = __webpack_require__(298);
/**
 * @class ReplaySubject<T>
 */
var ReplaySubject = (function (_super) {
    __extends(ReplaySubject, _super);
    function ReplaySubject(bufferSize, windowTime, scheduler) {
        if (bufferSize === void 0) { bufferSize = Number.POSITIVE_INFINITY; }
        if (windowTime === void 0) { windowTime = Number.POSITIVE_INFINITY; }
        _super.call(this);
        this.scheduler = scheduler;
        this._events = [];
        this._bufferSize = bufferSize < 1 ? 1 : bufferSize;
        this._windowTime = windowTime < 1 ? 1 : windowTime;
    }
    ReplaySubject.prototype.next = function (value) {
        var now = this._getNow();
        this._events.push(new ReplayEvent(now, value));
        this._trimBufferThenGetEvents();
        _super.prototype.next.call(this, value);
    };
    ReplaySubject.prototype._subscribe = function (subscriber) {
        var _events = this._trimBufferThenGetEvents();
        var scheduler = this.scheduler;
        if (scheduler) {
            subscriber.add(subscriber = new observeOn_1.ObserveOnSubscriber(subscriber, scheduler));
        }
        var len = _events.length;
        for (var i = 0; i < len && !subscriber.closed; i++) {
            subscriber.next(_events[i].value);
        }
        return _super.prototype._subscribe.call(this, subscriber);
    };
    ReplaySubject.prototype._getNow = function () {
        return (this.scheduler || queue_1.queue).now();
    };
    ReplaySubject.prototype._trimBufferThenGetEvents = function () {
        var now = this._getNow();
        var _bufferSize = this._bufferSize;
        var _windowTime = this._windowTime;
        var _events = this._events;
        var eventsCount = _events.length;
        var spliceCount = 0;
        // Trim events that fall out of the time window.
        // Start at the front of the list. Break early once
        // we encounter an event that falls within the window.
        while (spliceCount < eventsCount) {
            if ((now - _events[spliceCount].time) < _windowTime) {
                break;
            }
            spliceCount++;
        }
        if (eventsCount > _bufferSize) {
            spliceCount = Math.max(spliceCount, eventsCount - _bufferSize);
        }
        if (spliceCount > 0) {
            _events.splice(0, spliceCount);
        }
        return _events;
    };
    return ReplaySubject;
}(Subject_1.Subject));
exports.ReplaySubject = ReplaySubject;
var ReplayEvent = (function () {
    function ReplayEvent(time, value) {
        this.time = time;
        this.value = value;
    }
    return ReplayEvent;
}());
//# sourceMappingURL=ReplaySubject.js.map

/***/ },
/* 121 */,
/* 122 */,
/* 123 */,
/* 124 */,
/* 125 */
/***/ function(module, exports) {

"use strict";
"use strict";
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
/**
 * An error thrown when an element was queried at a certain index of an
 * Observable, but no such index or position exists in that sequence.
 *
 * @see {@link elementAt}
 * @see {@link take}
 * @see {@link takeLast}
 *
 * @class ArgumentOutOfRangeError
 */
var ArgumentOutOfRangeError = (function (_super) {
    __extends(ArgumentOutOfRangeError, _super);
    function ArgumentOutOfRangeError() {
        var err = _super.call(this, 'argument out of range');
        this.name = err.name = 'ArgumentOutOfRangeError';
        this.stack = err.stack;
        this.message = err.message;
    }
    return ArgumentOutOfRangeError;
}(Error));
exports.ArgumentOutOfRangeError = ArgumentOutOfRangeError;
//# sourceMappingURL=ArgumentOutOfRangeError.js.map

/***/ },
/* 126 */
/***/ function(module, exports) {

"use strict";
"use strict";
function isDate(value) {
    return value instanceof Date && !isNaN(+value);
}
exports.isDate = isDate;
//# sourceMappingURL=isDate.js.map

/***/ },
/* 127 */
/***/ function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(setImmediate, clearImmediate) {var nextTick = __webpack_require__(397).nextTick;
var apply = Function.prototype.apply;
var slice = Array.prototype.slice;
var immediateIds = {};
var nextImmediateId = 0;

// DOM APIs, for completeness

exports.setTimeout = function() {
  return new Timeout(apply.call(setTimeout, window, arguments), clearTimeout);
};
exports.setInterval = function() {
  return new Timeout(apply.call(setInterval, window, arguments), clearInterval);
};
exports.clearTimeout =
exports.clearInterval = function(timeout) { timeout.close(); };

function Timeout(id, clearFn) {
  this._id = id;
  this._clearFn = clearFn;
}
Timeout.prototype.unref = Timeout.prototype.ref = function() {};
Timeout.prototype.close = function() {
  this._clearFn.call(window, this._id);
};

// Does not start the time, just sets up the members needed.
exports.enroll = function(item, msecs) {
  clearTimeout(item._idleTimeoutId);
  item._idleTimeout = msecs;
};

exports.unenroll = function(item) {
  clearTimeout(item._idleTimeoutId);
  item._idleTimeout = -1;
};

exports._unrefActive = exports.active = function(item) {
  clearTimeout(item._idleTimeoutId);

  var msecs = item._idleTimeout;
  if (msecs >= 0) {
    item._idleTimeoutId = setTimeout(function onTimeout() {
      if (item._onTimeout)
        item._onTimeout();
    }, msecs);
  }
};

// That's not how node.js implements it but the exposed api is the same.
exports.setImmediate = typeof setImmediate === "function" ? setImmediate : function(fn) {
  var id = nextImmediateId++;
  var args = arguments.length < 2 ? false : slice.call(arguments, 1);

  immediateIds[id] = true;

  nextTick(function onNextTick() {
    if (immediateIds[id]) {
      // fn.call() is faster so we optimize for the common use-case
      // @see http://jsperf.com/call-apply-segu
      if (args) {
        fn.apply(null, args);
      } else {
        fn.call(null);
      }
      // Prevent ids from leaking
      exports.clearImmediate(id);
    }
  });

  return id;
};

exports.clearImmediate = typeof clearImmediate === "function" ? clearImmediate : function(id) {
  delete immediateIds[id];
};
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(127).setImmediate, __webpack_require__(127).clearImmediate))

/***/ },
/* 128 */,
/* 129 */,
/* 130 */,
/* 131 */,
/* 132 */,
/* 133 */,
/* 134 */,
/* 135 */,
/* 136 */,
/* 137 */,
/* 138 */,
/* 139 */,
/* 140 */,
/* 141 */,
/* 142 */,
/* 143 */,
/* 144 */,
/* 145 */,
/* 146 */,
/* 147 */,
/* 148 */,
/* 149 */,
/* 150 */,
/* 151 */,
/* 152 */,
/* 153 */,
/* 154 */,
/* 155 */,
/* 156 */,
/* 157 */,
/* 158 */,
/* 159 */,
/* 160 */,
/* 161 */,
/* 162 */,
/* 163 */,
/* 164 */,
/* 165 */,
/* 166 */,
/* 167 */,
/* 168 */,
/* 169 */,
/* 170 */,
/* 171 */,
/* 172 */,
/* 173 */,
/* 174 */,
/* 175 */,
/* 176 */,
/* 177 */,
/* 178 */,
/* 179 */,
/* 180 */,
/* 181 */,
/* 182 */,
/* 183 */,
/* 184 */,
/* 185 */,
/* 186 */,
/* 187 */,
/* 188 */,
/* 189 */,
/* 190 */,
/* 191 */,
/* 192 */,
/* 193 */,
/* 194 */,
/* 195 */,
/* 196 */,
/* 197 */,
/* 198 */,
/* 199 */,
/* 200 */,
/* 201 */,
/* 202 */,
/* 203 */,
/* 204 */,
/* 205 */,
/* 206 */,
/* 207 */,
/* 208 */,
/* 209 */,
/* 210 */,
/* 211 */,
/* 212 */,
/* 213 */,
/* 214 */,
/* 215 */,
/* 216 */,
/* 217 */,
/* 218 */,
/* 219 */,
/* 220 */,
/* 221 */,
/* 222 */,
/* 223 */,
/* 224 */,
/* 225 */,
/* 226 */,
/* 227 */,
/* 228 */,
/* 229 */,
/* 230 */,
/* 231 */,
/* 232 */,
/* 233 */,
/* 234 */,
/* 235 */,
/* 236 */,
/* 237 */,
/* 238 */,
/* 239 */,
/* 240 */,
/* 241 */,
/* 242 */,
/* 243 */,
/* 244 */,
/* 245 */,
/* 246 */,
/* 247 */,
/* 248 */,
/* 249 */,
/* 250 */,
/* 251 */,
/* 252 */,
/* 253 */,
/* 254 */,
/* 255 */,
/* 256 */,
/* 257 */,
/* 258 */,
/* 259 */,
/* 260 */,
/* 261 */,
/* 262 */,
/* 263 */,
/* 264 */,
/* 265 */,
/* 266 */,
/* 267 */,
/* 268 */,
/* 269 */,
/* 270 */,
/* 271 */,
/* 272 */,
/* 273 */,
/* 274 */,
/* 275 */,
/* 276 */,
/* 277 */,
/* 278 */,
/* 279 */,
/* 280 */,
/* 281 */,
/* 282 */,
/* 283 */,
/* 284 */,
/* 285 */,
/* 286 */,
/* 287 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(exports, "b", function() { return EasingLogic; });
/* harmony export (binding) */ __webpack_require__.d(exports, "a", function() { return PageScrollConfig; });
var EasingLogic = (function () {
    function EasingLogic() {
    }
    return EasingLogic;
}());
var PageScrollConfig = (function () {
    function PageScrollConfig() {
    }
    Object.defineProperty(PageScrollConfig, "defaultEasingLogic", {
        // Getter and setter to avoid auto completion to suggest calling the method
        get: function () {
            return PageScrollConfig._easingLogic;
        },
        set: function (easingLogic) {
            PageScrollConfig._easingLogic = easingLogic;
        },
        enumerable: true,
        configurable: true
    });
    /**
     * The number of milliseconds to wait till updating the scroll position again.
     * Small amounts may produce smoother animations but require more processing power.
     * @type {number}
     * @private
     */
    PageScrollConfig._interval = 10;
    PageScrollConfig._defaultNamespace = 'default';
    /**
     * The duration how long a scrollTo animation should last by default.
     * May be overridden using the page-scroll-duration attribute on a single ng2PageScroll instance.
     * @type {number}
     */
    PageScrollConfig.defaultDuration = 1250;
    /**
     * The distance in pixels above scroll target where the animation should stop. Setting a positive number results in
     * the scroll target being more in the middle of the screen, negative numbers will produce scrolling "too far"
     * @type {number}
     */
    PageScrollConfig.defaultScrollOffset = 0;
    /**
     * The events that are listened to on the body to decide whether a scroll animation has been interfered/interrupted by the user
     * @type {string[]}
     * @private
     */
    PageScrollConfig._interruptEvents = ['mousedown', 'wheel', 'DOMMouseScroll', 'mousewheel', 'keyup', 'touchmove'];
    /**
     * The keys that are considered to interrupt a scroll animation (mainly the arrow keys). All other key presses will not stop the
     * scroll animation.
     * @type {number[]}
     * @private
     */
    PageScrollConfig._interruptKeys = [33, 34, 35, 36, 38, 40];
    /**
     * Whether a scroll animation should be interruptible by user interaction (true) or not (false). If the user performs an
     * interrupting event while a scroll animation takes place, the scroll animation stops.
     * @type {boolean}
     */
    PageScrollConfig.defaultInterruptible = true;
    PageScrollConfig._easingLogic = {
        ease: function (t, b, c, d) {
            // Linear easing
            return c * t / d + b;
        }
    };
    return PageScrollConfig;
}());
//# sourceMappingURL=ng2-page-scroll-config.js.map

/***/ },
/* 288 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__ng2_page_scroll_config__ = __webpack_require__(287);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ng2_page_scroll_util_service__ = __webpack_require__(117);
/* harmony export (binding) */ __webpack_require__.d(exports, "a", function() { return PageScrollService; });



var PageScrollService = (function () {
    function PageScrollService() {
        var _this = this;
        this.runningInstances = [];
        this.onInterrupted = {
            report: function (event, pageScrollInstance) {
                if (pageScrollInstance.interruptible &&
                    (event.type !== 'keyup' || __WEBPACK_IMPORTED_MODULE_1__ng2_page_scroll_config__["a" /* PageScrollConfig */]._interruptKeys.indexOf(event.keyCode) >= 0)) {
                    _this.stopAll(pageScrollInstance.namespace);
                }
            }
        };
        if (PageScrollService.instanceCounter > 0 && __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["isDevMode"])()) {
            console.warn('An instance of PageScrollService already exists, usually ' +
                'including one provider should be enough, so double check.');
        }
        PageScrollService.instanceCounter++;
    }
    PageScrollService.prototype.stopInternal = function (interrupted, pageScrollInstance) {
        var index = this.runningInstances.indexOf(pageScrollInstance);
        if (index >= 0) {
            this.runningInstances.splice(index, 1);
        }
        if (pageScrollInstance.interruptListenersAttached) {
            pageScrollInstance.detachInterruptListeners();
        }
        if (pageScrollInstance.timer) {
            clearInterval(pageScrollInstance.timer);
            pageScrollInstance.fireEvent(!interrupted);
            return true;
        }
        return false;
    };
    /**
     * Start a scroll animation. All properties of the animation are stored in the given {@link PageScrollInstance} object.
     *
     * This is the core functionality of the whole library.
     *
     * @param pageScrollInstance
     */
    PageScrollService.prototype.start = function (pageScrollInstance) {
        var _this = this;
        // Stop all possibly running scroll animations in the same namespace
        this.stopAll(pageScrollInstance.namespace);
        if (pageScrollInstance.scrollTopSources === null || pageScrollInstance.scrollTopSources.length === 0) {
            // No scrollingViews specified, thus we can't animate anything
            if (__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["isDevMode"])()) {
                console.warn('No ScrollTopSource specified, this ng2-page-scroll does not know which DOM elements to scroll');
            }
            return;
        }
        var startScrollTopFound = false;
        // Get the start scroll position from the scrollingViews (e.g. if the user already scrolled down the content)
        pageScrollInstance.scrollTopSources.forEach(function (scrollingView) {
            if (__WEBPACK_IMPORTED_MODULE_2__ng2_page_scroll_util_service__["a" /* PageScrollUtilService */].isUndefinedOrNull(scrollingView)) {
                return;
            }
            // Get the scrolltop value of the first scrollTopSource that returns a value for its "scrollTop" property
            // that is not undefined and unequal to 0
            if (!startScrollTopFound && scrollingView.scrollTop) {
                // We found a scrollingView that does not have scrollTop 0
                // Return the scrollTop value, as this will be our startScrollTop
                pageScrollInstance.startScrollTop = scrollingView.scrollTop;
                startScrollTopFound = true;
            }
        });
        var pageScrollOffset = pageScrollInstance.getCurrentOffset();
        // Calculate the target position that the scroll animation should go to
        pageScrollInstance.targetScrollTop = Math.round(pageScrollInstance.extractScrollTargetPosition().top - pageScrollOffset);
        // Calculate the distance we need to go in total
        pageScrollInstance.distanceToScroll = pageScrollInstance.targetScrollTop - pageScrollInstance.startScrollTop;
        if (isNaN(pageScrollInstance.distanceToScroll)) {
            // We weren't able to find the target position, maybe the element does not exist?
            if (__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["isDevMode"])()) {
                console.log('Scrolling not possible, as we can\'t find the specified target');
            }
            pageScrollInstance.fireEvent(false);
            return;
        }
        if (pageScrollInstance.distanceToScroll === 0) {
            // We're at the final destination already
            // OR we need to scroll down but are already at the end
            // OR we need to scroll up but are at the top already
            if (__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["isDevMode"])()) {
                console.log('Scrolling not possible, as we can\'t get any closer to the destination');
            }
            pageScrollInstance.fireEvent(true);
            return;
        }
        if (pageScrollInstance.duration <= __WEBPACK_IMPORTED_MODULE_1__ng2_page_scroll_config__["a" /* PageScrollConfig */]._interval) {
            // We should go there directly, as our "animation" would have one big step
            // only anyway and this way we save the interval stuff
            if (__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["isDevMode"])()) {
                console.log('Scroll duration shorter that interval length, jumping to target');
            }
            pageScrollInstance.setScrollTopPosition(pageScrollInstance.targetScrollTop);
            pageScrollInstance.fireEvent(true);
            return;
        }
        // Register the interrupt listeners if we want an interruptible scroll animation
        if (pageScrollInstance.interruptible ||
            (__WEBPACK_IMPORTED_MODULE_2__ng2_page_scroll_util_service__["a" /* PageScrollUtilService */].isUndefinedOrNull(pageScrollInstance.interruptible) && __WEBPACK_IMPORTED_MODULE_1__ng2_page_scroll_config__["a" /* PageScrollConfig */].defaultInterruptible)) {
            pageScrollInstance.attachInterruptListeners(this.onInterrupted);
        }
        // Let's get started, get the start time...
        pageScrollInstance.startTime = new Date().getTime();
        // .. and calculate the end time (when we need to finish at last)
        pageScrollInstance.endTime = pageScrollInstance.startTime + pageScrollInstance.duration;
        pageScrollInstance.timer = setInterval(function (_pageScrollInstance) {
            // Take the current time
            var currentTime = new Date().getTime();
            // Determine the new scroll position
            var newScrollTop;
            var stopNow = false;
            if (_pageScrollInstance.endTime <= currentTime) {
                // We're over the time already, so go the targetScrollTop (aka destination)
                newScrollTop = _pageScrollInstance.targetScrollTop;
                stopNow = true;
            }
            else {
                // Calculate the scrollTop position based on the current time using the easing function
                newScrollTop = Math.round(_pageScrollInstance.easingLogic.ease(currentTime - _pageScrollInstance.startTime, _pageScrollInstance.startScrollTop, _pageScrollInstance.distanceToScroll, _pageScrollInstance.duration));
            }
            // Set the new scrollTop to all scrollTopSource elements
            if (!_pageScrollInstance.setScrollTopPosition(newScrollTop)) {
                // Setting the new scrollTop value failed for all ScrollingViews
                // early stop the scroll animation to save resources
                stopNow = true;
            }
            // At the end do the internal stop maintenance and fire the pageScrollFinish event
            // (otherwise the event might arrive at "too early")
            if (stopNow) {
                _this.stopInternal(false, _pageScrollInstance);
            }
        }, __WEBPACK_IMPORTED_MODULE_1__ng2_page_scroll_config__["a" /* PageScrollConfig */]._interval, pageScrollInstance);
        // Register the instance as running one
        this.runningInstances.push(pageScrollInstance);
    };
    /**
     * Stop all running scroll animations. Optionally limit to stop only the ones of specific namespace.
     *
     * @param namespace
     * @returns {boolean}
     */
    PageScrollService.prototype.stopAll = function (namespace) {
        var _this = this;
        if (this.runningInstances.length > 0) {
            var stoppedSome_1 = false;
            this.runningInstances.forEach(function (pageScrollInstance, index) {
                if (__WEBPACK_IMPORTED_MODULE_2__ng2_page_scroll_util_service__["a" /* PageScrollUtilService */].isUndefinedOrNull(namespace) || namespace.length === 0 ||
                    pageScrollInstance.namespace === namespace) {
                    stoppedSome_1 = true;
                    _this.stopInternal(true, pageScrollInstance);
                }
            });
            return stoppedSome_1;
        }
        return false;
    };
    PageScrollService.prototype.stop = function (pageScrollInstance) {
        return this.stopInternal(true, pageScrollInstance);
    };
    PageScrollService.instanceCounter = 0;
    PageScrollService.decorators = [
        { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"] },
    ];
    /** @nocollapse */
    PageScrollService.ctorParameters = [];
    return PageScrollService;
}());
//# sourceMappingURL=ng2-page-scroll.service.js.map

/***/ },
/* 289 */
/***/ function(module, exports) {

"use strict";
"use strict";var ShareButton=function(){function t(t,r,s){this.provider=t,this.template=r,this.classes=s}return t}();exports.ShareButton=ShareButton;var ShareArgs=function(){function t(t,r,s,e,i){this.url=t,this.title=r,this.description=s,this.image=e,this.tags=i}return t}();exports.ShareArgs=ShareArgs;
//# sourceMappingURL=share-buttons.class.js.map


/***/ },
/* 290 */
/***/ function(module, exports) {

"use strict";
"use strict";!function(r){r[r.FACEBOOK=0]="FACEBOOK",r[r.TWITTER=1]="TWITTER",r[r.REDDIT=2]="REDDIT",r[r.STUMBLEUPON=3]="STUMBLEUPON",r[r.LINKEDIN=4]="LINKEDIN",r[r.GOOGLEPLUS=5]="GOOGLEPLUS",r[r.TUMBLR=6]="TUMBLR",r[r.PINTEREST=7]="PINTEREST"}(exports.ShareProvider||(exports.ShareProvider={}));var ShareProvider=exports.ShareProvider;
//# sourceMappingURL=share-provider.enum.js.map


/***/ },
/* 291 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
"use strict";
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var Subject_1 = __webpack_require__(10);
var Observable_1 = __webpack_require__(0);
var Subscriber_1 = __webpack_require__(3);
var Subscription_1 = __webpack_require__(15);
/**
 * @class ConnectableObservable<T>
 */
var ConnectableObservable = (function (_super) {
    __extends(ConnectableObservable, _super);
    function ConnectableObservable(source, subjectFactory) {
        _super.call(this);
        this.source = source;
        this.subjectFactory = subjectFactory;
        this._refCount = 0;
    }
    ConnectableObservable.prototype._subscribe = function (subscriber) {
        return this.getSubject().subscribe(subscriber);
    };
    ConnectableObservable.prototype.getSubject = function () {
        var subject = this._subject;
        if (!subject || subject.isStopped) {
            this._subject = this.subjectFactory();
        }
        return this._subject;
    };
    ConnectableObservable.prototype.connect = function () {
        var connection = this._connection;
        if (!connection) {
            connection = this._connection = new Subscription_1.Subscription();
            connection.add(this.source
                .subscribe(new ConnectableSubscriber(this.getSubject(), this)));
            if (connection.closed) {
                this._connection = null;
                connection = Subscription_1.Subscription.EMPTY;
            }
            else {
                this._connection = connection;
            }
        }
        return connection;
    };
    ConnectableObservable.prototype.refCount = function () {
        return this.lift(new RefCountOperator(this));
    };
    return ConnectableObservable;
}(Observable_1.Observable));
exports.ConnectableObservable = ConnectableObservable;
var ConnectableSubscriber = (function (_super) {
    __extends(ConnectableSubscriber, _super);
    function ConnectableSubscriber(destination, connectable) {
        _super.call(this, destination);
        this.connectable = connectable;
    }
    ConnectableSubscriber.prototype._error = function (err) {
        this._unsubscribe();
        _super.prototype._error.call(this, err);
    };
    ConnectableSubscriber.prototype._complete = function () {
        this._unsubscribe();
        _super.prototype._complete.call(this);
    };
    ConnectableSubscriber.prototype._unsubscribe = function () {
        var connectable = this.connectable;
        if (connectable) {
            this.connectable = null;
            var connection = connectable._connection;
            connectable._refCount = 0;
            connectable._subject = null;
            connectable._connection = null;
            if (connection) {
                connection.unsubscribe();
            }
        }
    };
    return ConnectableSubscriber;
}(Subject_1.SubjectSubscriber));
var RefCountOperator = (function () {
    function RefCountOperator(connectable) {
        this.connectable = connectable;
    }
    RefCountOperator.prototype.call = function (subscriber, source) {
        var connectable = this.connectable;
        connectable._refCount++;
        var refCounter = new RefCountSubscriber(subscriber, connectable);
        var subscription = source._subscribe(refCounter);
        if (!refCounter.closed) {
            refCounter.connection = connectable.connect();
        }
        return subscription;
    };
    return RefCountOperator;
}());
var RefCountSubscriber = (function (_super) {
    __extends(RefCountSubscriber, _super);
    function RefCountSubscriber(destination, connectable) {
        _super.call(this, destination);
        this.connectable = connectable;
    }
    RefCountSubscriber.prototype._unsubscribe = function () {
        var connectable = this.connectable;
        if (!connectable) {
            this.connection = null;
            return;
        }
        this.connectable = null;
        var refCount = connectable._refCount;
        if (refCount <= 0) {
            this.connection = null;
            return;
        }
        connectable._refCount = refCount - 1;
        if (refCount > 1) {
            this.connection = null;
            return;
        }
        ///
        // Compare the local RefCountSubscriber's connection Subscription to the
        // connection Subscription on the shared ConnectableObservable. In cases
        // where the ConnectableObservable source synchronously emits values, and
        // the RefCountSubscriber's dowstream Observers synchronously unsubscribe,
        // execution continues to here before the RefCountOperator has a chance to
        // supply the RefCountSubscriber with the shared connection Subscription.
        // For example:
        // ```
        // Observable.range(0, 10)
        //   .publish()
        //   .refCount()
        //   .take(5)
        //   .subscribe();
        // ```
        // In order to account for this case, RefCountSubscriber should only dispose
        // the ConnectableObservable's shared connection Subscription if the
        // connection Subscription exists, *and* either:
        //   a. RefCountSubscriber doesn't have a reference to the shared connection
        //      Subscription yet, or,
        //   b. RefCountSubscriber's connection Subscription reference is identical
        //      to the shared connection Subscription
        ///
        var connection = this.connection;
        var sharedConnection = connectable._connection;
        this.connection = null;
        if (sharedConnection && (!connection || sharedConnection === connection)) {
            sharedConnection.unsubscribe();
        }
    };
    return RefCountSubscriber;
}(Subscriber_1.Subscriber));
//# sourceMappingURL=ConnectableObservable.js.map

/***/ },
/* 292 */,
/* 293 */,
/* 294 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
"use strict";
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var ArrayObservable_1 = __webpack_require__(40);
var isArray_1 = __webpack_require__(32);
var OuterSubscriber_1 = __webpack_require__(6);
var subscribeToResult_1 = __webpack_require__(7);
var none = {};
/**
 * Combines multiple Observables to create an Observable whose values are
 * calculated from the latest values of each of its input Observables.
 *
 * <span class="informal">Whenever any input Observable emits a value, it
 * computes a formula using the latest values from all the inputs, then emits
 * the output of that formula.</span>
 *
 * <img src="./img/combineLatest.png" width="100%">
 *
 * `combineLatest` combines the values from this Observable with values from
 * Observables passed as arguments. This is done by subscribing to each
 * Observable, in order, and collecting an array of each of the most recent
 * values any time any of the input Observables emits, then either taking that
 * array and passing it as arguments to an optional `project` function and
 * emitting the return value of that, or just emitting the array of recent
 * values directly if there is no `project` function.
 *
 * @example <caption>Dynamically calculate the Body-Mass Index from an Observable of weight and one for height</caption>
 * var weight = Rx.Observable.of(70, 72, 76, 79, 75);
 * var height = Rx.Observable.of(1.76, 1.77, 1.78);
 * var bmi = weight.combineLatest(height, (w, h) => w / (h * h));
 * bmi.subscribe(x => console.log('BMI is ' + x));
 *
 * @see {@link combineAll}
 * @see {@link merge}
 * @see {@link withLatestFrom}
 *
 * @param {Observable} other An input Observable to combine with the source
 * Observable. More than one input Observables may be given as argument.
 * @param {function} [project] An optional function to project the values from
 * the combined latest values into a new value on the output Observable.
 * @return {Observable} An Observable of projected values from the most recent
 * values from each input Observable, or an array of the most recent values from
 * each input Observable.
 * @method combineLatest
 * @owner Observable
 */
function combineLatest() {
    var observables = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        observables[_i - 0] = arguments[_i];
    }
    var project = null;
    if (typeof observables[observables.length - 1] === 'function') {
        project = observables.pop();
    }
    // if the first and only other argument besides the resultSelector is an array
    // assume it's been called with `combineLatest([obs1, obs2, obs3], project)`
    if (observables.length === 1 && isArray_1.isArray(observables[0])) {
        observables = observables[0];
    }
    observables.unshift(this);
    return new ArrayObservable_1.ArrayObservable(observables).lift(new CombineLatestOperator(project));
}
exports.combineLatest = combineLatest;
/* tslint:enable:max-line-length */
var CombineLatestOperator = (function () {
    function CombineLatestOperator(project) {
        this.project = project;
    }
    CombineLatestOperator.prototype.call = function (subscriber, source) {
        return source._subscribe(new CombineLatestSubscriber(subscriber, this.project));
    };
    return CombineLatestOperator;
}());
exports.CombineLatestOperator = CombineLatestOperator;
/**
 * We need this JSDoc comment for affecting ESDoc.
 * @ignore
 * @extends {Ignored}
 */
var CombineLatestSubscriber = (function (_super) {
    __extends(CombineLatestSubscriber, _super);
    function CombineLatestSubscriber(destination, project) {
        _super.call(this, destination);
        this.project = project;
        this.active = 0;
        this.values = [];
        this.observables = [];
    }
    CombineLatestSubscriber.prototype._next = function (observable) {
        this.values.push(none);
        this.observables.push(observable);
    };
    CombineLatestSubscriber.prototype._complete = function () {
        var observables = this.observables;
        var len = observables.length;
        if (len === 0) {
            this.destination.complete();
        }
        else {
            this.active = len;
            this.toRespond = len;
            for (var i = 0; i < len; i++) {
                var observable = observables[i];
                this.add(subscribeToResult_1.subscribeToResult(this, observable, observable, i));
            }
        }
    };
    CombineLatestSubscriber.prototype.notifyComplete = function (unused) {
        if ((this.active -= 1) === 0) {
            this.destination.complete();
        }
    };
    CombineLatestSubscriber.prototype.notifyNext = function (outerValue, innerValue, outerIndex, innerIndex, innerSub) {
        var values = this.values;
        var oldVal = values[outerIndex];
        var toRespond = !this.toRespond
            ? 0
            : oldVal === none ? --this.toRespond : this.toRespond;
        values[outerIndex] = innerValue;
        if (toRespond === 0) {
            if (this.project) {
                this._tryProject(values);
            }
            else {
                this.destination.next(values.slice());
            }
        }
    };
    CombineLatestSubscriber.prototype._tryProject = function (values) {
        var result;
        try {
            result = this.project.apply(this, values);
        }
        catch (err) {
            this.destination.error(err);
            return;
        }
        this.destination.next(result);
    };
    return CombineLatestSubscriber;
}(OuterSubscriber_1.OuterSubscriber));
exports.CombineLatestSubscriber = CombineLatestSubscriber;
//# sourceMappingURL=combineLatest.js.map

/***/ },
/* 295 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
"use strict";
var isScheduler_1 = __webpack_require__(47);
var ArrayObservable_1 = __webpack_require__(40);
var mergeAll_1 = __webpack_require__(64);
/**
 * Creates an output Observable which sequentially emits all values from every
 * given input Observable after the current Observable.
 *
 * <span class="informal">Concatenates multiple Observables together by
 * sequentially emitting their values, one Observable after the other.</span>
 *
 * <img src="./img/concat.png" width="100%">
 *
 * Joins this Observable with multiple other Observables by subscribing to them
 * one at a time, starting with the source, and merging their results into the
 * output Observable. Will wait for each Observable to complete before moving
 * on to the next.
 *
 * @example <caption>Concatenate a timer counting from 0 to 3 with a synchronous sequence from 1 to 10</caption>
 * var timer = Rx.Observable.interval(1000).take(4);
 * var sequence = Rx.Observable.range(1, 10);
 * var result = timer.concat(sequence);
 * result.subscribe(x => console.log(x));
 *
 * @example <caption>Concatenate 3 Observables</caption>
 * var timer1 = Rx.Observable.interval(1000).take(10);
 * var timer2 = Rx.Observable.interval(2000).take(6);
 * var timer3 = Rx.Observable.interval(500).take(10);
 * var result = timer1.concat(timer2, timer3);
 * result.subscribe(x => console.log(x));
 *
 * @see {@link concatAll}
 * @see {@link concatMap}
 * @see {@link concatMapTo}
 *
 * @param {Observable} other An input Observable to concatenate after the source
 * Observable. More than one input Observables may be given as argument.
 * @param {Scheduler} [scheduler=null] An optional Scheduler to schedule each
 * Observable subscription on.
 * @return {Observable} All values of each passed Observable merged into a
 * single Observable, in order, in serial fashion.
 * @method concat
 * @owner Observable
 */
function concat() {
    var observables = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        observables[_i - 0] = arguments[_i];
    }
    return concatStatic.apply(void 0, [this].concat(observables));
}
exports.concat = concat;
/* tslint:enable:max-line-length */
/**
 * Creates an output Observable which sequentially emits all values from every
 * given input Observable after the current Observable.
 *
 * <span class="informal">Concatenates multiple Observables together by
 * sequentially emitting their values, one Observable after the other.</span>
 *
 * <img src="./img/concat.png" width="100%">
 *
 * Joins multiple Observables together by subscribing to them one at a time and
 * merging their results into the output Observable. Will wait for each
 * Observable to complete before moving on to the next.
 *
 * @example <caption>Concatenate a timer counting from 0 to 3 with a synchronous sequence from 1 to 10</caption>
 * var timer = Rx.Observable.interval(1000).take(4);
 * var sequence = Rx.Observable.range(1, 10);
 * var result = Rx.Observable.concat(timer, sequence);
 * result.subscribe(x => console.log(x));
 *
 * @example <caption>Concatenate 3 Observables</caption>
 * var timer1 = Rx.Observable.interval(1000).take(10);
 * var timer2 = Rx.Observable.interval(2000).take(6);
 * var timer3 = Rx.Observable.interval(500).take(10);
 * var result = Rx.Observable.concat(timer1, timer2, timer3);
 * result.subscribe(x => console.log(x));
 *
 * @see {@link concatAll}
 * @see {@link concatMap}
 * @see {@link concatMapTo}
 *
 * @param {Observable} input1 An input Observable to concatenate with others.
 * @param {Observable} input2 An input Observable to concatenate with others.
 * More than one input Observables may be given as argument.
 * @param {Scheduler} [scheduler=null] An optional Scheduler to schedule each
 * Observable subscription on.
 * @return {Observable} All values of each passed Observable merged into a
 * single Observable, in order, in serial fashion.
 * @static true
 * @name concat
 * @owner Observable
 */
function concatStatic() {
    var observables = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        observables[_i - 0] = arguments[_i];
    }
    var scheduler = null;
    var args = observables;
    if (isScheduler_1.isScheduler(args[observables.length - 1])) {
        scheduler = args.pop();
    }
    return new ArrayObservable_1.ArrayObservable(observables, scheduler).lift(new mergeAll_1.MergeAllOperator(1));
}
exports.concatStatic = concatStatic;
//# sourceMappingURL=concat.js.map

/***/ },
/* 296 */,
/* 297 */,
/* 298 */,
/* 299 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
"use strict";
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var ArrayObservable_1 = __webpack_require__(40);
var isArray_1 = __webpack_require__(32);
var Subscriber_1 = __webpack_require__(3);
var OuterSubscriber_1 = __webpack_require__(6);
var subscribeToResult_1 = __webpack_require__(7);
var iterator_1 = __webpack_require__(82);
/**
 * @param observables
 * @return {Observable<R>}
 * @method zip
 * @owner Observable
 */
function zipProto() {
    var observables = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        observables[_i - 0] = arguments[_i];
    }
    observables.unshift(this);
    return zipStatic.apply(this, observables);
}
exports.zipProto = zipProto;
/* tslint:enable:max-line-length */
/**
 * @param observables
 * @return {Observable<R>}
 * @static true
 * @name zip
 * @owner Observable
 */
function zipStatic() {
    var observables = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        observables[_i - 0] = arguments[_i];
    }
    var project = observables[observables.length - 1];
    if (typeof project === 'function') {
        observables.pop();
    }
    return new ArrayObservable_1.ArrayObservable(observables).lift(new ZipOperator(project));
}
exports.zipStatic = zipStatic;
var ZipOperator = (function () {
    function ZipOperator(project) {
        this.project = project;
    }
    ZipOperator.prototype.call = function (subscriber, source) {
        return source._subscribe(new ZipSubscriber(subscriber, this.project));
    };
    return ZipOperator;
}());
exports.ZipOperator = ZipOperator;
/**
 * We need this JSDoc comment for affecting ESDoc.
 * @ignore
 * @extends {Ignored}
 */
var ZipSubscriber = (function (_super) {
    __extends(ZipSubscriber, _super);
    function ZipSubscriber(destination, project, values) {
        if (values === void 0) { values = Object.create(null); }
        _super.call(this, destination);
        this.index = 0;
        this.iterators = [];
        this.active = 0;
        this.project = (typeof project === 'function') ? project : null;
        this.values = values;
    }
    ZipSubscriber.prototype._next = function (value) {
        var iterators = this.iterators;
        var index = this.index++;
        if (isArray_1.isArray(value)) {
            iterators.push(new StaticArrayIterator(value));
        }
        else if (typeof value[iterator_1.$$iterator] === 'function') {
            iterators.push(new StaticIterator(value[iterator_1.$$iterator]()));
        }
        else {
            iterators.push(new ZipBufferIterator(this.destination, this, value, index));
        }
    };
    ZipSubscriber.prototype._complete = function () {
        var iterators = this.iterators;
        var len = iterators.length;
        this.active = len;
        for (var i = 0; i < len; i++) {
            var iterator = iterators[i];
            if (iterator.stillUnsubscribed) {
                this.add(iterator.subscribe(iterator, i));
            }
            else {
                this.active--; // not an observable
            }
        }
    };
    ZipSubscriber.prototype.notifyInactive = function () {
        this.active--;
        if (this.active === 0) {
            this.destination.complete();
        }
    };
    ZipSubscriber.prototype.checkIterators = function () {
        var iterators = this.iterators;
        var len = iterators.length;
        var destination = this.destination;
        // abort if not all of them have values
        for (var i = 0; i < len; i++) {
            var iterator = iterators[i];
            if (typeof iterator.hasValue === 'function' && !iterator.hasValue()) {
                return;
            }
        }
        var shouldComplete = false;
        var args = [];
        for (var i = 0; i < len; i++) {
            var iterator = iterators[i];
            var result = iterator.next();
            // check to see if it's completed now that you've gotten
            // the next value.
            if (iterator.hasCompleted()) {
                shouldComplete = true;
            }
            if (result.done) {
                destination.complete();
                return;
            }
            args.push(result.value);
        }
        if (this.project) {
            this._tryProject(args);
        }
        else {
            destination.next(args);
        }
        if (shouldComplete) {
            destination.complete();
        }
    };
    ZipSubscriber.prototype._tryProject = function (args) {
        var result;
        try {
            result = this.project.apply(this, args);
        }
        catch (err) {
            this.destination.error(err);
            return;
        }
        this.destination.next(result);
    };
    return ZipSubscriber;
}(Subscriber_1.Subscriber));
exports.ZipSubscriber = ZipSubscriber;
var StaticIterator = (function () {
    function StaticIterator(iterator) {
        this.iterator = iterator;
        this.nextResult = iterator.next();
    }
    StaticIterator.prototype.hasValue = function () {
        return true;
    };
    StaticIterator.prototype.next = function () {
        var result = this.nextResult;
        this.nextResult = this.iterator.next();
        return result;
    };
    StaticIterator.prototype.hasCompleted = function () {
        var nextResult = this.nextResult;
        return nextResult && nextResult.done;
    };
    return StaticIterator;
}());
var StaticArrayIterator = (function () {
    function StaticArrayIterator(array) {
        this.array = array;
        this.index = 0;
        this.length = 0;
        this.length = array.length;
    }
    StaticArrayIterator.prototype[iterator_1.$$iterator] = function () {
        return this;
    };
    StaticArrayIterator.prototype.next = function (value) {
        var i = this.index++;
        var array = this.array;
        return i < this.length ? { value: array[i], done: false } : { value: null, done: true };
    };
    StaticArrayIterator.prototype.hasValue = function () {
        return this.array.length > this.index;
    };
    StaticArrayIterator.prototype.hasCompleted = function () {
        return this.array.length === this.index;
    };
    return StaticArrayIterator;
}());
/**
 * We need this JSDoc comment for affecting ESDoc.
 * @ignore
 * @extends {Ignored}
 */
var ZipBufferIterator = (function (_super) {
    __extends(ZipBufferIterator, _super);
    function ZipBufferIterator(destination, parent, observable, index) {
        _super.call(this, destination);
        this.parent = parent;
        this.observable = observable;
        this.index = index;
        this.stillUnsubscribed = true;
        this.buffer = [];
        this.isComplete = false;
    }
    ZipBufferIterator.prototype[iterator_1.$$iterator] = function () {
        return this;
    };
    // NOTE: there is actually a name collision here with Subscriber.next and Iterator.next
    //    this is legit because `next()` will never be called by a subscription in this case.
    ZipBufferIterator.prototype.next = function () {
        var buffer = this.buffer;
        if (buffer.length === 0 && this.isComplete) {
            return { value: null, done: true };
        }
        else {
            return { value: buffer.shift(), done: false };
        }
    };
    ZipBufferIterator.prototype.hasValue = function () {
        return this.buffer.length > 0;
    };
    ZipBufferIterator.prototype.hasCompleted = function () {
        return this.buffer.length === 0 && this.isComplete;
    };
    ZipBufferIterator.prototype.notifyComplete = function () {
        if (this.buffer.length > 0) {
            this.isComplete = true;
            this.parent.notifyInactive();
        }
        else {
            this.destination.complete();
        }
    };
    ZipBufferIterator.prototype.notifyNext = function (outerValue, innerValue, outerIndex, innerIndex, innerSub) {
        this.buffer.push(innerValue);
        this.parent.checkIterators();
    };
    ZipBufferIterator.prototype.subscribe = function (value, index) {
        return subscribeToResult_1.subscribeToResult(this, this.observable, this, index);
    };
    return ZipBufferIterator;
}(OuterSubscriber_1.OuterSubscriber));
//# sourceMappingURL=zip.js.map

/***/ },
/* 300 */,
/* 301 */,
/* 302 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
"use strict";
var isArray_1 = __webpack_require__(32);
function isNumeric(val) {
    // parseFloat NaNs numeric-cast false positives (null|true|false|"")
    // ...but misinterprets leading-number strings, particularly hex literals ("0x...")
    // subtraction forces infinities to NaN
    // adding 1 corrects loss of precision from parseFloat (#15100)
    return !isArray_1.isArray(val) && (val - parseFloat(val) + 1) >= 0;
}
exports.isNumeric = isNumeric;
;
//# sourceMappingURL=isNumeric.js.map

/***/ },
/* 303 */,
/* 304 */,
/* 305 */,
/* 306 */,
/* 307 */,
/* 308 */,
/* 309 */,
/* 310 */,
/* 311 */,
/* 312 */,
/* 313 */,
/* 314 */,
/* 315 */,
/* 316 */,
/* 317 */,
/* 318 */,
/* 319 */,
/* 320 */,
/* 321 */,
/* 322 */,
/* 323 */,
/* 324 */,
/* 325 */,
/* 326 */,
/* 327 */,
/* 328 */,
/* 329 */,
/* 330 */,
/* 331 */,
/* 332 */,
/* 333 */,
/* 334 */,
/* 335 */,
/* 336 */,
/* 337 */,
/* 338 */,
/* 339 */,
/* 340 */,
/* 341 */,
/* 342 */,
/* 343 */,
/* 344 */,
/* 345 */,
/* 346 */,
/* 347 */,
/* 348 */,
/* 349 */,
/* 350 */,
/* 351 */,
/* 352 */,
/* 353 */,
/* 354 */,
/* 355 */,
/* 356 */,
/* 357 */,
/* 358 */,
/* 359 */,
/* 360 */,
/* 361 */,
/* 362 */,
/* 363 */,
/* 364 */,
/* 365 */,
/* 366 */,
/* 367 */,
/* 368 */,
/* 369 */,
/* 370 */,
/* 371 */,
/* 372 */,
/* 373 */,
/* 374 */,
/* 375 */,
/* 376 */,
/* 377 */,
/* 378 */,
/* 379 */,
/* 380 */,
/* 381 */,
/* 382 */,
/* 383 */,
/* 384 */,
/* 385 */,
/* 386 */,
/* 387 */,
/* 388 */,
/* 389 */,
/* 390 */,
/* 391 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
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
var core_1 = __webpack_require__(1);
var ChartComponent = (function () {
    function ChartComponent(elementRef) {
        this.elementRef = elementRef;
    }
    ChartComponent.prototype.ngOnInit = function () {
        this.chart = new Chart(this.elementRef.nativeElement.querySelector('canvas'), {
            type: this.type,
            data: this.data,
            options: this.options
        });
    };
    ChartComponent.prototype.ngOnChanges = function (changes) {
        var _this = this;
        if (this.chart && changes['data']) {
            var currentValue_1 = changes['data'].currentValue;
            ['datasets', 'labels', 'xLabels', 'yLabels'].forEach(function (property) {
                _this.chart.data[property] = currentValue_1[property];
            });
            this.chart.update();
        }
    };
    __decorate([
        core_1.Input(), 
        __metadata('design:type', String)
    ], ChartComponent.prototype, "type", void 0);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Object)
    ], ChartComponent.prototype, "data", void 0);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Object)
    ], ChartComponent.prototype, "options", void 0);
    ChartComponent = __decorate([
        core_1.Component({
            selector: 'chart',
            template: '<canvas></canvas>',
            styles: [':host { display: block; }']
        }), 
        __metadata('design:paramtypes', [core_1.ElementRef])
    ], ChartComponent);
    return ChartComponent;
}());
exports.ChartComponent = ChartComponent;
//# sourceMappingURL=chart.component.js.map

/***/ },
/* 392 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
"use strict";
function __export(m) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}
__export(__webpack_require__(391));
__export(__webpack_require__(544));
//# sourceMappingURL=index.js.map

/***/ },
/* 393 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__src_ng2_page_scroll_directive__ = __webpack_require__(395);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__src_ng2_page_scroll_service__ = __webpack_require__(288);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__src_ng2_page_scroll_config__ = __webpack_require__(287);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__src_ng2_page_scroll_instance__ = __webpack_require__(394);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__src_ng2_page_scroll_util_service__ = __webpack_require__(117);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__src_ng2_page_scroll_module__ = __webpack_require__(608);
/* harmony namespace reexport (by provided) */ __webpack_require__.d(exports, "PageScroll", function() { return __WEBPACK_IMPORTED_MODULE_0__src_ng2_page_scroll_directive__["a"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(exports, "PageScrollService", function() { return __WEBPACK_IMPORTED_MODULE_1__src_ng2_page_scroll_service__["a"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(exports, "EasingLogic", function() { return __WEBPACK_IMPORTED_MODULE_2__src_ng2_page_scroll_config__["b"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(exports, "PageScrollConfig", function() { return __WEBPACK_IMPORTED_MODULE_2__src_ng2_page_scroll_config__["a"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(exports, "PageScrollInstance", function() { return __WEBPACK_IMPORTED_MODULE_3__src_ng2_page_scroll_instance__["a"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(exports, "PageScrollUtilService", function() { return __WEBPACK_IMPORTED_MODULE_4__src_ng2_page_scroll_util_service__["a"]; });
/* harmony reexport (binding) */ __webpack_require__.d(exports, "Ng2PageScrollModule", function() { return __WEBPACK_IMPORTED_MODULE_5__src_ng2_page_scroll_module__["a"]; });






//# sourceMappingURL=ng2-page-scroll.js.map

/***/ },
/* 394 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__ng2_page_scroll_config__ = __webpack_require__(287);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ng2_page_scroll_util_service__ = __webpack_require__(117);
/* harmony export (binding) */ __webpack_require__.d(exports, "a", function() { return PageScrollInstance; });
/**
 * Created by sebastianfuss on 29.08.16.
 */



/**
 * Represents a scrolling action
 */
var PageScrollInstance = (function () {
    /**
     * Private constructor, requires the properties assumed to be the bare minimum.
     * Use the factory methods to create instances: {@link PageScrollInstance#simpleInstance}
     * @param namespace
     * @param document
     */
    function PageScrollInstance(namespace, document) {
        /**
         * These properties will be set during instance construction
         */
        /* A namespace to "group" scroll animations together and stopping some does not stop others */
        this._namespace = __WEBPACK_IMPORTED_MODULE_1__ng2_page_scroll_config__["a" /* PageScrollConfig */]._defaultNamespace;
        /* Offset in px that the animation should stop above that target element */
        this._offset = __WEBPACK_IMPORTED_MODULE_1__ng2_page_scroll_config__["a" /* PageScrollConfig */].defaultScrollOffset;
        /* Duration in milliseconds the scroll animation should last */
        this._duration = __WEBPACK_IMPORTED_MODULE_1__ng2_page_scroll_config__["a" /* PageScrollConfig */].defaultDuration;
        /* Easing function to manipulate the scrollTop value over time */
        this._easingLogic = __WEBPACK_IMPORTED_MODULE_1__ng2_page_scroll_config__["a" /* PageScrollConfig */].defaultEasingLogic;
        /* Boolean whether the scroll animation should stop on user interruption or not */
        this._interruptible = __WEBPACK_IMPORTED_MODULE_1__ng2_page_scroll_config__["a" /* PageScrollConfig */].defaultInterruptible;
        /* Event emitter to notify the world about the scrolling */
        this._pageScrollFinish = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
        /**
         * These properties will be set/manipulated if the scroll animation starts
         */
        /* The initial value of the scrollTop position when the animation starts */
        this._startScrollTop = 0;
        /* Whether an interrupt listener is attached to the body or not */
        this._interruptListenersAttached = false;
        /* References to the timer instance that is used to perform the scroll animation to be
         able to clear it on animation end*/
        this._timer = null;
        this._namespace = namespace;
        this.document = document;
    }
    /*
     * Factory methods for instance creation
     */
    /**
     * Create a PageScrollInstance representing a scroll animation on the documents body.
     *
     * @param document The document that contains the body to be scrolled and the scrollTarget elements
     * @param scrollTarget Where to scroll to. Can be a HTMLElement reference or a string like '#elementId'
     * @param namespace Optional namespace to group scroll animations logically
     *
     * @returns {PageScrollInstance}
     */
    PageScrollInstance.simpleInstance = function (document, scrollTarget, namespace) {
        return PageScrollInstance.advancedInstance(document, scrollTarget, null, namespace, null, null, null, null);
    };
    /**
     * Create a PageScrollInstance representing a scroll animation to the target element where the scrollingView
     * elements get scrolled (like a div container with fixed height, resulting in scrollbars in it).
     *
     * Make sure that the scrollTarget is located inside the scrollingView in the DOM hierarchy, otherwise the
     * scrollingView will be scrolled to an apparently arbitrary position.
     *
     * @param document The document that contains the body to be scrolled and the scrollTarget elements
     * @param scrollTarget Where to scroll to. Can be a HTMLElement reference or a string like '#elementId'
     * @param scrollingView The element that should be scrolled
     * @param namespace Optional namespace to group scroll animations logically
     *
     * @returns {PageScrollInstance}
     */
    PageScrollInstance.simpleInlineInstance = function (document, scrollTarget, scrollingView, namespace) {
        return PageScrollInstance.advancedInstance(document, scrollTarget, [scrollingView], namespace, null, null, null, null);
    };
    /**
     *
     * @param document The document that contains the body to be scrolled and the scrollTarget elements
     * @param scrollTarget Where to scroll to. Can be a HTMLElement reference or a string like '#elementId'
     * @param scrollingViews The elements that should be scrolled. Null to use the default elements of document and body.
     * @param namespace Optional namespace to group scroll animations logically
     * @param pageScrollOffset The offset to be attached to the top of the target element or
     *                          null/undefined to use application default
     * @param pageScrollInterruptible Whether this scroll animation should be interruptible.
     *                                 Null/undefined for application default
     * @param pageScrollEasingLogic Easing function to be used for manipulating the scroll position
     *                          over time. Null/undefined for application default
     * @param pageScrollDuration The duration in milliseconds the animation should last.
     *                            Null/undefined for application default
     * @param pageScrollFinishListener Listener to be called to notify other parts of the application
     *                                  that the scroll animation has finished
     *
     * @returns {PageScrollInstance}
     */
    PageScrollInstance.advancedInstance = function (document, scrollTarget, scrollingViews, namespace, pageScrollOffset, pageScrollInterruptible, pageScrollEasingLogic, pageScrollDuration, pageScrollFinishListener) {
        if (scrollingViews === void 0) { scrollingViews = null; }
        if (pageScrollOffset === void 0) { pageScrollOffset = null; }
        if (pageScrollInterruptible === void 0) { pageScrollInterruptible = null; }
        if (pageScrollEasingLogic === void 0) { pageScrollEasingLogic = null; }
        if (pageScrollDuration === void 0) { pageScrollDuration = null; }
        if (pageScrollFinishListener === void 0) { pageScrollFinishListener = null; }
        if (__WEBPACK_IMPORTED_MODULE_2__ng2_page_scroll_util_service__["a" /* PageScrollUtilService */].isUndefinedOrNull(namespace) || namespace.length <= 0) {
            namespace = __WEBPACK_IMPORTED_MODULE_1__ng2_page_scroll_config__["a" /* PageScrollConfig */]._defaultNamespace;
        }
        var pageScrollInstance = new PageScrollInstance(namespace, document);
        if (__WEBPACK_IMPORTED_MODULE_2__ng2_page_scroll_util_service__["a" /* PageScrollUtilService */].isUndefinedOrNull(scrollingViews) || scrollingViews.length === 0) {
            pageScrollInstance._isInlineScrolling = false;
            pageScrollInstance._scrollTopSources = [document.documentElement, document.body, document.body.parentNode];
        }
        else {
            pageScrollInstance._isInlineScrolling = true;
            pageScrollInstance._scrollTopSources = scrollingViews;
        }
        pageScrollInstance._scrollTarget = scrollTarget;
        if (!__WEBPACK_IMPORTED_MODULE_2__ng2_page_scroll_util_service__["a" /* PageScrollUtilService */].isUndefinedOrNull(pageScrollOffset)) {
            pageScrollInstance._offset = pageScrollOffset;
        }
        if (!__WEBPACK_IMPORTED_MODULE_2__ng2_page_scroll_util_service__["a" /* PageScrollUtilService */].isUndefinedOrNull(pageScrollEasingLogic)) {
            pageScrollInstance._easingLogic = pageScrollEasingLogic;
        }
        if (!__WEBPACK_IMPORTED_MODULE_2__ng2_page_scroll_util_service__["a" /* PageScrollUtilService */].isUndefinedOrNull(pageScrollDuration)) {
            pageScrollInstance._duration = pageScrollDuration;
        }
        if (!__WEBPACK_IMPORTED_MODULE_2__ng2_page_scroll_util_service__["a" /* PageScrollUtilService */].isUndefinedOrNull(pageScrollFinishListener)) {
            pageScrollInstance._pageScrollFinish = pageScrollFinishListener;
        }
        pageScrollInstance._interruptible = pageScrollInterruptible ||
            (__WEBPACK_IMPORTED_MODULE_2__ng2_page_scroll_util_service__["a" /* PageScrollUtilService */].isUndefinedOrNull(pageScrollInterruptible) && __WEBPACK_IMPORTED_MODULE_1__ng2_page_scroll_config__["a" /* PageScrollConfig */].defaultInterruptible);
        return pageScrollInstance;
    };
    /**
     * Extract the exact location of the scrollTarget element.
     *
     * Extract the scrollTarget HTMLElement from the given PageScrollTarget object. The latter one may be
     * a string like "#heading2", then this method returns the corresponding DOM element for that id.
     *
     * @returns {HTMLElement}
     */
    PageScrollInstance.prototype.extractScrollTargetPosition = function () {
        var scrollTargetElement;
        if (typeof this._scrollTarget === 'string') {
            scrollTargetElement = this.document.getElementById(this._scrollTarget.substr(1));
        }
        else {
            scrollTargetElement = this._scrollTarget;
        }
        if (scrollTargetElement === null || scrollTargetElement === undefined) {
            // Scroll target not found
            return { top: NaN, left: NaN };
        }
        if (this._isInlineScrolling) {
            return { top: scrollTargetElement.offsetTop, left: scrollTargetElement.offsetLeft };
        }
        return __WEBPACK_IMPORTED_MODULE_2__ng2_page_scroll_util_service__["a" /* PageScrollUtilService */].extractElementPosition(this.document, scrollTargetElement);
    };
    /**
     * Get the top offset of the scroll animation.
     * This automatically takes the offset location of the scrolling container/scrolling view
     * into account (for nested/inline scrolling).
     *
     * @returns {number}
     */
    PageScrollInstance.prototype.getCurrentOffset = function () {
        return this._offset;
    };
    /**
     * Sets the "scrollTop" property for all scrollingViews to the provided value
     * @param position
     * @return true if at least for one ScrollTopSource the scrollTop value could be set and it kept the new value.
     *          false if it failed for all ScrollTopSources, meaning that we should stop the animation
     *          (probably because we're at the end of the scrolling region)
     */
    PageScrollInstance.prototype.setScrollTopPosition = function (position) {
        // Set the new scrollTop to all scrollTopSource elements
        return this.scrollTopSources.reduce(function (oneAlreadyWorked, scrollTopSource) {
            if (scrollTopSource && !__WEBPACK_IMPORTED_MODULE_2__ng2_page_scroll_util_service__["a" /* PageScrollUtilService */].isUndefinedOrNull(scrollTopSource.scrollTop)) {
                scrollTopSource.scrollTop = position;
                // Return true of setting the new scrollTop value worked
                if (scrollTopSource.scrollTop === position) {
                    return true;
                }
            }
            return oneAlreadyWorked;
        }, false);
    };
    /**
     * Trigger firing a animation finish event
     * @param value Whether the animation finished at the target (true) or got interrupted (false)
     */
    PageScrollInstance.prototype.fireEvent = function (value) {
        if (this._pageScrollFinish) {
            this._pageScrollFinish.emit(value);
        }
    };
    /**
     * Attach the interrupt listeners to the PageScrollInstance body. The given interruptReporter
     * will be called if any of the attached events is fired.
     *
     * Possibly attached interruptListeners are automatically removed from the body before the new one will be attached.
     *
     * @param interruptReporter
     */
    PageScrollInstance.prototype.attachInterruptListeners = function (interruptReporter) {
        var _this = this;
        if (this._interruptListenersAttached) {
            // Detach possibly existing listeners first
            this.detachInterruptListeners();
        }
        this._interruptListener = function (event) {
            interruptReporter.report(event, _this);
        };
        __WEBPACK_IMPORTED_MODULE_1__ng2_page_scroll_config__["a" /* PageScrollConfig */]._interruptEvents.forEach(function (event) { return _this.document.body.addEventListener(event, _this._interruptListener); });
        this._interruptListenersAttached = true;
    };
    /**
     * Remove event listeners from the body and stop listening for events that might be treated as "animation
     * interrupt" events.
     */
    PageScrollInstance.prototype.detachInterruptListeners = function () {
        var _this = this;
        __WEBPACK_IMPORTED_MODULE_1__ng2_page_scroll_config__["a" /* PageScrollConfig */]._interruptEvents.forEach(function (event) { return _this.document.body.removeEventListener(event, _this._interruptListener); });
        this._interruptListenersAttached = false;
    };
    Object.defineProperty(PageScrollInstance.prototype, "namespace", {
        get: function () {
            return this._namespace;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(PageScrollInstance.prototype, "scrollTopSources", {
        get: function () {
            return this._scrollTopSources;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(PageScrollInstance.prototype, "startScrollTop", {
        get: function () {
            return this._startScrollTop;
        },
        set: function (value) {
            this._startScrollTop = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(PageScrollInstance.prototype, "targetScrollTop", {
        get: function () {
            return this._targetScrollTop;
        },
        set: function (value) {
            this._targetScrollTop = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(PageScrollInstance.prototype, "distanceToScroll", {
        get: function () {
            return this._distanceToScroll;
        },
        set: function (value) {
            this._distanceToScroll = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(PageScrollInstance.prototype, "duration", {
        get: function () {
            return this._duration;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(PageScrollInstance.prototype, "easingLogic", {
        get: function () {
            return this._easingLogic;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(PageScrollInstance.prototype, "interruptible", {
        get: function () {
            return this._interruptible;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(PageScrollInstance.prototype, "startTime", {
        get: function () {
            return this._startTime;
        },
        set: function (value) {
            this._startTime = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(PageScrollInstance.prototype, "endTime", {
        get: function () {
            return this._endTime;
        },
        set: function (value) {
            this._endTime = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(PageScrollInstance.prototype, "timer", {
        get: function () {
            return this._timer;
        },
        set: function (value) {
            this._timer = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(PageScrollInstance.prototype, "interruptListenersAttached", {
        get: function () {
            return this._interruptListenersAttached;
        },
        enumerable: true,
        configurable: true
    });
    return PageScrollInstance;
}());
//# sourceMappingURL=ng2-page-scroll-instance.js.map

/***/ },
/* 395 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__(128);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_platform_browser__ = __webpack_require__(60);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ng2_page_scroll_service__ = __webpack_require__(288);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ng2_page_scroll_instance__ = __webpack_require__(394);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__ng2_page_scroll_util_service__ = __webpack_require__(117);
/* harmony export (binding) */ __webpack_require__.d(exports, "a", function() { return PageScroll; });






var PageScroll = (function () {
    function PageScroll(pageScrollService, router, document) {
        this.pageScrollService = pageScrollService;
        this.router = router;
        this.pageScrollOffset = null;
        this.pageScrollDuration = null;
        this.pageScrollEasing = null;
        this.pageScroll = null;
        this.pageScrollFinish = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
        this.document = document;
    }
    PageScroll.prototype.ngOnDestroy = function () {
        if (this.pageScrollInstance) {
            this.pageScrollService.stop(this.pageScrollInstance);
        }
        return undefined;
    };
    PageScroll.prototype.generatePageScrollInstance = function () {
        if (__WEBPACK_IMPORTED_MODULE_5__ng2_page_scroll_util_service__["a" /* PageScrollUtilService */].isUndefinedOrNull(this.pageScrollInstance)) {
            this.pageScrollInstance = __WEBPACK_IMPORTED_MODULE_4__ng2_page_scroll_instance__["a" /* PageScrollInstance */].advancedInstance(this.document, this.href, null, this.pageScroll, this.pageScrollOffset, this.pageScrollInterruptible, this.pageScrollEasing, this.pageScrollDuration, this.pageScrollFinish);
        }
        return this.pageScrollInstance;
    };
    PageScroll.prototype.handleClick = function (clickEvent) {
        var _this = this;
        if (this.routerLink && this.router !== null && this.router !== undefined) {
            // We need to navigate their first.
            // Navigation is handled by the routerLink directive
            // so we only need to listen for route change
            // Note: the change event is also emitted when navigating to the current route again
            var subscription_1 = this.router.events.subscribe(function (routerEvent) {
                if (routerEvent instanceof __WEBPACK_IMPORTED_MODULE_1__angular_router__["NavigationEnd"]) {
                    subscription_1.unsubscribe();
                    _this.pageScrollService.start(_this.generatePageScrollInstance());
                }
                else if (routerEvent instanceof __WEBPACK_IMPORTED_MODULE_1__angular_router__["NavigationError"] || routerEvent instanceof __WEBPACK_IMPORTED_MODULE_1__angular_router__["NavigationCancel"]) {
                    subscription_1.unsubscribe();
                }
            });
        }
        else {
            this.pageScrollService.start(this.generatePageScrollInstance());
        }
        return false; // to preventDefault()
    };
    PageScroll.decorators = [
        { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Directive"], args: [{
                    selector: '[pageScroll]',
                    host: {
                        '(click)': 'handleClick($event)',
                    }
                },] },
    ];
    /** @nocollapse */
    PageScroll.ctorParameters = [
        { type: __WEBPACK_IMPORTED_MODULE_3__ng2_page_scroll_service__["a" /* PageScrollService */], },
        { type: __WEBPACK_IMPORTED_MODULE_1__angular_router__["Router"], decorators: [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Optional"] },] },
        { type: undefined, decorators: [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Inject"], args: [__WEBPACK_IMPORTED_MODULE_2__angular_platform_browser__["DOCUMENT"],] },] },
    ];
    PageScroll.propDecorators = {
        'routerLink': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"] },],
        'href': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"] },],
        'pageScrollOffset': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"] },],
        'pageScrollDuration': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"] },],
        'pageScrollEasing': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"] },],
        'pageScrollInterruptible': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"] },],
        'pageScroll': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"] },],
        'pageScrollFinish': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Output"] },],
    };
    return PageScroll;
}());
//# sourceMappingURL=ng2-page-scroll.directive.js.map

/***/ },
/* 396 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
"use strict";var __decorate=this&&this.__decorate||function(t,e,r,n){var o,i=arguments.length,s=i<3?e:null===n?n=Object.getOwnPropertyDescriptor(e,r):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)s=Reflect.decorate(t,e,r,n);else for(var u=t.length-1;u>=0;u--)(o=t[u])&&(s=(i<3?o(s):i>3?o(e,r,s):o(e,r))||s);return i>3&&s&&Object.defineProperty(e,r,s),s},__metadata=this&&this.__metadata||function(t,e){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(t,e)},core_1=__webpack_require__(1),http_1=__webpack_require__(26),rxjs_1=__webpack_require__(615),share_provider_enum_1=__webpack_require__(290),ShareButtonsService=function(){function t(t,e){this.http=t,this.jsonp=e,this.windowWidth=500,this.windowHeight=400}return t.prototype.share=function(t,e){switch(t){case share_provider_enum_1.ShareProvider.FACEBOOK:return this.fbShare(e);case share_provider_enum_1.ShareProvider.TWITTER:return this.twitterShare(e);case share_provider_enum_1.ShareProvider.LINKEDIN:return this.linkedInShare(e);case share_provider_enum_1.ShareProvider.REDDIT:return this.redditShare(e);case share_provider_enum_1.ShareProvider.TUMBLR:return this.tumblrShare(e);case share_provider_enum_1.ShareProvider.STUMBLEUPON:return this.stumbleShare(e);case share_provider_enum_1.ShareProvider.GOOGLEPLUS:return this.gPlusShare(e);case share_provider_enum_1.ShareProvider.PINTEREST:return this.pinShare(e);default:return""}},t.prototype.fbShare=function(t){var e="https://www.facebook.com/sharer/sharer.php?u="+t.url;return t.title&&(e+="&title="+t.title),t.description&&(e+="&description="+t.description),t.image&&(e+="&picture="+t.image),e},t.prototype.twitterShare=function(t){var e="https://twitter.com/intent/tweet?url="+t.url;return t.description&&(e+="&text="+t.description),this.twitterAccount&&(e+="&via="+this.twitterAccount),t.tags&&(e+="&hashtags="+t.tags.toString()),e},t.prototype.linkedInShare=function(t){var e="http://www.linkedin.com/shareArticle?url="+t.url;return t.title&&(e+="&title="+t.title),t.description&&(e+="&summary="+t.description),e},t.prototype.redditShare=function(t){var e="http://www.reddit.com/submit?url="+t.url;return t.title&&(e+="&title="+t.title),e},t.prototype.tumblrShare=function(t){var e="http://tumblr.com/widgets/share/tool?canonicalUrl="+t.url;return t.description&&(e+="&caption="+t.description),t.tags&&(e+="&tags="+t.tags),e},t.prototype.stumbleShare=function(t){return"http://www.stumbleupon.com/submit?url="+t.url},t.prototype.gPlusShare=function(t){return"https://plus.google.com/share?url="+t.url},t.prototype.pinShare=function(t){var e="https://in.pinterest.com/pin/create/button/?url="+t.url;if(t.description)e+="&description="+t.description;else{var r=document.querySelector('meta[property="og:description"]').getAttribute("content");e+="&description="+r}if(t.image)e+="&media="+t.image;else{var n=document.querySelector('meta[property="og:image"]').getAttribute("content");e+="&media="+n}return e},t.prototype.count=function(t,e){switch(t){case share_provider_enum_1.ShareProvider.FACEBOOK:return this.fbCount(e);case share_provider_enum_1.ShareProvider.LINKEDIN:return this.linkedInCount(e);case share_provider_enum_1.ShareProvider.REDDIT:return this.redditCount(e);case share_provider_enum_1.ShareProvider.TUMBLR:return this.tumblrCount(e);case share_provider_enum_1.ShareProvider.GOOGLEPLUS:return this.gPlusCount(e);case share_provider_enum_1.ShareProvider.PINTEREST:return this.pinCount(e);default:return rxjs_1.Observable.empty()}},t.prototype.fbCount=function(t){return this.fetch("https://graph.facebook.com/?id="+t).map(function(t){return t=t.json(),t.hasOwnProperty("share")&&t.share.hasOwnProperty("share_count")?t.share.share_count:0})},t.prototype.linkedInCount=function(t){return this.fetchJsonp("https://www.linkedin.com/countserv/count/share?url="+t).map(function(t){return t=t.json(),0|t.count})},t.prototype.redditCount=function(t){return this.fetch("https://buttons.reddit.com/button_info.json?url="+t).map(function(t){return t=t.json(),t.hasOwnProperty("data")&&t.data.hasOwnProperty("children")&&t.data.children.length?t.data.children[0].data.score:0})},t.prototype.gPlusCount=function(t){var e=exports.gplusCountBody(t);return this.http.post("https://clients6.google.com/rpc?key=AIzaSyCKSbrvQasunBoV16zDH9R33D88CeLr9gQ",e).map(function(t){return t=t.json(),t[0]&&t[0].hasOwnProperty("result")?t[0].result.metadata.globalCounts.count:0})},t.prototype.pinCount=function(t){return this.fetch("https://api.pinterest.com/v1/urls/count.json?callback=receiveCount&url="+t).map(function(t){t=t.text();var e=JSON.parse(t.replace(/^receiveCount\((.*)\)/,"$1"));return 0|e.count})},t.prototype.tumblrCount=function(t){return this.fetchJsonp("https://api.tumblr.com/v2/share/stats?url="+t).map(function(t){return t=t.json(),t.hasOwnProperty("response")&&t.response.hasOwnProperty("note_count")?t.response.note_count:0})},t.prototype.fetch=function(t){return this.http.get(t).catch(function(t){return console.warn("[ShareService HTTP]: ",t),rxjs_1.Observable.empty()})},t.prototype.fetchJsonp=function(t){return this.jsonp.request(t+"&format=jsonp&callback=JSONP_CALLBACK").catch(function(t){return console.warn("[ShareService JSONP]: ",t),rxjs_1.Observable.empty()})},t.prototype.windowAttr=function(){return"width="+this.windowWidth+", height="+this.windowHeight},t=__decorate([core_1.Injectable(),__metadata("design:paramtypes",[http_1.Http,http_1.Jsonp])],t)}();exports.ShareButtonsService=ShareButtonsService,exports.gplusCountBody=function(t){return[{method:"pos.plusones.get",id:"p",params:{nolog:!0,id:t,source:"widget",userId:"@viewer",groupId:"@self"},jsonrpc:"2.0",key:"p",apiVersion:"v1"}]};
//# sourceMappingURL=share-buttons.service.js.map


/***/ },
/* 397 */,
/* 398 */,
/* 399 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
"use strict";
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var Observable_1 = __webpack_require__(0);
var ConnectableObservable_1 = __webpack_require__(291);
var MulticastObservable = (function (_super) {
    __extends(MulticastObservable, _super);
    function MulticastObservable(source, subjectFactory, selector) {
        _super.call(this);
        this.source = source;
        this.subjectFactory = subjectFactory;
        this.selector = selector;
    }
    MulticastObservable.prototype._subscribe = function (subscriber) {
        var _a = this, selector = _a.selector, source = _a.source;
        var connectable = new ConnectableObservable_1.ConnectableObservable(source, this.subjectFactory);
        var subscription = selector(connectable).subscribe(subscriber);
        subscription.add(connectable.connect());
        return subscription;
    };
    return MulticastObservable;
}(Observable_1.Observable));
exports.MulticastObservable = MulticastObservable;
//# sourceMappingURL=MulticastObservable.js.map

/***/ },
/* 400 */,
/* 401 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
"use strict";
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var root_1 = __webpack_require__(20);
var tryCatch_1 = __webpack_require__(17);
var errorObject_1 = __webpack_require__(16);
var Observable_1 = __webpack_require__(0);
var Subscriber_1 = __webpack_require__(3);
var map_1 = __webpack_require__(52);
function getCORSRequest() {
    if (root_1.root.XMLHttpRequest) {
        var xhr = new root_1.root.XMLHttpRequest();
        if ('withCredentials' in xhr) {
            xhr.withCredentials = !!this.withCredentials;
        }
        return xhr;
    }
    else if (!!root_1.root.XDomainRequest) {
        return new root_1.root.XDomainRequest();
    }
    else {
        throw new Error('CORS is not supported by your browser');
    }
}
function getXMLHttpRequest() {
    if (root_1.root.XMLHttpRequest) {
        return new root_1.root.XMLHttpRequest();
    }
    else {
        var progId = void 0;
        try {
            var progIds = ['Msxml2.XMLHTTP', 'Microsoft.XMLHTTP', 'Msxml2.XMLHTTP.4.0'];
            for (var i = 0; i < 3; i++) {
                try {
                    progId = progIds[i];
                    if (new root_1.root.ActiveXObject(progId)) {
                        break;
                    }
                }
                catch (e) {
                }
            }
            return new root_1.root.ActiveXObject(progId);
        }
        catch (e) {
            throw new Error('XMLHttpRequest is not supported by your browser');
        }
    }
}
function ajaxGet(url, headers) {
    if (headers === void 0) { headers = null; }
    return new AjaxObservable({ method: 'GET', url: url, headers: headers });
}
exports.ajaxGet = ajaxGet;
;
function ajaxPost(url, body, headers) {
    return new AjaxObservable({ method: 'POST', url: url, body: body, headers: headers });
}
exports.ajaxPost = ajaxPost;
;
function ajaxDelete(url, headers) {
    return new AjaxObservable({ method: 'DELETE', url: url, headers: headers });
}
exports.ajaxDelete = ajaxDelete;
;
function ajaxPut(url, body, headers) {
    return new AjaxObservable({ method: 'PUT', url: url, body: body, headers: headers });
}
exports.ajaxPut = ajaxPut;
;
function ajaxGetJSON(url, headers) {
    return new AjaxObservable({ method: 'GET', url: url, responseType: 'json', headers: headers })
        .lift(new map_1.MapOperator(function (x, index) { return x.response; }, null));
}
exports.ajaxGetJSON = ajaxGetJSON;
;
/**
 * We need this JSDoc comment for affecting ESDoc.
 * @extends {Ignored}
 * @hide true
 */
var AjaxObservable = (function (_super) {
    __extends(AjaxObservable, _super);
    function AjaxObservable(urlOrRequest) {
        _super.call(this);
        var request = {
            async: true,
            createXHR: function () {
                return this.crossDomain ? getCORSRequest.call(this) : getXMLHttpRequest();
            },
            crossDomain: false,
            withCredentials: false,
            headers: {},
            method: 'GET',
            responseType: 'json',
            timeout: 0
        };
        if (typeof urlOrRequest === 'string') {
            request.url = urlOrRequest;
        }
        else {
            for (var prop in urlOrRequest) {
                if (urlOrRequest.hasOwnProperty(prop)) {
                    request[prop] = urlOrRequest[prop];
                }
            }
        }
        this.request = request;
    }
    AjaxObservable.prototype._subscribe = function (subscriber) {
        return new AjaxSubscriber(subscriber, this.request);
    };
    /**
     * Creates an observable for an Ajax request with either a request object with
     * url, headers, etc or a string for a URL.
     *
     * @example
     * source = Rx.Observable.ajax('/products');
     * source = Rx.Observable.ajax({ url: 'products', method: 'GET' });
     *
     * @param {string|Object} request Can be one of the following:
     *   A string of the URL to make the Ajax call.
     *   An object with the following properties
     *   - url: URL of the request
     *   - body: The body of the request
     *   - method: Method of the request, such as GET, POST, PUT, PATCH, DELETE
     *   - async: Whether the request is async
     *   - headers: Optional headers
     *   - crossDomain: true if a cross domain request, else false
     *   - createXHR: a function to override if you need to use an alternate
     *   XMLHttpRequest implementation.
     *   - resultSelector: a function to use to alter the output value type of
     *   the Observable. Gets {@link AjaxResponse} as an argument.
     * @return {Observable} An observable sequence containing the XMLHttpRequest.
     * @static true
     * @name ajax
     * @owner Observable
    */
    AjaxObservable.create = (function () {
        var create = function (urlOrRequest) {
            return new AjaxObservable(urlOrRequest);
        };
        create.get = ajaxGet;
        create.post = ajaxPost;
        create.delete = ajaxDelete;
        create.put = ajaxPut;
        create.getJSON = ajaxGetJSON;
        return create;
    })();
    return AjaxObservable;
}(Observable_1.Observable));
exports.AjaxObservable = AjaxObservable;
/**
 * We need this JSDoc comment for affecting ESDoc.
 * @ignore
 * @extends {Ignored}
 */
var AjaxSubscriber = (function (_super) {
    __extends(AjaxSubscriber, _super);
    function AjaxSubscriber(destination, request) {
        _super.call(this, destination);
        this.request = request;
        this.done = false;
        var headers = request.headers = request.headers || {};
        // force CORS if requested
        if (!request.crossDomain && !headers['X-Requested-With']) {
            headers['X-Requested-With'] = 'XMLHttpRequest';
        }
        // ensure content type is set
        if (!('Content-Type' in headers) && !(root_1.root.FormData && request.body instanceof root_1.root.FormData) && typeof request.body !== 'undefined') {
            headers['Content-Type'] = 'application/x-www-form-urlencoded; charset=UTF-8';
        }
        // properly serialize body
        request.body = this.serializeBody(request.body, request.headers['Content-Type']);
        this.send();
    }
    AjaxSubscriber.prototype.next = function (e) {
        this.done = true;
        var _a = this, xhr = _a.xhr, request = _a.request, destination = _a.destination;
        var response = new AjaxResponse(e, xhr, request);
        destination.next(response);
    };
    AjaxSubscriber.prototype.send = function () {
        var _a = this, request = _a.request, _b = _a.request, user = _b.user, method = _b.method, url = _b.url, async = _b.async, password = _b.password, headers = _b.headers, body = _b.body;
        var createXHR = request.createXHR;
        var xhr = tryCatch_1.tryCatch(createXHR).call(request);
        if (xhr === errorObject_1.errorObject) {
            this.error(errorObject_1.errorObject.e);
        }
        else {
            this.xhr = xhr;
            // open XHR first
            var result = void 0;
            if (user) {
                result = tryCatch_1.tryCatch(xhr.open).call(xhr, method, url, async, user, password);
            }
            else {
                result = tryCatch_1.tryCatch(xhr.open).call(xhr, method, url, async);
            }
            if (result === errorObject_1.errorObject) {
                this.error(errorObject_1.errorObject.e);
                return null;
            }
            // timeout and responseType can be set once the XHR is open
            xhr.timeout = request.timeout;
            xhr.responseType = request.responseType;
            // set headers
            this.setHeaders(xhr, headers);
            // now set up the events
            this.setupEvents(xhr, request);
            // finally send the request
            if (body) {
                xhr.send(body);
            }
            else {
                xhr.send();
            }
        }
        return xhr;
    };
    AjaxSubscriber.prototype.serializeBody = function (body, contentType) {
        if (!body || typeof body === 'string') {
            return body;
        }
        else if (root_1.root.FormData && body instanceof root_1.root.FormData) {
            return body;
        }
        if (contentType) {
            var splitIndex = contentType.indexOf(';');
            if (splitIndex !== -1) {
                contentType = contentType.substring(0, splitIndex);
            }
        }
        switch (contentType) {
            case 'application/x-www-form-urlencoded':
                return Object.keys(body).map(function (key) { return (encodeURI(key) + "=" + encodeURI(body[key])); }).join('&');
            case 'application/json':
                return JSON.stringify(body);
            default:
                return body;
        }
    };
    AjaxSubscriber.prototype.setHeaders = function (xhr, headers) {
        for (var key in headers) {
            if (headers.hasOwnProperty(key)) {
                xhr.setRequestHeader(key, headers[key]);
            }
        }
    };
    AjaxSubscriber.prototype.setupEvents = function (xhr, request) {
        var progressSubscriber = request.progressSubscriber;
        xhr.ontimeout = function xhrTimeout(e) {
            var _a = xhrTimeout, subscriber = _a.subscriber, progressSubscriber = _a.progressSubscriber, request = _a.request;
            if (progressSubscriber) {
                progressSubscriber.error(e);
            }
            subscriber.error(new AjaxTimeoutError(this, request)); //TODO: Make betterer.
        };
        xhr.ontimeout.request = request;
        xhr.ontimeout.subscriber = this;
        xhr.ontimeout.progressSubscriber = progressSubscriber;
        if (xhr.upload && 'withCredentials' in xhr && root_1.root.XDomainRequest) {
            if (progressSubscriber) {
                xhr.onprogress = function xhrProgress(e) {
                    var progressSubscriber = xhrProgress.progressSubscriber;
                    progressSubscriber.next(e);
                };
                xhr.onprogress.progressSubscriber = progressSubscriber;
            }
            xhr.onerror = function xhrError(e) {
                var _a = xhrError, progressSubscriber = _a.progressSubscriber, subscriber = _a.subscriber, request = _a.request;
                if (progressSubscriber) {
                    progressSubscriber.error(e);
                }
                subscriber.error(new AjaxError('ajax error', this, request));
            };
            xhr.onerror.request = request;
            xhr.onerror.subscriber = this;
            xhr.onerror.progressSubscriber = progressSubscriber;
        }
        xhr.onreadystatechange = function xhrReadyStateChange(e) {
            var _a = xhrReadyStateChange, subscriber = _a.subscriber, progressSubscriber = _a.progressSubscriber, request = _a.request;
            if (this.readyState === 4) {
                // normalize IE9 bug (http://bugs.jquery.com/ticket/1450)
                var status_1 = this.status === 1223 ? 204 : this.status;
                var response = (this.responseType === 'text' ? (this.response || this.responseText) : this.response);
                // fix status code when it is 0 (0 status is undocumented).
                // Occurs when accessing file resources or on Android 4.1 stock browser
                // while retrieving files from application cache.
                if (status_1 === 0) {
                    status_1 = response ? 200 : 0;
                }
                if (200 <= status_1 && status_1 < 300) {
                    if (progressSubscriber) {
                        progressSubscriber.complete();
                    }
                    subscriber.next(e);
                    subscriber.complete();
                }
                else {
                    if (progressSubscriber) {
                        progressSubscriber.error(e);
                    }
                    subscriber.error(new AjaxError('ajax error ' + status_1, this, request));
                }
            }
        };
        xhr.onreadystatechange.subscriber = this;
        xhr.onreadystatechange.progressSubscriber = progressSubscriber;
        xhr.onreadystatechange.request = request;
    };
    AjaxSubscriber.prototype.unsubscribe = function () {
        var _a = this, done = _a.done, xhr = _a.xhr;
        if (!done && xhr && xhr.readyState !== 4) {
            xhr.abort();
        }
        _super.prototype.unsubscribe.call(this);
    };
    return AjaxSubscriber;
}(Subscriber_1.Subscriber));
exports.AjaxSubscriber = AjaxSubscriber;
/**
 * A normalized AJAX response.
 *
 * @see {@link ajax}
 *
 * @class AjaxResponse
 */
var AjaxResponse = (function () {
    function AjaxResponse(originalEvent, xhr, request) {
        this.originalEvent = originalEvent;
        this.xhr = xhr;
        this.request = request;
        this.status = xhr.status;
        this.responseType = xhr.responseType || request.responseType;
        switch (this.responseType) {
            case 'json':
                if ('response' in xhr) {
                    //IE does not support json as responseType, parse it internally
                    this.response = xhr.responseType ? xhr.response : JSON.parse(xhr.response || xhr.responseText || 'null');
                }
                else {
                    this.response = JSON.parse(xhr.responseText || 'null');
                }
                break;
            case 'xml':
                this.response = xhr.responseXML;
                break;
            case 'text':
            default:
                this.response = ('response' in xhr) ? xhr.response : xhr.responseText;
                break;
        }
    }
    return AjaxResponse;
}());
exports.AjaxResponse = AjaxResponse;
/**
 * A normalized AJAX error.
 *
 * @see {@link ajax}
 *
 * @class AjaxError
 */
var AjaxError = (function (_super) {
    __extends(AjaxError, _super);
    function AjaxError(message, xhr, request) {
        _super.call(this, message);
        this.message = message;
        this.xhr = xhr;
        this.request = request;
        this.status = xhr.status;
    }
    return AjaxError;
}(Error));
exports.AjaxError = AjaxError;
/**
 * @see {@link ajax}
 *
 * @class AjaxTimeoutError
 */
var AjaxTimeoutError = (function (_super) {
    __extends(AjaxTimeoutError, _super);
    function AjaxTimeoutError(xhr, request) {
        _super.call(this, 'ajax timeout', xhr, request);
    }
    return AjaxTimeoutError;
}(AjaxError));
exports.AjaxTimeoutError = AjaxTimeoutError;
//# sourceMappingURL=AjaxObservable.js.map

/***/ },
/* 402 */,
/* 403 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
"use strict";
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var OuterSubscriber_1 = __webpack_require__(6);
var subscribeToResult_1 = __webpack_require__(7);
/**
 * Returns an Observable that emits all items emitted by the source Observable that are distinct by comparison from previous items.
 * If a comparator function is provided, then it will be called for each item to test for whether or not that value should be emitted.
 * If a comparator function is not provided, an equality check is used by default.
 * As the internal HashSet of this operator grows larger and larger, care should be taken in the domain of inputs this operator may see.
 * An optional parameter is also provided such that an Observable can be provided to queue the internal HashSet to flush the values it holds.
 * @param {function} [compare] optional comparison function called to test if an item is distinct from previous items in the source.
 * @param {Observable} [flushes] optional Observable for flushing the internal HashSet of the operator.
 * @return {Observable} an Observable that emits items from the source Observable with distinct values.
 * @method distinct
 * @owner Observable
 */
function distinct(compare, flushes) {
    return this.lift(new DistinctOperator(compare, flushes));
}
exports.distinct = distinct;
var DistinctOperator = (function () {
    function DistinctOperator(compare, flushes) {
        this.compare = compare;
        this.flushes = flushes;
    }
    DistinctOperator.prototype.call = function (subscriber, source) {
        return source._subscribe(new DistinctSubscriber(subscriber, this.compare, this.flushes));
    };
    return DistinctOperator;
}());
/**
 * We need this JSDoc comment for affecting ESDoc.
 * @ignore
 * @extends {Ignored}
 */
var DistinctSubscriber = (function (_super) {
    __extends(DistinctSubscriber, _super);
    function DistinctSubscriber(destination, compare, flushes) {
        _super.call(this, destination);
        this.values = [];
        if (typeof compare === 'function') {
            this.compare = compare;
        }
        if (flushes) {
            this.add(subscribeToResult_1.subscribeToResult(this, flushes));
        }
    }
    DistinctSubscriber.prototype.notifyNext = function (outerValue, innerValue, outerIndex, innerIndex, innerSub) {
        this.values.length = 0;
    };
    DistinctSubscriber.prototype.notifyError = function (error, innerSub) {
        this._error(error);
    };
    DistinctSubscriber.prototype._next = function (value) {
        var found = false;
        var values = this.values;
        var len = values.length;
        try {
            for (var i = 0; i < len; i++) {
                if (this.compare(values[i], value)) {
                    found = true;
                    return;
                }
            }
        }
        catch (err) {
            this.destination.error(err);
            return;
        }
        this.values.push(value);
        this.destination.next(value);
    };
    DistinctSubscriber.prototype.compare = function (x, y) {
        return x === y;
    };
    return DistinctSubscriber;
}(OuterSubscriber_1.OuterSubscriber));
exports.DistinctSubscriber = DistinctSubscriber;
//# sourceMappingURL=distinct.js.map

/***/ },
/* 404 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
"use strict";
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var Subscriber_1 = __webpack_require__(3);
var tryCatch_1 = __webpack_require__(17);
var errorObject_1 = __webpack_require__(16);
/**
 * Returns an Observable that emits all items emitted by the source Observable that are distinct by comparison from the previous item.
 * If a comparator function is provided, then it will be called for each item to test for whether or not that value should be emitted.
 * If a comparator function is not provided, an equality check is used by default.
 * @param {function} [compare] optional comparison function called to test if an item is distinct from the previous item in the source.
 * @return {Observable} an Observable that emits items from the source Observable with distinct values.
 * @method distinctUntilChanged
 * @owner Observable
 */
function distinctUntilChanged(compare, keySelector) {
    return this.lift(new DistinctUntilChangedOperator(compare, keySelector));
}
exports.distinctUntilChanged = distinctUntilChanged;
var DistinctUntilChangedOperator = (function () {
    function DistinctUntilChangedOperator(compare, keySelector) {
        this.compare = compare;
        this.keySelector = keySelector;
    }
    DistinctUntilChangedOperator.prototype.call = function (subscriber, source) {
        return source._subscribe(new DistinctUntilChangedSubscriber(subscriber, this.compare, this.keySelector));
    };
    return DistinctUntilChangedOperator;
}());
/**
 * We need this JSDoc comment for affecting ESDoc.
 * @ignore
 * @extends {Ignored}
 */
var DistinctUntilChangedSubscriber = (function (_super) {
    __extends(DistinctUntilChangedSubscriber, _super);
    function DistinctUntilChangedSubscriber(destination, compare, keySelector) {
        _super.call(this, destination);
        this.keySelector = keySelector;
        this.hasKey = false;
        if (typeof compare === 'function') {
            this.compare = compare;
        }
    }
    DistinctUntilChangedSubscriber.prototype.compare = function (x, y) {
        return x === y;
    };
    DistinctUntilChangedSubscriber.prototype._next = function (value) {
        var keySelector = this.keySelector;
        var key = value;
        if (keySelector) {
            key = tryCatch_1.tryCatch(this.keySelector)(value);
            if (key === errorObject_1.errorObject) {
                return this.destination.error(errorObject_1.errorObject.e);
            }
        }
        var result = false;
        if (this.hasKey) {
            result = tryCatch_1.tryCatch(this.compare)(this.key, key);
            if (result === errorObject_1.errorObject) {
                return this.destination.error(errorObject_1.errorObject.e);
            }
        }
        else {
            this.hasKey = true;
        }
        if (Boolean(result) === false) {
            this.key = key;
            this.destination.next(value);
        }
    };
    return DistinctUntilChangedSubscriber;
}(Subscriber_1.Subscriber));
//# sourceMappingURL=distinctUntilChanged.js.map

/***/ },
/* 405 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
"use strict";
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var Subscriber_1 = __webpack_require__(3);
/**
 * Filter items emitted by the source Observable by only emitting those that
 * satisfy a specified predicate.
 *
 * <span class="informal">Like
 * [Array.prototype.filter()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/filter),
 * it only emits a value from the source if it passes a criterion function.</span>
 *
 * <img src="./img/filter.png" width="100%">
 *
 * Similar to the well-known `Array.prototype.filter` method, this operator
 * takes values from the source Observable, passes them through a `predicate`
 * function and only emits those values that yielded `true`.
 *
 * @example <caption>Emit only click events whose target was a DIV element</caption>
 * var clicks = Rx.Observable.fromEvent(document, 'click');
 * var clicksOnDivs = clicks.filter(ev => ev.target.tagName === 'DIV');
 * clicksOnDivs.subscribe(x => console.log(x));
 *
 * @see {@link distinct}
 * @see {@link distinctKey}
 * @see {@link distinctUntilChanged}
 * @see {@link distinctUntilKeyChanged}
 * @see {@link ignoreElements}
 * @see {@link partition}
 * @see {@link skip}
 *
 * @param {function(value: T, index: number): boolean} predicate A function that
 * evaluates each value emitted by the source Observable. If it returns `true`,
 * the value is emitted, if `false` the value is not passed to the output
 * Observable. The `index` parameter is the number `i` for the i-th source
 * emission that has happened since the subscription, starting from the number
 * `0`.
 * @param {any} [thisArg] An optional argument to determine the value of `this`
 * in the `predicate` function.
 * @return {Observable} An Observable of values from the source that were
 * allowed by the `predicate` function.
 * @method filter
 * @owner Observable
 */
function filter(predicate, thisArg) {
    return this.lift(new FilterOperator(predicate, thisArg));
}
exports.filter = filter;
var FilterOperator = (function () {
    function FilterOperator(predicate, thisArg) {
        this.predicate = predicate;
        this.thisArg = thisArg;
    }
    FilterOperator.prototype.call = function (subscriber, source) {
        return source._subscribe(new FilterSubscriber(subscriber, this.predicate, this.thisArg));
    };
    return FilterOperator;
}());
/**
 * We need this JSDoc comment for affecting ESDoc.
 * @ignore
 * @extends {Ignored}
 */
var FilterSubscriber = (function (_super) {
    __extends(FilterSubscriber, _super);
    function FilterSubscriber(destination, predicate, thisArg) {
        _super.call(this, destination);
        this.predicate = predicate;
        this.thisArg = thisArg;
        this.count = 0;
        this.predicate = predicate;
    }
    // the try catch block below is left specifically for
    // optimization and perf reasons. a tryCatcher is not necessary here.
    FilterSubscriber.prototype._next = function (value) {
        var result;
        try {
            result = this.predicate.call(this.thisArg, value, this.count++);
        }
        catch (err) {
            this.destination.error(err);
            return;
        }
        if (result) {
            this.destination.next(value);
        }
    };
    return FilterSubscriber;
}(Subscriber_1.Subscriber));
//# sourceMappingURL=filter.js.map

/***/ },
/* 406 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
"use strict";
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var Subscriber_1 = __webpack_require__(3);
/**
 * Emits only the first value emitted by the source Observable that meets some
 * condition.
 *
 * <span class="informal">Finds the first value that passes some test and emits
 * that.</span>
 *
 * <img src="./img/find.png" width="100%">
 *
 * `find` searches for the first item in the source Observable that matches the
 * specified condition embodied by the `predicate`, and returns the first
 * occurrence in the source. Unlike {@link first}, the `predicate` is required
 * in `find`, and does not emit an error if a valid value is not found.
 *
 * @example <caption>Find and emit the first click that happens on a DIV element</caption>
 * var clicks = Rx.Observable.fromEvent(document, 'click');
 * var result = clicks.find(ev => ev.target.tagName === 'DIV');
 * result.subscribe(x => console.log(x));
 *
 * @see {@link filter}
 * @see {@link first}
 * @see {@link findIndex}
 * @see {@link take}
 *
 * @param {function(value: T, index: number, source: Observable<T>): boolean} predicate
 * A function called with each item to test for condition matching.
 * @param {any} [thisArg] An optional argument to determine the value of `this`
 * in the `predicate` function.
 * @return {Observable<T>} An Observable of the first item that matches the
 * condition.
 * @method find
 * @owner Observable
 */
function find(predicate, thisArg) {
    if (typeof predicate !== 'function') {
        throw new TypeError('predicate is not a function');
    }
    return this.lift(new FindValueOperator(predicate, this, false, thisArg));
}
exports.find = find;
var FindValueOperator = (function () {
    function FindValueOperator(predicate, source, yieldIndex, thisArg) {
        this.predicate = predicate;
        this.source = source;
        this.yieldIndex = yieldIndex;
        this.thisArg = thisArg;
    }
    FindValueOperator.prototype.call = function (observer, source) {
        return source._subscribe(new FindValueSubscriber(observer, this.predicate, this.source, this.yieldIndex, this.thisArg));
    };
    return FindValueOperator;
}());
exports.FindValueOperator = FindValueOperator;
/**
 * We need this JSDoc comment for affecting ESDoc.
 * @ignore
 * @extends {Ignored}
 */
var FindValueSubscriber = (function (_super) {
    __extends(FindValueSubscriber, _super);
    function FindValueSubscriber(destination, predicate, source, yieldIndex, thisArg) {
        _super.call(this, destination);
        this.predicate = predicate;
        this.source = source;
        this.yieldIndex = yieldIndex;
        this.thisArg = thisArg;
        this.index = 0;
    }
    FindValueSubscriber.prototype.notifyComplete = function (value) {
        var destination = this.destination;
        destination.next(value);
        destination.complete();
    };
    FindValueSubscriber.prototype._next = function (value) {
        var _a = this, predicate = _a.predicate, thisArg = _a.thisArg;
        var index = this.index++;
        try {
            var result = predicate.call(thisArg || this, value, index, this.source);
            if (result) {
                this.notifyComplete(this.yieldIndex ? index : value);
            }
        }
        catch (err) {
            this.destination.error(err);
        }
    };
    FindValueSubscriber.prototype._complete = function () {
        this.notifyComplete(this.yieldIndex ? -1 : undefined);
    };
    return FindValueSubscriber;
}(Subscriber_1.Subscriber));
exports.FindValueSubscriber = FindValueSubscriber;
//# sourceMappingURL=find.js.map

/***/ },
/* 407 */,
/* 408 */,
/* 409 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
"use strict";
var ArrayObservable_1 = __webpack_require__(40);
var mergeAll_1 = __webpack_require__(64);
var isScheduler_1 = __webpack_require__(47);
/**
 * Creates an output Observable which concurrently emits all values from every
 * given input Observable.
 *
 * <span class="informal">Flattens multiple Observables together by blending
 * their values into one Observable.</span>
 *
 * <img src="./img/merge.png" width="100%">
 *
 * `merge` subscribes to each given input Observable (either the source or an
 * Observable given as argument), and simply forwards (without doing any
 * transformation) all the values from all the input Observables to the output
 * Observable. The output Observable only completes once all input Observables
 * have completed. Any error delivered by an input Observable will be immediately
 * emitted on the output Observable.
 *
 * @example <caption>Merge together two Observables: 1s interval and clicks</caption>
 * var clicks = Rx.Observable.fromEvent(document, 'click');
 * var timer = Rx.Observable.interval(1000);
 * var clicksOrTimer = clicks.merge(timer);
 * clicksOrTimer.subscribe(x => console.log(x));
 *
 * @example <caption>Merge together 3 Observables, but only 2 run concurrently</caption>
 * var timer1 = Rx.Observable.interval(1000).take(10);
 * var timer2 = Rx.Observable.interval(2000).take(6);
 * var timer3 = Rx.Observable.interval(500).take(10);
 * var concurrent = 2; // the argument
 * var merged = timer1.merge(timer2, timer3, concurrent);
 * merged.subscribe(x => console.log(x));
 *
 * @see {@link mergeAll}
 * @see {@link mergeMap}
 * @see {@link mergeMapTo}
 * @see {@link mergeScan}
 *
 * @param {Observable} other An input Observable to merge with the source
 * Observable. More than one input Observables may be given as argument.
 * @param {number} [concurrent=Number.POSITIVE_INFINITY] Maximum number of input
 * Observables being subscribed to concurrently.
 * @param {Scheduler} [scheduler=null] The Scheduler to use for managing
 * concurrency of input Observables.
 * @return {Observable} an Observable that emits items that are the result of
 * every input Observable.
 * @method merge
 * @owner Observable
 */
function merge() {
    var observables = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        observables[_i - 0] = arguments[_i];
    }
    observables.unshift(this);
    return mergeStatic.apply(this, observables);
}
exports.merge = merge;
/* tslint:enable:max-line-length */
/**
 * Creates an output Observable which concurrently emits all values from every
 * given input Observable.
 *
 * <span class="informal">Flattens multiple Observables together by blending
 * their values into one Observable.</span>
 *
 * <img src="./img/merge.png" width="100%">
 *
 * `merge` subscribes to each given input Observable (as arguments), and simply
 * forwards (without doing any transformation) all the values from all the input
 * Observables to the output Observable. The output Observable only completes
 * once all input Observables have completed. Any error delivered by an input
 * Observable will be immediately emitted on the output Observable.
 *
 * @example <caption>Merge together two Observables: 1s interval and clicks</caption>
 * var clicks = Rx.Observable.fromEvent(document, 'click');
 * var timer = Rx.Observable.interval(1000);
 * var clicksOrTimer = Rx.Observable.merge(clicks, timer);
 * clicksOrTimer.subscribe(x => console.log(x));
 *
 * @example <caption>Merge together 3 Observables, but only 2 run concurrently</caption>
 * var timer1 = Rx.Observable.interval(1000).take(10);
 * var timer2 = Rx.Observable.interval(2000).take(6);
 * var timer3 = Rx.Observable.interval(500).take(10);
 * var concurrent = 2; // the argument
 * var merged = Rx.Observable.merge(timer1, timer2, timer3, concurrent);
 * merged.subscribe(x => console.log(x));
 *
 * @see {@link mergeAll}
 * @see {@link mergeMap}
 * @see {@link mergeMapTo}
 * @see {@link mergeScan}
 *
 * @param {Observable} input1 An input Observable to merge with others.
 * @param {Observable} input2 An input Observable to merge with others.
 * @param {number} [concurrent=Number.POSITIVE_INFINITY] Maximum number of input
 * Observables being subscribed to concurrently.
 * @param {Scheduler} [scheduler=null] The Scheduler to use for managing
 * concurrency of input Observables.
 * @return {Observable} an Observable that emits items that are the result of
 * every input Observable.
 * @static true
 * @name merge
 * @owner Observable
 */
function mergeStatic() {
    var observables = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        observables[_i - 0] = arguments[_i];
    }
    var concurrent = Number.POSITIVE_INFINITY;
    var scheduler = null;
    var last = observables[observables.length - 1];
    if (isScheduler_1.isScheduler(last)) {
        scheduler = observables.pop();
        if (observables.length > 1 && typeof observables[observables.length - 1] === 'number') {
            concurrent = observables.pop();
        }
    }
    else if (typeof last === 'number') {
        concurrent = observables.pop();
    }
    if (observables.length === 1) {
        return observables[0];
    }
    return new ArrayObservable_1.ArrayObservable(observables, scheduler).lift(new mergeAll_1.MergeAllOperator(concurrent));
}
exports.mergeStatic = mergeStatic;
//# sourceMappingURL=merge.js.map

/***/ },
/* 410 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
"use strict";
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var OuterSubscriber_1 = __webpack_require__(6);
var subscribeToResult_1 = __webpack_require__(7);
/**
 * Projects each source value to the same Observable which is merged multiple
 * times in the output Observable.
 *
 * <span class="informal">It's like {@link mergeMap}, but maps each value always
 * to the same inner Observable.</span>
 *
 * <img src="./img/mergeMapTo.png" width="100%">
 *
 * Maps each source value to the given Observable `innerObservable` regardless
 * of the source value, and then merges those resulting Observables into one
 * single Observable, which is the output Observable.
 *
 * @example <caption>For each click event, start an interval Observable ticking every 1 second</caption>
 * var clicks = Rx.Observable.fromEvent(document, 'click');
 * var result = clicks.mergeMapTo(Rx.Observable.interval(1000));
 * result.subscribe(x => console.log(x));
 *
 * @see {@link concatMapTo}
 * @see {@link merge}
 * @see {@link mergeAll}
 * @see {@link mergeMap}
 * @see {@link mergeScan}
 * @see {@link switchMapTo}
 *
 * @param {Observable} innerObservable An Observable to replace each value from
 * the source Observable.
 * @param {function(outerValue: T, innerValue: I, outerIndex: number, innerIndex: number): any} [resultSelector]
 * A function to produce the value on the output Observable based on the values
 * and the indices of the source (outer) emission and the inner Observable
 * emission. The arguments passed to this function are:
 * - `outerValue`: the value that came from the source
 * - `innerValue`: the value that came from the projected Observable
 * - `outerIndex`: the "index" of the value that came from the source
 * - `innerIndex`: the "index" of the value from the projected Observable
 * @param {number} [concurrent=Number.POSITIVE_INFINITY] Maximum number of input
 * Observables being subscribed to concurrently.
 * @return {Observable} An Observable that emits items from the given
 * `innerObservable` (and optionally transformed through `resultSelector`) every
 * time a value is emitted on the source Observable.
 * @method mergeMapTo
 * @owner Observable
 */
function mergeMapTo(innerObservable, resultSelector, concurrent) {
    if (concurrent === void 0) { concurrent = Number.POSITIVE_INFINITY; }
    if (typeof resultSelector === 'number') {
        concurrent = resultSelector;
        resultSelector = null;
    }
    return this.lift(new MergeMapToOperator(innerObservable, resultSelector, concurrent));
}
exports.mergeMapTo = mergeMapTo;
// TODO: Figure out correct signature here: an Operator<Observable<T>, R>
//       needs to implement call(observer: Subscriber<R>): Subscriber<Observable<T>>
var MergeMapToOperator = (function () {
    function MergeMapToOperator(ish, resultSelector, concurrent) {
        if (concurrent === void 0) { concurrent = Number.POSITIVE_INFINITY; }
        this.ish = ish;
        this.resultSelector = resultSelector;
        this.concurrent = concurrent;
    }
    MergeMapToOperator.prototype.call = function (observer, source) {
        return source._subscribe(new MergeMapToSubscriber(observer, this.ish, this.resultSelector, this.concurrent));
    };
    return MergeMapToOperator;
}());
exports.MergeMapToOperator = MergeMapToOperator;
/**
 * We need this JSDoc comment for affecting ESDoc.
 * @ignore
 * @extends {Ignored}
 */
var MergeMapToSubscriber = (function (_super) {
    __extends(MergeMapToSubscriber, _super);
    function MergeMapToSubscriber(destination, ish, resultSelector, concurrent) {
        if (concurrent === void 0) { concurrent = Number.POSITIVE_INFINITY; }
        _super.call(this, destination);
        this.ish = ish;
        this.resultSelector = resultSelector;
        this.concurrent = concurrent;
        this.hasCompleted = false;
        this.buffer = [];
        this.active = 0;
        this.index = 0;
    }
    MergeMapToSubscriber.prototype._next = function (value) {
        if (this.active < this.concurrent) {
            var resultSelector = this.resultSelector;
            var index = this.index++;
            var ish = this.ish;
            var destination = this.destination;
            this.active++;
            this._innerSub(ish, destination, resultSelector, value, index);
        }
        else {
            this.buffer.push(value);
        }
    };
    MergeMapToSubscriber.prototype._innerSub = function (ish, destination, resultSelector, value, index) {
        this.add(subscribeToResult_1.subscribeToResult(this, ish, value, index));
    };
    MergeMapToSubscriber.prototype._complete = function () {
        this.hasCompleted = true;
        if (this.active === 0 && this.buffer.length === 0) {
            this.destination.complete();
        }
    };
    MergeMapToSubscriber.prototype.notifyNext = function (outerValue, innerValue, outerIndex, innerIndex, innerSub) {
        var _a = this, resultSelector = _a.resultSelector, destination = _a.destination;
        if (resultSelector) {
            this.trySelectResult(outerValue, innerValue, outerIndex, innerIndex);
        }
        else {
            destination.next(innerValue);
        }
    };
    MergeMapToSubscriber.prototype.trySelectResult = function (outerValue, innerValue, outerIndex, innerIndex) {
        var _a = this, resultSelector = _a.resultSelector, destination = _a.destination;
        var result;
        try {
            result = resultSelector(outerValue, innerValue, outerIndex, innerIndex);
        }
        catch (err) {
            destination.error(err);
            return;
        }
        destination.next(result);
    };
    MergeMapToSubscriber.prototype.notifyError = function (err) {
        this.destination.error(err);
    };
    MergeMapToSubscriber.prototype.notifyComplete = function (innerSub) {
        var buffer = this.buffer;
        this.remove(innerSub);
        this.active--;
        if (buffer.length > 0) {
            this._next(buffer.shift());
        }
        else if (this.active === 0 && this.hasCompleted) {
            this.destination.complete();
        }
    };
    return MergeMapToSubscriber;
}(OuterSubscriber_1.OuterSubscriber));
exports.MergeMapToSubscriber = MergeMapToSubscriber;
//# sourceMappingURL=mergeMapTo.js.map

/***/ },
/* 411 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
"use strict";
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var FromObservable_1 = __webpack_require__(398);
var isArray_1 = __webpack_require__(32);
var OuterSubscriber_1 = __webpack_require__(6);
var subscribeToResult_1 = __webpack_require__(7);
function onErrorResumeNext() {
    var nextSources = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        nextSources[_i - 0] = arguments[_i];
    }
    if (nextSources.length === 1 && isArray_1.isArray(nextSources[0])) {
        nextSources = nextSources[0];
    }
    return this.lift(new OnErrorResumeNextOperator(nextSources));
}
exports.onErrorResumeNext = onErrorResumeNext;
/* tslint:enable:max-line-length */
function onErrorResumeNextStatic() {
    var nextSources = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        nextSources[_i - 0] = arguments[_i];
    }
    var source = null;
    if (nextSources.length === 1 && isArray_1.isArray(nextSources[0])) {
        nextSources = nextSources[0];
    }
    source = nextSources.shift();
    return new FromObservable_1.FromObservable(source, null).lift(new OnErrorResumeNextOperator(nextSources));
}
exports.onErrorResumeNextStatic = onErrorResumeNextStatic;
var OnErrorResumeNextOperator = (function () {
    function OnErrorResumeNextOperator(nextSources) {
        this.nextSources = nextSources;
    }
    OnErrorResumeNextOperator.prototype.call = function (subscriber, source) {
        return source._subscribe(new OnErrorResumeNextSubscriber(subscriber, this.nextSources));
    };
    return OnErrorResumeNextOperator;
}());
var OnErrorResumeNextSubscriber = (function (_super) {
    __extends(OnErrorResumeNextSubscriber, _super);
    function OnErrorResumeNextSubscriber(destination, nextSources) {
        _super.call(this, destination);
        this.destination = destination;
        this.nextSources = nextSources;
    }
    OnErrorResumeNextSubscriber.prototype.notifyError = function (error, innerSub) {
        this.subscribeToNextSource();
    };
    OnErrorResumeNextSubscriber.prototype.notifyComplete = function (innerSub) {
        this.subscribeToNextSource();
    };
    OnErrorResumeNextSubscriber.prototype._error = function (err) {
        this.subscribeToNextSource();
    };
    OnErrorResumeNextSubscriber.prototype._complete = function () {
        this.subscribeToNextSource();
    };
    OnErrorResumeNextSubscriber.prototype.subscribeToNextSource = function () {
        var next = this.nextSources.shift();
        if (next) {
            this.add(subscribeToResult_1.subscribeToResult(this, next));
        }
        else {
            this.destination.complete();
        }
    };
    return OnErrorResumeNextSubscriber;
}(OuterSubscriber_1.OuterSubscriber));
//# sourceMappingURL=onErrorResumeNext.js.map

/***/ },
/* 412 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
"use strict";
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var isArray_1 = __webpack_require__(32);
var ArrayObservable_1 = __webpack_require__(40);
var OuterSubscriber_1 = __webpack_require__(6);
var subscribeToResult_1 = __webpack_require__(7);
/**
 * Returns an Observable that mirrors the first source Observable to emit an item
 * from the combination of this Observable and supplied Observables
 * @param {...Observables} ...observables sources used to race for which Observable emits first.
 * @return {Observable} an Observable that mirrors the output of the first Observable to emit an item.
 * @method race
 * @owner Observable
 */
function race() {
    var observables = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        observables[_i - 0] = arguments[_i];
    }
    // if the only argument is an array, it was most likely called with
    // `pair([obs1, obs2, ...])`
    if (observables.length === 1 && isArray_1.isArray(observables[0])) {
        observables = observables[0];
    }
    observables.unshift(this);
    return raceStatic.apply(this, observables);
}
exports.race = race;
function raceStatic() {
    var observables = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        observables[_i - 0] = arguments[_i];
    }
    // if the only argument is an array, it was most likely called with
    // `pair([obs1, obs2, ...])`
    if (observables.length === 1) {
        if (isArray_1.isArray(observables[0])) {
            observables = observables[0];
        }
        else {
            return observables[0];
        }
    }
    return new ArrayObservable_1.ArrayObservable(observables).lift(new RaceOperator());
}
exports.raceStatic = raceStatic;
var RaceOperator = (function () {
    function RaceOperator() {
    }
    RaceOperator.prototype.call = function (subscriber, source) {
        return source._subscribe(new RaceSubscriber(subscriber));
    };
    return RaceOperator;
}());
exports.RaceOperator = RaceOperator;
/**
 * We need this JSDoc comment for affecting ESDoc.
 * @ignore
 * @extends {Ignored}
 */
var RaceSubscriber = (function (_super) {
    __extends(RaceSubscriber, _super);
    function RaceSubscriber(destination) {
        _super.call(this, destination);
        this.hasFirst = false;
        this.observables = [];
        this.subscriptions = [];
    }
    RaceSubscriber.prototype._next = function (observable) {
        this.observables.push(observable);
    };
    RaceSubscriber.prototype._complete = function () {
        var observables = this.observables;
        var len = observables.length;
        if (len === 0) {
            this.destination.complete();
        }
        else {
            for (var i = 0; i < len; i++) {
                var observable = observables[i];
                var subscription = subscribeToResult_1.subscribeToResult(this, observable, observable, i);
                if (this.subscriptions) {
                    this.subscriptions.push(subscription);
                    this.add(subscription);
                }
            }
            this.observables = null;
        }
    };
    RaceSubscriber.prototype.notifyNext = function (outerValue, innerValue, outerIndex, innerIndex, innerSub) {
        if (!this.hasFirst) {
            this.hasFirst = true;
            for (var i = 0; i < this.subscriptions.length; i++) {
                if (i !== outerIndex) {
                    var subscription = this.subscriptions[i];
                    subscription.unsubscribe();
                    this.remove(subscription);
                }
            }
            this.subscriptions = null;
        }
        this.destination.next(innerValue);
    };
    return RaceSubscriber;
}(OuterSubscriber_1.OuterSubscriber));
exports.RaceSubscriber = RaceSubscriber;
//# sourceMappingURL=race.js.map

/***/ },
/* 413 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
"use strict";
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var Subscriber_1 = __webpack_require__(3);
var async_1 = __webpack_require__(23);
/**
 * @param scheduler
 * @return {Observable<TimeInterval<any>>|WebSocketSubject<T>|Observable<T>}
 * @method timeInterval
 * @owner Observable
 */
function timeInterval(scheduler) {
    if (scheduler === void 0) { scheduler = async_1.async; }
    return this.lift(new TimeIntervalOperator(scheduler));
}
exports.timeInterval = timeInterval;
var TimeInterval = (function () {
    function TimeInterval(value, interval) {
        this.value = value;
        this.interval = interval;
    }
    return TimeInterval;
}());
exports.TimeInterval = TimeInterval;
;
var TimeIntervalOperator = (function () {
    function TimeIntervalOperator(scheduler) {
        this.scheduler = scheduler;
    }
    TimeIntervalOperator.prototype.call = function (observer, source) {
        return source._subscribe(new TimeIntervalSubscriber(observer, this.scheduler));
    };
    return TimeIntervalOperator;
}());
/**
 * We need this JSDoc comment for affecting ESDoc.
 * @ignore
 * @extends {Ignored}
 */
var TimeIntervalSubscriber = (function (_super) {
    __extends(TimeIntervalSubscriber, _super);
    function TimeIntervalSubscriber(destination, scheduler) {
        _super.call(this, destination);
        this.scheduler = scheduler;
        this.lastTime = 0;
        this.lastTime = scheduler.now();
    }
    TimeIntervalSubscriber.prototype._next = function (value) {
        var now = this.scheduler.now();
        var span = now - this.lastTime;
        this.lastTime = now;
        this.destination.next(new TimeInterval(value, span));
    };
    return TimeIntervalSubscriber;
}(Subscriber_1.Subscriber));
//# sourceMappingURL=timeInterval.js.map

/***/ },
/* 414 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
"use strict";
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var Subscriber_1 = __webpack_require__(3);
var async_1 = __webpack_require__(23);
/**
 * @param scheduler
 * @return {Observable<Timestamp<any>>|WebSocketSubject<T>|Observable<T>}
 * @method timestamp
 * @owner Observable
 */
function timestamp(scheduler) {
    if (scheduler === void 0) { scheduler = async_1.async; }
    return this.lift(new TimestampOperator(scheduler));
}
exports.timestamp = timestamp;
var Timestamp = (function () {
    function Timestamp(value, timestamp) {
        this.value = value;
        this.timestamp = timestamp;
    }
    return Timestamp;
}());
exports.Timestamp = Timestamp;
;
var TimestampOperator = (function () {
    function TimestampOperator(scheduler) {
        this.scheduler = scheduler;
    }
    TimestampOperator.prototype.call = function (observer, source) {
        return source._subscribe(new TimestampSubscriber(observer, this.scheduler));
    };
    return TimestampOperator;
}());
var TimestampSubscriber = (function (_super) {
    __extends(TimestampSubscriber, _super);
    function TimestampSubscriber(destination, scheduler) {
        _super.call(this, destination);
        this.scheduler = scheduler;
    }
    TimestampSubscriber.prototype._next = function (value) {
        var now = this.scheduler.now();
        this.destination.next(new Timestamp(value, now));
    };
    return TimestampSubscriber;
}(Subscriber_1.Subscriber));
//# sourceMappingURL=timestamp.js.map

/***/ },
/* 415 */,
/* 416 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
"use strict";
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var AsyncAction_1 = __webpack_require__(80);
var AsyncScheduler_1 = __webpack_require__(81);
var VirtualTimeScheduler = (function (_super) {
    __extends(VirtualTimeScheduler, _super);
    function VirtualTimeScheduler(SchedulerAction, maxFrames) {
        var _this = this;
        if (SchedulerAction === void 0) { SchedulerAction = VirtualAction; }
        if (maxFrames === void 0) { maxFrames = Number.POSITIVE_INFINITY; }
        _super.call(this, SchedulerAction, function () { return _this.frame; });
        this.maxFrames = maxFrames;
        this.frame = 0;
        this.index = -1;
    }
    /**
     * Prompt the Scheduler to execute all of its queued actions, therefore
     * clearing its queue.
     * @return {void}
     */
    VirtualTimeScheduler.prototype.flush = function () {
        var _a = this, actions = _a.actions, maxFrames = _a.maxFrames;
        var error, action;
        while ((action = actions.shift()) && (this.frame = action.delay) <= maxFrames) {
            if (error = action.execute(action.state, action.delay)) {
                break;
            }
        }
        if (error) {
            while (action = actions.shift()) {
                action.unsubscribe();
            }
            throw error;
        }
    };
    VirtualTimeScheduler.frameTimeFactor = 10;
    return VirtualTimeScheduler;
}(AsyncScheduler_1.AsyncScheduler));
exports.VirtualTimeScheduler = VirtualTimeScheduler;
/**
 * We need this JSDoc comment for affecting ESDoc.
 * @ignore
 * @extends {Ignored}
 */
var VirtualAction = (function (_super) {
    __extends(VirtualAction, _super);
    function VirtualAction(scheduler, work, index) {
        if (index === void 0) { index = scheduler.index += 1; }
        _super.call(this, scheduler, work);
        this.scheduler = scheduler;
        this.work = work;
        this.index = index;
        this.index = scheduler.index = index;
    }
    VirtualAction.prototype.schedule = function (state, delay) {
        if (delay === void 0) { delay = 0; }
        return !this.id ?
            _super.prototype.schedule.call(this, state, delay) : this.add(new VirtualAction(this.scheduler, this.work)).schedule(state, delay);
    };
    VirtualAction.prototype.requestAsyncId = function (scheduler, id, delay) {
        if (delay === void 0) { delay = 0; }
        this.delay = scheduler.frame + delay;
        var actions = scheduler.actions;
        actions.push(this);
        actions.sort(VirtualAction.sortActions);
        return true;
    };
    VirtualAction.prototype.recycleAsyncId = function (scheduler, id, delay) {
        if (delay === void 0) { delay = 0; }
        return undefined;
    };
    VirtualAction.sortActions = function (a, b) {
        if (a.delay === b.delay) {
            if (a.index === b.index) {
                return 0;
            }
            else if (a.index > b.index) {
                return 1;
            }
            else {
                return -1;
            }
        }
        else if (a.delay > b.delay) {
            return 1;
        }
        else {
            return -1;
        }
    };
    return VirtualAction;
}(AsyncAction_1.AsyncAction));
exports.VirtualAction = VirtualAction;
//# sourceMappingURL=VirtualTimeScheduler.js.map

/***/ },
/* 417 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
"use strict";
var AsapAction_1 = __webpack_require__(866);
var AsapScheduler_1 = __webpack_require__(867);
exports.asap = new AsapScheduler_1.AsapScheduler(AsapAction_1.AsapAction);
//# sourceMappingURL=asap.js.map

/***/ },
/* 418 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
"use strict";
var QueueAction_1 = __webpack_require__(868);
var QueueScheduler_1 = __webpack_require__(869);
exports.queue = new QueueScheduler_1.QueueScheduler(QueueAction_1.QueueAction);
//# sourceMappingURL=queue.js.map

/***/ },
/* 419 */
/***/ function(module, exports) {

"use strict";
"use strict";
var SubscriptionLog = (function () {
    function SubscriptionLog(subscribedFrame, unsubscribedFrame) {
        if (unsubscribedFrame === void 0) { unsubscribedFrame = Number.POSITIVE_INFINITY; }
        this.subscribedFrame = subscribedFrame;
        this.unsubscribedFrame = unsubscribedFrame;
    }
    return SubscriptionLog;
}());
exports.SubscriptionLog = SubscriptionLog;
//# sourceMappingURL=SubscriptionLog.js.map

/***/ },
/* 420 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
"use strict";
var SubscriptionLog_1 = __webpack_require__(419);
var SubscriptionLoggable = (function () {
    function SubscriptionLoggable() {
        this.subscriptions = [];
    }
    SubscriptionLoggable.prototype.logSubscribedFrame = function () {
        this.subscriptions.push(new SubscriptionLog_1.SubscriptionLog(this.scheduler.now()));
        return this.subscriptions.length - 1;
    };
    SubscriptionLoggable.prototype.logUnsubscribedFrame = function (index) {
        var subscriptionLogs = this.subscriptions;
        var oldSubscriptionLog = subscriptionLogs[index];
        subscriptionLogs[index] = new SubscriptionLog_1.SubscriptionLog(oldSubscriptionLog.subscribedFrame, this.scheduler.now());
    };
    return SubscriptionLoggable;
}());
exports.SubscriptionLoggable = SubscriptionLoggable;
//# sourceMappingURL=SubscriptionLoggable.js.map

/***/ },
/* 421 */,
/* 422 */
/***/ function(module, exports) {

"use strict";
"use strict";
function applyMixins(derivedCtor, baseCtors) {
    for (var i = 0, len = baseCtors.length; i < len; i++) {
        var baseCtor = baseCtors[i];
        var propertyKeys = Object.getOwnPropertyNames(baseCtor.prototype);
        for (var j = 0, len2 = propertyKeys.length; j < len2; j++) {
            var name_1 = propertyKeys[j];
            derivedCtor.prototype[name_1] = baseCtor.prototype[name_1];
        }
    }
}
exports.applyMixins = applyMixins;
//# sourceMappingURL=applyMixins.js.map

/***/ },
/* 423 */,
/* 424 */
/***/ function(module, exports) {

"use strict";
"use strict";
/* tslint:disable:no-empty */
function noop() { }
exports.noop = noop;
//# sourceMappingURL=noop.js.map

/***/ },
/* 425 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
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
var core_1 = __webpack_require__(1);
var About = (function () {
    function About() {
    }
    About = __decorate([
        core_1.Component({
            selector: 'my-about',
            template: __webpack_require__(598),
            styles: [String(__webpack_require__(587))]
        }), 
        __metadata('design:paramtypes', [])
    ], About);
    return About;
}());
exports.About = About;


/***/ },
/* 426 */
/***/ function(module, exports) {

"use strict";
"use strict";
function escapeRegexp(queryToEscape) {
    return queryToEscape.replace(/([.?*+^$[\]\\(){}|-])/g, '\\$1');
}
exports.escapeRegexp = escapeRegexp;


/***/ },
/* 427 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
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
var core_1 = __webpack_require__(1);
var common_1 = __webpack_require__(426);
var HighlightPipe = (function () {
    function HighlightPipe() {
    }
    HighlightPipe.prototype.transform = function (value, query) {
        if (query.length < 1) {
            return value;
        }
        if (query) {
            var tagRE = new RegExp('<[^<>]*>', 'ig');
            // get ist of tags
            var tagList = value.match(tagRE);
            // Replace tags with token
            var tmpValue = value.replace(tagRE, '$!$');
            // Replace search words
            value = tmpValue.replace(new RegExp(common_1.escapeRegexp(query), 'gi'), '<strong>$&</strong>');
            // Reinsert HTML
            for (var i = 0; value.indexOf('$!$') > -1; i++) {
                value = value.replace('$!$', tagList[i]);
            }
        }
        return value;
    };
    HighlightPipe = __decorate([
        core_1.Pipe({ name: 'highlight' }), 
        __metadata('design:paramtypes', [])
    ], HighlightPipe);
    return HighlightPipe;
}());
exports.HighlightPipe = HighlightPipe;
function stripTags(input) {
    var tags = /<\/?([a-z][a-z0-9]*)\b[^>]*>/gi;
    var commentsAndPhpTags = /<!--[\s\S]*?-->|<\?(?:php)?[\s\S]*?\?>/gi;
    return input.replace(commentsAndPhpTags, '').replace(tags, '');
}
exports.stripTags = stripTags;


/***/ },
/* 428 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
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
var core_1 = __webpack_require__(1);
var EconComponent = (function () {
    function EconComponent() {
        console.log('In econ constructor');
    }
    EconComponent = __decorate([
        core_1.Component({
            selector: 'econ',
            template: __webpack_require__(599),
            styles: [String(__webpack_require__(589))]
        }), 
        __metadata('design:paramtypes', [])
    ], EconComponent);
    return EconComponent;
}());
exports.EconComponent = EconComponent;


/***/ },
/* 429 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
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
var core_1 = __webpack_require__(1);
var statistics_service_1 = __webpack_require__(48);
var Home = (function () {
    function Home(statisticsService) {
        this.statisticsService = statisticsService;
    }
    Home = __decorate([
        core_1.Component({
            selector: 'my-home',
            template: "\n\t<div class=\"wrapper\">\n\t\t<start></start>\n    <mail-list></mail-list>\n\t\t<statistics></statistics>\n\t</div>",
            styles: [String(__webpack_require__(591))],
            providers: [statistics_service_1.StatisticsService]
        }), 
        __metadata('design:paramtypes', [statistics_service_1.StatisticsService])
    ], Home);
    return Home;
}());
exports.Home = Home;


/***/ },
/* 430 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
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
var core_1 = __webpack_require__(1);
var statistics_service_1 = __webpack_require__(48);
var angular2_chartjs_1 = __webpack_require__(392);
var LineChartComponent = (function () {
    /*
        Constructor for statisticsService
    */
    function LineChartComponent(statisticsService) {
        this.statisticsService = statisticsService;
        //initial data for charts
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
        //this.id = this.subject
        //console.log(this.id)
    }
    LineChartComponent.prototype.ngOnInit = function () {
        //console.log(this.subject['subject'])
        this.id = this.subject['subject'] + "Chart";
        if (window.outerWidth < 1050) {
            this.chartFontSize = 20;
        }
        else {
            this.chartFontSize = 14;
        }
        /*
          Options should be defined in each subjects service
          if to start from zero, etc
        */
        //Quiq-fix för att prova bar-chart
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
    /*
        Gets data from statistics service. Function tells
        which subject it is an instance of and recieves
        relevant data for the chart.
    */
    LineChartComponent.prototype.getData = function () {
        var t = this;
        this.statisticsService.getData(this.subject['subject']).then(function (data) {
            //console.log(data)
            // labels, displayed in the x-axis of chart
            t.data.labels = data['labels'];
            // first dataset is female data, results in graphics 'in-front'
            t.data.datasets[0].data = data['femaleData'];
            // second dataset is male data, results in graphics 'behind'
            t.data.datasets[1].data = data['maleData'];
            // sets axes labels
            t.chartComponent.chart.options.scales.yAxes[0].scaleLabel.labelString = data['yLabel'];
            t.chartComponent.chart.options.scales.xAxes[0].scaleLabel.labelString = data['xLabel'];
            // updates and redraws chart
            t.chartComponent.chart.update();
        });
    };
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Object)
    ], LineChartComponent.prototype, "subject", void 0);
    __decorate([
        core_1.ViewChild(angular2_chartjs_1.ChartComponent), 
        __metadata('design:type', angular2_chartjs_1.ChartComponent)
    ], LineChartComponent.prototype, "chartComponent", void 0);
    LineChartComponent = __decorate([
        core_1.Component({
            selector: 'line-chart',
            template: __webpack_require__(602),
            styles: [String(__webpack_require__(593))]
        }), 
        __metadata('design:paramtypes', [statistics_service_1.StatisticsService])
    ], LineChartComponent);
    return LineChartComponent;
}());
exports.LineChartComponent = LineChartComponent;


/***/ },
/* 431 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
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
var core_1 = __webpack_require__(1);
var http_1 = __webpack_require__(26);
__webpack_require__(51);
var DrugsService = (function () {
    function DrugsService(http) {
        this.http = http;
    }
    DrugsService.prototype.getDrugsData = function () {
        return Promise.resolve(this.drugsData);
    };
    DrugsService.prototype.drugsOptions = function (res) {
        var body = res.json();
        var illness = [];
        var ages = [];
        var years = [];
        for (var i = 0; i < body.variables[0].valueTexts.length; i++) {
            illness[i] = {
                text: body.variables[0].valueTexts[i],
                id: body.variables[0].values[i]
            };
        }
        for (var i = 0; i < body.variables[1].valueTexts.length; i++) {
            ages[i] = {
                text: body.variables[1].valueTexts[i],
                id: body.variables[1].values[i]
            };
        }
        for (var i = 0; i < body.variables[3].valueTexts.length; i++) {
            years[i] = {
                text: body.variables[3].valueTexts[i],
                id: body.variables[3].values[i]
            };
        }
        return { subject: "drugs",
            title: body.title,
            options: [
                {
                    items: illness,
                    placeholder: "Välj tobaksvana",
                    id: "drugHabit"
                },
                {
                    items: ages,
                    placeholder: "åldrar",
                    id: "ages"
                }
            ]
        };
    };
    DrugsService.prototype.fetchDrugsData = function (habit, age, url) {
        var body = JSON.stringify({
            "query": [
                {
                    "code": "Indikator",
                    "selection": {
                        "filter": "item",
                        "values": [
                            habit
                        ]
                    }
                },
                {
                    "code": "Alder",
                    "selection": {
                        "filter": "item",
                        "values": [
                            age
                        ]
                    }
                },
                {
                    "code": "Kon",
                    "selection": {
                        "filter": "item",
                        "values": [
                            "1",
                            "2"
                        ]
                    }
                },
                {
                    "code": "ContentsCode",
                    "selection": {
                        "filter": "item",
                        "values": [
                            "LE0101P9",
                            "LE0101QA"
                        ]
                    }
                }
            ],
            "response": {
                "format": "json"
            }
        });
        var headers = new http_1.Headers({ 'Content-Type': 'application/json' });
        return this.drugsData = this.http.post(url, body)
            .toPromise()
            .then(this.exportDrugsData)
            .catch(this.handleError);
    };
    DrugsService.prototype.exportDrugsData = function (res) {
        var body = res.json();
        var years = [];
        var valuesM = [];
        var valuesF = [];
        var yLabel = body.columns[4].text;
        var xLabel = body.columns[3].text;
        //console.log(body)
        for (var i = 0; i < body['data'].length / 2; ++i) {
            years[i] = body['data'][i].key[3];
            if (body['data'][i].key[2] === "1") {
                valuesM[i] = body['data'][i].values[0];
            }
            if (body['data'][body['data'].length / 2 + i].key[2] === "2") {
                valuesF[i] = body['data'][body['data'].length / 2 + i].values[0];
            }
        }
        return {
            labels: years,
            xLabel: xLabel,
            yLabel: yLabel,
            maleData: valuesM,
            femaleData: valuesF
        };
    };
    DrugsService.prototype.handleError = function (error) {
        var errMsg = (error.message) ? error.message :
            error.status ? error.status + " - " + error.statusText : 'Server error';
        console.error(errMsg); // log to console instead
        return Promise.reject(errMsg);
    };
    DrugsService = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [http_1.Http])
    ], DrugsService);
    return DrugsService;
}());
exports.DrugsService = DrugsService;


/***/ },
/* 432 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
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
var core_1 = __webpack_require__(1);
var http_1 = __webpack_require__(26);
__webpack_require__(51);
var EconService = (function () {
    function EconService(http) {
        this.http = http;
    }
    EconService.prototype.getEconData = function () {
        return Promise.resolve(this.econData);
    };
    EconService.prototype.econOptions = function (res) {
        var body = res.json();
        //console.log(body)
        var yrken = [];
        var years = [];
        for (var i = 0; i < body.variables[0].valueTexts.length; i++) {
            yrken[i] = {
                text: body.variables[0].valueTexts[i],
                id: body.variables[0].values[i]
            };
        }
        for (var i = 0; i < body.variables[3].valueTexts.length; i++) {
            years[i] = {
                text: body.variables[3].valueTexts[i],
                id: body.variables[3].values[i]
            };
        }
        return { subject: "econ",
            title: body.title,
            options: [
                {
                    items: yrken,
                    placeholder: "utbilgningsgrupp",
                    id: "workgroup"
                },
                {
                    items: years,
                    placeholder: "år från",
                    id: "yearFrom"
                },
                {
                    items: years,
                    placeholder: "år till",
                    id: "yearTo"
                }
            ]
        };
    };
    EconService.prototype.fetchEconData = function (utbildningsgrupp, yearFrom, yearTo, url) {
        var years = this.calcYears(yearFrom, yearTo);
        var body = JSON.stringify({
            "query": [
                {
                    "code": "UtbinriktnSUN2000",
                    "selection": {
                        "filter": "item",
                        "values": [
                            utbildningsgrupp
                        ]
                    }
                },
                {
                    "code": "Kon",
                    "selection": {
                        "filter": "item",
                        "values": [
                            "1",
                            "2"
                        ]
                    }
                },
                {
                    "code": "ContentsCode",
                    "selection": {
                        "filter": "item",
                        "values": [
                            "AM0112B1"
                        ]
                    }
                },
                {
                    "code": "Tid",
                    "selection": {
                        "filter": "item",
                        "values": years
                    }
                }
            ],
            "response": {
                "format": "json"
            }
        });
        var headers = new http_1.Headers({ 'Content-Type': 'application/json' });
        return this.econData = this.http.post(url, body)
            .toPromise()
            .then(this.exportEconData)
            .catch(this.handleError);
    };
    EconService.prototype.calcYears = function (from, to) {
        var years = [];
        var i = 0;
        while (years[years.length - 1] !== to) {
            years[i] = (parseInt(from) + i).toString();
            i++;
        }
        return years;
    };
    EconService.prototype.exportEconData = function (res) {
        var body = res.json();
        console.log(body);
        var years = [];
        var valuesM = [];
        var valuesF = [];
        var yLabel = body.columns[3].text;
        var xLabel = body.columns[2].text;
        for (var i = 0; i < body['data'].length / 2; ++i) {
            years[i] = body['data'][i].key[2];
            if (body['data'][i].key[1] === "1") {
                valuesM[i] = body['data'][i].values[0];
            }
            if (body['data'][body['data'].length / 2 + i].key[1] === "2") {
                valuesF[i] = body['data'][body['data'].length / 2 + i].values[0];
            }
        }
        return {
            labels: years,
            xLabel: xLabel,
            yLabel: yLabel,
            maleData: valuesM,
            femaleData: valuesF
        };
    };
    EconService.prototype.handleError = function (error) {
        var errMsg = (error.message) ? error.message :
            error.status ? error.status + " - " + error.statusText : 'Server error';
        console.error(errMsg); // log to console instead
        return Promise.reject(errMsg);
    };
    EconService = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [http_1.Http])
    ], EconService);
    return EconService;
}());
exports.EconService = EconService;


/***/ },
/* 433 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
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
var core_1 = __webpack_require__(1);
var http_1 = __webpack_require__(26);
__webpack_require__(51);
var FamilyService = (function () {
    function FamilyService(http) {
        this.http = http;
    }
    FamilyService.prototype.getFamilyData = function () {
        return Promise.resolve(this.familyData);
    };
    FamilyService.prototype.familyOptions = function (res) {
        var body = res.json();
        var yrken = [];
        var years = [];
        for (var i = 0; i < body.variables[0].valueTexts.length; i++) {
            yrken[i] = {
                text: body.variables[0].valueTexts[i],
                id: body.variables[0].values[i]
            };
        }
        for (var i = 0; i < body.variables[3].valueTexts.length; i++) {
            years[i] = {
                text: body.variables[3].valueTexts[i],
                id: body.variables[3].values[i]
            };
        }
        return { subject: "family",
            title: body.title,
            options: [
                {
                    items: yrken,
                    placeholder: "Välj region",
                    id: "region"
                },
                {
                    items: years,
                    placeholder: "år från",
                    id: "yearFrom"
                },
                {
                    items: years,
                    placeholder: "år till",
                    id: "yearTo"
                }
            ]
        };
    };
    FamilyService.prototype.fetchFamilyData = function (region, yearFrom, yearTo, url) {
        var years = this.calcYears(yearFrom, yearTo);
        var filter;
        if (parseInt(region) === 0)
            filter = "vs:RegionRiket99";
        if (parseInt(region) > 0 && parseInt(region) < 100)
            filter = "vs:RegionLän07EjAggrFK";
        if (parseInt(region) > 100)
            filter = "vs:RegionKommun07EjAggrFKH";
        var body = JSON.stringify({
            "query": [
                {
                    "code": "Region",
                    "selection": {
                        "filter": filter,
                        "values": [
                            region
                        ]
                    }
                },
                {
                    "code": "Kon",
                    "selection": {
                        "filter": "item",
                        "values": [
                            "1",
                            "2"
                        ]
                    }
                },
                {
                    "code": "ContentsCode",
                    "selection": {
                        "filter": "item",
                        "values": [
                            "SF0101AG"
                        ]
                    }
                },
                {
                    "code": "Tid",
                    "selection": {
                        "filter": "item",
                        "values": years
                    }
                }
            ],
            "response": {
                "format": "json"
            }
        });
        var headers = new http_1.Headers({ 'Content-Type': 'application/json' });
        return this.familyData = this.http.post(url, body)
            .toPromise()
            .then(this.exportFamilyData)
            .catch(this.handleError);
    };
    FamilyService.prototype.calcYears = function (from, to) {
        var years = [];
        var i = 0;
        while (years[years.length - 1] !== to) {
            years[i] = (parseInt(from) + i).toString();
            i++;
        }
        return years;
    };
    FamilyService.prototype.exportFamilyData = function (res) {
        var body = res.json();
        var years = [];
        var valuesM = [];
        var valuesF = [];
        var yLabel = body.columns[3].text;
        var xLabel = body.columns[2].text;
        for (var i = 0; i < body['data'].length / 2; ++i) {
            years[i] = body['data'][i].key[2];
            if (body['data'][i].key[1] === "1") {
                valuesM[i] = body['data'][i].values[0];
            }
            if (body['data'][body['data'].length / 2 + i].key[1] === "2") {
                valuesF[i] = body['data'][body['data'].length / 2 + i].values[0];
            }
        }
        // this.FamilyData.labels = years
        // this.FamilyData.maleData = valuesM
        // this.FamilyData.femaleData = valuesF
        return {
            labels: years,
            xLabel: xLabel,
            yLabel: yLabel,
            maleData: valuesM,
            femaleData: valuesF
        };
    };
    FamilyService.prototype.handleError = function (error) {
        var errMsg = (error.message) ? error.message :
            error.status ? error.status + " - " + error.statusText : 'Server error';
        console.error(errMsg); // log to console instead
        return Promise.reject(errMsg);
    };
    FamilyService = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [http_1.Http])
    ], FamilyService);
    return FamilyService;
}());
exports.FamilyService = FamilyService;


/***/ },
/* 434 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
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
var core_1 = __webpack_require__(1);
var http_1 = __webpack_require__(26);
__webpack_require__(51);
var HealthService = (function () {
    function HealthService(http) {
        this.http = http;
    }
    HealthService.prototype.getHealthData = function () {
        return Promise.resolve(this.healthData);
    };
    HealthService.prototype.healthOptions = function (res) {
        var body = res.json();
        var illness = [];
        var ages = [];
        var years = [];
        for (var i = 0; i < body.variables[0].valueTexts.length; i++) {
            illness[i] = {
                text: body.variables[0].valueTexts[i],
                id: body.variables[0].values[i]
            };
        }
        for (var i = 0; i < body.variables[1].valueTexts.length; i++) {
            ages[i] = {
                text: body.variables[1].valueTexts[i],
                id: body.variables[1].values[i]
            };
        }
        for (var i = 0; i < body.variables[4].valueTexts.length; i++) {
            years[i] = {
                text: body.variables[4].valueTexts[i],
                id: body.variables[4].values[i]
            };
        }
        return { subject: "health",
            title: body.title,
            options: [
                {
                    items: illness,
                    placeholder: "hälsoproblem",
                    id: "healthProblem"
                },
                {
                    items: ages,
                    placeholder: "åldrar",
                    id: "ages"
                }
            ]
        };
    };
    HealthService.prototype.fetchHealthData = function (illness, age, years, url) {
        //console.log(yrkesgrupp + yearFrom + yearTo)
        var body = JSON.stringify({
            "query": [
                {
                    "code": "Indikator",
                    "selection": {
                        "filter": "item",
                        "values": [
                            illness
                        ]
                    }
                },
                {
                    "code": "Alder",
                    "selection": {
                        "filter": "item",
                        "values": [
                            age
                        ]
                    }
                },
                {
                    "code": "Kon",
                    "selection": {
                        "filter": "item",
                        "values": [
                            "1",
                            "2"
                        ]
                    }
                },
                {
                    "code": "ContentsCode",
                    "selection": {
                        "filter": "item",
                        "values": [
                            "LE0101FR"
                        ]
                    }
                }
            ],
            "response": {
                "format": "json"
            }
        });
        var headers = new http_1.Headers({ 'Content-Type': 'application/json' });
        return this.healthData = this.http.post(url, body)
            .toPromise()
            .then(this.exportHealthData)
            .catch(this.handleError);
    };
    HealthService.prototype.exportHealthData = function (res) {
        var body = res.json();
        var years = [];
        var valuesM = [];
        var valuesF = [];
        var yLabel = body.columns[4].text;
        var xLabel = body.columns[3].text;
        for (var i = 0; i < body['data'].length / 2; ++i) {
            years[i] = body['data'][i].key[3];
            if (body['data'][i].key[2] === "1") {
                valuesM[i] = body['data'][i].values[0];
            }
            if (body['data'][body['data'].length / 2 + i].key[2] === "2") {
                valuesF[i] = body['data'][body['data'].length / 2 + i].values[0];
            }
        }
        // this.econData.labels = years
        // this.econData.maleData = valuesM
        // this.econData.femaleData = valuesF
        return {
            labels: years,
            xLabel: xLabel,
            yLabel: yLabel,
            maleData: valuesM,
            femaleData: valuesF
        };
    };
    HealthService.prototype.handleError = function (error) {
        var errMsg = (error.message) ? error.message :
            error.status ? error.status + " - " + error.statusText : 'Server error';
        console.error(errMsg); // log to console instead
        return Promise.reject(errMsg);
    };
    HealthService = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [http_1.Http])
    ], HealthService);
    return HealthService;
}());
exports.HealthService = HealthService;


/***/ },
/* 435 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
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
var core_1 = __webpack_require__(1);
var http_1 = __webpack_require__(26);
__webpack_require__(51);
var PowerService = (function () {
    function PowerService(http) {
        this.http = http;
    }
    PowerService.prototype.getPowerData = function () {
        return Promise.resolve(this.powerData);
    };
    PowerService.prototype.powerOptions = function (res) {
        var body = res.json();
        var yrken = [];
        var years = [];
        for (var i = 0; i < body.variables[1].valueTexts.length; i++) {
            yrken[i] = {
                text: body.variables[1].valueTexts[i],
                id: body.variables[1].values[i]
            };
        }
        for (var i = 0; i < body.variables[4].valueTexts.length; i++) {
            years[i] = {
                text: body.variables[4].valueTexts[i],
                id: body.variables[4].values[i]
            };
        }
        return { subject: "power",
            title: body.title,
            options: [
                {
                    items: yrken,
                    placeholder: "Välj parti",
                    id: "party"
                },
                {
                    items: years,
                    placeholder: "år från",
                    id: "yearFrom"
                },
                {
                    items: years,
                    placeholder: "år till",
                    id: "yearTo"
                }
            ]
        };
    };
    PowerService.prototype.fetchPowerData = function (parti, yearFrom, yearTo, url) {
        var years = this.calcYears(yearFrom, yearTo);
        var body = JSON.stringify({
            "query": [
                {
                    "code": "Region",
                    "selection": {
                        "filter": "vs:RegionValkretsTot99",
                        "values": [
                            "VR00"
                        ]
                    }
                },
                {
                    "code": "Parti",
                    "selection": {
                        "filter": "item",
                        "values": [
                            parti
                        ]
                    }
                },
                {
                    "code": "Kon",
                    "selection": {
                        "filter": "item",
                        "values": [
                            "1",
                            "2"
                        ]
                    }
                },
                {
                    "code": "Tid",
                    "selection": {
                        "filter": "item",
                        "values": years
                    }
                }
            ],
            "response": {
                "format": "json"
            }
        });
        var headers = new http_1.Headers({ 'Content-Type': 'application/json' });
        return this.powerData = this.http.post(url, body)
            .toPromise()
            .then(this.exportPowerData)
            .catch(this.handleError);
    };
    PowerService.prototype.calcYears = function (from, to) {
        var years = [from];
        var i = 1;
        var j = 1;
        while (years[years.length - 1] !== to) {
            if (parseInt(years[i - 1]) < 1994) {
                years[i] = (parseInt(from) + i * 3).toString();
            }
            else {
                years[i] = (parseInt(years[i - 1]) + 4).toString();
                j++;
            }
            i++;
            if (i > 1000 || j > 1000) {
                console.error("Infninite loop on calcYears() poverService");
                break;
            }
        }
        return years;
    };
    PowerService.prototype.exportPowerData = function (res) {
        var body = res.json();
        var years = [];
        var valuesM = [];
        var valuesF = [];
        var xLabel = body.columns[3].text;
        var yLabel = body.columns[4].text;
        //console.log(body)
        for (var i = 0; i < body['data'].length / 2; ++i) {
            years[i] = body['data'][i].key[3];
            if (body['data'][i].key[2] === "1") {
                valuesM[i] = body['data'][i].values[0];
            }
            if (body['data'][body['data'].length / 2 + i].key[2] === "2") {
                valuesF[i] = body['data'][body['data'].length / 2 + i].values[0];
            }
        }
        return {
            labels: years,
            xLabel: xLabel,
            yLabel: yLabel,
            maleData: valuesM,
            femaleData: valuesF
        };
    };
    PowerService.prototype.handleError = function (error) {
        var errMsg = (error.message) ? error.message :
            error.status ? error.status + " - " + error.statusText : 'Server error';
        console.error(errMsg); // log to console instead
        return Promise.reject(errMsg);
    };
    PowerService = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [http_1.Http])
    ], PowerService);
    return PowerService;
}());
exports.PowerService = PowerService;


/***/ },
/* 436 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
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
var core_1 = __webpack_require__(1);
var line_chart_1 = __webpack_require__(430);
var statistics_service_1 = __webpack_require__(48);
var ng2_page_scroll_1 = __webpack_require__(393);
var StatisticsComponent = (function () {
    function StatisticsComponent(statisticsService) {
        this.statisticsService = statisticsService;
        this.info = this.statisticsService.subjects.subjects;
        ng2_page_scroll_1.PageScrollConfig.defaultScrollOffset = 50;
        ng2_page_scroll_1.PageScrollConfig.defaultEasingLogic = {
            ease: function (t, b, c, d) {
                // easeInOutExpo easing
                if (t === 0)
                    return b;
                if (t === d)
                    return b + c;
                if ((t /= d / 2) < 1)
                    return c / 2 * Math.pow(2, 10 * (t - 1)) + b;
                return c / 2 * (-Math.pow(2, -10 * --t) + 2) + b;
            }
        };
    }
    StatisticsComponent.prototype.ngAfterViewInit = function () {
        this.chartChildren = this.charts['_results'];
        this.econ = this.charts['_results'][0];
        this.health = this.charts['_results'][1];
    };
    StatisticsComponent.prototype.onNotify = function (subjectNr) {
        //console.log(this.charts)
        //console.log(message)
        //console.log(subjectNr)
        this.chartChildren[subjectNr].getData();
        //this.econ.getData()
        //this.health.getData()
    };
    __decorate([
        core_1.ViewChildren(line_chart_1.LineChartComponent), 
        __metadata('design:type', line_chart_1.LineChartComponent)
    ], StatisticsComponent.prototype, "charts", void 0);
    StatisticsComponent = __decorate([
        core_1.Component({
            selector: 'statistics',
            template: __webpack_require__(606),
            styles: [String(__webpack_require__(597))]
        }), 
        __metadata('design:paramtypes', [statistics_service_1.StatisticsService])
    ], StatisticsComponent);
    return StatisticsComponent;
}());
exports.StatisticsComponent = StatisticsComponent;


/***/ },
/* 437 */
/***/ function(module, exports) {

module.exports = "data:image/png;base64,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"

/***/ },
/* 438 */,
/* 439 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
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
var core_1 = __webpack_require__(1);
var http_1 = __webpack_require__(26);
var platform_browser_1 = __webpack_require__(60);
var forms_1 = __webpack_require__(303);
var angular2_chartjs_1 = __webpack_require__(392);
var line_chart_1 = __webpack_require__(430);
var ng2_sharebuttons_1 = __webpack_require__(612);
var app_routing_ts_1 = __webpack_require__(883);
var app_1 = __webpack_require__(884);
var http_2 = __webpack_require__(26);
var about_1 = __webpack_require__(425);
var home_1 = __webpack_require__(429);
var start_component_1 = __webpack_require__(892);
var maillist_component_1 = __webpack_require__(890);
var statistics_component_1 = __webpack_require__(436);
var menu_component_1 = __webpack_require__(891);
var footer_component_1 = __webpack_require__(888);
var econ_component_1 = __webpack_require__(428);
var inputMenu_component_1 = __webpack_require__(889);
var statistics_service_1 = __webpack_require__(48);
var econ_service_1 = __webpack_require__(432);
var health_service_1 = __webpack_require__(434);
var power_service_1 = __webpack_require__(435);
var drugs_service_1 = __webpack_require__(431);
var family_service_1 = __webpack_require__(433);
var select_1 = __webpack_require__(887);
var select_pipes_1 = __webpack_require__(427);
var off_click_1 = __webpack_require__(885);
var ng2_page_scroll_1 = __webpack_require__(393);
var WINDOW_PROVIDER = {
    provide: Window,
    useValue: window
};
//declare alll dependencies and libs the app uses
var AppModule = (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        core_1.NgModule({
            imports: [
                platform_browser_1.BrowserModule,
                http_1.HttpModule,
                app_routing_ts_1.ROUTING,
                angular2_chartjs_1.ChartModule,
                forms_1.FormsModule,
                ng2_sharebuttons_1.ShareButtonsModule,
                ng2_page_scroll_1.Ng2PageScrollModule,
                http_2.JsonpModule
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
                footer_component_1.FooterComponent,
                maillist_component_1.MaillistComponent
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
        __metadata('design:paramtypes', [])
    ], AppModule);
    return AppModule;
}());
exports.AppModule = AppModule;


/***/ },
/* 440 */,
/* 441 */,
/* 442 */,
/* 443 */,
/* 444 */,
/* 445 */,
/* 446 */,
/* 447 */,
/* 448 */,
/* 449 */,
/* 450 */,
/* 451 */,
/* 452 */,
/* 453 */,
/* 454 */,
/* 455 */,
/* 456 */,
/* 457 */,
/* 458 */,
/* 459 */,
/* 460 */,
/* 461 */,
/* 462 */,
/* 463 */,
/* 464 */,
/* 465 */,
/* 466 */,
/* 467 */,
/* 468 */,
/* 469 */,
/* 470 */,
/* 471 */,
/* 472 */,
/* 473 */,
/* 474 */,
/* 475 */,
/* 476 */,
/* 477 */,
/* 478 */,
/* 479 */,
/* 480 */,
/* 481 */,
/* 482 */,
/* 483 */,
/* 484 */,
/* 485 */,
/* 486 */,
/* 487 */,
/* 488 */,
/* 489 */,
/* 490 */,
/* 491 */,
/* 492 */,
/* 493 */,
/* 494 */,
/* 495 */,
/* 496 */,
/* 497 */,
/* 498 */,
/* 499 */,
/* 500 */,
/* 501 */,
/* 502 */,
/* 503 */,
/* 504 */,
/* 505 */,
/* 506 */,
/* 507 */,
/* 508 */,
/* 509 */,
/* 510 */,
/* 511 */,
/* 512 */,
/* 513 */,
/* 514 */,
/* 515 */,
/* 516 */,
/* 517 */,
/* 518 */,
/* 519 */,
/* 520 */,
/* 521 */,
/* 522 */,
/* 523 */,
/* 524 */,
/* 525 */,
/* 526 */,
/* 527 */,
/* 528 */,
/* 529 */,
/* 530 */,
/* 531 */,
/* 532 */,
/* 533 */,
/* 534 */,
/* 535 */,
/* 536 */,
/* 537 */,
/* 538 */,
/* 539 */,
/* 540 */,
/* 541 */,
/* 542 */,
/* 543 */,
/* 544 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
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
__webpack_require__(304);
var core_1 = __webpack_require__(1);
var chart_component_1 = __webpack_require__(391);
var ChartModule = (function () {
    function ChartModule() {
    }
    ChartModule = __decorate([
        core_1.NgModule({
            declarations: [chart_component_1.ChartComponent],
            exports: [chart_component_1.ChartComponent]
        }), 
        __metadata('design:paramtypes', [])
    ], ChartModule);
    return ChartModule;
}());
exports.ChartModule = ChartModule;
//# sourceMappingURL=chart.module.js.map

/***/ },
/* 545 */,
/* 546 */,
/* 547 */,
/* 548 */,
/* 549 */,
/* 550 */,
/* 551 */,
/* 552 */,
/* 553 */,
/* 554 */,
/* 555 */,
/* 556 */,
/* 557 */,
/* 558 */,
/* 559 */,
/* 560 */,
/* 561 */,
/* 562 */,
/* 563 */,
/* 564 */,
/* 565 */,
/* 566 */,
/* 567 */,
/* 568 */,
/* 569 */,
/* 570 */,
/* 571 */,
/* 572 */,
/* 573 */,
/* 574 */,
/* 575 */,
/* 576 */,
/* 577 */,
/* 578 */,
/* 579 */,
/* 580 */,
/* 581 */,
/* 582 */,
/* 583 */,
/* 584 */,
/* 585 */,
/* 586 */,
/* 587 */
/***/ function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(29)();
// imports


// module
exports.push([module.i, "h2 {\n  color: #00f;\n}\n", ""]);

// exports


/***/ },
/* 588 */
/***/ function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(29)();
// imports


// module
exports.push([module.i, "main {\n  width: 100%;\n}\n", ""]);

// exports


/***/ },
/* 589 */
/***/ function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(29)();
// imports


// module
exports.push([module.i, "h2 {\n  font-size: 3em;\n  color: #00f;\n  text-align: center;\n}\n", ""]);

// exports


/***/ },
/* 590 */
/***/ function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(29)();
// imports


// module
exports.push([module.i, ".wrapper {\n  *zoom: 1;\n  float: left;\n  clear: none;\n  text-align: inherit;\n  width: 100%;\n  margin-left: 0%;\n  margin-right: 0%;\n  background-color: #4c4c4c;\n}\n.wrapper:before,\n.wrapper:after {\n  content: '';\n  display: table;\n}\n.wrapper:after {\n  clear: both;\n}\n.wrapper .footer {\n  padding-top: 2%;\n  padding-bottom: 5%;\n  *zoom: 1;\n  float: left;\n  clear: none;\n  text-align: inherit;\n  width: 100%;\n  margin-left: 0%;\n  margin-right: 0%;\n  *zoom: 1;\n  width: auto;\n  max-width: 90%;\n  float: none;\n  display: block;\n  margin-right: auto;\n  margin-left: auto;\n  padding-left: 0%;\n  padding-right: 0%;\n}\n.wrapper .footer:before,\n.wrapper .footer:after {\n  content: '';\n  display: table;\n}\n.wrapper .footer:after {\n  clear: both;\n}\n.wrapper .footer:before,\n.wrapper .footer:after {\n  content: '';\n  display: table;\n}\n.wrapper .footer:after {\n  clear: both;\n}\n.wrapper .footer img {\n  width: 50%;\n}\n.wrapper .footer a:hover {\n  cursor: pointer;\n}\n.wrapper .footer p {\n  color: #949494;\n  margin: 0;\n}\n.wrapper .footer .subject {\n  *zoom: 1;\n  float: left;\n  clear: none;\n  text-align: inherit;\n  width: 31.33333333333333%;\n  margin-left: 0%;\n  margin-right: 3%;\n}\n.wrapper .footer .subject:before,\n.wrapper .footer .subject:after {\n  content: '';\n  display: table;\n}\n.wrapper .footer .subject:after {\n  clear: both;\n}\n.wrapper .footer .subject:last-child {\n  margin-right: 0%;\n}\n.wrapper .footer .subject:nth-child(1) {\n  text-align: left;\n}\n.wrapper .footer .subject:nth-child(2) {\n  text-align: center;\n}\n.wrapper .footer .subject:nth-child(3) {\n  text-align: right;\n}\n.wrapper .footer .subject h4 {\n  color: #949494;\n}\n", ""]);

// exports


/***/ },
/* 591 */
/***/ function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(29)();
// imports


// module
exports.push([module.i, ".wrapper {\n  width: 100%;\n}\n", ""]);

// exports


/***/ },
/* 592 */
/***/ function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(29)();
// imports


// module
exports.push([module.i, ".wrapper {\n  *zoom: 1;\n  width: auto;\n  max-width: 100%;\n  float: none;\n  display: block;\n  margin-right: auto;\n  margin-left: auto;\n  padding-left: 5%;\n  padding-right: 5%;\n  color: #949494;\n  min-height: 70vh;\n}\n.wrapper:before,\n.wrapper:after {\n  content: '';\n  display: table;\n}\n.wrapper:after {\n  clear: both;\n}\n@media only screen and (min-device-width: 400px) and (max-device-width: 1050px) {\n  .wrapper {\n    min-height: 10vh;\n  }\n}\n@media only screen and (max-device-width: 400px) {\n  .wrapper {\n    min-height: 10vh;\n  }\n}\n.wrapper .ngSelect {\n  font-size: 1.6em;\n}\n.wrapper h4 {\n  margin: 25px 0px;\n  text-align: center;\n}\n@media only screen and (max-device-width: 400px) and (orientation: portrait) {\n  .wrapper h4 {\n    font-size: 2.4em;\n  }\n}\n.wrapper .disabled {\n  background-color: transparent !important;\n}\n.wrapper .active {\n  background-color: #78adb5;\n  color: #fff;\n  outline: none;\n}\n.wrapper .submit-btn {\n  *zoom: 1;\n  width: auto;\n  max-width: 1440px;\n  float: none;\n  display: block;\n  margin-right: auto;\n  margin-left: auto;\n  padding-left: 0;\n  padding-right: 0;\n  margin-top: 15%;\n  border-radius: 5px;\n  font-size: 1.6em;\n  padding: 5px 25px;\n}\n.wrapper .submit-btn:before,\n.wrapper .submit-btn:after {\n  content: '';\n  display: table;\n}\n.wrapper .submit-btn:after {\n  clear: both;\n}\n@media only screen and (min-device-width: 400px) and (max-device-width: 1050px) {\n  .wrapper .submit-btn {\n    margin-top: 0;\n  }\n}\n@media only screen and (max-device-width: 400px) and (orientation: portrait) {\n  .wrapper .submit-btn {\n    margin-top: 0;\n    padding: 15px 35px;\n    font-size: 3em;\n  }\n}\n@media only screen and (max-device-width: 400px) and (orientation: landscape) {\n  .wrapper .submit-btn {\n    margin-top: 0;\n  }\n}\n.wrapper .source {\n  text-align: center;\n  margin-top: 2%;\n  font-size: xx-small;\n}\n.wrapper .source a {\n  text-decoration: underline;\n  color: #949494;\n}\n.wrapper :host /deep/ input {\n  width: 100%;\n  height: auto;\n  font-size: 1em;\n}\n@media only screen and (max-device-width: 400px) and (orientation: portrait) {\n  .wrapper :host /deep/ input {\n    font-size: 2.8em;\n  }\n}\n.wrapper :host /deep/ .form-control {\n  height: auto;\n  background-color: transparent;\n  box-shadow: none;\n  border-width: 2px;\n  border-style: solid;\n  border-radius: 5px;\n}\n.wrapper :host /deep/ .ui-select-container {\n  margin-bottom: 30px;\n  outline: none;\n}\n@media only screen and (max-device-width: 400px) and (orientation: portrait) {\n  .wrapper :host /deep/ .ui-select-container {\n    margin-bottom: 50px;\n  }\n}\n.wrapper :host /deep/ .ui-select-placeholder {\n  font-size: 1.6em;\n}\n@media only screen and (max-device-width: 400px) and (orientation: portrait) {\n  .wrapper :host /deep/ .ui-select-placeholder {\n    font-size: 4em;\n  }\n}\n.wrapper :host /deep/ .ui-select-match-text {\n  font-size: 1.6em;\n}\n@media only screen and (max-device-width: 400px) and (orientation: portrait) {\n  .wrapper :host /deep/ .ui-select-match-text {\n    font-size: 4em;\n  }\n}\n@media only screen and (max-device-width: 400px) and (orientation: portrait) {\n  .wrapper :host /deep/ .ui-select-choices {\n    max-height: 600px;\n  }\n}\n@media only screen and (max-device-width: 400px) and (orientation: portrait) {\n  .wrapper :host /deep/ .ui-select-choices-row {\n    font-size: 4em;\n  }\n}\n.wrapper :host /deep/ .ui-select-choices-row a {\n  white-space: normal !important;\n}\n.wrapper :host /deep/ .text-muted {\n  color: #949494;\n}\n@media only screen and (max-device-width: 400px) and (orientation: portrait) {\n  .wrapper :host /deep/ .text-muted {\n    font-size: 4em;\n  }\n}\n.wrapper :host /deep/ .menu-arrow {\n  width: 30px;\n  margin: 7px;\n  position: absolute;\n  right: 10px;\n  z-index: -1;\n}\n", ""]);

// exports


/***/ },
/* 593 */
/***/ function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(29)();
// imports


// module
exports.push([module.i, ".wrapper {\n  display: block;\n  *zoom: 1;\n  float: left;\n  clear: none;\n  text-align: inherit;\n  width: 100%;\n  margin-left: 0%;\n  margin-right: 0%;\n}\n.wrapper:before,\n.wrapper:after {\n  content: '';\n  display: table;\n}\n.wrapper:after {\n  clear: both;\n}\n.wrapper :host /deep/ canvas {\n  min-height: 70vh;\n}\n@media only screen and (min-device-width: 400px) and (max-device-width: 1050px) and (orientation: landscape) {\n  .wrapper :host /deep/ canvas {\n    min-height: 60vh;\n  }\n}\n@media only screen and (max-device-width: 400px) and (orientation: landscape) {\n  .wrapper :host /deep/ canvas {\n    min-height: 80vh;\n  }\n}\n@media only screen and (min-device-width: 400px) and (max-device-width: 1050px) and (orientation: portrait) {\n  .wrapper :host /deep/ canvas {\n    min-height: 60vh;\n  }\n}\n@media only screen and (max-device-width: 400px) and (orientation: portrait) {\n  .wrapper :host /deep/ canvas {\n    min-height: 45vh;\n  }\n}\nbutton {\n  position: absolute;\n  z-index: 1;\n}\n", ""]);

// exports


/***/ },
/* 594 */
/***/ function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(29)();
// imports


// module
exports.push([module.i, ".wrapper {\n  *zoom: 1;\n  float: left;\n  clear: none;\n  text-align: inherit;\n  width: 100%;\n  margin-left: 0%;\n  margin-right: 0%;\n  margin-bottom: 12%;\n}\n.wrapper:before,\n.wrapper:after {\n  content: '';\n  display: table;\n}\n.wrapper:after {\n  clear: both;\n}\n.wrapper .disabled {\n  background-color: transparent !important;\n  border: solid 2px #000;\n}\n.wrapper .active {\n  background-color: #4c4c4c;\n  color: #fff;\n  border: solid 2px #fff;\n  outline: none;\n}\n.wrapper .active:hover {\n  cursor: pointer;\n}\n.wrapper .form {\n  text-align: center;\n}\n.wrapper .form input {\n  width: 200px;\n  box-shadow: none;\n  border-width: 2px;\n  border-style: solid;\n  border-radius: 5px;\n  padding: 4px;\n}\n.wrapper .form .submit-btn {\n  border-radius: 5px;\n  font-size: 1em;\n  padding: 5px 25px;\n}\n@media only screen and (min-device-width: 400px) and (max-device-width: 1050px) {\n  .wrapper .form .submit-btn {\n    margin-top: 0;\n  }\n}\n@media only screen and (max-device-width: 400px) and (orientation: portrait) {\n  .wrapper .form .submit-btn {\n    margin-top: 0;\n    padding: 15px 35px;\n    font-size: 3em;\n  }\n}\n@media only screen and (max-device-width: 400px) and (orientation: landscape) {\n  .wrapper .form .submit-btn {\n    margin-top: 0;\n  }\n}\n.wrapper p #valid {\n  color: #008000;\n}\n.wrapper p #notValid {\n  color: #f00;\n}\n", ""]);

// exports


/***/ },
/* 595 */
/***/ function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(29)();
// imports


// module
exports.push([module.i, ".wrapper {\n  *zoom: 1;\n  float: left;\n  clear: none;\n  text-align: inherit;\n  width: 90%;\n  margin-left: 0%;\n  margin-right: 0%;\n}\n.wrapper:before,\n.wrapper:after {\n  content: '';\n  display: table;\n}\n.wrapper:after {\n  clear: both;\n}\n.wrapper .menu {\n  *zoom: 1;\n  width: auto;\n  max-width: 90%;\n  float: none;\n  display: block;\n  margin-right: auto;\n  margin-left: auto;\n  padding-left: 10%;\n  padding-right: 10%;\n}\n.wrapper .menu:before,\n.wrapper .menu:after {\n  content: '';\n  display: table;\n}\n.wrapper .menu:after {\n  clear: both;\n}\n.wrapper .menu .subject {\n  *zoom: 1;\n  float: left;\n  clear: none;\n  text-align: inherit;\n  width: 20%;\n  margin-left: 0%;\n  margin-right: 0%;\n  text-align: center;\n}\n.wrapper .menu .subject:before,\n.wrapper .menu .subject:after {\n  content: '';\n  display: table;\n}\n.wrapper .menu .subject:after {\n  clear: both;\n}\n.wrapper .menu .subject:last-child {\n  margin-right: 0%;\n}\n.wrapper .menu .subject img {\n  width: 55px;\n}\n.wrapper .menu .subject:hover {\n  cursor: pointer;\n}\n.wrapper .menu .subject object /deep/ svg {\n  width: 50px !important;\n}\n", ""]);

// exports


/***/ },
/* 596 */
/***/ function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(29)();
// imports


// module
exports.push([module.i, ".wrapper {\n  *zoom: 1;\n  float: left;\n  clear: none;\n  text-align: inherit;\n  width: 100%;\n  margin-left: 0%;\n  margin-right: 0%;\n  margin-bottom: 12%;\n}\n.wrapper:before,\n.wrapper:after {\n  content: '';\n  display: table;\n}\n.wrapper:after {\n  clear: both;\n}\n.wrapper h1 {\n  margin-top: 0;\n  padding-top: 7vh;\n  margin-bottom: 7vh;\n  text-align: center;\n}\n@media only screen and (max-device-width: 400px) {\n  .wrapper h1 {\n    font-size: 10vw;\n  }\n}\n.wrapper object {\n  *zoom: 1;\n  width: auto;\n  max-width: 100%;\n  float: none;\n  display: block;\n  margin-right: auto;\n  margin-left: auto;\n  padding-left: 5%;\n  padding-right: 5%;\n  width: 30vw;\n  margin-bottom: 7vh;\n}\n.wrapper object:before,\n.wrapper object:after {\n  content: '';\n  display: table;\n}\n.wrapper object:after {\n  clear: both;\n}\n@media only screen and (min-device-width: 400px) and (max-device-width: 1050px) {\n  .wrapper object {\n    width: 50vw;\n  }\n}\n@media only screen and (max-device-width: 400px) {\n  .wrapper object {\n    width: 50vw;\n  }\n}\n.wrapper .version-tag {\n  position: absolute;\n  left: 0;\n  top: 0;\n  padding: 0 10% 0 0;\n  margin: 0;\n  width: 30vw;\n}\n.wrapper .subjects {\n  *zoom: 1;\n  width: auto;\n  max-width: 100%;\n  float: none;\n  display: block;\n  margin-right: auto;\n  margin-left: auto;\n  padding-left: 5%;\n  padding-right: 5%;\n  text-align: center;\n}\n.wrapper .subjects:before,\n.wrapper .subjects:after {\n  content: '';\n  display: table;\n}\n.wrapper .subjects:after {\n  clear: both;\n}\n.wrapper .subject {\n  height: 40vh;\n  min-height: 320px;\n  border: 1px solid #d2d2d2;\n  box-shadow: 7px 7px 10px -11px #000;\n  border-radius: 4px;\n  background-color: #fff;\n  *zoom: 1;\n  float: left;\n  clear: none;\n  text-align: inherit;\n  width: 18.8%;\n  margin-left: 0%;\n  margin-right: 1.5%;\n  color: #949494;\n}\n@media only screen and (min-device-width: 400px) and (max-device-width: 1050px) and (orientation: landscape) {\n  .wrapper .subject {\n    height: 45vh;\n  }\n}\n@media only screen and (min-device-width: 400px) and (max-device-width: 1050px) and (orientation: portrait) {\n  .wrapper .subject {\n    height: 26vh;\n  }\n}\n@media only screen and (max-device-width: 400px) and (orientation: portrait) {\n  .wrapper .subject {\n    height: 20vh;\n  }\n}\n.wrapper .subject:before,\n.wrapper .subject:after {\n  content: '';\n  display: table;\n}\n.wrapper .subject:after {\n  clear: both;\n}\n.wrapper .subject:last-child {\n  margin-right: 0%;\n}\n.wrapper .subject:hover {\n  text-decoration: none;\n  color: #949494;\n  cursor: pointer;\n}\n.wrapper .subject p {\n  margin: 0px 30px;\n}\n.wrapper .subject h3 {\n  margin-bottom: 8%;\n}\n.wrapper .subject:nth-child(1) h3 {\n  color: #78adb5;\n}\n.wrapper .subject:nth-child(2) h3 {\n  color: #d08692;\n}\n.wrapper .subject:nth-child(3) h3 {\n  color: #95867a;\n}\n.wrapper .subject:nth-child(4) h3 {\n  color: #aec889;\n}\n.wrapper .subject:nth-child(5) h3 {\n  color: #ef9962;\n}\n", ""]);

// exports


/***/ },
/* 597 */
/***/ function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(29)();
// imports


// module
exports.push([module.i, ".wrapper {\n  *zoom: 1;\n  float: left;\n  clear: none;\n  text-align: inherit;\n  width: 100%;\n  margin-left: 0%;\n  margin-right: 0%;\n  margin-bottom: 12%;\n}\n.wrapper:before,\n.wrapper:after {\n  content: '';\n  display: table;\n}\n.wrapper:after {\n  clear: both;\n}\n.wrapper h2 {\n  *zoom: 1;\n  width: auto;\n  max-width: 100%;\n  float: none;\n  display: block;\n  margin-right: auto;\n  margin-left: auto;\n  padding-left: 5%;\n  padding-right: 5%;\n}\n.wrapper h2:before,\n.wrapper h2:after {\n  content: '';\n  display: table;\n}\n.wrapper h2:after {\n  clear: both;\n}\n.wrapper h3 {\n  margin-bottom: 0;\n  text-align: center;\n}\n@media only screen and (max-device-width: 399px) {\n  .wrapper h3 {\n    font-size: 4em;\n  }\n}\n.wrapper .get-statistics {\n  position: relative;\n  left: 72.1%;\n  *zoom: 1;\n  float: left;\n  clear: none;\n  text-align: inherit;\n  width: 22.75%;\n  margin-left: 0%;\n  margin-right: 3%;\n  margin-top: -5%;\n}\n.wrapper .get-statistics:before,\n.wrapper .get-statistics:after {\n  content: '';\n  display: table;\n}\n.wrapper .get-statistics:after {\n  clear: both;\n}\n.wrapper .get-statistics:last-child {\n  margin-right: 0%;\n}\n@media only screen and (min-device-width: 399px) and (max-device-width: 1050px) {\n  .wrapper .get-statistics {\n    position: static;\n    left: 0;\n    display: block;\n    clear: both;\n    float: none;\n    width: 100%;\n    margin-left: auto;\n    margin-right: auto;\n  }\n  .wrapper .get-statistics:first-child {\n    margin-left: auto;\n  }\n  .wrapper .get-statistics:last-child {\n    margin-right: auto;\n  }\n}\n@media only screen and (max-device-width: 399px) {\n  .wrapper .get-statistics {\n    position: static;\n    left: 0;\n    display: block;\n    clear: both;\n    float: none;\n    width: 100%;\n    margin-left: auto;\n    margin-right: auto;\n  }\n  .wrapper .get-statistics:first-child {\n    margin-left: auto;\n  }\n  .wrapper .get-statistics:last-child {\n    margin-right: auto;\n  }\n}\n.wrapper .chart {\n  position: relative;\n  left: -25.75%;\n  *zoom: 1;\n  float: left;\n  clear: none;\n  text-align: inherit;\n  width: 65.66666666666666%;\n  margin-left: 0%;\n  margin-right: 3%;\n  margin-left: 3%;\n}\n.wrapper .chart:before,\n.wrapper .chart:after {\n  content: '';\n  display: table;\n}\n.wrapper .chart:after {\n  clear: both;\n}\n.wrapper .chart:last-child {\n  margin-right: 0%;\n}\n@media only screen and (min-device-width: 399px) and (max-device-width: 1050px) {\n  .wrapper .chart {\n    position: static;\n    left: 0;\n    display: block;\n    clear: both;\n    float: none;\n    width: 100%;\n    margin-left: auto;\n    margin-right: auto;\n    *zoom: 1;\n    width: auto;\n    max-width: 95%;\n    float: none;\n    display: block;\n    margin-right: auto;\n    margin-left: auto;\n    padding-left: 0;\n    padding-right: 0;\n  }\n  .wrapper .chart:first-child {\n    margin-left: auto;\n  }\n  .wrapper .chart:last-child {\n    margin-right: auto;\n  }\n  .wrapper .chart:before,\n  .wrapper .chart:after {\n    content: '';\n    display: table;\n  }\n  .wrapper .chart:after {\n    clear: both;\n  }\n}\n@media only screen and (max-device-width: 399px) {\n  .wrapper .chart {\n    position: static;\n    left: 0;\n    display: block;\n    clear: both;\n    float: none;\n    width: 100%;\n    margin-left: auto;\n    margin-right: auto;\n    *zoom: 1;\n    width: auto;\n    max-width: 95%;\n    float: none;\n    display: block;\n    margin-right: auto;\n    margin-left: auto;\n    padding-left: 0;\n    padding-right: 0;\n  }\n  .wrapper .chart:first-child {\n    margin-left: auto;\n  }\n  .wrapper .chart:last-child {\n    margin-right: auto;\n  }\n  .wrapper .chart:before,\n  .wrapper .chart:after {\n    content: '';\n    display: table;\n  }\n  .wrapper .chart:after {\n    clear: both;\n  }\n}\n@media only screen and (min-device-width: 399px) and (max-device-width: 1050px) and (orientation: portrait) {\n  .wrapper .chart {\n    margin-top: 5% !important;\n  }\n}\n.wrapper share-buttons {\n  *zoom: 1;\n  float: left;\n  clear: none;\n  text-align: inherit;\n  width: 66.66666666666666%;\n  margin-left: 0%;\n  margin-right: 0%;\n  margin-left: 3%;\n  margin-top: -15px;\n}\n.wrapper share-buttons:before,\n.wrapper share-buttons:after {\n  content: '';\n  display: table;\n}\n.wrapper share-buttons:after {\n  clear: both;\n}\n@media only screen and (max-device-width: 399px) {\n  .wrapper share-buttons {\n    *zoom: 1;\n    float: left;\n    clear: none;\n    text-align: inherit;\n    width: 100%;\n    margin-left: 0%;\n    margin-right: 0%;\n  }\n  .wrapper share-buttons:before,\n  .wrapper share-buttons:after {\n    content: '';\n    display: table;\n  }\n  .wrapper share-buttons:after {\n    clear: both;\n  }\n  .wrapper share-buttons /deep/ .sb-container button {\n    font-size: 2em;\n  }\n}\n.wrapper menu {\n  *zoom: 1;\n  float: left;\n  clear: none;\n  text-align: inherit;\n  width: 33.33333333333333%;\n  margin-left: 0%;\n  margin-right: 0%;\n  margin-left: -3%;\n  margin-top: 0%;\n}\n.wrapper menu:before,\n.wrapper menu:after {\n  content: '';\n  display: table;\n}\n.wrapper menu:after {\n  clear: both;\n}\n@media only screen and (max-device-width: 399px) {\n  .wrapper menu {\n    display: none;\n  }\n}\n.wrapper:nth-child(1) /deep/ .form-control {\n  border-color: #78adb5;\n}\n.wrapper:nth-child(1) /deep/ .submit-btn {\n  border: 2px solid #78adb5;\n}\n.wrapper:nth-child(1) /deep/ .active {\n  background-color: #78adb5 !important;\n}\n.wrapper:nth-child(2) /deep/ .form-control {\n  border-color: #d08692;\n}\n.wrapper:nth-child(2) /deep/ .submit-btn {\n  border: 2px solid #d08692;\n}\n.wrapper:nth-child(2) /deep/ .active {\n  background-color: #d08692 !important;\n}\n.wrapper:nth-child(3) /deep/ .form-control {\n  border-color: #95867a;\n}\n.wrapper:nth-child(3) /deep/ .submit-btn {\n  border: 2px solid #95867a;\n}\n.wrapper:nth-child(3) /deep/ .active {\n  background-color: #95867a !important;\n}\n.wrapper:nth-child(4) /deep/ .form-control {\n  border-color: #aec889;\n}\n.wrapper:nth-child(4) /deep/ .submit-btn {\n  border: 2px solid #aec889;\n}\n.wrapper:nth-child(4) /deep/ .active {\n  background-color: #aec889 !important;\n}\n.wrapper:nth-child(5) /deep/ .form-control {\n  border-color: #ef9962;\n}\n.wrapper:nth-child(5) /deep/ .submit-btn {\n  border: 2px solid #ef9962;\n}\n.wrapper:nth-child(5) /deep/ .active {\n  background-color: #ef9962 !important;\n}\n", ""]);

// exports


/***/ },
/* 598 */
/***/ function(module, exports) {

module.exports = "<h2>About Component</h2>\n<p>This is the about component</p>";

/***/ },
/* 599 */
/***/ function(module, exports) {

module.exports = "<line-chart></line-chart>\n";

/***/ },
/* 600 */
/***/ function(module, exports) {

module.exports = "<div class=\"wrapper\">\n\n\t<div class=\"footer\">\n\n\t\t<div class=\"subject\">\n\t\t\t<h4>Webbplatskarta</h4>\n\t\t\t<a pageScroll href=\"#home\">start</a>\n\t\t\t<br>\n\t\t\t<a *ngFor=\"let subject of subjects\" pageScroll href=\"#{{subject.title}}\">\n\t\t\t\t{{subject.title}}\n\t\t\t\t<br>\n\t\t\t</a>\n\t\t</div>\n\n\t\t<div class=\"subject\">\n\t\t\t<h4>Statistiska källor</h4>\n\t\t\t<p>Statistiska centralbyrån</p>\n\t\t\t<a href=\"http://www.scb.se/\" target=\"_blank\">scb.se</a>\n\t\t</div>\n\n\t\t<div class=\"subject\">\n\t\t\t<h4>Kontakt</h4>\n\t\t\t<p>Jonas Johnasson</p>\n\t\t\t<a href=\"http://jonasjohansson.net/\" target=\"_blank\">jonasjohansson.net</a>\n\t\t\t<p>mail@domain.com</p>\n\t\t</div>\n\n\t</div>\n\n</div>\n";

/***/ },
/* 601 */
/***/ function(module, exports) {

module.exports = "<div class=\"wrapper\">\n\n\t<!-- MENU OPTIONS -->\n\t<div *ngIf=\"subject.subject === menu.subject\" >\n\t\t<h4>{{menu.title}}</h4>\n\t\t<ng-select *ngFor=\"let option of menu.options\" class=\"ngSelect\"\n\t\t\t[allowClear]=\"true\"\n\t\t\t[items]=\"option.items\"\n\t\t\t(data)=\"refreshValue($event, option.id)\"\n\t\t\tplaceholder=\"{{option.placeholder}}\">\n\t\t</ng-select>\n\n\n\t\t<button\n\t\tclass=\"submit-btn\"\n\t\t(click)=\"getStatistics()\"\n\t\t[disabled]=\"disabled\"\n\t\t[ngClass]=\"{\n\t\t'disabled': disabled,\n\t\t'active': !disabled}\"\n\t\tpageScroll href=\"#{{(win.outerWidth < 1050 && win.outerWidth > 400)? subject.subject + 'Chart' : none}}\">\n\t\t\tHämta\n\t\t</button>\n\n\t\t<div *ngFor=\"let source of subject.source\" class=\"source\">\n\t\t\t<p>\n\t\t\t\tKälla: SCB\n\t\t\t\t<br>\n\t\t\t\t<a href=\"{{source}}\" target=\"_blank\">{{source | slice:0:37}}...</a>\n\t\t\t</p>\n\t\t</div>\n\t</div>\n</div>\n\n\t<!-- <div *ngIf=\"subject.subject === preferences.subject\" >\n\t\t<ng-select class=\"ngSelect\"\n\t\t\t[allowClear]=\"true\"\n\t\t\t[items]=\"yrken\"\n\t\t\t(data)=\"refreshValue($event, 'workgroup')\"\n\t\t\tplaceholder=\"Välj yrkesgrupp\">\n\t\t</ng-select>\n\n\t\t<ng-select class=\"ngSelect\"\n\t\t\t[allowClear]=\"true\"\n\t\t\t[items]=\"years\"\n\t\t\t(data)=\"refreshValue($event, 'yearFrom')\"\n\t\t\tplaceholder=\"år från\">\n\t\t</ng-select>\n\n\t\t<ng-select class=\"ngSelect\"\n\t\t\t[allowClear]=\"true\"\n\t\t\t[items]=\"years\"\n\t\t\t(data)=\"refreshValue($event, 'yearTo')\"\n\t\t\tplaceholder=\"år till\">\n\t\t</ng-select>\n\n\t\t<button\n\t\t(click)=\"getStatistics()\"\n\t\t[disabled]=\"(\n\t\toptions.workgroup === null\n\t\t|| options.yearTo === null\n\t\t|| options.yearFrom === null\n\t\t|| options.yearFrom > options.yearTo)\"\n\t\t[ngClass]=\"{\n\t\t'disabled': (!options.workgroup\n\t\t||!options.yearTo\n\t\t||!options.yearFrom\n\t\t||options.yearFrom >= options.yearTo),\n\t\t'active':(options.workgroup\n\t\t&& options.yearTo\n\t\t&& options.yearFrom\n\t\t&& options.yearFrom <= options.yearTo\n\t\t)}\">\n\t\t\tHämta {{subject.title}}\n\t\t</button>\n\t</div> -->\n<!--\n\n\nORGINAL SPARAD FÖR ATT EVENTULLT BEHÖVER JAG DISABLED\n\n<ng-select [allowClear]=\"true\"\n\t\t\t[items]=\"years\"\n\t\t\t[disabled]=\"disabled\"\n\t\t\t(data)=\"refreshValue($event, 'yearFrom')\"\n\t\t\t(selected)=\"selected($event)\"\n\t\t\t(removed)=\"removed($event)\"\n\t\t\t(typed)=\"typed($event)\"\n\t\t\tplaceholder=\"år från\">\n\t\t</ng-select> -->\n\n\n\t\t<!-- <form #f=\"ngForm\">\n\t\t      <select name=\"yrkesgrupp\" ngModel required>\n\t\t        <option value=\"\" disabled>yrkesgrupp</option>\n\t\t        <option *ngFor=\"let yrke of yrken let ind = index\" [ngValue]=\"{'yrke':yrke, 'index':ind}\">\n\t\t          {{ yrke }}\n\t\t        </option>\n\t\t      </select>\n\n\t\t      <select name=\"yearFrom\" #yearFrom=\"ngModel\" ngModel required>\n\t\t        <option value=\"0\" disabled>År från</option>\n\t\t        <option *ngFor=\"let year of years let i = index\" [ngValue]=\"{'year':year, 'index':i}\">\n\t\t          {{ year }}\n\t\t        </option>\n\t\t      </select>\n\n\t\t      <select name=\"yearTo\" #yearTo=\"ngModel\" ngModel required>\n\t\t        <option value=\"0\" disabled>År till</option>\n\t\t        <option *ngFor=\"let year of years | slice:yearFrom.viewModel.index let j = index\" [ngValue]=\"{'year':year, 'index':j}\">\n\t\t          {{ year }}\n\t\t        </option>\n\t\t      </select>\n\n\t\t      <button (click)='onSubmit(f)'>submit</button>\n\n\t\t</form> -->\n\n\n\n     <!-- <p>Form value: {{ f.value | json }}</p>\n     <p>Form value: {{ yearFrom.viewModel.index }}</p>\n     <p>To value: {{ yearTo.viewModel.index }}</p> -->\n";

/***/ },
/* 602 */
/***/ function(module, exports) {

module.exports = "<div class=\"wrapper\">\n  <chart id=\"{{id}}\" [(type)]=\"type\" [data]=\"data\" [options]=\"options\"></chart>\n</div>\n";

/***/ },
/* 603 */
/***/ function(module, exports) {

module.exports = "<div id=\"home\" class=\"wrapper\">\n\n\t<div class=\"form\">\n\t\t<h3>Anmäl dig till maillistan!</h3>\n\t\t<p><i>Få uppdatringar om vad som händer med siten!</i></p>\n\t\t<form #f=\"ngForm\" (ngSubmit)=\"onSubmit(email)\" novalidate>\n\n\t\t\t\t<input [name]=\"email\" ngModel pattern=\".+@.+\\..+\" required #email=\"ngModel\" placeholder=\"Skriv din email här...\">\n\n\t\t\t\t<button\n\t\t\t\tclass=\"submit-btn\"\n\t\t\t\t[ngClass]=\"{\n\t\t\t\t'disabled': !email.valid,\n\t\t\t\t'active': email.valid}\">\n\t\t\t\t\tSubmit\n\t\t\t\t</button>\n\t    </form>\n\n\t\t\t<p *ngIf=\"f.valid\">\n\t\t\t\t<span id=\"valid\" style=\"{color:green}\">giltig emailadress</span>\n\t\t\t</p>\n\t\t\t<p *ngIf=\"!f.valid && email.value !== ''\">\n\t\t\t\t<span id=\"notValid\" style=\"{color:red}\">ogiltig emailadress</span>\n\t\t\t</p>\n\t\t\t{{response}}\n\t\t</div>\n\n</div>\n\n\n<!-- <div id=\"home\" class=\"wrapper\">\n\n\t<form #f=\"ngForm\" (ngSubmit)=\"onSubmit(f)\" novalidate>\n      <input name=\"email\" ngModel required #email=\"ngModel\">\n      <button>Submit</button>\n    </form>\n\n    <p>First name value: {{ email.value }}</p>\n    <p>First name valid: {{ email.valid }}</p>\n    <p>Form value: {{ f.value | json }}</p>\n    <p>Form valid: {{ f.valid }}</p>\n</div> -->\n";

/***/ },
/* 604 */
/***/ function(module, exports, __webpack_require__) {

module.exports = "<div class=\"wrapper\">\n\n\t<div class=\"menu\">\n\t\t<a *ngFor=\"let subject of info\" \n\t\tclass=\"subject\"\n\t\tpageScroll href=\"#{{subject.title}}\">\n\t\t\t<img src=\"{{activeSrc(subject)}}\"/>\n\t\t\t<!-- <object type=\"image/svg+xml\" [data]=\"secureUrl(subject.iconUrl)\">\n\t\t\t\t\t<img src=\"" + __webpack_require__(437) + "\" />\n\t\t\t</object> -->\n\t\t</a>\n\t</div>\n\n</div>\n";

/***/ },
/* 605 */
/***/ function(module, exports, __webpack_require__) {

module.exports = "<div id=\"home\" class=\"wrapper\">\n\t<object class=\"version-tag\" type=\"image/svg+xml\" data=\"../../assets/img/version_tag.svg\">\n\t\t<img src=\"" + __webpack_require__(893) + "\">\n\t</object>\n\t<h1>kvinnor & män</h1>\n\n\t<object type=\"image/svg+xml\" data=\"../../assets/img/logo.svg\">\n  \t\t<img src=\"" + __webpack_require__(437) + "\" />\n\t</object>\n\n\t<div class=\"subjects\">\n\t\t<a *ngFor=\"let subject of info\"\n\t\tclass=\"subject\"\n\t\tpageScroll href=\"#{{subject.title}}\">\n\n\t\t\t<h3>{{ subject.title }}</h3>\n\t\t\t<img src=\"{{subject.iconUrl}}.svg\"/>\n\t\t\t<p>{{ subject.description }}</p>\n\n\t\t</a>\n\t</div>\n\n</div>\n";

/***/ },
/* 606 */
/***/ function(module, exports) {

module.exports = "<div *ngFor=\"let subject of info\" class=\"wrapper\">\n\n\t<h2 [ngStyle]=\"{'color': subject.color}\" id=\"{{subject.title}}\">{{subject.title}}</h2>\n\n\t<div class=\"get-statistics\">\n\t\t<h3>hämta statistik </h3>\n\t\t<input-menu\n\t\t[subject]=\"subject\"\n\t\t(notify)=\"onNotify($event)\">\n\t\t</input-menu>\n\t</div>\n\n\t<div class=\"chart\">\n\t\t<line-chart [subject]=\"subject\"></line-chart>\n\t</div>\n\n\n\t<share-buttons\n\t [url]=\"'http://kvinnorochman.se'\"\n\t [count]=\"false\"\n\t [totalCount]=\"false\"\n\t >\n\t </share-buttons>\n\t <menu [subject]=\"subject\"></menu>\n</div>\n";

/***/ },
/* 607 */,
/* 608 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_common__ = __webpack_require__(53);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ng2_page_scroll_service__ = __webpack_require__(288);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ng2_page_scroll_directive__ = __webpack_require__(395);
/* harmony export (binding) */ __webpack_require__.d(exports, "a", function() { return Ng2PageScrollModule; });
/**
 * Created by sebastianfuss on 03.09.16.
 */




var Ng2PageScrollModule = (function () {
    function Ng2PageScrollModule() {
    }
    Ng2PageScrollModule.decorators = [
        { type: __WEBPACK_IMPORTED_MODULE_1__angular_core__["NgModule"], args: [{
                    imports: [__WEBPACK_IMPORTED_MODULE_0__angular_common__["CommonModule"]],
                    declarations: [__WEBPACK_IMPORTED_MODULE_3__ng2_page_scroll_directive__["a" /* PageScroll */]],
                    exports: [__WEBPACK_IMPORTED_MODULE_3__ng2_page_scroll_directive__["a" /* PageScroll */]],
                    providers: [
                        { provide: __WEBPACK_IMPORTED_MODULE_2__ng2_page_scroll_service__["a" /* PageScrollService */], useClass: __WEBPACK_IMPORTED_MODULE_2__ng2_page_scroll_service__["a" /* PageScrollService */] }
                    ]
                },] },
    ];
    /** @nocollapse */
    Ng2PageScrollModule.ctorParameters = [];
    return Ng2PageScrollModule;
}());
//# sourceMappingURL=ng2-page-scroll.module.js.map

/***/ },
/* 609 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
"use strict";var __decorate=this&&this.__decorate||function(e,t,r,o){var n,a=arguments.length,i=a<3?t:null===o?o=Object.getOwnPropertyDescriptor(t,r):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)i=Reflect.decorate(e,t,r,o);else for(var s=e.length-1;s>=0;s--)(n=e[s])&&(i=(a<3?n(i):a>3?n(t,r,i):n(t,r))||i);return a>3&&i&&Object.defineProperty(t,r,i),i},__metadata=this&&this.__metadata||function(e,t){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(e,t)},core_1=__webpack_require__(1),share_buttons_class_1=__webpack_require__(289),share_buttons_service_1=__webpack_require__(396),ShareButtonComponent=function(){function e(e,t,r){this.sbService=e,this.renderer=t,this.elementRef=r,this.count=!1,this.countOuter=new core_1.EventEmitter}return e.prototype.ngAfterViewInit=function(){var e=this;if(this.url){var t=/(ftp|http|https):\/\/(\w+:{0,1}\w*@)?(\S+)(:[0-9]+)?(\/|\/([\w#!:.?+=&%@!\-\/]))?/;t.test(this.url)||(console.warn("Invalid URL, switching to window.location.href"),this.url=window.location.href)}else this.url=window.location.href;this.renderer.setElementProperty(this.btn.nativeElement,"innerHTML",this.button.template),this.renderer.setElementClass(this.btn.nativeElement,this.button.classes,!0),this.count&&this.sbService.count(this.button.provider,this.url).subscribe(function(t){if(t){var r=e.renderer.createElement(e.elementRef.nativeElement,"span");e.renderer.setElementClass(r,"sb-button-count",!0),e.renderer.setElementProperty(r,"textContent",e.nFormatter(t,1)),e.countOuter.emit(t)}})},e.prototype.share=function(){var e=new share_buttons_class_1.ShareArgs(this.url,this.title,this.description,this.image,this.tags);window.open(this.sbService.share(this.button.provider,e),"newwindow",this.sbService.windowAttr())},e.prototype.nFormatter=function(e,t){var r,o=[{value:1e18,symbol:"E"},{value:1e15,symbol:"P"},{value:1e12,symbol:"T"},{value:1e9,symbol:"G"},{value:1e6,symbol:"M"},{value:1e3,symbol:"K"}],n=/\.0+$|(\.[0-9]*[1-9])0+$/;for(r=0;r<o.length;r++)if(e>=o[r].value)return(e/o[r].value).toFixed(t).replace(n,"$1")+o[r].symbol;return e.toFixed(t).replace(n,"$1")},__decorate([core_1.Input(),__metadata("design:type",String)],e.prototype,"url",void 0),__decorate([core_1.Input(),__metadata("design:type",String)],e.prototype,"title",void 0),__decorate([core_1.Input(),__metadata("design:type",String)],e.prototype,"description",void 0),__decorate([core_1.Input(),__metadata("design:type",String)],e.prototype,"image",void 0),__decorate([core_1.Input(),__metadata("design:type",Array)],e.prototype,"tags",void 0),__decorate([core_1.Input(),__metadata("design:type",share_buttons_class_1.ShareButton)],e.prototype,"button",void 0),__decorate([core_1.Input(),__metadata("design:type",Boolean)],e.prototype,"count",void 0),__decorate([core_1.Output(),__metadata("design:type",Object)],e.prototype,"countOuter",void 0),__decorate([core_1.ViewChild("btn"),__metadata("design:type",core_1.ElementRef)],e.prototype,"btn",void 0),e=__decorate([core_1.Component({selector:"share-button",template:'<button  #btn (click)="share()"></button>',changeDetection:core_1.ChangeDetectionStrategy.OnPush}),__metadata("design:paramtypes",[share_buttons_service_1.ShareButtonsService,core_1.Renderer,core_1.ElementRef])],e)}();exports.ShareButtonComponent=ShareButtonComponent;
//# sourceMappingURL=share-button.component.js.map


/***/ },
/* 610 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
"use strict";var __decorate=this&&this.__decorate||function(t,e,o,n){var r,s=arguments.length,a=s<3?e:null===n?n=Object.getOwnPropertyDescriptor(e,o):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(t,e,o,n);else for(var i=t.length-1;i>=0;i--)(r=t[i])&&(a=(s<3?r(a):s>3?r(e,o,a):r(e,o))||a);return s>3&&a&&Object.defineProperty(e,o,a),a},__metadata=this&&this.__metadata||function(t,e){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(t,e)},core_1=__webpack_require__(1),share_buttons_class_1=__webpack_require__(289),share_provider_enum_1=__webpack_require__(290),ShareButtonsComponent=function(){function t(){this.count=!1,this.totalCount=!1,this.defaultStyle=!0,this.facebook="<i class='fa fa-facebook'></i>",this.twitter="<i class='fa fa-twitter'></i>",this.linkedIn="<i class='fa fa-linkedin'></i>",this.tumblr="<i class='fa fa-tumblr'></i>",this.google="<i class='fa fa-google-plus'></i>",this.pinterest="<i class='fa fa-pinterest-p'></i>",this.stumbleUpOn="<i class='fa fa-stumbleupon'></i>",this.reddit="<i class='fa fa-reddit-alien'></i>",this.tCount=0}return t.prototype.ngOnInit=function(){this.buttons=[],this.facebook&&this.buttons.push(new share_buttons_class_1.ShareButton(share_provider_enum_1.ShareProvider.FACEBOOK,this.facebook,"facebook")),this.twitter&&this.buttons.push(new share_buttons_class_1.ShareButton(share_provider_enum_1.ShareProvider.TWITTER,this.twitter,"twitter")),this.google&&this.buttons.push(new share_buttons_class_1.ShareButton(share_provider_enum_1.ShareProvider.GOOGLEPLUS,this.google,"googleplus")),this.pinterest&&this.buttons.push(new share_buttons_class_1.ShareButton(share_provider_enum_1.ShareProvider.PINTEREST,this.pinterest,"pinterest")),this.linkedIn&&this.buttons.push(new share_buttons_class_1.ShareButton(share_provider_enum_1.ShareProvider.LINKEDIN,this.linkedIn,"linkedin")),this.tumblr&&this.buttons.push(new share_buttons_class_1.ShareButton(share_provider_enum_1.ShareProvider.TUMBLR,this.tumblr,"tumblr")),this.reddit&&this.buttons.push(new share_buttons_class_1.ShareButton(share_provider_enum_1.ShareProvider.REDDIT,this.reddit,"reddit")),this.stumbleUpOn&&this.buttons.push(new share_buttons_class_1.ShareButton(share_provider_enum_1.ShareProvider.STUMBLEUPON,this.stumbleUpOn,"stumbleupon"))},t.prototype.counter=function(t){this.tCount+=t},__decorate([core_1.Input(),__metadata("design:type",String)],t.prototype,"url",void 0),__decorate([core_1.Input(),__metadata("design:type",String)],t.prototype,"title",void 0),__decorate([core_1.Input(),__metadata("design:type",String)],t.prototype,"description",void 0),__decorate([core_1.Input(),__metadata("design:type",String)],t.prototype,"image",void 0),__decorate([core_1.Input(),__metadata("design:type",Array)],t.prototype,"tags",void 0),__decorate([core_1.Input(),__metadata("design:type",String)],t.prototype,"shareTitle",void 0),__decorate([core_1.Input(),__metadata("design:type",Boolean)],t.prototype,"count",void 0),__decorate([core_1.Input(),__metadata("design:type",Boolean)],t.prototype,"totalCount",void 0),__decorate([core_1.Input(),__metadata("design:type",Boolean)],t.prototype,"defaultStyle",void 0),__decorate([core_1.Input(),__metadata("design:type",Object)],t.prototype,"facebook",void 0),__decorate([core_1.Input(),__metadata("design:type",Object)],t.prototype,"twitter",void 0),__decorate([core_1.Input(),__metadata("design:type",Object)],t.prototype,"linkedIn",void 0),__decorate([core_1.Input(),__metadata("design:type",Object)],t.prototype,"tumblr",void 0),__decorate([core_1.Input(),__metadata("design:type",Object)],t.prototype,"google",void 0),__decorate([core_1.Input(),__metadata("design:type",Object)],t.prototype,"pinterest",void 0),__decorate([core_1.Input(),__metadata("design:type",Object)],t.prototype,"stumbleUpOn",void 0),__decorate([core_1.Input(),__metadata("design:type",Object)],t.prototype,"reddit",void 0),t=__decorate([core_1.Component({selector:"share-buttons",template:'\n      <div class="sb-container">\n\n          <h3>\n              <span *ngIf="totalCount && tCount" class="sb-count">\n              {{tCount | nFormatter: 1}}\n          </span>\n              <span *ngIf="shareTitle" class="sb-title">{{shareTitle}}</span>\n          </h3>\n\n          <div class="sb-buttons" [class.sb-default-style]="defaultStyle">\n              <share-button class="sb-button" *ngFor="let button of buttons"\n                            [button]="button"\n                            [url]="url"\n                            [image]="image"\n                            [title]="title"\n                            [description]="description"\n                            [tags]="tags"\n                            [count]="count"\n                            (countOuter)="counter($event)"\n              ></share-button>\n          </div>\n\n      </div>\n    ',styles:["\n      .sb-container .btn,.sb-container button{display:inline-block;margin-right:5px;background-color:#fff;border-radius:4px;padding:.43333em}.sb-container .btn:hover,.sb-container button:hover{color:#fff}.sb-container a:hover,.sb-container button{cursor:pointer;outline:0;border:0}.sb-container .sb-buttons{display:-webkit-box;display:-ms-flexbox;display:flex;-ms-flex-pack:distribute;justify-content:space-around;-ms-flex-wrap:wrap;flex-wrap:wrap;margin:20px 0}.sb-container .sb-buttons .sb-button{display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;-ms-flex-direction:column;flex-direction:column;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-webkit-box-flex:1;-ms-flex:1 1 auto;flex:1 1 auto}.sb-container .sb-buttons .sb-button-count{font-size:.8em;text-align:center;position:relative;color:#333;margin-top:10px}.sb-container .sb-buttons .sb-button-count:before{position:absolute;top:-7px;left:50%;margin-left:-4px;content:'';width:0;height:0;border-left:5px solid transparent;border-right:5px solid transparent;border-bottom:5px solid #e03237}.sb-container button{max-width:80px;min-width:50px;width:100%;background-color:transparent;margin:5px;font-size:1.2em}.sb-container button:hover{-webkit-transition:all .5s ease;transition:all .5s ease}.sb-default-style .facebook{color:#3b5998}.sb-default-style .facebook:hover{background:#3b5998}.sb-default-style .twitter{color:#00acee}.sb-default-style .twitter:hover{background:#00acee}.sb-default-style .googleplus{color:#e93f2e}.sb-default-style .googleplus:hover{background:#e93f2e}.sb-default-style .stumbleupon{color:#f74425}.sb-default-style .stumbleupon:hover{background:#f74425}.sb-default-style .linkedin{color:#0e76a8}.sb-default-style .linkedin:hover{background:#0e76a8}.sb-default-style .pinterest{color:#c92228}.sb-default-style .pinterest:hover{background:#c92228}.sb-default-style .reddit{color:#ff4006}.sb-default-style .reddit:hover{background:#ff4006}.sb-default-style .tumblr{color:#36465d}.sb-default-style .tumblr:hover{background:#36465d}.sb-default-style .github{color:purple}.sb-default-style .github:hover{background:purple}.sb-default-style .stackoverflow{color:#f48023}.sb-default-style .stackoverflow:hover{background:#f48023}\n    "],encapsulation:core_1.ViewEncapsulation.None,changeDetection:core_1.ChangeDetectionStrategy.OnPush}),__metadata("design:paramtypes",[])],t)}();exports.ShareButtonsComponent=ShareButtonsComponent;
//# sourceMappingURL=share-buttons.component.js.map


/***/ },
/* 611 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
"use strict";var __decorate=this&&this.__decorate||function(e,t,r,o){var a,n=arguments.length,c=n<3?t:null===o?o=Object.getOwnPropertyDescriptor(t,r):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)c=Reflect.decorate(e,t,r,o);else for(var l=e.length-1;l>=0;l--)(a=e[l])&&(c=(n<3?a(c):n>3?a(t,r,c):a(t,r))||c);return n>3&&c&&Object.defineProperty(t,r,c),c},__metadata=this&&this.__metadata||function(e,t){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(e,t)},core_1=__webpack_require__(1),NFormatterPipe=function(){function e(){}return e.prototype.transform=function(e,t){if(e)return this.nFormatter(e,t)},e.prototype.nFormatter=function(e,t){var r,o=[{value:1e18,symbol:"E"},{value:1e15,symbol:"P"},{value:1e12,symbol:"T"},{value:1e9,symbol:"G"},{value:1e6,symbol:"M"},{value:1e3,symbol:"K"}],a=/\.0+$|(\.[0-9]*[1-9])0+$/;for(r=0;r<o.length;r++)if(e>=o[r].value)return(e/o[r].value).toFixed(t).replace(a,"$1")+o[r].symbol;return e.toFixed(t).replace(a,"$1")},e=__decorate([core_1.Pipe({name:"nFormatter"}),__metadata("design:paramtypes",[])],e)}();exports.NFormatterPipe=NFormatterPipe;
//# sourceMappingURL=n-formatter.pipe.js.map


/***/ },
/* 612 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
"use strict";var __decorate=this&&this.__decorate||function(e,t,r,o){var n,a=arguments.length,s=a<3?t:null===o?o=Object.getOwnPropertyDescriptor(t,r):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)s=Reflect.decorate(e,t,r,o);else for(var _=e.length-1;_>=0;_--)(n=e[_])&&(s=(a<3?n(s):a>3?n(t,r,s):n(t,r))||s);return a>3&&s&&Object.defineProperty(t,r,s),s},__metadata=this&&this.__metadata||function(e,t){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(e,t)},core_1=__webpack_require__(1),http_1=__webpack_require__(26),common_1=__webpack_require__(53),share_buttons_component_1=__webpack_require__(610);exports.ShareButtonsComponent=share_buttons_component_1.ShareButtonsComponent;var share_button_component_1=__webpack_require__(609);exports.ShareButtonComponent=share_button_component_1.ShareButtonComponent;var share_buttons_service_1=__webpack_require__(396);exports.ShareButtonsService=share_buttons_service_1.ShareButtonsService;var n_formatter_pipe_1=__webpack_require__(611);exports.NFormatterPipe=n_formatter_pipe_1.NFormatterPipe;var share_provider_enum_1=__webpack_require__(290);exports.ShareProvider=share_provider_enum_1.ShareProvider;var share_buttons_class_1=__webpack_require__(289);exports.ShareButton=share_buttons_class_1.ShareButton,exports.ShareArgs=share_buttons_class_1.ShareArgs;var ShareButtonsModule=function(){function e(){}return e=__decorate([core_1.NgModule({declarations:[share_buttons_component_1.ShareButtonsComponent,share_button_component_1.ShareButtonComponent,n_formatter_pipe_1.NFormatterPipe],imports:[common_1.CommonModule,http_1.JsonpModule],providers:[share_buttons_service_1.ShareButtonsService],exports:[share_buttons_component_1.ShareButtonsComponent,share_button_component_1.ShareButtonComponent,n_formatter_pipe_1.NFormatterPipe]}),__metadata("design:paramtypes",[])],e)}();exports.ShareButtonsModule=ShareButtonsModule;
//# sourceMappingURL=index.js.map


/***/ },
/* 613 */,
/* 614 */,
/* 615 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
"use strict";
/* tslint:disable:no-unused-variable */
// Subject imported before Observable to bypass circular dependency issue since
// Subject extends Observable and Observable references Subject in it's
// definition
var Subject_1 = __webpack_require__(10);
exports.Subject = Subject_1.Subject;
/* tslint:enable:no-unused-variable */
var Observable_1 = __webpack_require__(0);
exports.Observable = Observable_1.Observable;
// statics
/* tslint:disable:no-use-before-declare */
__webpack_require__(618);
__webpack_require__(619);
__webpack_require__(620);
__webpack_require__(621);
__webpack_require__(622);
__webpack_require__(625);
__webpack_require__(626);
__webpack_require__(627);
__webpack_require__(628);
__webpack_require__(629);
__webpack_require__(630);
__webpack_require__(631);
__webpack_require__(632);
__webpack_require__(633);
__webpack_require__(634);
__webpack_require__(639);
__webpack_require__(635);
__webpack_require__(636);
__webpack_require__(637);
__webpack_require__(638);
__webpack_require__(640);
__webpack_require__(643);
__webpack_require__(641);
__webpack_require__(642);
__webpack_require__(644);
//dom
__webpack_require__(623);
__webpack_require__(624);
//operators
__webpack_require__(647);
__webpack_require__(648);
__webpack_require__(649);
__webpack_require__(650);
__webpack_require__(651);
__webpack_require__(652);
__webpack_require__(653);
__webpack_require__(654);
__webpack_require__(655);
__webpack_require__(656);
__webpack_require__(657);
__webpack_require__(658);
__webpack_require__(659);
__webpack_require__(660);
__webpack_require__(666);
__webpack_require__(661);
__webpack_require__(662);
__webpack_require__(663);
__webpack_require__(664);
__webpack_require__(665);
__webpack_require__(667);
__webpack_require__(668);
__webpack_require__(669);
__webpack_require__(670);
__webpack_require__(671);
__webpack_require__(674);
__webpack_require__(675);
__webpack_require__(676);
__webpack_require__(672);
__webpack_require__(677);
__webpack_require__(678);
__webpack_require__(679);
__webpack_require__(680);
__webpack_require__(681);
__webpack_require__(682);
__webpack_require__(683);
__webpack_require__(684);
__webpack_require__(645);
__webpack_require__(646);
__webpack_require__(685);
__webpack_require__(686);
__webpack_require__(673);
__webpack_require__(687);
__webpack_require__(688);
__webpack_require__(689);
__webpack_require__(690);
__webpack_require__(691);
__webpack_require__(692);
__webpack_require__(693);
__webpack_require__(694);
__webpack_require__(695);
__webpack_require__(696);
__webpack_require__(697);
__webpack_require__(698);
__webpack_require__(699);
__webpack_require__(700);
__webpack_require__(701);
__webpack_require__(702);
__webpack_require__(703);
__webpack_require__(704);
__webpack_require__(706);
__webpack_require__(705);
__webpack_require__(707);
__webpack_require__(708);
__webpack_require__(709);
__webpack_require__(710);
__webpack_require__(711);
__webpack_require__(712);
__webpack_require__(713);
__webpack_require__(714);
__webpack_require__(715);
__webpack_require__(716);
__webpack_require__(717);
__webpack_require__(718);
__webpack_require__(719);
__webpack_require__(720);
__webpack_require__(721);
__webpack_require__(722);
__webpack_require__(723);
__webpack_require__(724);
__webpack_require__(725);
__webpack_require__(726);
__webpack_require__(727);
__webpack_require__(728);
__webpack_require__(729);
__webpack_require__(730);
__webpack_require__(731);
__webpack_require__(732);
__webpack_require__(733);
__webpack_require__(734);
__webpack_require__(735);
__webpack_require__(736);
__webpack_require__(737);
__webpack_require__(51);
__webpack_require__(738);
__webpack_require__(739);
__webpack_require__(740);
__webpack_require__(741);
__webpack_require__(742);
__webpack_require__(743);
__webpack_require__(744);
__webpack_require__(745);
/* tslint:disable:no-unused-variable */
var Subscription_1 = __webpack_require__(15);
exports.Subscription = Subscription_1.Subscription;
var Subscriber_1 = __webpack_require__(3);
exports.Subscriber = Subscriber_1.Subscriber;
var AsyncSubject_1 = __webpack_require__(118);
exports.AsyncSubject = AsyncSubject_1.AsyncSubject;
var ReplaySubject_1 = __webpack_require__(120);
exports.ReplaySubject = ReplaySubject_1.ReplaySubject;
var BehaviorSubject_1 = __webpack_require__(119);
exports.BehaviorSubject = BehaviorSubject_1.BehaviorSubject;
var MulticastObservable_1 = __webpack_require__(399);
exports.MulticastObservable = MulticastObservable_1.MulticastObservable;
var ConnectableObservable_1 = __webpack_require__(291);
exports.ConnectableObservable = ConnectableObservable_1.ConnectableObservable;
var Notification_1 = __webpack_require__(78);
exports.Notification = Notification_1.Notification;
var EmptyError_1 = __webpack_require__(83);
exports.EmptyError = EmptyError_1.EmptyError;
var ArgumentOutOfRangeError_1 = __webpack_require__(125);
exports.ArgumentOutOfRangeError = ArgumentOutOfRangeError_1.ArgumentOutOfRangeError;
var ObjectUnsubscribedError_1 = __webpack_require__(300);
exports.ObjectUnsubscribedError = ObjectUnsubscribedError_1.ObjectUnsubscribedError;
var UnsubscriptionError_1 = __webpack_require__(421);
exports.UnsubscriptionError = UnsubscriptionError_1.UnsubscriptionError;
var timeInterval_1 = __webpack_require__(413);
exports.TimeInterval = timeInterval_1.TimeInterval;
var timestamp_1 = __webpack_require__(414);
exports.Timestamp = timestamp_1.Timestamp;
var TestScheduler_1 = __webpack_require__(873);
exports.TestScheduler = TestScheduler_1.TestScheduler;
var VirtualTimeScheduler_1 = __webpack_require__(416);
exports.VirtualTimeScheduler = VirtualTimeScheduler_1.VirtualTimeScheduler;
var AjaxObservable_1 = __webpack_require__(401);
exports.AjaxResponse = AjaxObservable_1.AjaxResponse;
exports.AjaxError = AjaxObservable_1.AjaxError;
exports.AjaxTimeoutError = AjaxObservable_1.AjaxTimeoutError;
var asap_1 = __webpack_require__(417);
var async_1 = __webpack_require__(23);
var queue_1 = __webpack_require__(418);
var animationFrame_1 = __webpack_require__(870);
var rxSubscriber_1 = __webpack_require__(124);
var iterator_1 = __webpack_require__(82);
var observable_1 = __webpack_require__(123);
/* tslint:enable:no-unused-variable */
/**
 * @typedef {Object} Rx.Scheduler
 * @property {Scheduler} queue Schedules on a queue in the current event frame
 * (trampoline scheduler). Use this for iteration operations.
 * @property {Scheduler} asap Schedules on the micro task queue, which uses the
 * fastest transport mechanism available, either Node.js' `process.nextTick()`
 * or Web Worker MessageChannel or setTimeout or others. Use this for
 * asynchronous conversions.
 * @property {Scheduler} async Schedules work with `setInterval`. Use this for
 * time-based operations.
 * @property {Scheduler} animationFrame Schedules work with `requestAnimationFrame`.
 * Use this for synchronizing with the platform's painting
 */
var Scheduler = {
    asap: asap_1.asap,
    queue: queue_1.queue,
    animationFrame: animationFrame_1.animationFrame,
    async: async_1.async
};
exports.Scheduler = Scheduler;
/**
 * @typedef {Object} Rx.Symbol
 * @property {Symbol|string} rxSubscriber A symbol to use as a property name to
 * retrieve an "Rx safe" Observer from an object. "Rx safety" can be defined as
 * an object that has all of the traits of an Rx Subscriber, including the
 * ability to add and remove subscriptions to the subscription chain and
 * guarantees involving event triggering (can't "next" after unsubscription,
 * etc).
 * @property {Symbol|string} observable A symbol to use as a property name to
 * retrieve an Observable as defined by the [ECMAScript "Observable" spec](https://github.com/zenparsing/es-observable).
 * @property {Symbol|string} iterator The ES6 symbol to use as a property name
 * to retrieve an iterator from an object.
 */
var Symbol = {
    rxSubscriber: rxSubscriber_1.$$rxSubscriber,
    observable: observable_1.$$observable,
    iterator: iterator_1.$$iterator
};
exports.Symbol = Symbol;
//# sourceMappingURL=Rx.js.map

/***/ },
/* 616 */
/***/ function(module, exports) {

"use strict";
"use strict";
/**
 * An execution context and a data structure to order tasks and schedule their
 * execution. Provides a notion of (potentially virtual) time, through the
 * `now()` getter method.
 *
 * Each unit of work in a Scheduler is called an {@link Action}.
 *
 * ```ts
 * class Scheduler {
 *   now(): number;
 *   schedule(work, delay?, state?): Subscription;
 * }
 * ```
 *
 * @class Scheduler
 */
var Scheduler = (function () {
    function Scheduler(SchedulerAction, now) {
        if (now === void 0) { now = Scheduler.now; }
        this.SchedulerAction = SchedulerAction;
        this.now = now;
    }
    /**
     * Schedules a function, `work`, for execution. May happen at some point in
     * the future, according to the `delay` parameter, if specified. May be passed
     * some context object, `state`, which will be passed to the `work` function.
     *
     * The given arguments will be processed an stored as an Action object in a
     * queue of actions.
     *
     * @param {function(state: ?T): ?Subscription} work A function representing a
     * task, or some unit of work to be executed by the Scheduler.
     * @param {number} [delay] Time to wait before executing the work, where the
     * time unit is implicit and defined by the Scheduler itself.
     * @param {T} [state] Some contextual data that the `work` function uses when
     * called by the Scheduler.
     * @return {Subscription} A subscription in order to be able to unsubscribe
     * the scheduled work.
     */
    Scheduler.prototype.schedule = function (work, delay, state) {
        if (delay === void 0) { delay = 0; }
        return new this.SchedulerAction(this, work).schedule(state, delay);
    };
    Scheduler.now = Date.now ? Date.now : function () { return +new Date(); };
    return Scheduler;
}());
exports.Scheduler = Scheduler;
//# sourceMappingURL=Scheduler.js.map

/***/ },
/* 617 */,
/* 618 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
"use strict";
var Observable_1 = __webpack_require__(0);
var bindCallback_1 = __webpack_require__(764);
Observable_1.Observable.bindCallback = bindCallback_1.bindCallback;
//# sourceMappingURL=bindCallback.js.map

/***/ },
/* 619 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
"use strict";
var Observable_1 = __webpack_require__(0);
var bindNodeCallback_1 = __webpack_require__(765);
Observable_1.Observable.bindNodeCallback = bindNodeCallback_1.bindNodeCallback;
//# sourceMappingURL=bindNodeCallback.js.map

/***/ },
/* 620 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
"use strict";
var Observable_1 = __webpack_require__(0);
var combineLatest_1 = __webpack_require__(766);
Observable_1.Observable.combineLatest = combineLatest_1.combineLatest;
//# sourceMappingURL=combineLatest.js.map

/***/ },
/* 621 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
"use strict";
var Observable_1 = __webpack_require__(0);
var concat_1 = __webpack_require__(767);
Observable_1.Observable.concat = concat_1.concat;
//# sourceMappingURL=concat.js.map

/***/ },
/* 622 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
"use strict";
var Observable_1 = __webpack_require__(0);
var defer_1 = __webpack_require__(768);
Observable_1.Observable.defer = defer_1.defer;
//# sourceMappingURL=defer.js.map

/***/ },
/* 623 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
"use strict";
var Observable_1 = __webpack_require__(0);
var ajax_1 = __webpack_require__(770);
Observable_1.Observable.ajax = ajax_1.ajax;
//# sourceMappingURL=ajax.js.map

/***/ },
/* 624 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
"use strict";
var Observable_1 = __webpack_require__(0);
var webSocket_1 = __webpack_require__(771);
Observable_1.Observable.webSocket = webSocket_1.webSocket;
//# sourceMappingURL=webSocket.js.map

/***/ },
/* 625 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
"use strict";
var Observable_1 = __webpack_require__(0);
var empty_1 = __webpack_require__(772);
Observable_1.Observable.empty = empty_1.empty;
//# sourceMappingURL=empty.js.map

/***/ },
/* 626 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
"use strict";
var Observable_1 = __webpack_require__(0);
var forkJoin_1 = __webpack_require__(773);
Observable_1.Observable.forkJoin = forkJoin_1.forkJoin;
//# sourceMappingURL=forkJoin.js.map

/***/ },
/* 627 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
"use strict";
var Observable_1 = __webpack_require__(0);
var from_1 = __webpack_require__(293);
Observable_1.Observable.from = from_1.from;
//# sourceMappingURL=from.js.map

/***/ },
/* 628 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
"use strict";
var Observable_1 = __webpack_require__(0);
var fromEvent_1 = __webpack_require__(774);
Observable_1.Observable.fromEvent = fromEvent_1.fromEvent;
//# sourceMappingURL=fromEvent.js.map

/***/ },
/* 629 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
"use strict";
var Observable_1 = __webpack_require__(0);
var fromEventPattern_1 = __webpack_require__(775);
Observable_1.Observable.fromEventPattern = fromEventPattern_1.fromEventPattern;
//# sourceMappingURL=fromEventPattern.js.map

/***/ },
/* 630 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
"use strict";
var Observable_1 = __webpack_require__(0);
var fromPromise_1 = __webpack_require__(121);
Observable_1.Observable.fromPromise = fromPromise_1.fromPromise;
//# sourceMappingURL=fromPromise.js.map

/***/ },
/* 631 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
"use strict";
var Observable_1 = __webpack_require__(0);
var GenerateObservable_1 = __webpack_require__(754);
Observable_1.Observable.generate = GenerateObservable_1.GenerateObservable.create;
//# sourceMappingURL=generate.js.map

/***/ },
/* 632 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
"use strict";
var Observable_1 = __webpack_require__(0);
var if_1 = __webpack_require__(776);
Observable_1.Observable.if = if_1._if;
//# sourceMappingURL=if.js.map

/***/ },
/* 633 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
"use strict";
var Observable_1 = __webpack_require__(0);
var interval_1 = __webpack_require__(777);
Observable_1.Observable.interval = interval_1.interval;
//# sourceMappingURL=interval.js.map

/***/ },
/* 634 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
"use strict";
var Observable_1 = __webpack_require__(0);
var merge_1 = __webpack_require__(778);
Observable_1.Observable.merge = merge_1.merge;
//# sourceMappingURL=merge.js.map

/***/ },
/* 635 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
"use strict";
var Observable_1 = __webpack_require__(0);
var never_1 = __webpack_require__(779);
Observable_1.Observable.never = never_1.never;
//# sourceMappingURL=never.js.map

/***/ },
/* 636 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
"use strict";
var Observable_1 = __webpack_require__(0);
var of_1 = __webpack_require__(63);
Observable_1.Observable.of = of_1.of;
//# sourceMappingURL=of.js.map

/***/ },
/* 637 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
"use strict";
var Observable_1 = __webpack_require__(0);
var onErrorResumeNext_1 = __webpack_require__(411);
Observable_1.Observable.onErrorResumeNext = onErrorResumeNext_1.onErrorResumeNextStatic;
//# sourceMappingURL=onErrorResumeNext.js.map

/***/ },
/* 638 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
"use strict";
var Observable_1 = __webpack_require__(0);
var pairs_1 = __webpack_require__(780);
Observable_1.Observable.pairs = pairs_1.pairs;
//# sourceMappingURL=pairs.js.map

/***/ },
/* 639 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
"use strict";
var Observable_1 = __webpack_require__(0);
var race_1 = __webpack_require__(412);
Observable_1.Observable.race = race_1.raceStatic;
//# sourceMappingURL=race.js.map

/***/ },
/* 640 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
"use strict";
var Observable_1 = __webpack_require__(0);
var range_1 = __webpack_require__(781);
Observable_1.Observable.range = range_1.range;
//# sourceMappingURL=range.js.map

/***/ },
/* 641 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
"use strict";
var Observable_1 = __webpack_require__(0);
var throw_1 = __webpack_require__(782);
Observable_1.Observable.throw = throw_1._throw;
//# sourceMappingURL=throw.js.map

/***/ },
/* 642 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
"use strict";
var Observable_1 = __webpack_require__(0);
var timer_1 = __webpack_require__(783);
Observable_1.Observable.timer = timer_1.timer;
//# sourceMappingURL=timer.js.map

/***/ },
/* 643 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
"use strict";
var Observable_1 = __webpack_require__(0);
var using_1 = __webpack_require__(784);
Observable_1.Observable.using = using_1.using;
//# sourceMappingURL=using.js.map

/***/ },
/* 644 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
"use strict";
var Observable_1 = __webpack_require__(0);
var zip_1 = __webpack_require__(785);
Observable_1.Observable.zip = zip_1.zip;
//# sourceMappingURL=zip.js.map

/***/ },
/* 645 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
"use strict";
var Observable_1 = __webpack_require__(0);
var audit_1 = __webpack_require__(786);
Observable_1.Observable.prototype.audit = audit_1.audit;
//# sourceMappingURL=audit.js.map

/***/ },
/* 646 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
"use strict";
var Observable_1 = __webpack_require__(0);
var auditTime_1 = __webpack_require__(787);
Observable_1.Observable.prototype.auditTime = auditTime_1.auditTime;
//# sourceMappingURL=auditTime.js.map

/***/ },
/* 647 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
"use strict";
var Observable_1 = __webpack_require__(0);
var buffer_1 = __webpack_require__(788);
Observable_1.Observable.prototype.buffer = buffer_1.buffer;
//# sourceMappingURL=buffer.js.map

/***/ },
/* 648 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
"use strict";
var Observable_1 = __webpack_require__(0);
var bufferCount_1 = __webpack_require__(789);
Observable_1.Observable.prototype.bufferCount = bufferCount_1.bufferCount;
//# sourceMappingURL=bufferCount.js.map

/***/ },
/* 649 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
"use strict";
var Observable_1 = __webpack_require__(0);
var bufferTime_1 = __webpack_require__(790);
Observable_1.Observable.prototype.bufferTime = bufferTime_1.bufferTime;
//# sourceMappingURL=bufferTime.js.map

/***/ },
/* 650 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
"use strict";
var Observable_1 = __webpack_require__(0);
var bufferToggle_1 = __webpack_require__(791);
Observable_1.Observable.prototype.bufferToggle = bufferToggle_1.bufferToggle;
//# sourceMappingURL=bufferToggle.js.map

/***/ },
/* 651 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
"use strict";
var Observable_1 = __webpack_require__(0);
var bufferWhen_1 = __webpack_require__(792);
Observable_1.Observable.prototype.bufferWhen = bufferWhen_1.bufferWhen;
//# sourceMappingURL=bufferWhen.js.map

/***/ },
/* 652 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
"use strict";
var Observable_1 = __webpack_require__(0);
var cache_1 = __webpack_require__(793);
Observable_1.Observable.prototype.cache = cache_1.cache;
//# sourceMappingURL=cache.js.map

/***/ },
/* 653 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
"use strict";
var Observable_1 = __webpack_require__(0);
var catch_1 = __webpack_require__(402);
Observable_1.Observable.prototype.catch = catch_1._catch;
Observable_1.Observable.prototype._catch = catch_1._catch;
//# sourceMappingURL=catch.js.map

/***/ },
/* 654 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
"use strict";
var Observable_1 = __webpack_require__(0);
var combineAll_1 = __webpack_require__(794);
Observable_1.Observable.prototype.combineAll = combineAll_1.combineAll;
//# sourceMappingURL=combineAll.js.map

/***/ },
/* 655 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
"use strict";
var Observable_1 = __webpack_require__(0);
var combineLatest_1 = __webpack_require__(294);
Observable_1.Observable.prototype.combineLatest = combineLatest_1.combineLatest;
//# sourceMappingURL=combineLatest.js.map

/***/ },
/* 656 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
"use strict";
var Observable_1 = __webpack_require__(0);
var concat_1 = __webpack_require__(295);
Observable_1.Observable.prototype.concat = concat_1.concat;
//# sourceMappingURL=concat.js.map

/***/ },
/* 657 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
"use strict";
var Observable_1 = __webpack_require__(0);
var concatAll_1 = __webpack_require__(296);
Observable_1.Observable.prototype.concatAll = concatAll_1.concatAll;
//# sourceMappingURL=concatAll.js.map

/***/ },
/* 658 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
"use strict";
var Observable_1 = __webpack_require__(0);
var concatMap_1 = __webpack_require__(795);
Observable_1.Observable.prototype.concatMap = concatMap_1.concatMap;
//# sourceMappingURL=concatMap.js.map

/***/ },
/* 659 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
"use strict";
var Observable_1 = __webpack_require__(0);
var concatMapTo_1 = __webpack_require__(796);
Observable_1.Observable.prototype.concatMapTo = concatMapTo_1.concatMapTo;
//# sourceMappingURL=concatMapTo.js.map

/***/ },
/* 660 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
"use strict";
var Observable_1 = __webpack_require__(0);
var count_1 = __webpack_require__(797);
Observable_1.Observable.prototype.count = count_1.count;
//# sourceMappingURL=count.js.map

/***/ },
/* 661 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
"use strict";
var Observable_1 = __webpack_require__(0);
var debounce_1 = __webpack_require__(798);
Observable_1.Observable.prototype.debounce = debounce_1.debounce;
//# sourceMappingURL=debounce.js.map

/***/ },
/* 662 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
"use strict";
var Observable_1 = __webpack_require__(0);
var debounceTime_1 = __webpack_require__(799);
Observable_1.Observable.prototype.debounceTime = debounceTime_1.debounceTime;
//# sourceMappingURL=debounceTime.js.map

/***/ },
/* 663 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
"use strict";
var Observable_1 = __webpack_require__(0);
var defaultIfEmpty_1 = __webpack_require__(800);
Observable_1.Observable.prototype.defaultIfEmpty = defaultIfEmpty_1.defaultIfEmpty;
//# sourceMappingURL=defaultIfEmpty.js.map

/***/ },
/* 664 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
"use strict";
var Observable_1 = __webpack_require__(0);
var delay_1 = __webpack_require__(801);
Observable_1.Observable.prototype.delay = delay_1.delay;
//# sourceMappingURL=delay.js.map

/***/ },
/* 665 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
"use strict";
var Observable_1 = __webpack_require__(0);
var delayWhen_1 = __webpack_require__(802);
Observable_1.Observable.prototype.delayWhen = delayWhen_1.delayWhen;
//# sourceMappingURL=delayWhen.js.map

/***/ },
/* 666 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
"use strict";
var Observable_1 = __webpack_require__(0);
var dematerialize_1 = __webpack_require__(803);
Observable_1.Observable.prototype.dematerialize = dematerialize_1.dematerialize;
//# sourceMappingURL=dematerialize.js.map

/***/ },
/* 667 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
"use strict";
var Observable_1 = __webpack_require__(0);
var distinct_1 = __webpack_require__(403);
Observable_1.Observable.prototype.distinct = distinct_1.distinct;
//# sourceMappingURL=distinct.js.map

/***/ },
/* 668 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
"use strict";
var Observable_1 = __webpack_require__(0);
var distinctKey_1 = __webpack_require__(804);
Observable_1.Observable.prototype.distinctKey = distinctKey_1.distinctKey;
//# sourceMappingURL=distinctKey.js.map

/***/ },
/* 669 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
"use strict";
var Observable_1 = __webpack_require__(0);
var distinctUntilChanged_1 = __webpack_require__(404);
Observable_1.Observable.prototype.distinctUntilChanged = distinctUntilChanged_1.distinctUntilChanged;
//# sourceMappingURL=distinctUntilChanged.js.map

/***/ },
/* 670 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
"use strict";
var Observable_1 = __webpack_require__(0);
var distinctUntilKeyChanged_1 = __webpack_require__(805);
Observable_1.Observable.prototype.distinctUntilKeyChanged = distinctUntilKeyChanged_1.distinctUntilKeyChanged;
//# sourceMappingURL=distinctUntilKeyChanged.js.map

/***/ },
/* 671 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
"use strict";
var Observable_1 = __webpack_require__(0);
var do_1 = __webpack_require__(806);
Observable_1.Observable.prototype.do = do_1._do;
Observable_1.Observable.prototype._do = do_1._do;
//# sourceMappingURL=do.js.map

/***/ },
/* 672 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
"use strict";
var Observable_1 = __webpack_require__(0);
var elementAt_1 = __webpack_require__(807);
Observable_1.Observable.prototype.elementAt = elementAt_1.elementAt;
//# sourceMappingURL=elementAt.js.map

/***/ },
/* 673 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
"use strict";
var Observable_1 = __webpack_require__(0);
var every_1 = __webpack_require__(297);
Observable_1.Observable.prototype.every = every_1.every;
//# sourceMappingURL=every.js.map

/***/ },
/* 674 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
"use strict";
var Observable_1 = __webpack_require__(0);
var exhaust_1 = __webpack_require__(808);
Observable_1.Observable.prototype.exhaust = exhaust_1.exhaust;
//# sourceMappingURL=exhaust.js.map

/***/ },
/* 675 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
"use strict";
var Observable_1 = __webpack_require__(0);
var exhaustMap_1 = __webpack_require__(809);
Observable_1.Observable.prototype.exhaustMap = exhaustMap_1.exhaustMap;
//# sourceMappingURL=exhaustMap.js.map

/***/ },
/* 676 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
"use strict";
var Observable_1 = __webpack_require__(0);
var expand_1 = __webpack_require__(810);
Observable_1.Observable.prototype.expand = expand_1.expand;
//# sourceMappingURL=expand.js.map

/***/ },
/* 677 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
"use strict";
var Observable_1 = __webpack_require__(0);
var filter_1 = __webpack_require__(405);
Observable_1.Observable.prototype.filter = filter_1.filter;
//# sourceMappingURL=filter.js.map

/***/ },
/* 678 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
"use strict";
var Observable_1 = __webpack_require__(0);
var finally_1 = __webpack_require__(811);
Observable_1.Observable.prototype.finally = finally_1._finally;
Observable_1.Observable.prototype._finally = finally_1._finally;
//# sourceMappingURL=finally.js.map

/***/ },
/* 679 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
"use strict";
var Observable_1 = __webpack_require__(0);
var find_1 = __webpack_require__(406);
Observable_1.Observable.prototype.find = find_1.find;
//# sourceMappingURL=find.js.map

/***/ },
/* 680 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
"use strict";
var Observable_1 = __webpack_require__(0);
var findIndex_1 = __webpack_require__(812);
Observable_1.Observable.prototype.findIndex = findIndex_1.findIndex;
//# sourceMappingURL=findIndex.js.map

/***/ },
/* 681 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
"use strict";
var Observable_1 = __webpack_require__(0);
var first_1 = __webpack_require__(407);
Observable_1.Observable.prototype.first = first_1.first;
//# sourceMappingURL=first.js.map

/***/ },
/* 682 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
"use strict";
var Observable_1 = __webpack_require__(0);
var groupBy_1 = __webpack_require__(813);
Observable_1.Observable.prototype.groupBy = groupBy_1.groupBy;
//# sourceMappingURL=groupBy.js.map

/***/ },
/* 683 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
"use strict";
var Observable_1 = __webpack_require__(0);
var ignoreElements_1 = __webpack_require__(814);
Observable_1.Observable.prototype.ignoreElements = ignoreElements_1.ignoreElements;
//# sourceMappingURL=ignoreElements.js.map

/***/ },
/* 684 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
"use strict";
var Observable_1 = __webpack_require__(0);
var isEmpty_1 = __webpack_require__(815);
Observable_1.Observable.prototype.isEmpty = isEmpty_1.isEmpty;
//# sourceMappingURL=isEmpty.js.map

/***/ },
/* 685 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
"use strict";
var Observable_1 = __webpack_require__(0);
var last_1 = __webpack_require__(408);
Observable_1.Observable.prototype.last = last_1.last;
//# sourceMappingURL=last.js.map

/***/ },
/* 686 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
"use strict";
var Observable_1 = __webpack_require__(0);
var let_1 = __webpack_require__(816);
Observable_1.Observable.prototype.let = let_1.letProto;
Observable_1.Observable.prototype.letBind = let_1.letProto;
//# sourceMappingURL=let.js.map

/***/ },
/* 687 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
"use strict";
var Observable_1 = __webpack_require__(0);
var map_1 = __webpack_require__(52);
Observable_1.Observable.prototype.map = map_1.map;
//# sourceMappingURL=map.js.map

/***/ },
/* 688 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
"use strict";
var Observable_1 = __webpack_require__(0);
var mapTo_1 = __webpack_require__(817);
Observable_1.Observable.prototype.mapTo = mapTo_1.mapTo;
//# sourceMappingURL=mapTo.js.map

/***/ },
/* 689 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
"use strict";
var Observable_1 = __webpack_require__(0);
var materialize_1 = __webpack_require__(818);
Observable_1.Observable.prototype.materialize = materialize_1.materialize;
//# sourceMappingURL=materialize.js.map

/***/ },
/* 690 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
"use strict";
var Observable_1 = __webpack_require__(0);
var max_1 = __webpack_require__(819);
Observable_1.Observable.prototype.max = max_1.max;
//# sourceMappingURL=max.js.map

/***/ },
/* 691 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
"use strict";
var Observable_1 = __webpack_require__(0);
var merge_1 = __webpack_require__(409);
Observable_1.Observable.prototype.merge = merge_1.merge;
//# sourceMappingURL=merge.js.map

/***/ },
/* 692 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
"use strict";
var Observable_1 = __webpack_require__(0);
var mergeAll_1 = __webpack_require__(64);
Observable_1.Observable.prototype.mergeAll = mergeAll_1.mergeAll;
//# sourceMappingURL=mergeAll.js.map

/***/ },
/* 693 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
"use strict";
var Observable_1 = __webpack_require__(0);
var mergeMap_1 = __webpack_require__(79);
Observable_1.Observable.prototype.mergeMap = mergeMap_1.mergeMap;
Observable_1.Observable.prototype.flatMap = mergeMap_1.mergeMap;
//# sourceMappingURL=mergeMap.js.map

/***/ },
/* 694 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
"use strict";
var Observable_1 = __webpack_require__(0);
var mergeMapTo_1 = __webpack_require__(410);
Observable_1.Observable.prototype.flatMapTo = mergeMapTo_1.mergeMapTo;
Observable_1.Observable.prototype.mergeMapTo = mergeMapTo_1.mergeMapTo;
//# sourceMappingURL=mergeMapTo.js.map

/***/ },
/* 695 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
"use strict";
var Observable_1 = __webpack_require__(0);
var mergeScan_1 = __webpack_require__(820);
Observable_1.Observable.prototype.mergeScan = mergeScan_1.mergeScan;
//# sourceMappingURL=mergeScan.js.map

/***/ },
/* 696 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
"use strict";
var Observable_1 = __webpack_require__(0);
var min_1 = __webpack_require__(821);
Observable_1.Observable.prototype.min = min_1.min;
//# sourceMappingURL=min.js.map

/***/ },
/* 697 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
"use strict";
var Observable_1 = __webpack_require__(0);
var multicast_1 = __webpack_require__(65);
Observable_1.Observable.prototype.multicast = multicast_1.multicast;
//# sourceMappingURL=multicast.js.map

/***/ },
/* 698 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
"use strict";
var Observable_1 = __webpack_require__(0);
var observeOn_1 = __webpack_require__(298);
Observable_1.Observable.prototype.observeOn = observeOn_1.observeOn;
//# sourceMappingURL=observeOn.js.map

/***/ },
/* 699 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
"use strict";
var Observable_1 = __webpack_require__(0);
var onErrorResumeNext_1 = __webpack_require__(411);
Observable_1.Observable.prototype.onErrorResumeNext = onErrorResumeNext_1.onErrorResumeNext;
//# sourceMappingURL=onErrorResumeNext.js.map

/***/ },
/* 700 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
"use strict";
var Observable_1 = __webpack_require__(0);
var pairwise_1 = __webpack_require__(822);
Observable_1.Observable.prototype.pairwise = pairwise_1.pairwise;
//# sourceMappingURL=pairwise.js.map

/***/ },
/* 701 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
"use strict";
var Observable_1 = __webpack_require__(0);
var partition_1 = __webpack_require__(823);
Observable_1.Observable.prototype.partition = partition_1.partition;
//# sourceMappingURL=partition.js.map

/***/ },
/* 702 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
"use strict";
var Observable_1 = __webpack_require__(0);
var pluck_1 = __webpack_require__(824);
Observable_1.Observable.prototype.pluck = pluck_1.pluck;
//# sourceMappingURL=pluck.js.map

/***/ },
/* 703 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
"use strict";
var Observable_1 = __webpack_require__(0);
var publish_1 = __webpack_require__(825);
Observable_1.Observable.prototype.publish = publish_1.publish;
//# sourceMappingURL=publish.js.map

/***/ },
/* 704 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
"use strict";
var Observable_1 = __webpack_require__(0);
var publishBehavior_1 = __webpack_require__(826);
Observable_1.Observable.prototype.publishBehavior = publishBehavior_1.publishBehavior;
//# sourceMappingURL=publishBehavior.js.map

/***/ },
/* 705 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
"use strict";
var Observable_1 = __webpack_require__(0);
var publishLast_1 = __webpack_require__(827);
Observable_1.Observable.prototype.publishLast = publishLast_1.publishLast;
//# sourceMappingURL=publishLast.js.map

/***/ },
/* 706 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
"use strict";
var Observable_1 = __webpack_require__(0);
var publishReplay_1 = __webpack_require__(828);
Observable_1.Observable.prototype.publishReplay = publishReplay_1.publishReplay;
//# sourceMappingURL=publishReplay.js.map

/***/ },
/* 707 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
"use strict";
var Observable_1 = __webpack_require__(0);
var race_1 = __webpack_require__(412);
Observable_1.Observable.prototype.race = race_1.race;
//# sourceMappingURL=race.js.map

/***/ },
/* 708 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
"use strict";
var Observable_1 = __webpack_require__(0);
var reduce_1 = __webpack_require__(122);
Observable_1.Observable.prototype.reduce = reduce_1.reduce;
//# sourceMappingURL=reduce.js.map

/***/ },
/* 709 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
"use strict";
var Observable_1 = __webpack_require__(0);
var repeat_1 = __webpack_require__(829);
Observable_1.Observable.prototype.repeat = repeat_1.repeat;
//# sourceMappingURL=repeat.js.map

/***/ },
/* 710 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
"use strict";
var Observable_1 = __webpack_require__(0);
var repeatWhen_1 = __webpack_require__(830);
Observable_1.Observable.prototype.repeatWhen = repeatWhen_1.repeatWhen;
//# sourceMappingURL=repeatWhen.js.map

/***/ },
/* 711 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
"use strict";
var Observable_1 = __webpack_require__(0);
var retry_1 = __webpack_require__(831);
Observable_1.Observable.prototype.retry = retry_1.retry;
//# sourceMappingURL=retry.js.map

/***/ },
/* 712 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
"use strict";
var Observable_1 = __webpack_require__(0);
var retryWhen_1 = __webpack_require__(832);
Observable_1.Observable.prototype.retryWhen = retryWhen_1.retryWhen;
//# sourceMappingURL=retryWhen.js.map

/***/ },
/* 713 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
"use strict";
var Observable_1 = __webpack_require__(0);
var sample_1 = __webpack_require__(833);
Observable_1.Observable.prototype.sample = sample_1.sample;
//# sourceMappingURL=sample.js.map

/***/ },
/* 714 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
"use strict";
var Observable_1 = __webpack_require__(0);
var sampleTime_1 = __webpack_require__(834);
Observable_1.Observable.prototype.sampleTime = sampleTime_1.sampleTime;
//# sourceMappingURL=sampleTime.js.map

/***/ },
/* 715 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
"use strict";
var Observable_1 = __webpack_require__(0);
var scan_1 = __webpack_require__(835);
Observable_1.Observable.prototype.scan = scan_1.scan;
//# sourceMappingURL=scan.js.map

/***/ },
/* 716 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
"use strict";
var Observable_1 = __webpack_require__(0);
var sequenceEqual_1 = __webpack_require__(836);
Observable_1.Observable.prototype.sequenceEqual = sequenceEqual_1.sequenceEqual;
//# sourceMappingURL=sequenceEqual.js.map

/***/ },
/* 717 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
"use strict";
var Observable_1 = __webpack_require__(0);
var share_1 = __webpack_require__(837);
Observable_1.Observable.prototype.share = share_1.share;
//# sourceMappingURL=share.js.map

/***/ },
/* 718 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
"use strict";
var Observable_1 = __webpack_require__(0);
var single_1 = __webpack_require__(838);
Observable_1.Observable.prototype.single = single_1.single;
//# sourceMappingURL=single.js.map

/***/ },
/* 719 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
"use strict";
var Observable_1 = __webpack_require__(0);
var skip_1 = __webpack_require__(839);
Observable_1.Observable.prototype.skip = skip_1.skip;
//# sourceMappingURL=skip.js.map

/***/ },
/* 720 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
"use strict";
var Observable_1 = __webpack_require__(0);
var skipUntil_1 = __webpack_require__(840);
Observable_1.Observable.prototype.skipUntil = skipUntil_1.skipUntil;
//# sourceMappingURL=skipUntil.js.map

/***/ },
/* 721 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
"use strict";
var Observable_1 = __webpack_require__(0);
var skipWhile_1 = __webpack_require__(841);
Observable_1.Observable.prototype.skipWhile = skipWhile_1.skipWhile;
//# sourceMappingURL=skipWhile.js.map

/***/ },
/* 722 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
"use strict";
var Observable_1 = __webpack_require__(0);
var startWith_1 = __webpack_require__(842);
Observable_1.Observable.prototype.startWith = startWith_1.startWith;
//# sourceMappingURL=startWith.js.map

/***/ },
/* 723 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
"use strict";
var Observable_1 = __webpack_require__(0);
var subscribeOn_1 = __webpack_require__(843);
Observable_1.Observable.prototype.subscribeOn = subscribeOn_1.subscribeOn;
//# sourceMappingURL=subscribeOn.js.map

/***/ },
/* 724 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
"use strict";
var Observable_1 = __webpack_require__(0);
var switch_1 = __webpack_require__(844);
Observable_1.Observable.prototype.switch = switch_1._switch;
Observable_1.Observable.prototype._switch = switch_1._switch;
//# sourceMappingURL=switch.js.map

/***/ },
/* 725 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
"use strict";
var Observable_1 = __webpack_require__(0);
var switchMap_1 = __webpack_require__(845);
Observable_1.Observable.prototype.switchMap = switchMap_1.switchMap;
//# sourceMappingURL=switchMap.js.map

/***/ },
/* 726 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
"use strict";
var Observable_1 = __webpack_require__(0);
var switchMapTo_1 = __webpack_require__(846);
Observable_1.Observable.prototype.switchMapTo = switchMapTo_1.switchMapTo;
//# sourceMappingURL=switchMapTo.js.map

/***/ },
/* 727 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
"use strict";
var Observable_1 = __webpack_require__(0);
var take_1 = __webpack_require__(847);
Observable_1.Observable.prototype.take = take_1.take;
//# sourceMappingURL=take.js.map

/***/ },
/* 728 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
"use strict";
var Observable_1 = __webpack_require__(0);
var takeLast_1 = __webpack_require__(848);
Observable_1.Observable.prototype.takeLast = takeLast_1.takeLast;
//# sourceMappingURL=takeLast.js.map

/***/ },
/* 729 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
"use strict";
var Observable_1 = __webpack_require__(0);
var takeUntil_1 = __webpack_require__(849);
Observable_1.Observable.prototype.takeUntil = takeUntil_1.takeUntil;
//# sourceMappingURL=takeUntil.js.map

/***/ },
/* 730 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
"use strict";
var Observable_1 = __webpack_require__(0);
var takeWhile_1 = __webpack_require__(850);
Observable_1.Observable.prototype.takeWhile = takeWhile_1.takeWhile;
//# sourceMappingURL=takeWhile.js.map

/***/ },
/* 731 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
"use strict";
var Observable_1 = __webpack_require__(0);
var throttle_1 = __webpack_require__(851);
Observable_1.Observable.prototype.throttle = throttle_1.throttle;
//# sourceMappingURL=throttle.js.map

/***/ },
/* 732 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
"use strict";
var Observable_1 = __webpack_require__(0);
var throttleTime_1 = __webpack_require__(852);
Observable_1.Observable.prototype.throttleTime = throttleTime_1.throttleTime;
//# sourceMappingURL=throttleTime.js.map

/***/ },
/* 733 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
"use strict";
var Observable_1 = __webpack_require__(0);
var timeInterval_1 = __webpack_require__(413);
Observable_1.Observable.prototype.timeInterval = timeInterval_1.timeInterval;
//# sourceMappingURL=timeInterval.js.map

/***/ },
/* 734 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
"use strict";
var Observable_1 = __webpack_require__(0);
var timeout_1 = __webpack_require__(853);
Observable_1.Observable.prototype.timeout = timeout_1.timeout;
//# sourceMappingURL=timeout.js.map

/***/ },
/* 735 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
"use strict";
var Observable_1 = __webpack_require__(0);
var timeoutWith_1 = __webpack_require__(854);
Observable_1.Observable.prototype.timeoutWith = timeoutWith_1.timeoutWith;
//# sourceMappingURL=timeoutWith.js.map

/***/ },
/* 736 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
"use strict";
var Observable_1 = __webpack_require__(0);
var timestamp_1 = __webpack_require__(414);
Observable_1.Observable.prototype.timestamp = timestamp_1.timestamp;
//# sourceMappingURL=timestamp.js.map

/***/ },
/* 737 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
"use strict";
var Observable_1 = __webpack_require__(0);
var toArray_1 = __webpack_require__(855);
Observable_1.Observable.prototype.toArray = toArray_1.toArray;
//# sourceMappingURL=toArray.js.map

/***/ },
/* 738 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
"use strict";
var Observable_1 = __webpack_require__(0);
var window_1 = __webpack_require__(856);
Observable_1.Observable.prototype.window = window_1.window;
//# sourceMappingURL=window.js.map

/***/ },
/* 739 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
"use strict";
var Observable_1 = __webpack_require__(0);
var windowCount_1 = __webpack_require__(857);
Observable_1.Observable.prototype.windowCount = windowCount_1.windowCount;
//# sourceMappingURL=windowCount.js.map

/***/ },
/* 740 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
"use strict";
var Observable_1 = __webpack_require__(0);
var windowTime_1 = __webpack_require__(858);
Observable_1.Observable.prototype.windowTime = windowTime_1.windowTime;
//# sourceMappingURL=windowTime.js.map

/***/ },
/* 741 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
"use strict";
var Observable_1 = __webpack_require__(0);
var windowToggle_1 = __webpack_require__(859);
Observable_1.Observable.prototype.windowToggle = windowToggle_1.windowToggle;
//# sourceMappingURL=windowToggle.js.map

/***/ },
/* 742 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
"use strict";
var Observable_1 = __webpack_require__(0);
var windowWhen_1 = __webpack_require__(860);
Observable_1.Observable.prototype.windowWhen = windowWhen_1.windowWhen;
//# sourceMappingURL=windowWhen.js.map

/***/ },
/* 743 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
"use strict";
var Observable_1 = __webpack_require__(0);
var withLatestFrom_1 = __webpack_require__(861);
Observable_1.Observable.prototype.withLatestFrom = withLatestFrom_1.withLatestFrom;
//# sourceMappingURL=withLatestFrom.js.map

/***/ },
/* 744 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
"use strict";
var Observable_1 = __webpack_require__(0);
var zip_1 = __webpack_require__(299);
Observable_1.Observable.prototype.zip = zip_1.zipProto;
//# sourceMappingURL=zip.js.map

/***/ },
/* 745 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
"use strict";
var Observable_1 = __webpack_require__(0);
var zipAll_1 = __webpack_require__(862);
Observable_1.Observable.prototype.zipAll = zipAll_1.zipAll;
//# sourceMappingURL=zipAll.js.map

/***/ },
/* 746 */,
/* 747 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
"use strict";
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var Observable_1 = __webpack_require__(0);
var tryCatch_1 = __webpack_require__(17);
var errorObject_1 = __webpack_require__(16);
var AsyncSubject_1 = __webpack_require__(118);
/**
 * We need this JSDoc comment for affecting ESDoc.
 * @extends {Ignored}
 * @hide true
 */
var BoundCallbackObservable = (function (_super) {
    __extends(BoundCallbackObservable, _super);
    function BoundCallbackObservable(callbackFunc, selector, args, scheduler) {
        _super.call(this);
        this.callbackFunc = callbackFunc;
        this.selector = selector;
        this.args = args;
        this.scheduler = scheduler;
    }
    /* tslint:enable:max-line-length */
    /**
     * Converts a callback API to a function that returns an Observable.
     *
     * <span class="informal">Give it a function `f` of type `f(x, callback)` and
     * it will return a function `g` that when called as `g(x)` will output an
     * Observable.</span>
     *
     * `bindCallback` is not an operator because its input and output are not
     * Observables. The input is a function `func` with some parameters, but the
     * last parameter must be a callback function that `func` calls when it is
     * done. The output of `bindCallback` is a function that takes the same
     * parameters as `func`, except the last one (the callback). When the output
     * function is called with arguments, it will return an Observable where the
     * results will be delivered to.
     *
     * @example <caption>Convert jQuery's getJSON to an Observable API</caption>
     * // Suppose we have jQuery.getJSON('/my/url', callback)
     * var getJSONAsObservable = Rx.Observable.bindCallback(jQuery.getJSON);
     * var result = getJSONAsObservable('/my/url');
     * result.subscribe(x => console.log(x), e => console.error(e));
     *
     * @see {@link bindNodeCallback}
     * @see {@link from}
     * @see {@link fromPromise}
     *
     * @param {function} func Function with a callback as the last parameter.
     * @param {function} selector A function which takes the arguments from the
     * callback and maps those a value to emit on the output Observable.
     * @param {Scheduler} [scheduler] The scheduler on which to schedule the
     * callbacks.
     * @return {function(...params: *): Observable} A function which returns the
     * Observable that delivers the same values the callback would deliver.
     * @static true
     * @name bindCallback
     * @owner Observable
     */
    BoundCallbackObservable.create = function (func, selector, scheduler) {
        if (selector === void 0) { selector = undefined; }
        return function () {
            var args = [];
            for (var _i = 0; _i < arguments.length; _i++) {
                args[_i - 0] = arguments[_i];
            }
            return new BoundCallbackObservable(func, selector, args, scheduler);
        };
    };
    BoundCallbackObservable.prototype._subscribe = function (subscriber) {
        var callbackFunc = this.callbackFunc;
        var args = this.args;
        var scheduler = this.scheduler;
        var subject = this.subject;
        if (!scheduler) {
            if (!subject) {
                subject = this.subject = new AsyncSubject_1.AsyncSubject();
                var handler = function handlerFn() {
                    var innerArgs = [];
                    for (var _i = 0; _i < arguments.length; _i++) {
                        innerArgs[_i - 0] = arguments[_i];
                    }
                    var source = handlerFn.source;
                    var selector = source.selector, subject = source.subject;
                    if (selector) {
                        var result_1 = tryCatch_1.tryCatch(selector).apply(this, innerArgs);
                        if (result_1 === errorObject_1.errorObject) {
                            subject.error(errorObject_1.errorObject.e);
                        }
                        else {
                            subject.next(result_1);
                            subject.complete();
                        }
                    }
                    else {
                        subject.next(innerArgs.length === 1 ? innerArgs[0] : innerArgs);
                        subject.complete();
                    }
                };
                // use named function instance to avoid closure.
                handler.source = this;
                var result = tryCatch_1.tryCatch(callbackFunc).apply(this, args.concat(handler));
                if (result === errorObject_1.errorObject) {
                    subject.error(errorObject_1.errorObject.e);
                }
            }
            return subject.subscribe(subscriber);
        }
        else {
            return scheduler.schedule(BoundCallbackObservable.dispatch, 0, { source: this, subscriber: subscriber });
        }
    };
    BoundCallbackObservable.dispatch = function (state) {
        var self = this;
        var source = state.source, subscriber = state.subscriber;
        var callbackFunc = source.callbackFunc, args = source.args, scheduler = source.scheduler;
        var subject = source.subject;
        if (!subject) {
            subject = source.subject = new AsyncSubject_1.AsyncSubject();
            var handler = function handlerFn() {
                var innerArgs = [];
                for (var _i = 0; _i < arguments.length; _i++) {
                    innerArgs[_i - 0] = arguments[_i];
                }
                var source = handlerFn.source;
                var selector = source.selector, subject = source.subject;
                if (selector) {
                    var result_2 = tryCatch_1.tryCatch(selector).apply(this, innerArgs);
                    if (result_2 === errorObject_1.errorObject) {
                        self.add(scheduler.schedule(dispatchError, 0, { err: errorObject_1.errorObject.e, subject: subject }));
                    }
                    else {
                        self.add(scheduler.schedule(dispatchNext, 0, { value: result_2, subject: subject }));
                    }
                }
                else {
                    var value = innerArgs.length === 1 ? innerArgs[0] : innerArgs;
                    self.add(scheduler.schedule(dispatchNext, 0, { value: value, subject: subject }));
                }
            };
            // use named function to pass values in without closure
            handler.source = source;
            var result = tryCatch_1.tryCatch(callbackFunc).apply(this, args.concat(handler));
            if (result === errorObject_1.errorObject) {
                subject.error(errorObject_1.errorObject.e);
            }
        }
        self.add(subject.subscribe(subscriber));
    };
    return BoundCallbackObservable;
}(Observable_1.Observable));
exports.BoundCallbackObservable = BoundCallbackObservable;
function dispatchNext(arg) {
    var value = arg.value, subject = arg.subject;
    subject.next(value);
    subject.complete();
}
function dispatchError(arg) {
    var err = arg.err, subject = arg.subject;
    subject.error(err);
}
//# sourceMappingURL=BoundCallbackObservable.js.map

/***/ },
/* 748 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
"use strict";
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var Observable_1 = __webpack_require__(0);
var tryCatch_1 = __webpack_require__(17);
var errorObject_1 = __webpack_require__(16);
var AsyncSubject_1 = __webpack_require__(118);
/**
 * We need this JSDoc comment for affecting ESDoc.
 * @extends {Ignored}
 * @hide true
 */
var BoundNodeCallbackObservable = (function (_super) {
    __extends(BoundNodeCallbackObservable, _super);
    function BoundNodeCallbackObservable(callbackFunc, selector, args, scheduler) {
        _super.call(this);
        this.callbackFunc = callbackFunc;
        this.selector = selector;
        this.args = args;
        this.scheduler = scheduler;
    }
    /* tslint:enable:max-line-length */
    /**
     * Converts a Node.js-style callback API to a function that returns an
     * Observable.
     *
     * <span class="informal">It's just like {@link bindCallback}, but the
     * callback is expected to be of type `callback(error, result)`.</span>
     *
     * `bindNodeCallback` is not an operator because its input and output are not
     * Observables. The input is a function `func` with some parameters, but the
     * last parameter must be a callback function that `func` calls when it is
     * done. The callback function is expected to follow Node.js conventions,
     * where the first argument to the callback is an error, while remaining
     * arguments are the callback result. The output of `bindNodeCallback` is a
     * function that takes the same parameters as `func`, except the last one (the
     * callback). When the output function is called with arguments, it will
     * return an Observable where the results will be delivered to.
     *
     * @example <caption>Read a file from the filesystem and get the data as an Observable</caption>
     * import * as fs from 'fs';
     * var readFileAsObservable = Rx.Observable.bindNodeCallback(fs.readFile);
     * var result = readFileAsObservable('./roadNames.txt', 'utf8');
     * result.subscribe(x => console.log(x), e => console.error(e));
     *
     * @see {@link bindCallback}
     * @see {@link from}
     * @see {@link fromPromise}
     *
     * @param {function} func Function with a callback as the last parameter.
     * @param {function} selector A function which takes the arguments from the
     * callback and maps those a value to emit on the output Observable.
     * @param {Scheduler} [scheduler] The scheduler on which to schedule the
     * callbacks.
     * @return {function(...params: *): Observable} A function which returns the
     * Observable that delivers the same values the Node.js callback would
     * deliver.
     * @static true
     * @name bindNodeCallback
     * @owner Observable
     */
    BoundNodeCallbackObservable.create = function (func, selector, scheduler) {
        if (selector === void 0) { selector = undefined; }
        return function () {
            var args = [];
            for (var _i = 0; _i < arguments.length; _i++) {
                args[_i - 0] = arguments[_i];
            }
            return new BoundNodeCallbackObservable(func, selector, args, scheduler);
        };
    };
    BoundNodeCallbackObservable.prototype._subscribe = function (subscriber) {
        var callbackFunc = this.callbackFunc;
        var args = this.args;
        var scheduler = this.scheduler;
        var subject = this.subject;
        if (!scheduler) {
            if (!subject) {
                subject = this.subject = new AsyncSubject_1.AsyncSubject();
                var handler = function handlerFn() {
                    var innerArgs = [];
                    for (var _i = 0; _i < arguments.length; _i++) {
                        innerArgs[_i - 0] = arguments[_i];
                    }
                    var source = handlerFn.source;
                    var selector = source.selector, subject = source.subject;
                    var err = innerArgs.shift();
                    if (err) {
                        subject.error(err);
                    }
                    else if (selector) {
                        var result_1 = tryCatch_1.tryCatch(selector).apply(this, innerArgs);
                        if (result_1 === errorObject_1.errorObject) {
                            subject.error(errorObject_1.errorObject.e);
                        }
                        else {
                            subject.next(result_1);
                            subject.complete();
                        }
                    }
                    else {
                        subject.next(innerArgs.length === 1 ? innerArgs[0] : innerArgs);
                        subject.complete();
                    }
                };
                // use named function instance to avoid closure.
                handler.source = this;
                var result = tryCatch_1.tryCatch(callbackFunc).apply(this, args.concat(handler));
                if (result === errorObject_1.errorObject) {
                    subject.error(errorObject_1.errorObject.e);
                }
            }
            return subject.subscribe(subscriber);
        }
        else {
            return scheduler.schedule(dispatch, 0, { source: this, subscriber: subscriber });
        }
    };
    return BoundNodeCallbackObservable;
}(Observable_1.Observable));
exports.BoundNodeCallbackObservable = BoundNodeCallbackObservable;
function dispatch(state) {
    var self = this;
    var source = state.source, subscriber = state.subscriber;
    // XXX: cast to `any` to access to the private field in `source`.
    var _a = source, callbackFunc = _a.callbackFunc, args = _a.args, scheduler = _a.scheduler;
    var subject = source.subject;
    if (!subject) {
        subject = source.subject = new AsyncSubject_1.AsyncSubject();
        var handler = function handlerFn() {
            var innerArgs = [];
            for (var _i = 0; _i < arguments.length; _i++) {
                innerArgs[_i - 0] = arguments[_i];
            }
            var source = handlerFn.source;
            var selector = source.selector, subject = source.subject;
            var err = innerArgs.shift();
            if (err) {
                subject.error(err);
            }
            else if (selector) {
                var result_2 = tryCatch_1.tryCatch(selector).apply(this, innerArgs);
                if (result_2 === errorObject_1.errorObject) {
                    self.add(scheduler.schedule(dispatchError, 0, { err: errorObject_1.errorObject.e, subject: subject }));
                }
                else {
                    self.add(scheduler.schedule(dispatchNext, 0, { value: result_2, subject: subject }));
                }
            }
            else {
                var value = innerArgs.length === 1 ? innerArgs[0] : innerArgs;
                self.add(scheduler.schedule(dispatchNext, 0, { value: value, subject: subject }));
            }
        };
        // use named function to pass values in without closure
        handler.source = source;
        var result = tryCatch_1.tryCatch(callbackFunc).apply(this, args.concat(handler));
        if (result === errorObject_1.errorObject) {
            subject.error(errorObject_1.errorObject.e);
        }
    }
    self.add(subject.subscribe(subscriber));
}
function dispatchNext(arg) {
    var value = arg.value, subject = arg.subject;
    subject.next(value);
    subject.complete();
}
function dispatchError(arg) {
    var err = arg.err, subject = arg.subject;
    subject.error(err);
}
//# sourceMappingURL=BoundNodeCallbackObservable.js.map

/***/ },
/* 749 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
"use strict";
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var Observable_1 = __webpack_require__(0);
var subscribeToResult_1 = __webpack_require__(7);
var OuterSubscriber_1 = __webpack_require__(6);
/**
 * We need this JSDoc comment for affecting ESDoc.
 * @extends {Ignored}
 * @hide true
 */
var DeferObservable = (function (_super) {
    __extends(DeferObservable, _super);
    function DeferObservable(observableFactory) {
        _super.call(this);
        this.observableFactory = observableFactory;
    }
    /**
     * Creates an Observable that, on subscribe, calls an Observable factory to
     * make an Observable for each new Observer.
     *
     * <span class="informal">Creates the Observable lazily, that is, only when it
     * is subscribed.
     * </span>
     *
     * <img src="./img/defer.png" width="100%">
     *
     * `defer` allows you to create the Observable only when the Observer
     * subscribes, and create a fresh Observable for each Observer. It waits until
     * an Observer subscribes to it, and then it generates an Observable,
     * typically with an Observable factory function. It does this afresh for each
     * subscriber, so although each subscriber may think it is subscribing to the
     * same Observable, in fact each subscriber gets its own individual
     * Observable.
     *
     * @example <caption>Subscribe to either an Observable of clicks or an Observable of interval, at random</caption>
     * var clicksOrInterval = Rx.Observable.defer(function () {
     *   if (Math.random() > 0.5) {
     *     return Rx.Observable.fromEvent(document, 'click');
     *   } else {
     *     return Rx.Observable.interval(1000);
     *   }
     * });
     * clicksOrInterval.subscribe(x => console.log(x));
     *
     * @see {@link create}
     *
     * @param {function(): Observable|Promise} observableFactory The Observable
     * factory function to invoke for each Observer that subscribes to the output
     * Observable. May also return a Promise, which will be converted on the fly
     * to an Observable.
     * @return {Observable} An Observable whose Observers' subscriptions trigger
     * an invocation of the given Observable factory function.
     * @static true
     * @name defer
     * @owner Observable
     */
    DeferObservable.create = function (observableFactory) {
        return new DeferObservable(observableFactory);
    };
    DeferObservable.prototype._subscribe = function (subscriber) {
        return new DeferSubscriber(subscriber, this.observableFactory);
    };
    return DeferObservable;
}(Observable_1.Observable));
exports.DeferObservable = DeferObservable;
var DeferSubscriber = (function (_super) {
    __extends(DeferSubscriber, _super);
    function DeferSubscriber(destination, factory) {
        _super.call(this, destination);
        this.factory = factory;
        this.tryDefer();
    }
    DeferSubscriber.prototype.tryDefer = function () {
        try {
            this._callFactory();
        }
        catch (err) {
            this._error(err);
        }
    };
    DeferSubscriber.prototype._callFactory = function () {
        var result = this.factory();
        if (result) {
            this.add(subscribeToResult_1.subscribeToResult(this, result));
        }
    };
    return DeferSubscriber;
}(OuterSubscriber_1.OuterSubscriber));
//# sourceMappingURL=DeferObservable.js.map

/***/ },
/* 750 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
"use strict";
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var Observable_1 = __webpack_require__(0);
/**
 * We need this JSDoc comment for affecting ESDoc.
 * @extends {Ignored}
 * @hide true
 */
var ErrorObservable = (function (_super) {
    __extends(ErrorObservable, _super);
    function ErrorObservable(error, scheduler) {
        _super.call(this);
        this.error = error;
        this.scheduler = scheduler;
    }
    /**
     * Creates an Observable that emits no items to the Observer and immediately
     * emits an error notification.
     *
     * <span class="informal">Just emits 'error', and nothing else.
     * </span>
     *
     * <img src="./img/throw.png" width="100%">
     *
     * This static operator is useful for creating a simple Observable that only
     * emits the error notification. It can be used for composing with other
     * Observables, such as in a {@link mergeMap}.
     *
     * @example <caption>Emit the number 7, then emit an error.</caption>
     * var result = Rx.Observable.throw(new Error('oops!')).startWith(7);
     * result.subscribe(x => console.log(x), e => console.error(e));
     *
     * @example <caption>Map and flattens numbers to the sequence 'a', 'b', 'c', but throw an error for 13</caption>
     * var interval = Rx.Observable.interval(1000);
     * var result = interval.mergeMap(x =>
     *   x === 13 ?
     *     Rx.Observable.throw('Thirteens are bad') :
     *     Rx.Observable.of('a', 'b', 'c')
     * );
     * result.subscribe(x => console.log(x), e => console.error(e));
     *
     * @see {@link create}
     * @see {@link empty}
     * @see {@link never}
     * @see {@link of}
     *
     * @param {any} error The particular Error to pass to the error notification.
     * @param {Scheduler} [scheduler] A {@link Scheduler} to use for scheduling
     * the emission of the error notification.
     * @return {Observable} An error Observable: emits only the error notification
     * using the given error argument.
     * @static true
     * @name throw
     * @owner Observable
     */
    ErrorObservable.create = function (error, scheduler) {
        return new ErrorObservable(error, scheduler);
    };
    ErrorObservable.dispatch = function (arg) {
        var error = arg.error, subscriber = arg.subscriber;
        subscriber.error(error);
    };
    ErrorObservable.prototype._subscribe = function (subscriber) {
        var error = this.error;
        var scheduler = this.scheduler;
        if (scheduler) {
            return scheduler.schedule(ErrorObservable.dispatch, 0, {
                error: error, subscriber: subscriber
            });
        }
        else {
            subscriber.error(error);
        }
    };
    return ErrorObservable;
}(Observable_1.Observable));
exports.ErrorObservable = ErrorObservable;
//# sourceMappingURL=ErrorObservable.js.map

/***/ },
/* 751 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
"use strict";
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var Observable_1 = __webpack_require__(0);
var EmptyObservable_1 = __webpack_require__(46);
var isArray_1 = __webpack_require__(32);
var subscribeToResult_1 = __webpack_require__(7);
var OuterSubscriber_1 = __webpack_require__(6);
/**
 * We need this JSDoc comment for affecting ESDoc.
 * @extends {Ignored}
 * @hide true
 */
var ForkJoinObservable = (function (_super) {
    __extends(ForkJoinObservable, _super);
    function ForkJoinObservable(sources, resultSelector) {
        _super.call(this);
        this.sources = sources;
        this.resultSelector = resultSelector;
    }
    /* tslint:enable:max-line-length */
    /**
     * @param sources
     * @return {any}
     * @static true
     * @name forkJoin
     * @owner Observable
     */
    ForkJoinObservable.create = function () {
        var sources = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            sources[_i - 0] = arguments[_i];
        }
        if (sources === null || arguments.length === 0) {
            return new EmptyObservable_1.EmptyObservable();
        }
        var resultSelector = null;
        if (typeof sources[sources.length - 1] === 'function') {
            resultSelector = sources.pop();
        }
        // if the first and only other argument besides the resultSelector is an array
        // assume it's been called with `forkJoin([obs1, obs2, obs3], resultSelector)`
        if (sources.length === 1 && isArray_1.isArray(sources[0])) {
            sources = sources[0];
        }
        if (sources.length === 0) {
            return new EmptyObservable_1.EmptyObservable();
        }
        return new ForkJoinObservable(sources, resultSelector);
    };
    ForkJoinObservable.prototype._subscribe = function (subscriber) {
        return new ForkJoinSubscriber(subscriber, this.sources, this.resultSelector);
    };
    return ForkJoinObservable;
}(Observable_1.Observable));
exports.ForkJoinObservable = ForkJoinObservable;
/**
 * We need this JSDoc comment for affecting ESDoc.
 * @ignore
 * @extends {Ignored}
 */
var ForkJoinSubscriber = (function (_super) {
    __extends(ForkJoinSubscriber, _super);
    function ForkJoinSubscriber(destination, sources, resultSelector) {
        _super.call(this, destination);
        this.sources = sources;
        this.resultSelector = resultSelector;
        this.completed = 0;
        this.haveValues = 0;
        var len = sources.length;
        this.total = len;
        this.values = new Array(len);
        for (var i = 0; i < len; i++) {
            var source = sources[i];
            var innerSubscription = subscribeToResult_1.subscribeToResult(this, source, null, i);
            if (innerSubscription) {
                innerSubscription.outerIndex = i;
                this.add(innerSubscription);
            }
        }
    }
    ForkJoinSubscriber.prototype.notifyNext = function (outerValue, innerValue, outerIndex, innerIndex, innerSub) {
        this.values[outerIndex] = innerValue;
        if (!innerSub._hasValue) {
            innerSub._hasValue = true;
            this.haveValues++;
        }
    };
    ForkJoinSubscriber.prototype.notifyComplete = function (innerSub) {
        var destination = this.destination;
        var _a = this, haveValues = _a.haveValues, resultSelector = _a.resultSelector, values = _a.values;
        var len = values.length;
        if (!innerSub._hasValue) {
            destination.complete();
            return;
        }
        this.completed++;
        if (this.completed !== len) {
            return;
        }
        if (haveValues === len) {
            var value = resultSelector ? resultSelector.apply(this, values) : values;
            destination.next(value);
        }
        destination.complete();
    };
    return ForkJoinSubscriber;
}(OuterSubscriber_1.OuterSubscriber));
//# sourceMappingURL=ForkJoinObservable.js.map

/***/ },
/* 752 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
"use strict";
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var Observable_1 = __webpack_require__(0);
var tryCatch_1 = __webpack_require__(17);
var isFunction_1 = __webpack_require__(301);
var errorObject_1 = __webpack_require__(16);
var Subscription_1 = __webpack_require__(15);
function isNodeStyleEventEmmitter(sourceObj) {
    return !!sourceObj && typeof sourceObj.addListener === 'function' && typeof sourceObj.removeListener === 'function';
}
function isJQueryStyleEventEmitter(sourceObj) {
    return !!sourceObj && typeof sourceObj.on === 'function' && typeof sourceObj.off === 'function';
}
function isNodeList(sourceObj) {
    return !!sourceObj && sourceObj.toString() === '[object NodeList]';
}
function isHTMLCollection(sourceObj) {
    return !!sourceObj && sourceObj.toString() === '[object HTMLCollection]';
}
function isEventTarget(sourceObj) {
    return !!sourceObj && typeof sourceObj.addEventListener === 'function' && typeof sourceObj.removeEventListener === 'function';
}
/**
 * We need this JSDoc comment for affecting ESDoc.
 * @extends {Ignored}
 * @hide true
 */
var FromEventObservable = (function (_super) {
    __extends(FromEventObservable, _super);
    function FromEventObservable(sourceObj, eventName, selector, options) {
        _super.call(this);
        this.sourceObj = sourceObj;
        this.eventName = eventName;
        this.selector = selector;
        this.options = options;
    }
    /* tslint:enable:max-line-length */
    /**
     * Creates an Observable that emits events of a specific type coming from the
     * given event target.
     *
     * <span class="informal">Creates an Observable from DOM events, or Node
     * EventEmitter events or others.</span>
     *
     * <img src="./img/fromEvent.png" width="100%">
     *
     * Creates an Observable by attaching an event listener to an "event target",
     * which may be an object with `addEventListener` and `removeEventListener`,
     * a Node.js EventEmitter, a jQuery style EventEmitter, a NodeList from the
     * DOM, or an HTMLCollection from the DOM. The event handler is attached when
     * the output Observable is subscribed, and removed when the Subscription is
     * unsubscribed.
     *
     * @example <caption>Emits clicks happening on the DOM document</caption>
     * var clicks = Rx.Observable.fromEvent(document, 'click');
     * clicks.subscribe(x => console.log(x));
     *
     * @see {@link from}
     * @see {@link fromEventPattern}
     *
     * @param {EventTargetLike} target The DOMElement, event target, Node.js
     * EventEmitter, NodeList or HTMLCollection to attach the event handler to.
     * @param {string} eventName The event name of interest, being emitted by the
     * `target`.
     * @parm {EventListenerOptions} [options] Options to pass through to addEventListener
     * @param {SelectorMethodSignature<T>} [selector] An optional function to
     * post-process results. It takes the arguments from the event handler and
     * should return a single value.
     * @return {Observable<T>}
     * @static true
     * @name fromEvent
     * @owner Observable
     */
    FromEventObservable.create = function (target, eventName, options, selector) {
        if (isFunction_1.isFunction(options)) {
            selector = options;
            options = undefined;
        }
        return new FromEventObservable(target, eventName, selector, options);
    };
    FromEventObservable.setupSubscription = function (sourceObj, eventName, handler, subscriber, options) {
        var unsubscribe;
        if (isNodeList(sourceObj) || isHTMLCollection(sourceObj)) {
            for (var i = 0, len = sourceObj.length; i < len; i++) {
                FromEventObservable.setupSubscription(sourceObj[i], eventName, handler, subscriber, options);
            }
        }
        else if (isEventTarget(sourceObj)) {
            var source_1 = sourceObj;
            sourceObj.addEventListener(eventName, handler, options);
            unsubscribe = function () { return source_1.removeEventListener(eventName, handler); };
        }
        else if (isJQueryStyleEventEmitter(sourceObj)) {
            var source_2 = sourceObj;
            sourceObj.on(eventName, handler);
            unsubscribe = function () { return source_2.off(eventName, handler); };
        }
        else if (isNodeStyleEventEmmitter(sourceObj)) {
            var source_3 = sourceObj;
            sourceObj.addListener(eventName, handler);
            unsubscribe = function () { return source_3.removeListener(eventName, handler); };
        }
        subscriber.add(new Subscription_1.Subscription(unsubscribe));
    };
    FromEventObservable.prototype._subscribe = function (subscriber) {
        var sourceObj = this.sourceObj;
        var eventName = this.eventName;
        var options = this.options;
        var selector = this.selector;
        var handler = selector ? function () {
            var args = [];
            for (var _i = 0; _i < arguments.length; _i++) {
                args[_i - 0] = arguments[_i];
            }
            var result = tryCatch_1.tryCatch(selector).apply(void 0, args);
            if (result === errorObject_1.errorObject) {
                subscriber.error(errorObject_1.errorObject.e);
            }
            else {
                subscriber.next(result);
            }
        } : function (e) { return subscriber.next(e); };
        FromEventObservable.setupSubscription(sourceObj, eventName, handler, subscriber, options);
    };
    return FromEventObservable;
}(Observable_1.Observable));
exports.FromEventObservable = FromEventObservable;
//# sourceMappingURL=FromEventObservable.js.map

/***/ },
/* 753 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
"use strict";
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var Observable_1 = __webpack_require__(0);
var Subscription_1 = __webpack_require__(15);
/**
 * We need this JSDoc comment for affecting ESDoc.
 * @extends {Ignored}
 * @hide true
 */
var FromEventPatternObservable = (function (_super) {
    __extends(FromEventPatternObservable, _super);
    function FromEventPatternObservable(addHandler, removeHandler, selector) {
        _super.call(this);
        this.addHandler = addHandler;
        this.removeHandler = removeHandler;
        this.selector = selector;
    }
    /**
     * Creates an Observable from an API based on addHandler/removeHandler
     * functions.
     *
     * <span class="informal">Converts any addHandler/removeHandler API to an
     * Observable.</span>
     *
     * <img src="./img/fromEventPattern.png" width="100%">
     *
     * Creates an Observable by using the `addHandler` and `removeHandler`
     * functions to add and remove the handlers, with an optional selector
     * function to project the event arguments to a result. The `addHandler` is
     * called when the output Observable is subscribed, and `removeHandler` is
     * called when the Subscription is unsubscribed.
     *
     * @example <caption>Emits clicks happening on the DOM document</caption>
     * function addClickHandler(handler) {
     *   document.addEventListener('click', handler);
     * }
     *
     * function removeClickHandler(handler) {
     *   document.removeEventListener('click', handler);
     * }
     *
     * var clicks = Rx.Observable.fromEventPattern(
     *   addClickHandler,
     *   removeClickHandler
     * );
     * clicks.subscribe(x => console.log(x));
     *
     * @see {@link from}
     * @see {@link fromEvent}
     *
     * @param {function(handler: Function): any} addHandler A function that takes
     * a `handler` function as argument and attaches it somehow to the actual
     * source of events.
     * @param {function(handler: Function): void} removeHandler A function that
     * takes a `handler` function as argument and removes it in case it was
     * previously attached using `addHandler`.
     * @param {function(...args: any): T} [selector] An optional function to
     * post-process results. It takes the arguments from the event handler and
     * should return a single value.
     * @return {Observable<T>}
     * @static true
     * @name fromEventPattern
     * @owner Observable
     */
    FromEventPatternObservable.create = function (addHandler, removeHandler, selector) {
        return new FromEventPatternObservable(addHandler, removeHandler, selector);
    };
    FromEventPatternObservable.prototype._subscribe = function (subscriber) {
        var _this = this;
        var removeHandler = this.removeHandler;
        var handler = !!this.selector ? function () {
            var args = [];
            for (var _i = 0; _i < arguments.length; _i++) {
                args[_i - 0] = arguments[_i];
            }
            _this._callSelector(subscriber, args);
        } : function (e) { subscriber.next(e); };
        this._callAddHandler(handler, subscriber);
        subscriber.add(new Subscription_1.Subscription(function () {
            //TODO: determine whether or not to forward to error handler
            removeHandler(handler);
        }));
    };
    FromEventPatternObservable.prototype._callSelector = function (subscriber, args) {
        try {
            var result = this.selector.apply(this, args);
            subscriber.next(result);
        }
        catch (e) {
            subscriber.error(e);
        }
    };
    FromEventPatternObservable.prototype._callAddHandler = function (handler, errorSubscriber) {
        try {
            this.addHandler(handler);
        }
        catch (e) {
            errorSubscriber.error(e);
        }
    };
    return FromEventPatternObservable;
}(Observable_1.Observable));
exports.FromEventPatternObservable = FromEventPatternObservable;
//# sourceMappingURL=FromEventPatternObservable.js.map

/***/ },
/* 754 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
"use strict";
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var Observable_1 = __webpack_require__(0);
var isScheduler_1 = __webpack_require__(47);
var selfSelector = function (value) { return value; };
/**
 * We need this JSDoc comment for affecting ESDoc.
 * @extends {Ignored}
 * @hide true
 */
var GenerateObservable = (function (_super) {
    __extends(GenerateObservable, _super);
    function GenerateObservable(initialState, condition, iterate, resultSelector, scheduler) {
        _super.call(this);
        this.initialState = initialState;
        this.condition = condition;
        this.iterate = iterate;
        this.resultSelector = resultSelector;
        this.scheduler = scheduler;
    }
    GenerateObservable.create = function (initialStateOrOptions, condition, iterate, resultSelectorOrObservable, scheduler) {
        if (arguments.length == 1) {
            return new GenerateObservable(initialStateOrOptions.initialState, initialStateOrOptions.condition, initialStateOrOptions.iterate, initialStateOrOptions.resultSelector || selfSelector, initialStateOrOptions.scheduler);
        }
        if (resultSelectorOrObservable === undefined || isScheduler_1.isScheduler(resultSelectorOrObservable)) {
            return new GenerateObservable(initialStateOrOptions, condition, iterate, selfSelector, resultSelectorOrObservable);
        }
        return new GenerateObservable(initialStateOrOptions, condition, iterate, resultSelectorOrObservable, scheduler);
    };
    GenerateObservable.prototype._subscribe = function (subscriber) {
        var state = this.initialState;
        if (this.scheduler) {
            return this.scheduler.schedule(GenerateObservable.dispatch, 0, {
                subscriber: subscriber,
                iterate: this.iterate,
                condition: this.condition,
                resultSelector: this.resultSelector,
                state: state });
        }
        var _a = this, condition = _a.condition, resultSelector = _a.resultSelector, iterate = _a.iterate;
        do {
            if (condition) {
                var conditionResult = void 0;
                try {
                    conditionResult = condition(state);
                }
                catch (err) {
                    subscriber.error(err);
                    return;
                }
                if (!conditionResult) {
                    subscriber.complete();
                    break;
                }
            }
            var value = void 0;
            try {
                value = resultSelector(state);
            }
            catch (err) {
                subscriber.error(err);
                return;
            }
            subscriber.next(value);
            if (subscriber.closed) {
                break;
            }
            try {
                state = iterate(state);
            }
            catch (err) {
                subscriber.error(err);
                return;
            }
        } while (true);
    };
    GenerateObservable.dispatch = function (state) {
        var subscriber = state.subscriber, condition = state.condition;
        if (subscriber.closed) {
            return;
        }
        if (state.needIterate) {
            try {
                state.state = state.iterate(state.state);
            }
            catch (err) {
                subscriber.error(err);
                return;
            }
        }
        else {
            state.needIterate = true;
        }
        if (condition) {
            var conditionResult = void 0;
            try {
                conditionResult = condition(state.state);
            }
            catch (err) {
                subscriber.error(err);
                return;
            }
            if (!conditionResult) {
                subscriber.complete();
                return;
            }
            if (subscriber.closed) {
                return;
            }
        }
        var value;
        try {
            value = state.resultSelector(state.state);
        }
        catch (err) {
            subscriber.error(err);
            return;
        }
        if (subscriber.closed) {
            return;
        }
        subscriber.next(value);
        if (subscriber.closed) {
            return;
        }
        return this.schedule(state);
    };
    return GenerateObservable;
}(Observable_1.Observable));
exports.GenerateObservable = GenerateObservable;
//# sourceMappingURL=GenerateObservable.js.map

/***/ },
/* 755 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
"use strict";
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var Observable_1 = __webpack_require__(0);
var subscribeToResult_1 = __webpack_require__(7);
var OuterSubscriber_1 = __webpack_require__(6);
/**
 * We need this JSDoc comment for affecting ESDoc.
 * @extends {Ignored}
 * @hide true
 */
var IfObservable = (function (_super) {
    __extends(IfObservable, _super);
    function IfObservable(condition, thenSource, elseSource) {
        _super.call(this);
        this.condition = condition;
        this.thenSource = thenSource;
        this.elseSource = elseSource;
    }
    IfObservable.create = function (condition, thenSource, elseSource) {
        return new IfObservable(condition, thenSource, elseSource);
    };
    IfObservable.prototype._subscribe = function (subscriber) {
        var _a = this, condition = _a.condition, thenSource = _a.thenSource, elseSource = _a.elseSource;
        return new IfSubscriber(subscriber, condition, thenSource, elseSource);
    };
    return IfObservable;
}(Observable_1.Observable));
exports.IfObservable = IfObservable;
var IfSubscriber = (function (_super) {
    __extends(IfSubscriber, _super);
    function IfSubscriber(destination, condition, thenSource, elseSource) {
        _super.call(this, destination);
        this.condition = condition;
        this.thenSource = thenSource;
        this.elseSource = elseSource;
        this.tryIf();
    }
    IfSubscriber.prototype.tryIf = function () {
        var _a = this, condition = _a.condition, thenSource = _a.thenSource, elseSource = _a.elseSource;
        var result;
        try {
            result = condition();
            var source = result ? thenSource : elseSource;
            if (source) {
                this.add(subscribeToResult_1.subscribeToResult(this, source));
            }
            else {
                this._complete();
            }
        }
        catch (err) {
            this._error(err);
        }
    };
    return IfSubscriber;
}(OuterSubscriber_1.OuterSubscriber));
//# sourceMappingURL=IfObservable.js.map

/***/ },
/* 756 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
"use strict";
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var isNumeric_1 = __webpack_require__(302);
var Observable_1 = __webpack_require__(0);
var async_1 = __webpack_require__(23);
/**
 * We need this JSDoc comment for affecting ESDoc.
 * @extends {Ignored}
 * @hide true
 */
var IntervalObservable = (function (_super) {
    __extends(IntervalObservable, _super);
    function IntervalObservable(period, scheduler) {
        if (period === void 0) { period = 0; }
        if (scheduler === void 0) { scheduler = async_1.async; }
        _super.call(this);
        this.period = period;
        this.scheduler = scheduler;
        if (!isNumeric_1.isNumeric(period) || period < 0) {
            this.period = 0;
        }
        if (!scheduler || typeof scheduler.schedule !== 'function') {
            this.scheduler = async_1.async;
        }
    }
    /**
     * Creates an Observable that emits sequential numbers every specified
     * interval of time, on a specified Scheduler.
     *
     * <span class="informal">Emits incremental numbers periodically in time.
     * </span>
     *
     * <img src="./img/interval.png" width="100%">
     *
     * `interval` returns an Observable that emits an infinite sequence of
     * ascending integers, with a constant interval of time of your choosing
     * between those emissions. The first emission is not sent immediately, but
     * only after the first period has passed. By default, this operator uses the
     * `async` Scheduler to provide a notion of time, but you may pass any
     * Scheduler to it.
     *
     * @example <caption>Emits ascending numbers, one every second (1000ms)</caption>
     * var numbers = Rx.Observable.interval(1000);
     * numbers.subscribe(x => console.log(x));
     *
     * @see {@link timer}
     * @see {@link delay}
     *
     * @param {number} [period=0] The interval size in milliseconds (by default)
     * or the time unit determined by the scheduler's clock.
     * @param {Scheduler} [scheduler=async] The Scheduler to use for scheduling
     * the emission of values, and providing a notion of "time".
     * @return {Observable} An Observable that emits a sequential number each time
     * interval.
     * @static true
     * @name interval
     * @owner Observable
     */
    IntervalObservable.create = function (period, scheduler) {
        if (period === void 0) { period = 0; }
        if (scheduler === void 0) { scheduler = async_1.async; }
        return new IntervalObservable(period, scheduler);
    };
    IntervalObservable.dispatch = function (state) {
        var index = state.index, subscriber = state.subscriber, period = state.period;
        subscriber.next(index);
        if (subscriber.closed) {
            return;
        }
        state.index += 1;
        this.schedule(state, period);
    };
    IntervalObservable.prototype._subscribe = function (subscriber) {
        var index = 0;
        var period = this.period;
        var scheduler = this.scheduler;
        subscriber.add(scheduler.schedule(IntervalObservable.dispatch, period, {
            index: index, subscriber: subscriber, period: period
        }));
    };
    return IntervalObservable;
}(Observable_1.Observable));
exports.IntervalObservable = IntervalObservable;
//# sourceMappingURL=IntervalObservable.js.map

/***/ },
/* 757 */,
/* 758 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
"use strict";
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var Observable_1 = __webpack_require__(0);
var noop_1 = __webpack_require__(424);
/**
 * We need this JSDoc comment for affecting ESDoc.
 * @extends {Ignored}
 * @hide true
 */
var NeverObservable = (function (_super) {
    __extends(NeverObservable, _super);
    function NeverObservable() {
        _super.call(this);
    }
    /**
     * Creates an Observable that emits no items to the Observer.
     *
     * <span class="informal">An Observable that never emits anything.</span>
     *
     * <img src="./img/never.png" width="100%">
     *
     * This static operator is useful for creating a simple Observable that emits
     * neither values nor errors nor the completion notification. It can be used
     * for testing purposes or for composing with other Observables. Please not
     * that by never emitting a complete notification, this Observable keeps the
     * subscription from being disposed automatically. Subscriptions need to be
     * manually disposed.
     *
     * @example <caption>Emit the number 7, then never emit anything else (not even complete).</caption>
     * function info() {
     *   console.log('Will not be called');
     * }
     * var result = Rx.Observable.never().startWith(7);
     * result.subscribe(x => console.log(x), info, info);
     *
     * @see {@link create}
     * @see {@link empty}
     * @see {@link of}
     * @see {@link throw}
     *
     * @return {Observable} A "never" Observable: never emits anything.
     * @static true
     * @name never
     * @owner Observable
     */
    NeverObservable.create = function () {
        return new NeverObservable();
    };
    NeverObservable.prototype._subscribe = function (subscriber) {
        noop_1.noop();
    };
    return NeverObservable;
}(Observable_1.Observable));
exports.NeverObservable = NeverObservable;
//# sourceMappingURL=NeverObservable.js.map

/***/ },
/* 759 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
"use strict";
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var Observable_1 = __webpack_require__(0);
function dispatch(state) {
    var obj = state.obj, keys = state.keys, length = state.length, index = state.index, subscriber = state.subscriber;
    if (index === length) {
        subscriber.complete();
        return;
    }
    var key = keys[index];
    subscriber.next([key, obj[key]]);
    state.index = index + 1;
    this.schedule(state);
}
/**
 * We need this JSDoc comment for affecting ESDoc.
 * @extends {Ignored}
 * @hide true
 */
var PairsObservable = (function (_super) {
    __extends(PairsObservable, _super);
    function PairsObservable(obj, scheduler) {
        _super.call(this);
        this.obj = obj;
        this.scheduler = scheduler;
        this.keys = Object.keys(obj);
    }
    /**
     * Convert an object into an observable sequence of [key, value] pairs
     * using an optional Scheduler to enumerate the object.
     *
     * @example <caption>Converts a javascript object to an Observable</caption>
     * var obj = {
     *   foo: 42,
     *   bar: 56,
     *   baz: 78
     * };
     *
     * var source = Rx.Observable.pairs(obj);
     *
     * var subscription = source.subscribe(
     *   function (x) {
     *     console.log('Next: %s', x);
     *   },
     *   function (err) {
     *     console.log('Error: %s', err);
     *   },
     *   function () {
     *     console.log('Completed');
     *   });
     *
     * @param {Object} obj The object to inspect and turn into an
     * Observable sequence.
     * @param {Scheduler} [scheduler] An optional Scheduler to run the
     * enumeration of the input sequence on.
     * @returns {(Observable<Array<string | T>>)} An observable sequence of
     * [key, value] pairs from the object.
     */
    PairsObservable.create = function (obj, scheduler) {
        return new PairsObservable(obj, scheduler);
    };
    PairsObservable.prototype._subscribe = function (subscriber) {
        var _a = this, keys = _a.keys, scheduler = _a.scheduler;
        var length = keys.length;
        if (scheduler) {
            return scheduler.schedule(dispatch, 0, {
                obj: this.obj, keys: keys, length: length, index: 0, subscriber: subscriber
            });
        }
        else {
            for (var idx = 0; idx < length; idx++) {
                var key = keys[idx];
                subscriber.next([key, this.obj[key]]);
            }
            subscriber.complete();
        }
    };
    return PairsObservable;
}(Observable_1.Observable));
exports.PairsObservable = PairsObservable;
//# sourceMappingURL=PairsObservable.js.map

/***/ },
/* 760 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
"use strict";
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var Observable_1 = __webpack_require__(0);
/**
 * We need this JSDoc comment for affecting ESDoc.
 * @extends {Ignored}
 * @hide true
 */
var RangeObservable = (function (_super) {
    __extends(RangeObservable, _super);
    function RangeObservable(start, count, scheduler) {
        _super.call(this);
        this.start = start;
        this._count = count;
        this.scheduler = scheduler;
    }
    /**
     * Creates an Observable that emits a sequence of numbers within a specified
     * range.
     *
     * <span class="informal">Emits a sequence of numbers in a range.</span>
     *
     * <img src="./img/range.png" width="100%">
     *
     * `range` operator emits a range of sequential integers, in order, where you
     * select the `start` of the range and its `length`. By default, uses no
     * Scheduler and just delivers the notifications synchronously, but may use
     * an optional Scheduler to regulate those deliveries.
     *
     * @example <caption>Emits the numbers 1 to 10</caption>
     * var numbers = Rx.Observable.range(1, 10);
     * numbers.subscribe(x => console.log(x));
     *
     * @see {@link timer}
     * @see {@link interval}
     *
     * @param {number} [start=0] The value of the first integer in the sequence.
     * @param {number} [count=0] The number of sequential integers to generate.
     * @param {Scheduler} [scheduler] A {@link Scheduler} to use for scheduling
     * the emissions of the notifications.
     * @return {Observable} An Observable of numbers that emits a finite range of
     * sequential integers.
     * @static true
     * @name range
     * @owner Observable
     */
    RangeObservable.create = function (start, count, scheduler) {
        if (start === void 0) { start = 0; }
        if (count === void 0) { count = 0; }
        return new RangeObservable(start, count, scheduler);
    };
    RangeObservable.dispatch = function (state) {
        var start = state.start, index = state.index, count = state.count, subscriber = state.subscriber;
        if (index >= count) {
            subscriber.complete();
            return;
        }
        subscriber.next(start);
        if (subscriber.closed) {
            return;
        }
        state.index = index + 1;
        state.start = start + 1;
        this.schedule(state);
    };
    RangeObservable.prototype._subscribe = function (subscriber) {
        var index = 0;
        var start = this.start;
        var count = this._count;
        var scheduler = this.scheduler;
        if (scheduler) {
            return scheduler.schedule(RangeObservable.dispatch, 0, {
                index: index, count: count, start: start, subscriber: subscriber
            });
        }
        else {
            do {
                if (index++ >= count) {
                    subscriber.complete();
                    break;
                }
                subscriber.next(start++);
                if (subscriber.closed) {
                    break;
                }
            } while (true);
        }
    };
    return RangeObservable;
}(Observable_1.Observable));
exports.RangeObservable = RangeObservable;
//# sourceMappingURL=RangeObservable.js.map

/***/ },
/* 761 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
"use strict";
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var Observable_1 = __webpack_require__(0);
var asap_1 = __webpack_require__(417);
var isNumeric_1 = __webpack_require__(302);
/**
 * We need this JSDoc comment for affecting ESDoc.
 * @extends {Ignored}
 * @hide true
 */
var SubscribeOnObservable = (function (_super) {
    __extends(SubscribeOnObservable, _super);
    function SubscribeOnObservable(source, delayTime, scheduler) {
        if (delayTime === void 0) { delayTime = 0; }
        if (scheduler === void 0) { scheduler = asap_1.asap; }
        _super.call(this);
        this.source = source;
        this.delayTime = delayTime;
        this.scheduler = scheduler;
        if (!isNumeric_1.isNumeric(delayTime) || delayTime < 0) {
            this.delayTime = 0;
        }
        if (!scheduler || typeof scheduler.schedule !== 'function') {
            this.scheduler = asap_1.asap;
        }
    }
    SubscribeOnObservable.create = function (source, delay, scheduler) {
        if (delay === void 0) { delay = 0; }
        if (scheduler === void 0) { scheduler = asap_1.asap; }
        return new SubscribeOnObservable(source, delay, scheduler);
    };
    SubscribeOnObservable.dispatch = function (arg) {
        var source = arg.source, subscriber = arg.subscriber;
        return source.subscribe(subscriber);
    };
    SubscribeOnObservable.prototype._subscribe = function (subscriber) {
        var delay = this.delayTime;
        var source = this.source;
        var scheduler = this.scheduler;
        return scheduler.schedule(SubscribeOnObservable.dispatch, delay, {
            source: source, subscriber: subscriber
        });
    };
    return SubscribeOnObservable;
}(Observable_1.Observable));
exports.SubscribeOnObservable = SubscribeOnObservable;
//# sourceMappingURL=SubscribeOnObservable.js.map

/***/ },
/* 762 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
"use strict";
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var isNumeric_1 = __webpack_require__(302);
var Observable_1 = __webpack_require__(0);
var async_1 = __webpack_require__(23);
var isScheduler_1 = __webpack_require__(47);
var isDate_1 = __webpack_require__(126);
/**
 * We need this JSDoc comment for affecting ESDoc.
 * @extends {Ignored}
 * @hide true
 */
var TimerObservable = (function (_super) {
    __extends(TimerObservable, _super);
    function TimerObservable(dueTime, period, scheduler) {
        if (dueTime === void 0) { dueTime = 0; }
        _super.call(this);
        this.period = -1;
        this.dueTime = 0;
        if (isNumeric_1.isNumeric(period)) {
            this.period = Number(period) < 1 && 1 || Number(period);
        }
        else if (isScheduler_1.isScheduler(period)) {
            scheduler = period;
        }
        if (!isScheduler_1.isScheduler(scheduler)) {
            scheduler = async_1.async;
        }
        this.scheduler = scheduler;
        this.dueTime = isDate_1.isDate(dueTime) ?
            (+dueTime - this.scheduler.now()) :
            dueTime;
    }
    /**
     * Creates an Observable that starts emitting after an `initialDelay` and
     * emits ever increasing numbers after each `period` of time thereafter.
     *
     * <span class="informal">Its like {@link interval}, but you can specify when
     * should the emissions start.</span>
     *
     * <img src="./img/timer.png" width="100%">
     *
     * `timer` returns an Observable that emits an infinite sequence of ascending
     * integers, with a constant interval of time, `period` of your choosing
     * between those emissions. The first emission happens after the specified
     * `initialDelay`. The initial delay may be a {@link Date}. By default, this
     * operator uses the `async` Scheduler to provide a notion of time, but you
     * may pass any Scheduler to it. If `period` is not specified, the output
     * Observable emits only one value, `0`. Otherwise, it emits an infinite
     * sequence.
     *
     * @example <caption>Emits ascending numbers, one every second (1000ms), starting after 3 seconds</caption>
     * var numbers = Rx.Observable.timer(3000, 1000);
     * numbers.subscribe(x => console.log(x));
     *
     * @example <caption>Emits one number after five seconds</caption>
     * var numbers = Rx.Observable.timer(5000);
     * numbers.subscribe(x => console.log(x));
     *
     * @see {@link interval}
     * @see {@link delay}
     *
     * @param {number|Date} initialDelay The initial delay time to wait before
     * emitting the first value of `0`.
     * @param {number} [period] The period of time between emissions of the
     * subsequent numbers.
     * @param {Scheduler} [scheduler=async] The Scheduler to use for scheduling
     * the emission of values, and providing a notion of "time".
     * @return {Observable} An Observable that emits a `0` after the
     * `initialDelay` and ever increasing numbers after each `period` of time
     * thereafter.
     * @static true
     * @name timer
     * @owner Observable
     */
    TimerObservable.create = function (initialDelay, period, scheduler) {
        if (initialDelay === void 0) { initialDelay = 0; }
        return new TimerObservable(initialDelay, period, scheduler);
    };
    TimerObservable.dispatch = function (state) {
        var index = state.index, period = state.period, subscriber = state.subscriber;
        var action = this;
        subscriber.next(index);
        if (subscriber.closed) {
            return;
        }
        else if (period === -1) {
            return subscriber.complete();
        }
        state.index = index + 1;
        action.schedule(state, period);
    };
    TimerObservable.prototype._subscribe = function (subscriber) {
        var index = 0;
        var _a = this, period = _a.period, dueTime = _a.dueTime, scheduler = _a.scheduler;
        return scheduler.schedule(TimerObservable.dispatch, dueTime, {
            index: index, period: period, subscriber: subscriber
        });
    };
    return TimerObservable;
}(Observable_1.Observable));
exports.TimerObservable = TimerObservable;
//# sourceMappingURL=TimerObservable.js.map

/***/ },
/* 763 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
"use strict";
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var Observable_1 = __webpack_require__(0);
var subscribeToResult_1 = __webpack_require__(7);
var OuterSubscriber_1 = __webpack_require__(6);
/**
 * We need this JSDoc comment for affecting ESDoc.
 * @extends {Ignored}
 * @hide true
 */
var UsingObservable = (function (_super) {
    __extends(UsingObservable, _super);
    function UsingObservable(resourceFactory, observableFactory) {
        _super.call(this);
        this.resourceFactory = resourceFactory;
        this.observableFactory = observableFactory;
    }
    UsingObservable.create = function (resourceFactory, observableFactory) {
        return new UsingObservable(resourceFactory, observableFactory);
    };
    UsingObservable.prototype._subscribe = function (subscriber) {
        var _a = this, resourceFactory = _a.resourceFactory, observableFactory = _a.observableFactory;
        var resource;
        try {
            resource = resourceFactory();
            return new UsingSubscriber(subscriber, resource, observableFactory);
        }
        catch (err) {
            subscriber.error(err);
        }
    };
    return UsingObservable;
}(Observable_1.Observable));
exports.UsingObservable = UsingObservable;
var UsingSubscriber = (function (_super) {
    __extends(UsingSubscriber, _super);
    function UsingSubscriber(destination, resource, observableFactory) {
        _super.call(this, destination);
        this.resource = resource;
        this.observableFactory = observableFactory;
        destination.add(resource);
        this.tryUse();
    }
    UsingSubscriber.prototype.tryUse = function () {
        try {
            var source = this.observableFactory.call(this, this.resource);
            if (source) {
                this.add(subscribeToResult_1.subscribeToResult(this, source));
            }
        }
        catch (err) {
            this._error(err);
        }
    };
    return UsingSubscriber;
}(OuterSubscriber_1.OuterSubscriber));
//# sourceMappingURL=UsingObservable.js.map

/***/ },
/* 764 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
"use strict";
var BoundCallbackObservable_1 = __webpack_require__(747);
exports.bindCallback = BoundCallbackObservable_1.BoundCallbackObservable.create;
//# sourceMappingURL=bindCallback.js.map

/***/ },
/* 765 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
"use strict";
var BoundNodeCallbackObservable_1 = __webpack_require__(748);
exports.bindNodeCallback = BoundNodeCallbackObservable_1.BoundNodeCallbackObservable.create;
//# sourceMappingURL=bindNodeCallback.js.map

/***/ },
/* 766 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
"use strict";
var isScheduler_1 = __webpack_require__(47);
var isArray_1 = __webpack_require__(32);
var ArrayObservable_1 = __webpack_require__(40);
var combineLatest_1 = __webpack_require__(294);
/* tslint:enable:max-line-length */
/**
 * Combines multiple Observables to create an Observable whose values are
 * calculated from the latest values of each of its input Observables.
 *
 * <span class="informal">Whenever any input Observable emits a value, it
 * computes a formula using the latest values from all the inputs, then emits
 * the output of that formula.</span>
 *
 * <img src="./img/combineLatest.png" width="100%">
 *
 * `combineLatest` combines the values from all the Observables passed as
 * arguments. This is done by subscribing to each Observable, in order, and
 * collecting an array of each of the most recent values any time any of the
 * input Observables emits, then either taking that array and passing it as
 * arguments to an optional `project` function and emitting the return value of
 * that, or just emitting the array of recent values directly if there is no
 * `project` function.
 *
 * @example <caption>Dynamically calculate the Body-Mass Index from an Observable of weight and one for height</caption>
 * var weight = Rx.Observable.of(70, 72, 76, 79, 75);
 * var height = Rx.Observable.of(1.76, 1.77, 1.78);
 * var bmi = Rx.Observable.combineLatest(weight, height, (w, h) => w / (h * h));
 * bmi.subscribe(x => console.log('BMI is ' + x));
 *
 * @see {@link combineAll}
 * @see {@link merge}
 * @see {@link withLatestFrom}
 *
 * @param {Observable} observable1 An input Observable to combine with the
 * source Observable.
 * @param {Observable} observable2 An input Observable to combine with the
 * source Observable. More than one input Observables may be given as argument.
 * @param {function} [project] An optional function to project the values from
 * the combined latest values into a new value on the output Observable.
 * @param {Scheduler} [scheduler=null] The Scheduler to use for subscribing to
 * each input Observable.
 * @return {Observable} An Observable of projected values from the most recent
 * values from each input Observable, or an array of the most recent values from
 * each input Observable.
 * @static true
 * @name combineLatest
 * @owner Observable
 */
function combineLatest() {
    var observables = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        observables[_i - 0] = arguments[_i];
    }
    var project = null;
    var scheduler = null;
    if (isScheduler_1.isScheduler(observables[observables.length - 1])) {
        scheduler = observables.pop();
    }
    if (typeof observables[observables.length - 1] === 'function') {
        project = observables.pop();
    }
    // if the first and only other argument besides the resultSelector is an array
    // assume it's been called with `combineLatest([obs1, obs2, obs3], project)`
    if (observables.length === 1 && isArray_1.isArray(observables[0])) {
        observables = observables[0];
    }
    return new ArrayObservable_1.ArrayObservable(observables, scheduler).lift(new combineLatest_1.CombineLatestOperator(project));
}
exports.combineLatest = combineLatest;
//# sourceMappingURL=combineLatest.js.map

/***/ },
/* 767 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
"use strict";
var concat_1 = __webpack_require__(295);
exports.concat = concat_1.concatStatic;
//# sourceMappingURL=concat.js.map

/***/ },
/* 768 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
"use strict";
var DeferObservable_1 = __webpack_require__(749);
exports.defer = DeferObservable_1.DeferObservable.create;
//# sourceMappingURL=defer.js.map

/***/ },
/* 769 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
"use strict";
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var Subject_1 = __webpack_require__(10);
var Subscriber_1 = __webpack_require__(3);
var Observable_1 = __webpack_require__(0);
var Subscription_1 = __webpack_require__(15);
var root_1 = __webpack_require__(20);
var ReplaySubject_1 = __webpack_require__(120);
var tryCatch_1 = __webpack_require__(17);
var errorObject_1 = __webpack_require__(16);
var assign_1 = __webpack_require__(879);
/**
 * We need this JSDoc comment for affecting ESDoc.
 * @extends {Ignored}
 * @hide true
 */
var WebSocketSubject = (function (_super) {
    __extends(WebSocketSubject, _super);
    function WebSocketSubject(urlConfigOrSource, destination) {
        if (urlConfigOrSource instanceof Observable_1.Observable) {
            _super.call(this, destination, urlConfigOrSource);
        }
        else {
            _super.call(this);
            this.WebSocketCtor = root_1.root.WebSocket;
            this._output = new Subject_1.Subject();
            if (typeof urlConfigOrSource === 'string') {
                this.url = urlConfigOrSource;
            }
            else {
                // WARNING: config object could override important members here.
                assign_1.assign(this, urlConfigOrSource);
            }
            if (!this.WebSocketCtor) {
                throw new Error('no WebSocket constructor can be found');
            }
            this.destination = new ReplaySubject_1.ReplaySubject();
        }
    }
    WebSocketSubject.prototype.resultSelector = function (e) {
        return JSON.parse(e.data);
    };
    /**
     * @param urlConfigOrSource
     * @return {WebSocketSubject}
     * @static true
     * @name webSocket
     * @owner Observable
     */
    WebSocketSubject.create = function (urlConfigOrSource) {
        return new WebSocketSubject(urlConfigOrSource);
    };
    WebSocketSubject.prototype.lift = function (operator) {
        var sock = new WebSocketSubject(this, this.destination);
        sock.operator = operator;
        return sock;
    };
    // TODO: factor this out to be a proper Operator/Subscriber implementation and eliminate closures
    WebSocketSubject.prototype.multiplex = function (subMsg, unsubMsg, messageFilter) {
        var self = this;
        return new Observable_1.Observable(function (observer) {
            var result = tryCatch_1.tryCatch(subMsg)();
            if (result === errorObject_1.errorObject) {
                observer.error(errorObject_1.errorObject.e);
            }
            else {
                self.next(result);
            }
            var subscription = self.subscribe(function (x) {
                var result = tryCatch_1.tryCatch(messageFilter)(x);
                if (result === errorObject_1.errorObject) {
                    observer.error(errorObject_1.errorObject.e);
                }
                else if (result) {
                    observer.next(x);
                }
            }, function (err) { return observer.error(err); }, function () { return observer.complete(); });
            return function () {
                var result = tryCatch_1.tryCatch(unsubMsg)();
                if (result === errorObject_1.errorObject) {
                    observer.error(errorObject_1.errorObject.e);
                }
                else {
                    self.next(result);
                }
                subscription.unsubscribe();
            };
        });
    };
    WebSocketSubject.prototype._connectSocket = function () {
        var _this = this;
        var WebSocketCtor = this.WebSocketCtor;
        var observer = this._output;
        var socket = null;
        try {
            socket = this.protocol ?
                new WebSocketCtor(this.url, this.protocol) :
                new WebSocketCtor(this.url);
            this.socket = socket;
        }
        catch (e) {
            observer.error(e);
            return;
        }
        var subscription = new Subscription_1.Subscription(function () {
            _this.socket = null;
            if (socket && socket.readyState === 1) {
                socket.close();
            }
        });
        socket.onopen = function (e) {
            var openObserver = _this.openObserver;
            if (openObserver) {
                openObserver.next(e);
            }
            var queue = _this.destination;
            _this.destination = Subscriber_1.Subscriber.create(function (x) { return socket.readyState === 1 && socket.send(x); }, function (e) {
                var closingObserver = _this.closingObserver;
                if (closingObserver) {
                    closingObserver.next(undefined);
                }
                if (e && e.code) {
                    socket.close(e.code, e.reason);
                }
                else {
                    observer.error(new TypeError('WebSocketSubject.error must be called with an object with an error code, ' +
                        'and an optional reason: { code: number, reason: string }'));
                }
                _this.destination = new ReplaySubject_1.ReplaySubject();
                _this.socket = null;
            }, function () {
                var closingObserver = _this.closingObserver;
                if (closingObserver) {
                    closingObserver.next(undefined);
                }
                socket.close();
                _this.destination = new ReplaySubject_1.ReplaySubject();
                _this.socket = null;
            });
            if (queue && queue instanceof ReplaySubject_1.ReplaySubject) {
                subscription.add(queue.subscribe(_this.destination));
            }
        };
        socket.onerror = function (e) { return observer.error(e); };
        socket.onclose = function (e) {
            var closeObserver = _this.closeObserver;
            if (closeObserver) {
                closeObserver.next(e);
            }
            if (e.wasClean) {
                observer.complete();
            }
            else {
                observer.error(e);
            }
        };
        socket.onmessage = function (e) {
            var result = tryCatch_1.tryCatch(_this.resultSelector)(e);
            if (result === errorObject_1.errorObject) {
                observer.error(errorObject_1.errorObject.e);
            }
            else {
                observer.next(result);
            }
        };
    };
    WebSocketSubject.prototype._subscribe = function (subscriber) {
        var _this = this;
        var source = this.source;
        if (source) {
            return source.subscribe(subscriber);
        }
        if (!this.socket) {
            this._connectSocket();
        }
        var subscription = new Subscription_1.Subscription();
        subscription.add(this._output.subscribe(subscriber));
        subscription.add(function () {
            var socket = _this.socket;
            if (_this._output.observers.length === 0 && socket && socket.readyState === 1) {
                socket.close();
                _this.socket = null;
            }
        });
        return subscription;
    };
    WebSocketSubject.prototype.unsubscribe = function () {
        var _a = this, source = _a.source, socket = _a.socket;
        if (socket && socket.readyState === 1) {
            socket.close();
            this.socket = null;
        }
        _super.prototype.unsubscribe.call(this);
        if (!source) {
            this.destination = new ReplaySubject_1.ReplaySubject();
        }
    };
    return WebSocketSubject;
}(Subject_1.AnonymousSubject));
exports.WebSocketSubject = WebSocketSubject;
//# sourceMappingURL=WebSocketSubject.js.map

/***/ },
/* 770 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
"use strict";
var AjaxObservable_1 = __webpack_require__(401);
exports.ajax = AjaxObservable_1.AjaxObservable.create;
//# sourceMappingURL=ajax.js.map

/***/ },
/* 771 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
"use strict";
var WebSocketSubject_1 = __webpack_require__(769);
exports.webSocket = WebSocketSubject_1.WebSocketSubject.create;
//# sourceMappingURL=webSocket.js.map

/***/ },
/* 772 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
"use strict";
var EmptyObservable_1 = __webpack_require__(46);
exports.empty = EmptyObservable_1.EmptyObservable.create;
//# sourceMappingURL=empty.js.map

/***/ },
/* 773 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
"use strict";
var ForkJoinObservable_1 = __webpack_require__(751);
exports.forkJoin = ForkJoinObservable_1.ForkJoinObservable.create;
//# sourceMappingURL=forkJoin.js.map

/***/ },
/* 774 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
"use strict";
var FromEventObservable_1 = __webpack_require__(752);
exports.fromEvent = FromEventObservable_1.FromEventObservable.create;
//# sourceMappingURL=fromEvent.js.map

/***/ },
/* 775 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
"use strict";
var FromEventPatternObservable_1 = __webpack_require__(753);
exports.fromEventPattern = FromEventPatternObservable_1.FromEventPatternObservable.create;
//# sourceMappingURL=fromEventPattern.js.map

/***/ },
/* 776 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
"use strict";
var IfObservable_1 = __webpack_require__(755);
exports._if = IfObservable_1.IfObservable.create;
//# sourceMappingURL=if.js.map

/***/ },
/* 777 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
"use strict";
var IntervalObservable_1 = __webpack_require__(756);
exports.interval = IntervalObservable_1.IntervalObservable.create;
//# sourceMappingURL=interval.js.map

/***/ },
/* 778 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
"use strict";
var merge_1 = __webpack_require__(409);
exports.merge = merge_1.mergeStatic;
//# sourceMappingURL=merge.js.map

/***/ },
/* 779 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
"use strict";
var NeverObservable_1 = __webpack_require__(758);
exports.never = NeverObservable_1.NeverObservable.create;
//# sourceMappingURL=never.js.map

/***/ },
/* 780 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
"use strict";
var PairsObservable_1 = __webpack_require__(759);
exports.pairs = PairsObservable_1.PairsObservable.create;
//# sourceMappingURL=pairs.js.map

/***/ },
/* 781 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
"use strict";
var RangeObservable_1 = __webpack_require__(760);
exports.range = RangeObservable_1.RangeObservable.create;
//# sourceMappingURL=range.js.map

/***/ },
/* 782 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
"use strict";
var ErrorObservable_1 = __webpack_require__(750);
exports._throw = ErrorObservable_1.ErrorObservable.create;
//# sourceMappingURL=throw.js.map

/***/ },
/* 783 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
"use strict";
var TimerObservable_1 = __webpack_require__(762);
exports.timer = TimerObservable_1.TimerObservable.create;
//# sourceMappingURL=timer.js.map

/***/ },
/* 784 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
"use strict";
var UsingObservable_1 = __webpack_require__(763);
exports.using = UsingObservable_1.UsingObservable.create;
//# sourceMappingURL=using.js.map

/***/ },
/* 785 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
"use strict";
var zip_1 = __webpack_require__(299);
exports.zip = zip_1.zipStatic;
//# sourceMappingURL=zip.js.map

/***/ },
/* 786 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
"use strict";
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var tryCatch_1 = __webpack_require__(17);
var errorObject_1 = __webpack_require__(16);
var OuterSubscriber_1 = __webpack_require__(6);
var subscribeToResult_1 = __webpack_require__(7);
/**
 * Ignores source values for a duration determined by another Observable, then
 * emits the most recent value from the source Observable, then repeats this
 * process.
 *
 * <span class="informal">It's like {@link auditTime}, but the silencing
 * duration is determined by a second Observable.</span>
 *
 * <img src="./img/audit.png" width="100%">
 *
 * `audit` is similar to `throttle`, but emits the last value from the silenced
 * time window, instead of the first value. `audit` emits the most recent value
 * from the source Observable on the output Observable as soon as its internal
 * timer becomes disabled, and ignores source values while the timer is enabled.
 * Initially, the timer is disabled. As soon as the first source value arrives,
 * the timer is enabled by calling the `durationSelector` function with the
 * source value, which returns the "duration" Observable. When the duration
 * Observable emits a value or completes, the timer is disabled, then the most
 * recent source value is emitted on the output Observable, and this process
 * repeats for the next source value.
 *
 * @example <caption>Emit clicks at a rate of at most one click per second</caption>
 * var clicks = Rx.Observable.fromEvent(document, 'click');
 * var result = clicks.audit(ev => Rx.Observable.interval(1000));
 * result.subscribe(x => console.log(x));
 *
 * @see {@link auditTime}
 * @see {@link debounce}
 * @see {@link delayWhen}
 * @see {@link sample}
 * @see {@link throttle}
 *
 * @param {function(value: T): Observable|Promise} durationSelector A function
 * that receives a value from the source Observable, for computing the silencing
 * duration, returned as an Observable or a Promise.
 * @return {Observable<T>} An Observable that performs rate-limiting of
 * emissions from the source Observable.
 * @method audit
 * @owner Observable
 */
function audit(durationSelector) {
    return this.lift(new AuditOperator(durationSelector));
}
exports.audit = audit;
var AuditOperator = (function () {
    function AuditOperator(durationSelector) {
        this.durationSelector = durationSelector;
    }
    AuditOperator.prototype.call = function (subscriber, source) {
        return source._subscribe(new AuditSubscriber(subscriber, this.durationSelector));
    };
    return AuditOperator;
}());
/**
 * We need this JSDoc comment for affecting ESDoc.
 * @ignore
 * @extends {Ignored}
 */
var AuditSubscriber = (function (_super) {
    __extends(AuditSubscriber, _super);
    function AuditSubscriber(destination, durationSelector) {
        _super.call(this, destination);
        this.durationSelector = durationSelector;
        this.hasValue = false;
    }
    AuditSubscriber.prototype._next = function (value) {
        this.value = value;
        this.hasValue = true;
        if (!this.throttled) {
            var duration = tryCatch_1.tryCatch(this.durationSelector)(value);
            if (duration === errorObject_1.errorObject) {
                this.destination.error(errorObject_1.errorObject.e);
            }
            else {
                this.add(this.throttled = subscribeToResult_1.subscribeToResult(this, duration));
            }
        }
    };
    AuditSubscriber.prototype.clearThrottle = function () {
        var _a = this, value = _a.value, hasValue = _a.hasValue, throttled = _a.throttled;
        if (throttled) {
            this.remove(throttled);
            this.throttled = null;
            throttled.unsubscribe();
        }
        if (hasValue) {
            this.value = null;
            this.hasValue = false;
            this.destination.next(value);
        }
    };
    AuditSubscriber.prototype.notifyNext = function (outerValue, innerValue, outerIndex, innerIndex) {
        this.clearThrottle();
    };
    AuditSubscriber.prototype.notifyComplete = function () {
        this.clearThrottle();
    };
    return AuditSubscriber;
}(OuterSubscriber_1.OuterSubscriber));
//# sourceMappingURL=audit.js.map

/***/ },
/* 787 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
"use strict";
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var async_1 = __webpack_require__(23);
var Subscriber_1 = __webpack_require__(3);
/**
 * Ignores source values for `duration` milliseconds, then emits the most recent
 * value from the source Observable, then repeats this process.
 *
 * <span class="informal">When it sees a source values, it ignores that plus
 * the next ones for `duration` milliseconds, and then it emits the most recent
 * value from the source.</span>
 *
 * <img src="./img/auditTime.png" width="100%">
 *
 * `auditTime` is similar to `throttleTime`, but emits the last value from the
 * silenced time window, instead of the first value. `auditTime` emits the most
 * recent value from the source Observable on the output Observable as soon as
 * its internal timer becomes disabled, and ignores source values while the
 * timer is enabled. Initially, the timer is disabled. As soon as the first
 * source value arrives, the timer is enabled. After `duration` milliseconds (or
 * the time unit determined internally by the optional `scheduler`) has passed,
 * the timer is disabled, then the most recent source value is emitted on the
 * output Observable, and this process repeats for the next source value.
 * Optionally takes a {@link Scheduler} for managing timers.
 *
 * @example <caption>Emit clicks at a rate of at most one click per second</caption>
 * var clicks = Rx.Observable.fromEvent(document, 'click');
 * var result = clicks.auditTime(1000);
 * result.subscribe(x => console.log(x));
 *
 * @see {@link audit}
 * @see {@link debounceTime}
 * @see {@link delay}
 * @see {@link sampleTime}
 * @see {@link throttleTime}
 *
 * @param {number} duration Time to wait before emitting the most recent source
 * value, measured in milliseconds or the time unit determined internally
 * by the optional `scheduler`.
 * @param {Scheduler} [scheduler=async] The {@link Scheduler} to use for
 * managing the timers that handle the rate-limiting behavior.
 * @return {Observable<T>} An Observable that performs rate-limiting of
 * emissions from the source Observable.
 * @method auditTime
 * @owner Observable
 */
function auditTime(duration, scheduler) {
    if (scheduler === void 0) { scheduler = async_1.async; }
    return this.lift(new AuditTimeOperator(duration, scheduler));
}
exports.auditTime = auditTime;
var AuditTimeOperator = (function () {
    function AuditTimeOperator(duration, scheduler) {
        this.duration = duration;
        this.scheduler = scheduler;
    }
    AuditTimeOperator.prototype.call = function (subscriber, source) {
        return source._subscribe(new AuditTimeSubscriber(subscriber, this.duration, this.scheduler));
    };
    return AuditTimeOperator;
}());
/**
 * We need this JSDoc comment for affecting ESDoc.
 * @ignore
 * @extends {Ignored}
 */
var AuditTimeSubscriber = (function (_super) {
    __extends(AuditTimeSubscriber, _super);
    function AuditTimeSubscriber(destination, duration, scheduler) {
        _super.call(this, destination);
        this.duration = duration;
        this.scheduler = scheduler;
        this.hasValue = false;
    }
    AuditTimeSubscriber.prototype._next = function (value) {
        this.value = value;
        this.hasValue = true;
        if (!this.throttled) {
            this.add(this.throttled = this.scheduler.schedule(dispatchNext, this.duration, this));
        }
    };
    AuditTimeSubscriber.prototype.clearThrottle = function () {
        var _a = this, value = _a.value, hasValue = _a.hasValue, throttled = _a.throttled;
        if (throttled) {
            this.remove(throttled);
            this.throttled = null;
            throttled.unsubscribe();
        }
        if (hasValue) {
            this.value = null;
            this.hasValue = false;
            this.destination.next(value);
        }
    };
    return AuditTimeSubscriber;
}(Subscriber_1.Subscriber));
function dispatchNext(subscriber) {
    subscriber.clearThrottle();
}
//# sourceMappingURL=auditTime.js.map

/***/ },
/* 788 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
"use strict";
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var OuterSubscriber_1 = __webpack_require__(6);
var subscribeToResult_1 = __webpack_require__(7);
/**
 * Buffers the source Observable values until `closingNotifier` emits.
 *
 * <span class="informal">Collects values from the past as an array, and emits
 * that array only when another Observable emits.</span>
 *
 * <img src="./img/buffer.png" width="100%">
 *
 * Buffers the incoming Observable values until the given `closingNotifier`
 * Observable emits a value, at which point it emits the buffer on the output
 * Observable and starts a new buffer internally, awaiting the next time
 * `closingNotifier` emits.
 *
 * @example <caption>On every click, emit array of most recent interval events</caption>
 * var clicks = Rx.Observable.fromEvent(document, 'click');
 * var interval = Rx.Observable.interval(1000);
 * var buffered = interval.buffer(clicks);
 * buffered.subscribe(x => console.log(x));
 *
 * @see {@link bufferCount}
 * @see {@link bufferTime}
 * @see {@link bufferToggle}
 * @see {@link bufferWhen}
 * @see {@link window}
 *
 * @param {Observable<any>} closingNotifier An Observable that signals the
 * buffer to be emitted on the output Observable.
 * @return {Observable<T[]>} An Observable of buffers, which are arrays of
 * values.
 * @method buffer
 * @owner Observable
 */
function buffer(closingNotifier) {
    return this.lift(new BufferOperator(closingNotifier));
}
exports.buffer = buffer;
var BufferOperator = (function () {
    function BufferOperator(closingNotifier) {
        this.closingNotifier = closingNotifier;
    }
    BufferOperator.prototype.call = function (subscriber, source) {
        return source._subscribe(new BufferSubscriber(subscriber, this.closingNotifier));
    };
    return BufferOperator;
}());
/**
 * We need this JSDoc comment for affecting ESDoc.
 * @ignore
 * @extends {Ignored}
 */
var BufferSubscriber = (function (_super) {
    __extends(BufferSubscriber, _super);
    function BufferSubscriber(destination, closingNotifier) {
        _super.call(this, destination);
        this.buffer = [];
        this.add(subscribeToResult_1.subscribeToResult(this, closingNotifier));
    }
    BufferSubscriber.prototype._next = function (value) {
        this.buffer.push(value);
    };
    BufferSubscriber.prototype.notifyNext = function (outerValue, innerValue, outerIndex, innerIndex, innerSub) {
        var buffer = this.buffer;
        this.buffer = [];
        this.destination.next(buffer);
    };
    return BufferSubscriber;
}(OuterSubscriber_1.OuterSubscriber));
//# sourceMappingURL=buffer.js.map

/***/ },
/* 789 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
"use strict";
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var Subscriber_1 = __webpack_require__(3);
/**
 * Buffers the source Observable values until the size hits the maximum
 * `bufferSize` given.
 *
 * <span class="informal">Collects values from the past as an array, and emits
 * that array only when its size reaches `bufferSize`.</span>
 *
 * <img src="./img/bufferCount.png" width="100%">
 *
 * Buffers a number of values from the source Observable by `bufferSize` then
 * emits the buffer and clears it, and starts a new buffer each
 * `startBufferEvery` values. If `startBufferEvery` is not provided or is
 * `null`, then new buffers are started immediately at the start of the source
 * and when each buffer closes and is emitted.
 *
 * @example <caption>Emit the last two click events as an array</caption>
 * var clicks = Rx.Observable.fromEvent(document, 'click');
 * var buffered = clicks.bufferCount(2);
 * buffered.subscribe(x => console.log(x));
 *
 * @example <caption>On every click, emit the last two click events as an array</caption>
 * var clicks = Rx.Observable.fromEvent(document, 'click');
 * var buffered = clicks.bufferCount(2, 1);
 * buffered.subscribe(x => console.log(x));
 *
 * @see {@link buffer}
 * @see {@link bufferTime}
 * @see {@link bufferToggle}
 * @see {@link bufferWhen}
 * @see {@link pairwise}
 * @see {@link windowCount}
 *
 * @param {number} bufferSize The maximum size of the buffer emitted.
 * @param {number} [startBufferEvery] Interval at which to start a new buffer.
 * For example if `startBufferEvery` is `2`, then a new buffer will be started
 * on every other value from the source. A new buffer is started at the
 * beginning of the source by default.
 * @return {Observable<T[]>} An Observable of arrays of buffered values.
 * @method bufferCount
 * @owner Observable
 */
function bufferCount(bufferSize, startBufferEvery) {
    if (startBufferEvery === void 0) { startBufferEvery = null; }
    return this.lift(new BufferCountOperator(bufferSize, startBufferEvery));
}
exports.bufferCount = bufferCount;
var BufferCountOperator = (function () {
    function BufferCountOperator(bufferSize, startBufferEvery) {
        this.bufferSize = bufferSize;
        this.startBufferEvery = startBufferEvery;
    }
    BufferCountOperator.prototype.call = function (subscriber, source) {
        return source._subscribe(new BufferCountSubscriber(subscriber, this.bufferSize, this.startBufferEvery));
    };
    return BufferCountOperator;
}());
/**
 * We need this JSDoc comment for affecting ESDoc.
 * @ignore
 * @extends {Ignored}
 */
var BufferCountSubscriber = (function (_super) {
    __extends(BufferCountSubscriber, _super);
    function BufferCountSubscriber(destination, bufferSize, startBufferEvery) {
        _super.call(this, destination);
        this.bufferSize = bufferSize;
        this.startBufferEvery = startBufferEvery;
        this.buffers = [[]];
        this.count = 0;
    }
    BufferCountSubscriber.prototype._next = function (value) {
        var count = (this.count += 1);
        var destination = this.destination;
        var bufferSize = this.bufferSize;
        var startBufferEvery = (this.startBufferEvery == null) ? bufferSize : this.startBufferEvery;
        var buffers = this.buffers;
        var len = buffers.length;
        var remove = -1;
        if (count % startBufferEvery === 0) {
            buffers.push([]);
        }
        for (var i = 0; i < len; i++) {
            var buffer = buffers[i];
            buffer.push(value);
            if (buffer.length === bufferSize) {
                remove = i;
                destination.next(buffer);
            }
        }
        if (remove !== -1) {
            buffers.splice(remove, 1);
        }
    };
    BufferCountSubscriber.prototype._complete = function () {
        var destination = this.destination;
        var buffers = this.buffers;
        while (buffers.length > 0) {
            var buffer = buffers.shift();
            if (buffer.length > 0) {
                destination.next(buffer);
            }
        }
        _super.prototype._complete.call(this);
    };
    return BufferCountSubscriber;
}(Subscriber_1.Subscriber));
//# sourceMappingURL=bufferCount.js.map

/***/ },
/* 790 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
"use strict";
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var async_1 = __webpack_require__(23);
var Subscriber_1 = __webpack_require__(3);
var isScheduler_1 = __webpack_require__(47);
/**
 * Buffers the source Observable values for a specific time period.
 *
 * <span class="informal">Collects values from the past as an array, and emits
 * those arrays periodically in time.</span>
 *
 * <img src="./img/bufferTime.png" width="100%">
 *
 * Buffers values from the source for a specific time duration `bufferTimeSpan`.
 * Unless the optional argument `bufferCreationInterval` is given, it emits and
 * resets the buffer every `bufferTimeSpan` milliseconds. If
 * `bufferCreationInterval` is given, this operator opens the buffer every
 * `bufferCreationInterval` milliseconds and closes (emits and resets) the
 * buffer every `bufferTimeSpan` milliseconds. When the optional argument
 * `maxBufferSize` is specified, the buffer will be closed either after
 * `bufferTimeSpan` milliseconds or when it contains `maxBufferSize` elements.
 *
 * @example <caption>Every second, emit an array of the recent click events</caption>
 * var clicks = Rx.Observable.fromEvent(document, 'click');
 * var buffered = clicks.bufferTime(1000);
 * buffered.subscribe(x => console.log(x));
 *
 * @example <caption>Every 5 seconds, emit the click events from the next 2 seconds</caption>
 * var clicks = Rx.Observable.fromEvent(document, 'click');
 * var buffered = clicks.bufferTime(2000, 5000);
 * buffered.subscribe(x => console.log(x));
 *
 * @see {@link buffer}
 * @see {@link bufferCount}
 * @see {@link bufferToggle}
 * @see {@link bufferWhen}
 * @see {@link windowTime}
 *
 * @param {number} bufferTimeSpan The amount of time to fill each buffer array.
 * @param {number} [bufferCreationInterval] The interval at which to start new
 * buffers.
 * @param {number} [maxBufferSize] The maximum buffer size.
 * @param {Scheduler} [scheduler=async] The scheduler on which to schedule the
 * intervals that determine buffer boundaries.
 * @return {Observable<T[]>} An observable of arrays of buffered values.
 * @method bufferTime
 * @owner Observable
 */
function bufferTime(bufferTimeSpan) {
    var length = arguments.length;
    var scheduler = async_1.async;
    if (isScheduler_1.isScheduler(arguments[arguments.length - 1])) {
        scheduler = arguments[arguments.length - 1];
        length--;
    }
    var bufferCreationInterval = null;
    if (length >= 2) {
        bufferCreationInterval = arguments[1];
    }
    var maxBufferSize = Number.POSITIVE_INFINITY;
    if (length >= 3) {
        maxBufferSize = arguments[2];
    }
    return this.lift(new BufferTimeOperator(bufferTimeSpan, bufferCreationInterval, maxBufferSize, scheduler));
}
exports.bufferTime = bufferTime;
var BufferTimeOperator = (function () {
    function BufferTimeOperator(bufferTimeSpan, bufferCreationInterval, maxBufferSize, scheduler) {
        this.bufferTimeSpan = bufferTimeSpan;
        this.bufferCreationInterval = bufferCreationInterval;
        this.maxBufferSize = maxBufferSize;
        this.scheduler = scheduler;
    }
    BufferTimeOperator.prototype.call = function (subscriber, source) {
        return source._subscribe(new BufferTimeSubscriber(subscriber, this.bufferTimeSpan, this.bufferCreationInterval, this.maxBufferSize, this.scheduler));
    };
    return BufferTimeOperator;
}());
var Context = (function () {
    function Context() {
        this.buffer = [];
    }
    return Context;
}());
/**
 * We need this JSDoc comment for affecting ESDoc.
 * @ignore
 * @extends {Ignored}
 */
var BufferTimeSubscriber = (function (_super) {
    __extends(BufferTimeSubscriber, _super);
    function BufferTimeSubscriber(destination, bufferTimeSpan, bufferCreationInterval, maxBufferSize, scheduler) {
        _super.call(this, destination);
        this.bufferTimeSpan = bufferTimeSpan;
        this.bufferCreationInterval = bufferCreationInterval;
        this.maxBufferSize = maxBufferSize;
        this.scheduler = scheduler;
        this.contexts = [];
        var context = this.openContext();
        this.timespanOnly = bufferCreationInterval == null || bufferCreationInterval < 0;
        if (this.timespanOnly) {
            var timeSpanOnlyState = { subscriber: this, context: context, bufferTimeSpan: bufferTimeSpan };
            this.add(context.closeAction = scheduler.schedule(dispatchBufferTimeSpanOnly, bufferTimeSpan, timeSpanOnlyState));
        }
        else {
            var closeState = { subscriber: this, context: context };
            var creationState = { bufferTimeSpan: bufferTimeSpan, bufferCreationInterval: bufferCreationInterval, subscriber: this, scheduler: scheduler };
            this.add(context.closeAction = scheduler.schedule(dispatchBufferClose, bufferTimeSpan, closeState));
            this.add(scheduler.schedule(dispatchBufferCreation, bufferCreationInterval, creationState));
        }
    }
    BufferTimeSubscriber.prototype._next = function (value) {
        var contexts = this.contexts;
        var len = contexts.length;
        var filledBufferContext;
        for (var i = 0; i < len; i++) {
            var context = contexts[i];
            var buffer = context.buffer;
            buffer.push(value);
            if (buffer.length == this.maxBufferSize) {
                filledBufferContext = context;
            }
        }
        if (filledBufferContext) {
            this.onBufferFull(filledBufferContext);
        }
    };
    BufferTimeSubscriber.prototype._error = function (err) {
        this.contexts.length = 0;
        _super.prototype._error.call(this, err);
    };
    BufferTimeSubscriber.prototype._complete = function () {
        var _a = this, contexts = _a.contexts, destination = _a.destination;
        while (contexts.length > 0) {
            var context = contexts.shift();
            destination.next(context.buffer);
        }
        _super.prototype._complete.call(this);
    };
    BufferTimeSubscriber.prototype._unsubscribe = function () {
        this.contexts = null;
    };
    BufferTimeSubscriber.prototype.onBufferFull = function (context) {
        this.closeContext(context);
        var closeAction = context.closeAction;
        closeAction.unsubscribe();
        this.remove(closeAction);
        if (this.timespanOnly) {
            context = this.openContext();
            var bufferTimeSpan = this.bufferTimeSpan;
            var timeSpanOnlyState = { subscriber: this, context: context, bufferTimeSpan: bufferTimeSpan };
            this.add(context.closeAction = this.scheduler.schedule(dispatchBufferTimeSpanOnly, bufferTimeSpan, timeSpanOnlyState));
        }
    };
    BufferTimeSubscriber.prototype.openContext = function () {
        var context = new Context();
        this.contexts.push(context);
        return context;
    };
    BufferTimeSubscriber.prototype.closeContext = function (context) {
        this.destination.next(context.buffer);
        var contexts = this.contexts;
        var spliceIndex = contexts ? contexts.indexOf(context) : -1;
        if (spliceIndex >= 0) {
            contexts.splice(contexts.indexOf(context), 1);
        }
    };
    return BufferTimeSubscriber;
}(Subscriber_1.Subscriber));
function dispatchBufferTimeSpanOnly(state) {
    var subscriber = state.subscriber;
    var prevContext = state.context;
    if (prevContext) {
        subscriber.closeContext(prevContext);
    }
    if (!subscriber.closed) {
        state.context = subscriber.openContext();
        state.context.closeAction = this.schedule(state, state.bufferTimeSpan);
    }
}
function dispatchBufferCreation(state) {
    var bufferCreationInterval = state.bufferCreationInterval, bufferTimeSpan = state.bufferTimeSpan, subscriber = state.subscriber, scheduler = state.scheduler;
    var context = subscriber.openContext();
    var action = this;
    if (!subscriber.closed) {
        subscriber.add(context.closeAction = scheduler.schedule(dispatchBufferClose, bufferTimeSpan, { subscriber: subscriber, context: context }));
        action.schedule(state, bufferCreationInterval);
    }
}
function dispatchBufferClose(arg) {
    var subscriber = arg.subscriber, context = arg.context;
    subscriber.closeContext(context);
}
//# sourceMappingURL=bufferTime.js.map

/***/ },
/* 791 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
"use strict";
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var Subscription_1 = __webpack_require__(15);
var subscribeToResult_1 = __webpack_require__(7);
var OuterSubscriber_1 = __webpack_require__(6);
/**
 * Buffers the source Observable values starting from an emission from
 * `openings` and ending when the output of `closingSelector` emits.
 *
 * <span class="informal">Collects values from the past as an array. Starts
 * collecting only when `opening` emits, and calls the `closingSelector`
 * function to get an Observable that tells when to close the buffer.</span>
 *
 * <img src="./img/bufferToggle.png" width="100%">
 *
 * Buffers values from the source by opening the buffer via signals from an
 * Observable provided to `openings`, and closing and sending the buffers when
 * a Subscribable or Promise returned by the `closingSelector` function emits.
 *
 * @example <caption>Every other second, emit the click events from the next 500ms</caption>
 * var clicks = Rx.Observable.fromEvent(document, 'click');
 * var openings = Rx.Observable.interval(1000);
 * var buffered = clicks.bufferToggle(openings, i =>
 *   i % 2 ? Rx.Observable.interval(500) : Rx.Observable.empty()
 * );
 * buffered.subscribe(x => console.log(x));
 *
 * @see {@link buffer}
 * @see {@link bufferCount}
 * @see {@link bufferTime}
 * @see {@link bufferWhen}
 * @see {@link windowToggle}
 *
 * @param {SubscribableOrPromise<O>} openings A Subscribable or Promise of notifications to start new
 * buffers.
 * @param {function(value: O): SubscribableOrPromise} closingSelector A function that takes
 * the value emitted by the `openings` observable and returns a Subscribable or Promise,
 * which, when it emits, signals that the associated buffer should be emitted
 * and cleared.
 * @return {Observable<T[]>} An observable of arrays of buffered values.
 * @method bufferToggle
 * @owner Observable
 */
function bufferToggle(openings, closingSelector) {
    return this.lift(new BufferToggleOperator(openings, closingSelector));
}
exports.bufferToggle = bufferToggle;
var BufferToggleOperator = (function () {
    function BufferToggleOperator(openings, closingSelector) {
        this.openings = openings;
        this.closingSelector = closingSelector;
    }
    BufferToggleOperator.prototype.call = function (subscriber, source) {
        return source._subscribe(new BufferToggleSubscriber(subscriber, this.openings, this.closingSelector));
    };
    return BufferToggleOperator;
}());
/**
 * We need this JSDoc comment for affecting ESDoc.
 * @ignore
 * @extends {Ignored}
 */
var BufferToggleSubscriber = (function (_super) {
    __extends(BufferToggleSubscriber, _super);
    function BufferToggleSubscriber(destination, openings, closingSelector) {
        _super.call(this, destination);
        this.openings = openings;
        this.closingSelector = closingSelector;
        this.contexts = [];
        this.add(subscribeToResult_1.subscribeToResult(this, openings));
    }
    BufferToggleSubscriber.prototype._next = function (value) {
        var contexts = this.contexts;
        var len = contexts.length;
        for (var i = 0; i < len; i++) {
            contexts[i].buffer.push(value);
        }
    };
    BufferToggleSubscriber.prototype._error = function (err) {
        var contexts = this.contexts;
        while (contexts.length > 0) {
            var context = contexts.shift();
            context.subscription.unsubscribe();
            context.buffer = null;
            context.subscription = null;
        }
        this.contexts = null;
        _super.prototype._error.call(this, err);
    };
    BufferToggleSubscriber.prototype._complete = function () {
        var contexts = this.contexts;
        while (contexts.length > 0) {
            var context = contexts.shift();
            this.destination.next(context.buffer);
            context.subscription.unsubscribe();
            context.buffer = null;
            context.subscription = null;
        }
        this.contexts = null;
        _super.prototype._complete.call(this);
    };
    BufferToggleSubscriber.prototype.notifyNext = function (outerValue, innerValue, outerIndex, innerIndex, innerSub) {
        outerValue ? this.closeBuffer(outerValue) : this.openBuffer(innerValue);
    };
    BufferToggleSubscriber.prototype.notifyComplete = function (innerSub) {
        this.closeBuffer(innerSub.context);
    };
    BufferToggleSubscriber.prototype.openBuffer = function (value) {
        try {
            var closingSelector = this.closingSelector;
            var closingNotifier = closingSelector.call(this, value);
            if (closingNotifier) {
                this.trySubscribe(closingNotifier);
            }
        }
        catch (err) {
            this._error(err);
        }
    };
    BufferToggleSubscriber.prototype.closeBuffer = function (context) {
        var contexts = this.contexts;
        if (contexts && context) {
            var buffer = context.buffer, subscription = context.subscription;
            this.destination.next(buffer);
            contexts.splice(contexts.indexOf(context), 1);
            this.remove(subscription);
            subscription.unsubscribe();
        }
    };
    BufferToggleSubscriber.prototype.trySubscribe = function (closingNotifier) {
        var contexts = this.contexts;
        var buffer = [];
        var subscription = new Subscription_1.Subscription();
        var context = { buffer: buffer, subscription: subscription };
        contexts.push(context);
        var innerSubscription = subscribeToResult_1.subscribeToResult(this, closingNotifier, context);
        if (!innerSubscription || innerSubscription.closed) {
            this.closeBuffer(context);
        }
        else {
            innerSubscription.context = context;
            this.add(innerSubscription);
            subscription.add(innerSubscription);
        }
    };
    return BufferToggleSubscriber;
}(OuterSubscriber_1.OuterSubscriber));
//# sourceMappingURL=bufferToggle.js.map

/***/ },
/* 792 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
"use strict";
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var Subscription_1 = __webpack_require__(15);
var tryCatch_1 = __webpack_require__(17);
var errorObject_1 = __webpack_require__(16);
var OuterSubscriber_1 = __webpack_require__(6);
var subscribeToResult_1 = __webpack_require__(7);
/**
 * Buffers the source Observable values, using a factory function of closing
 * Observables to determine when to close, emit, and reset the buffer.
 *
 * <span class="informal">Collects values from the past as an array. When it
 * starts collecting values, it calls a function that returns an Observable that
 * tells when to close the buffer and restart collecting.</span>
 *
 * <img src="./img/bufferWhen.png" width="100%">
 *
 * Opens a buffer immediately, then closes the buffer when the observable
 * returned by calling `closingSelector` function emits a value. When it closes
 * the buffer, it immediately opens a new buffer and repeats the process.
 *
 * @example <caption>Emit an array of the last clicks every [1-5] random seconds</caption>
 * var clicks = Rx.Observable.fromEvent(document, 'click');
 * var buffered = clicks.bufferWhen(() =>
 *   Rx.Observable.interval(1000 + Math.random() * 4000)
 * );
 * buffered.subscribe(x => console.log(x));
 *
 * @see {@link buffer}
 * @see {@link bufferCount}
 * @see {@link bufferTime}
 * @see {@link bufferToggle}
 * @see {@link windowWhen}
 *
 * @param {function(): Observable} closingSelector A function that takes no
 * arguments and returns an Observable that signals buffer closure.
 * @return {Observable<T[]>} An observable of arrays of buffered values.
 * @method bufferWhen
 * @owner Observable
 */
function bufferWhen(closingSelector) {
    return this.lift(new BufferWhenOperator(closingSelector));
}
exports.bufferWhen = bufferWhen;
var BufferWhenOperator = (function () {
    function BufferWhenOperator(closingSelector) {
        this.closingSelector = closingSelector;
    }
    BufferWhenOperator.prototype.call = function (subscriber, source) {
        return source._subscribe(new BufferWhenSubscriber(subscriber, this.closingSelector));
    };
    return BufferWhenOperator;
}());
/**
 * We need this JSDoc comment for affecting ESDoc.
 * @ignore
 * @extends {Ignored}
 */
var BufferWhenSubscriber = (function (_super) {
    __extends(BufferWhenSubscriber, _super);
    function BufferWhenSubscriber(destination, closingSelector) {
        _super.call(this, destination);
        this.closingSelector = closingSelector;
        this.subscribing = false;
        this.openBuffer();
    }
    BufferWhenSubscriber.prototype._next = function (value) {
        this.buffer.push(value);
    };
    BufferWhenSubscriber.prototype._complete = function () {
        var buffer = this.buffer;
        if (buffer) {
            this.destination.next(buffer);
        }
        _super.prototype._complete.call(this);
    };
    BufferWhenSubscriber.prototype._unsubscribe = function () {
        this.buffer = null;
        this.subscribing = false;
    };
    BufferWhenSubscriber.prototype.notifyNext = function (outerValue, innerValue, outerIndex, innerIndex, innerSub) {
        this.openBuffer();
    };
    BufferWhenSubscriber.prototype.notifyComplete = function () {
        if (this.subscribing) {
            this.complete();
        }
        else {
            this.openBuffer();
        }
    };
    BufferWhenSubscriber.prototype.openBuffer = function () {
        var closingSubscription = this.closingSubscription;
        if (closingSubscription) {
            this.remove(closingSubscription);
            closingSubscription.unsubscribe();
        }
        var buffer = this.buffer;
        if (this.buffer) {
            this.destination.next(buffer);
        }
        this.buffer = [];
        var closingNotifier = tryCatch_1.tryCatch(this.closingSelector)();
        if (closingNotifier === errorObject_1.errorObject) {
            this.error(errorObject_1.errorObject.e);
        }
        else {
            closingSubscription = new Subscription_1.Subscription();
            this.closingSubscription = closingSubscription;
            this.add(closingSubscription);
            this.subscribing = true;
            closingSubscription.add(subscribeToResult_1.subscribeToResult(this, closingNotifier));
            this.subscribing = false;
        }
    };
    return BufferWhenSubscriber;
}(OuterSubscriber_1.OuterSubscriber));
//# sourceMappingURL=bufferWhen.js.map

/***/ },
/* 793 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
"use strict";
var Observable_1 = __webpack_require__(0);
var ReplaySubject_1 = __webpack_require__(120);
/**
 * @param bufferSize
 * @param windowTime
 * @param scheduler
 * @return {Observable<any>}
 * @method cache
 * @owner Observable
 */
function cache(bufferSize, windowTime, scheduler) {
    if (bufferSize === void 0) { bufferSize = Number.POSITIVE_INFINITY; }
    if (windowTime === void 0) { windowTime = Number.POSITIVE_INFINITY; }
    var subject;
    var source = this;
    var refs = 0;
    var outerSub;
    var getSubject = function () {
        subject = new ReplaySubject_1.ReplaySubject(bufferSize, windowTime, scheduler);
        return subject;
    };
    return new Observable_1.Observable(function (observer) {
        if (!subject) {
            subject = getSubject();
            outerSub = source.subscribe(function (value) { return subject.next(value); }, function (err) {
                var s = subject;
                subject = null;
                s.error(err);
            }, function () { return subject.complete(); });
        }
        refs++;
        if (!subject) {
            subject = getSubject();
        }
        var innerSub = subject.subscribe(observer);
        return function () {
            refs--;
            if (innerSub) {
                innerSub.unsubscribe();
            }
            if (refs === 0) {
                outerSub.unsubscribe();
            }
        };
    });
}
exports.cache = cache;
//# sourceMappingURL=cache.js.map

/***/ },
/* 794 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
"use strict";
var combineLatest_1 = __webpack_require__(294);
/**
 * Converts a higher-order Observable into a first-order Observable by waiting
 * for the outer Observable to complete, then applying {@link combineLatest}.
 *
 * <span class="informal">Flattens an Observable-of-Observables by applying
 * {@link combineLatest} when the Observable-of-Observables completes.</span>
 *
 * <img src="./img/combineAll.png" width="100%">
 *
 * Takes an Observable of Observables, and collects all Observables from it.
 * Once the outer Observable completes, it subscribes to all collected
 * Observables and combines their values using the {@link combineLatest}
 * strategy, such that:
 * - Every time an inner Observable emits, the output Observable emits.
 * - When the returned observable emits, it emits all of the latest values by:
 *   - If a `project` function is provided, it is called with each recent value
 *     from each inner Observable in whatever order they arrived, and the result
 *     of the `project` function is what is emitted by the output Observable.
 *   - If there is no `project` function, an array of all of the most recent
 *     values is emitted by the output Observable.
 *
 * @example <caption>Map two click events to a finite interval Observable, then apply combineAll</caption>
 * var clicks = Rx.Observable.fromEvent(document, 'click');
 * var higherOrder = clicks.map(ev =>
 *   Rx.Observable.interval(Math.random()*2000).take(3)
 * ).take(2);
 * var result = higherOrder.combineAll();
 * result.subscribe(x => console.log(x));
 *
 * @see {@link combineLatest}
 * @see {@link mergeAll}
 *
 * @param {function} [project] An optional function to map the most recent
 * values from each inner Observable into a new result. Takes each of the most
 * recent values from each collected inner Observable as arguments, in order.
 * @return {Observable} An Observable of projected results or arrays of recent
 * values.
 * @method combineAll
 * @owner Observable
 */
function combineAll(project) {
    return this.lift(new combineLatest_1.CombineLatestOperator(project));
}
exports.combineAll = combineAll;
//# sourceMappingURL=combineAll.js.map

/***/ },
/* 795 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
"use strict";
var mergeMap_1 = __webpack_require__(79);
/**
 * Projects each source value to an Observable which is merged in the output
 * Observable, in a serialized fashion waiting for each one to complete before
 * merging the next.
 *
 * <span class="informal">Maps each value to an Observable, then flattens all of
 * these inner Observables using {@link concatAll}.</span>
 *
 * <img src="./img/concatMap.png" width="100%">
 *
 * Returns an Observable that emits items based on applying a function that you
 * supply to each item emitted by the source Observable, where that function
 * returns an (so-called "inner") Observable. Each new inner Observable is
 * concatenated with the previous inner Observable.
 *
 * __Warning:__ if source values arrive endlessly and faster than their
 * corresponding inner Observables can complete, it will result in memory issues
 * as inner Observables amass in an unbounded buffer waiting for their turn to
 * be subscribed to.
 *
 * Note: `concatMap` is equivalent to `mergeMap` with concurrency parameter set
 * to `1`.
 *
 * @example <caption>For each click event, tick every second from 0 to 3, with no concurrency</caption>
 * var clicks = Rx.Observable.fromEvent(document, 'click');
 * var result = clicks.concatMap(ev => Rx.Observable.interval(1000).take(4));
 * result.subscribe(x => console.log(x));
 *
 * @see {@link concat}
 * @see {@link concatAll}
 * @see {@link concatMapTo}
 * @see {@link exhaustMap}
 * @see {@link mergeMap}
 * @see {@link switchMap}
 *
 * @param {function(value: T, ?index: number): Observable} project A function
 * that, when applied to an item emitted by the source Observable, returns an
 * Observable.
 * @param {function(outerValue: T, innerValue: I, outerIndex: number, innerIndex: number): any} [resultSelector]
 * A function to produce the value on the output Observable based on the values
 * and the indices of the source (outer) emission and the inner Observable
 * emission. The arguments passed to this function are:
 * - `outerValue`: the value that came from the source
 * - `innerValue`: the value that came from the projected Observable
 * - `outerIndex`: the "index" of the value that came from the source
 * - `innerIndex`: the "index" of the value from the projected Observable
 * @return {Observable} an observable of values merged from the projected
 * Observables as they were subscribed to, one at a time. Optionally, these
 * values may have been projected from a passed `projectResult` argument.
 * @return {Observable} An Observable that emits the result of applying the
 * projection function (and the optional `resultSelector`) to each item emitted
 * by the source Observable and taking values from each projected inner
 * Observable sequentially.
 * @method concatMap
 * @owner Observable
 */
function concatMap(project, resultSelector) {
    return this.lift(new mergeMap_1.MergeMapOperator(project, resultSelector, 1));
}
exports.concatMap = concatMap;
//# sourceMappingURL=concatMap.js.map

/***/ },
/* 796 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
"use strict";
var mergeMapTo_1 = __webpack_require__(410);
/**
 * Projects each source value to the same Observable which is merged multiple
 * times in a serialized fashion on the output Observable.
 *
 * <span class="informal">It's like {@link concatMap}, but maps each value
 * always to the same inner Observable.</span>
 *
 * <img src="./img/concatMapTo.png" width="100%">
 *
 * Maps each source value to the given Observable `innerObservable` regardless
 * of the source value, and then flattens those resulting Observables into one
 * single Observable, which is the output Observable. Each new `innerObservable`
 * instance emitted on the output Observable is concatenated with the previous
 * `innerObservable` instance.
 *
 * __Warning:__ if source values arrive endlessly and faster than their
 * corresponding inner Observables can complete, it will result in memory issues
 * as inner Observables amass in an unbounded buffer waiting for their turn to
 * be subscribed to.
 *
 * Note: `concatMapTo` is equivalent to `mergeMapTo` with concurrency parameter
 * set to `1`.
 *
 * @example <caption>For each click event, tick every second from 0 to 3, with no concurrency</caption>
 * var clicks = Rx.Observable.fromEvent(document, 'click');
 * var result = clicks.concatMapTo(Rx.Observable.interval(1000).take(4));
 * result.subscribe(x => console.log(x));
 *
 * @see {@link concat}
 * @see {@link concatAll}
 * @see {@link concatMap}
 * @see {@link mergeMapTo}
 * @see {@link switchMapTo}
 *
 * @param {Observable} innerObservable An Observable to replace each value from
 * the source Observable.
 * @param {function(outerValue: T, innerValue: I, outerIndex: number, innerIndex: number): any} [resultSelector]
 * A function to produce the value on the output Observable based on the values
 * and the indices of the source (outer) emission and the inner Observable
 * emission. The arguments passed to this function are:
 * - `outerValue`: the value that came from the source
 * - `innerValue`: the value that came from the projected Observable
 * - `outerIndex`: the "index" of the value that came from the source
 * - `innerIndex`: the "index" of the value from the projected Observable
 * @return {Observable} An observable of values merged together by joining the
 * passed observable with itself, one after the other, for each value emitted
 * from the source.
 * @method concatMapTo
 * @owner Observable
 */
function concatMapTo(innerObservable, resultSelector) {
    return this.lift(new mergeMapTo_1.MergeMapToOperator(innerObservable, resultSelector, 1));
}
exports.concatMapTo = concatMapTo;
//# sourceMappingURL=concatMapTo.js.map

/***/ },
/* 797 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
"use strict";
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var Subscriber_1 = __webpack_require__(3);
/**
 * Counts the number of emissions on the source and emits that number when the
 * source completes.
 *
 * <span class="informal">Tells how many values were emitted, when the source
 * completes.</span>
 *
 * <img src="./img/count.png" width="100%">
 *
 * `count` transforms an Observable that emits values into an Observable that
 * emits a single value that represents the number of values emitted by the
 * source Observable. If the source Observable terminates with an error, `count`
 * will pass this error notification along without emitting an value first. If
 * the source Observable does not terminate at all, `count` will neither emit
 * a value nor terminate. This operator takes an optional `predicate` function
 * as argument, in which case the output emission will represent the number of
 * source values that matched `true` with the `predicate`.
 *
 * @example <caption>Counts how many seconds have passed before the first click happened</caption>
 * var seconds = Rx.Observable.interval(1000);
 * var clicks = Rx.Observable.fromEvent(document, 'click');
 * var secondsBeforeClick = seconds.takeUntil(clicks);
 * var result = secondsBeforeClick.count();
 * result.subscribe(x => console.log(x));
 *
 * @example <caption>Counts how many odd numbers are there between 1 and 7</caption>
 * var numbers = Rx.Observable.range(1, 7);
 * var result = numbers.count(i => i % 2 === 1);
 * result.subscribe(x => console.log(x));
 *
 * @see {@link max}
 * @see {@link min}
 * @see {@link reduce}
 *
 * @param {function(value: T, i: number, source: Observable<T>): boolean} [predicate] A
 * boolean function to select what values are to be counted. It is provided with
 * arguments of:
 * - `value`: the value from the source Observable.
 * - `index`: the (zero-based) "index" of the value from the source Observable.
 * - `source`: the source Observable instance itself.
 * @return {Observable} An Observable of one number that represents the count as
 * described above.
 * @method count
 * @owner Observable
 */
function count(predicate) {
    return this.lift(new CountOperator(predicate, this));
}
exports.count = count;
var CountOperator = (function () {
    function CountOperator(predicate, source) {
        this.predicate = predicate;
        this.source = source;
    }
    CountOperator.prototype.call = function (subscriber, source) {
        return source._subscribe(new CountSubscriber(subscriber, this.predicate, this.source));
    };
    return CountOperator;
}());
/**
 * We need this JSDoc comment for affecting ESDoc.
 * @ignore
 * @extends {Ignored}
 */
var CountSubscriber = (function (_super) {
    __extends(CountSubscriber, _super);
    function CountSubscriber(destination, predicate, source) {
        _super.call(this, destination);
        this.predicate = predicate;
        this.source = source;
        this.count = 0;
        this.index = 0;
    }
    CountSubscriber.prototype._next = function (value) {
        if (this.predicate) {
            this._tryPredicate(value);
        }
        else {
            this.count++;
        }
    };
    CountSubscriber.prototype._tryPredicate = function (value) {
        var result;
        try {
            result = this.predicate(value, this.index++, this.source);
        }
        catch (err) {
            this.destination.error(err);
            return;
        }
        if (result) {
            this.count++;
        }
    };
    CountSubscriber.prototype._complete = function () {
        this.destination.next(this.count);
        this.destination.complete();
    };
    return CountSubscriber;
}(Subscriber_1.Subscriber));
//# sourceMappingURL=count.js.map

/***/ },
/* 798 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
"use strict";
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var OuterSubscriber_1 = __webpack_require__(6);
var subscribeToResult_1 = __webpack_require__(7);
/**
 * Emits a value from the source Observable only after a particular time span
 * determined by another Observable has passed without another source emission.
 *
 * <span class="informal">It's like {@link debounceTime}, but the time span of
 * emission silence is determined by a second Observable.</span>
 *
 * <img src="./img/debounce.png" width="100%">
 *
 * `debounce` delays values emitted by the source Observable, but drops previous
 * pending delayed emissions if a new value arrives on the source Observable.
 * This operator keeps track of the most recent value from the source
 * Observable, and spawns a duration Observable by calling the
 * `durationSelector` function. The value is emitted only when the duration
 * Observable emits a value or completes, and if no other value was emitted on
 * the source Observable since the duration Observable was spawned. If a new
 * value appears before the duration Observable emits, the previous value will
 * be dropped and will not be emitted on the output Observable.
 *
 * Like {@link debounceTime}, this is a rate-limiting operator, and also a
 * delay-like operator since output emissions do not necessarily occur at the
 * same time as they did on the source Observable.
 *
 * @example <caption>Emit the most recent click after a burst of clicks</caption>
 * var clicks = Rx.Observable.fromEvent(document, 'click');
 * var result = clicks.debounce(() => Rx.Observable.interval(1000));
 * result.subscribe(x => console.log(x));
 *
 * @see {@link audit}
 * @see {@link debounceTime}
 * @see {@link delayWhen}
 * @see {@link throttle}
 *
 * @param {function(value: T): Observable|Promise} durationSelector A function
 * that receives a value from the source Observable, for computing the timeout
 * duration for each source value, returned as an Observable or a Promise.
 * @return {Observable} An Observable that delays the emissions of the source
 * Observable by the specified duration Observable returned by
 * `durationSelector`, and may drop some values if they occur too frequently.
 * @method debounce
 * @owner Observable
 */
function debounce(durationSelector) {
    return this.lift(new DebounceOperator(durationSelector));
}
exports.debounce = debounce;
var DebounceOperator = (function () {
    function DebounceOperator(durationSelector) {
        this.durationSelector = durationSelector;
    }
    DebounceOperator.prototype.call = function (subscriber, source) {
        return source._subscribe(new DebounceSubscriber(subscriber, this.durationSelector));
    };
    return DebounceOperator;
}());
/**
 * We need this JSDoc comment for affecting ESDoc.
 * @ignore
 * @extends {Ignored}
 */
var DebounceSubscriber = (function (_super) {
    __extends(DebounceSubscriber, _super);
    function DebounceSubscriber(destination, durationSelector) {
        _super.call(this, destination);
        this.durationSelector = durationSelector;
        this.hasValue = false;
        this.durationSubscription = null;
    }
    DebounceSubscriber.prototype._next = function (value) {
        try {
            var result = this.durationSelector.call(this, value);
            if (result) {
                this._tryNext(value, result);
            }
        }
        catch (err) {
            this.destination.error(err);
        }
    };
    DebounceSubscriber.prototype._complete = function () {
        this.emitValue();
        this.destination.complete();
    };
    DebounceSubscriber.prototype._tryNext = function (value, duration) {
        var subscription = this.durationSubscription;
        this.value = value;
        this.hasValue = true;
        if (subscription) {
            subscription.unsubscribe();
            this.remove(subscription);
        }
        subscription = subscribeToResult_1.subscribeToResult(this, duration);
        if (!subscription.closed) {
            this.add(this.durationSubscription = subscription);
        }
    };
    DebounceSubscriber.prototype.notifyNext = function (outerValue, innerValue, outerIndex, innerIndex, innerSub) {
        this.emitValue();
    };
    DebounceSubscriber.prototype.notifyComplete = function () {
        this.emitValue();
    };
    DebounceSubscriber.prototype.emitValue = function () {
        if (this.hasValue) {
            var value = this.value;
            var subscription = this.durationSubscription;
            if (subscription) {
                this.durationSubscription = null;
                subscription.unsubscribe();
                this.remove(subscription);
            }
            this.value = null;
            this.hasValue = false;
            _super.prototype._next.call(this, value);
        }
    };
    return DebounceSubscriber;
}(OuterSubscriber_1.OuterSubscriber));
//# sourceMappingURL=debounce.js.map

/***/ },
/* 799 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
"use strict";
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var Subscriber_1 = __webpack_require__(3);
var async_1 = __webpack_require__(23);
/**
 * Emits a value from the source Observable only after a particular time span
 * has passed without another source emission.
 *
 * <span class="informal">It's like {@link delay}, but passes only the most
 * recent value from each burst of emissions.</span>
 *
 * <img src="./img/debounceTime.png" width="100%">
 *
 * `debounceTime` delays values emitted by the source Observable, but drops
 * previous pending delayed emissions if a new value arrives on the source
 * Observable. This operator keeps track of the most recent value from the
 * source Observable, and emits that only when `dueTime` enough time has passed
 * without any other value appearing on the source Observable. If a new value
 * appears before `dueTime` silence occurs, the previous value will be dropped
 * and will not be emitted on the output Observable.
 *
 * This is a rate-limiting operator, because it is impossible for more than one
 * value to be emitted in any time window of duration `dueTime`, but it is also
 * a delay-like operator since output emissions do not occur at the same time as
 * they did on the source Observable. Optionally takes a {@link Scheduler} for
 * managing timers.
 *
 * @example <caption>Emit the most recent click after a burst of clicks</caption>
 * var clicks = Rx.Observable.fromEvent(document, 'click');
 * var result = clicks.debounceTime(1000);
 * result.subscribe(x => console.log(x));
 *
 * @see {@link auditTime}
 * @see {@link debounce}
 * @see {@link delay}
 * @see {@link sampleTime}
 * @see {@link throttleTime}
 *
 * @param {number} dueTime The timeout duration in milliseconds (or the time
 * unit determined internally by the optional `scheduler`) for the window of
 * time required to wait for emission silence before emitting the most recent
 * source value.
 * @param {Scheduler} [scheduler=async] The {@link Scheduler} to use for
 * managing the timers that handle the timeout for each value.
 * @return {Observable} An Observable that delays the emissions of the source
 * Observable by the specified `dueTime`, and may drop some values if they occur
 * too frequently.
 * @method debounceTime
 * @owner Observable
 */
function debounceTime(dueTime, scheduler) {
    if (scheduler === void 0) { scheduler = async_1.async; }
    return this.lift(new DebounceTimeOperator(dueTime, scheduler));
}
exports.debounceTime = debounceTime;
var DebounceTimeOperator = (function () {
    function DebounceTimeOperator(dueTime, scheduler) {
        this.dueTime = dueTime;
        this.scheduler = scheduler;
    }
    DebounceTimeOperator.prototype.call = function (subscriber, source) {
        return source._subscribe(new DebounceTimeSubscriber(subscriber, this.dueTime, this.scheduler));
    };
    return DebounceTimeOperator;
}());
/**
 * We need this JSDoc comment for affecting ESDoc.
 * @ignore
 * @extends {Ignored}
 */
var DebounceTimeSubscriber = (function (_super) {
    __extends(DebounceTimeSubscriber, _super);
    function DebounceTimeSubscriber(destination, dueTime, scheduler) {
        _super.call(this, destination);
        this.dueTime = dueTime;
        this.scheduler = scheduler;
        this.debouncedSubscription = null;
        this.lastValue = null;
        this.hasValue = false;
    }
    DebounceTimeSubscriber.prototype._next = function (value) {
        this.clearDebounce();
        this.lastValue = value;
        this.hasValue = true;
        this.add(this.debouncedSubscription = this.scheduler.schedule(dispatchNext, this.dueTime, this));
    };
    DebounceTimeSubscriber.prototype._complete = function () {
        this.debouncedNext();
        this.destination.complete();
    };
    DebounceTimeSubscriber.prototype.debouncedNext = function () {
        this.clearDebounce();
        if (this.hasValue) {
            this.destination.next(this.lastValue);
            this.lastValue = null;
            this.hasValue = false;
        }
    };
    DebounceTimeSubscriber.prototype.clearDebounce = function () {
        var debouncedSubscription = this.debouncedSubscription;
        if (debouncedSubscription !== null) {
            this.remove(debouncedSubscription);
            debouncedSubscription.unsubscribe();
            this.debouncedSubscription = null;
        }
    };
    return DebounceTimeSubscriber;
}(Subscriber_1.Subscriber));
function dispatchNext(subscriber) {
    subscriber.debouncedNext();
}
//# sourceMappingURL=debounceTime.js.map

/***/ },
/* 800 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
"use strict";
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var Subscriber_1 = __webpack_require__(3);
/**
 * Emits a given value if the source Observable completes without emitting any
 * `next` value, otherwise mirrors the source Observable.
 *
 * <span class="informal">If the source Observable turns out to be empty, then
 * this operator will emit a default value.</span>
 *
 * <img src="./img/defaultIfEmpty.png" width="100%">
 *
 * `defaultIfEmpty` emits the values emitted by the source Observable or a
 * specified default value if the source Observable is empty (completes without
 * having emitted any `next` value).
 *
 * @example <caption>If no clicks happen in 5 seconds, then emit "no clicks"</caption>
 * var clicks = Rx.Observable.fromEvent(document, 'click');
 * var clicksBeforeFive = clicks.takeUntil(Rx.Observable.interval(5000));
 * var result = clicksBeforeFive.defaultIfEmpty('no clicks');
 * result.subscribe(x => console.log(x));
 *
 * @see {@link empty}
 * @see {@link last}
 *
 * @param {any} [defaultValue=null] The default value used if the source
 * Observable is empty.
 * @return {Observable} An Observable that emits either the specified
 * `defaultValue` if the source Observable emits no items, or the values emitted
 * by the source Observable.
 * @method defaultIfEmpty
 * @owner Observable
 */
function defaultIfEmpty(defaultValue) {
    if (defaultValue === void 0) { defaultValue = null; }
    return this.lift(new DefaultIfEmptyOperator(defaultValue));
}
exports.defaultIfEmpty = defaultIfEmpty;
var DefaultIfEmptyOperator = (function () {
    function DefaultIfEmptyOperator(defaultValue) {
        this.defaultValue = defaultValue;
    }
    DefaultIfEmptyOperator.prototype.call = function (subscriber, source) {
        return source._subscribe(new DefaultIfEmptySubscriber(subscriber, this.defaultValue));
    };
    return DefaultIfEmptyOperator;
}());
/**
 * We need this JSDoc comment for affecting ESDoc.
 * @ignore
 * @extends {Ignored}
 */
var DefaultIfEmptySubscriber = (function (_super) {
    __extends(DefaultIfEmptySubscriber, _super);
    function DefaultIfEmptySubscriber(destination, defaultValue) {
        _super.call(this, destination);
        this.defaultValue = defaultValue;
        this.isEmpty = true;
    }
    DefaultIfEmptySubscriber.prototype._next = function (value) {
        this.isEmpty = false;
        this.destination.next(value);
    };
    DefaultIfEmptySubscriber.prototype._complete = function () {
        if (this.isEmpty) {
            this.destination.next(this.defaultValue);
        }
        this.destination.complete();
    };
    return DefaultIfEmptySubscriber;
}(Subscriber_1.Subscriber));
//# sourceMappingURL=defaultIfEmpty.js.map

/***/ },
/* 801 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
"use strict";
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var async_1 = __webpack_require__(23);
var isDate_1 = __webpack_require__(126);
var Subscriber_1 = __webpack_require__(3);
var Notification_1 = __webpack_require__(78);
/**
 * Delays the emission of items from the source Observable by a given timeout or
 * until a given Date.
 *
 * <span class="informal">Time shifts each item by some specified amount of
 * milliseconds.</span>
 *
 * <img src="./img/delay.png" width="100%">
 *
 * If the delay argument is a Number, this operator time shifts the source
 * Observable by that amount of time expressed in milliseconds. The relative
 * time intervals between the values are preserved.
 *
 * If the delay argument is a Date, this operator time shifts the start of the
 * Observable execution until the given date occurs.
 *
 * @example <caption>Delay each click by one second</caption>
 * var clicks = Rx.Observable.fromEvent(document, 'click');
 * var delayedClicks = clicks.delay(1000); // each click emitted after 1 second
 * delayedClicks.subscribe(x => console.log(x));
 *
 * @example <caption>Delay all clicks until a future date happens</caption>
 * var clicks = Rx.Observable.fromEvent(document, 'click');
 * var date = new Date('March 15, 2050 12:00:00'); // in the future
 * var delayedClicks = clicks.delay(date); // click emitted only after that date
 * delayedClicks.subscribe(x => console.log(x));
 *
 * @see {@link debounceTime}
 * @see {@link delayWhen}
 *
 * @param {number|Date} delay The delay duration in milliseconds (a `number`) or
 * a `Date` until which the emission of the source items is delayed.
 * @param {Scheduler} [scheduler=async] The Scheduler to use for
 * managing the timers that handle the time-shift for each item.
 * @return {Observable} An Observable that delays the emissions of the source
 * Observable by the specified timeout or Date.
 * @method delay
 * @owner Observable
 */
function delay(delay, scheduler) {
    if (scheduler === void 0) { scheduler = async_1.async; }
    var absoluteDelay = isDate_1.isDate(delay);
    var delayFor = absoluteDelay ? (+delay - scheduler.now()) : Math.abs(delay);
    return this.lift(new DelayOperator(delayFor, scheduler));
}
exports.delay = delay;
var DelayOperator = (function () {
    function DelayOperator(delay, scheduler) {
        this.delay = delay;
        this.scheduler = scheduler;
    }
    DelayOperator.prototype.call = function (subscriber, source) {
        return source._subscribe(new DelaySubscriber(subscriber, this.delay, this.scheduler));
    };
    return DelayOperator;
}());
/**
 * We need this JSDoc comment for affecting ESDoc.
 * @ignore
 * @extends {Ignored}
 */
var DelaySubscriber = (function (_super) {
    __extends(DelaySubscriber, _super);
    function DelaySubscriber(destination, delay, scheduler) {
        _super.call(this, destination);
        this.delay = delay;
        this.scheduler = scheduler;
        this.queue = [];
        this.active = false;
        this.errored = false;
    }
    DelaySubscriber.dispatch = function (state) {
        var source = state.source;
        var queue = source.queue;
        var scheduler = state.scheduler;
        var destination = state.destination;
        while (queue.length > 0 && (queue[0].time - scheduler.now()) <= 0) {
            queue.shift().notification.observe(destination);
        }
        if (queue.length > 0) {
            var delay_1 = Math.max(0, queue[0].time - scheduler.now());
            this.schedule(state, delay_1);
        }
        else {
            source.active = false;
        }
    };
    DelaySubscriber.prototype._schedule = function (scheduler) {
        this.active = true;
        this.add(scheduler.schedule(DelaySubscriber.dispatch, this.delay, {
            source: this, destination: this.destination, scheduler: scheduler
        }));
    };
    DelaySubscriber.prototype.scheduleNotification = function (notification) {
        if (this.errored === true) {
            return;
        }
        var scheduler = this.scheduler;
        var message = new DelayMessage(scheduler.now() + this.delay, notification);
        this.queue.push(message);
        if (this.active === false) {
            this._schedule(scheduler);
        }
    };
    DelaySubscriber.prototype._next = function (value) {
        this.scheduleNotification(Notification_1.Notification.createNext(value));
    };
    DelaySubscriber.prototype._error = function (err) {
        this.errored = true;
        this.queue = [];
        this.destination.error(err);
    };
    DelaySubscriber.prototype._complete = function () {
        this.scheduleNotification(Notification_1.Notification.createComplete());
    };
    return DelaySubscriber;
}(Subscriber_1.Subscriber));
var DelayMessage = (function () {
    function DelayMessage(time, notification) {
        this.time = time;
        this.notification = notification;
    }
    return DelayMessage;
}());
//# sourceMappingURL=delay.js.map

/***/ },
/* 802 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
"use strict";
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var Subscriber_1 = __webpack_require__(3);
var Observable_1 = __webpack_require__(0);
var OuterSubscriber_1 = __webpack_require__(6);
var subscribeToResult_1 = __webpack_require__(7);
/**
 * Delays the emission of items from the source Observable by a given time span
 * determined by the emissions of another Observable.
 *
 * <span class="informal">It's like {@link delay}, but the time span of the
 * delay duration is determined by a second Observable.</span>
 *
 * <img src="./img/delayWhen.png" width="100%">
 *
 * `delayWhen` time shifts each emitted value from the source Observable by a
 * time span determined by another Observable. When the source emits a value,
 * the `delayDurationSelector` function is called with the source value as
 * argument, and should return an Observable, called the "duration" Observable.
 * The source value is emitted on the output Observable only when the duration
 * Observable emits a value or completes.
 *
 * Optionally, `delayWhen` takes a second argument, `subscriptionDelay`, which
 * is an Observable. When `subscriptionDelay` emits its first value or
 * completes, the source Observable is subscribed to and starts behaving like
 * described in the previous paragraph. If `subscriptionDelay` is not provided,
 * `delayWhen` will subscribe to the source Observable as soon as the output
 * Observable is subscribed.
 *
 * @example <caption>Delay each click by a random amount of time, between 0 and 5 seconds</caption>
 * var clicks = Rx.Observable.fromEvent(document, 'click');
 * var delayedClicks = clicks.delayWhen(event =>
 *   Rx.Observable.interval(Math.random() * 5000)
 * );
 * delayedClicks.subscribe(x => console.log(x));
 *
 * @see {@link debounce}
 * @see {@link delay}
 *
 * @param {function(value: T): Observable} delayDurationSelector A function that
 * returns an Observable for each value emitted by the source Observable, which
 * is then used to delay the emission of that item on the output Observable
 * until the Observable returned from this function emits a value.
 * @param {Observable} subscriptionDelay An Observable that triggers the
 * subscription to the source Observable once it emits any value.
 * @return {Observable} An Observable that delays the emissions of the source
 * Observable by an amount of time specified by the Observable returned by
 * `delayDurationSelector`.
 * @method delayWhen
 * @owner Observable
 */
function delayWhen(delayDurationSelector, subscriptionDelay) {
    if (subscriptionDelay) {
        return new SubscriptionDelayObservable(this, subscriptionDelay)
            .lift(new DelayWhenOperator(delayDurationSelector));
    }
    return this.lift(new DelayWhenOperator(delayDurationSelector));
}
exports.delayWhen = delayWhen;
var DelayWhenOperator = (function () {
    function DelayWhenOperator(delayDurationSelector) {
        this.delayDurationSelector = delayDurationSelector;
    }
    DelayWhenOperator.prototype.call = function (subscriber, source) {
        return source._subscribe(new DelayWhenSubscriber(subscriber, this.delayDurationSelector));
    };
    return DelayWhenOperator;
}());
/**
 * We need this JSDoc comment for affecting ESDoc.
 * @ignore
 * @extends {Ignored}
 */
var DelayWhenSubscriber = (function (_super) {
    __extends(DelayWhenSubscriber, _super);
    function DelayWhenSubscriber(destination, delayDurationSelector) {
        _super.call(this, destination);
        this.delayDurationSelector = delayDurationSelector;
        this.completed = false;
        this.delayNotifierSubscriptions = [];
        this.values = [];
    }
    DelayWhenSubscriber.prototype.notifyNext = function (outerValue, innerValue, outerIndex, innerIndex, innerSub) {
        this.destination.next(outerValue);
        this.removeSubscription(innerSub);
        this.tryComplete();
    };
    DelayWhenSubscriber.prototype.notifyError = function (error, innerSub) {
        this._error(error);
    };
    DelayWhenSubscriber.prototype.notifyComplete = function (innerSub) {
        var value = this.removeSubscription(innerSub);
        if (value) {
            this.destination.next(value);
        }
        this.tryComplete();
    };
    DelayWhenSubscriber.prototype._next = function (value) {
        try {
            var delayNotifier = this.delayDurationSelector(value);
            if (delayNotifier) {
                this.tryDelay(delayNotifier, value);
            }
        }
        catch (err) {
            this.destination.error(err);
        }
    };
    DelayWhenSubscriber.prototype._complete = function () {
        this.completed = true;
        this.tryComplete();
    };
    DelayWhenSubscriber.prototype.removeSubscription = function (subscription) {
        subscription.unsubscribe();
        var subscriptionIdx = this.delayNotifierSubscriptions.indexOf(subscription);
        var value = null;
        if (subscriptionIdx !== -1) {
            value = this.values[subscriptionIdx];
            this.delayNotifierSubscriptions.splice(subscriptionIdx, 1);
            this.values.splice(subscriptionIdx, 1);
        }
        return value;
    };
    DelayWhenSubscriber.prototype.tryDelay = function (delayNotifier, value) {
        var notifierSubscription = subscribeToResult_1.subscribeToResult(this, delayNotifier, value);
        this.add(notifierSubscription);
        this.delayNotifierSubscriptions.push(notifierSubscription);
        this.values.push(value);
    };
    DelayWhenSubscriber.prototype.tryComplete = function () {
        if (this.completed && this.delayNotifierSubscriptions.length === 0) {
            this.destination.complete();
        }
    };
    return DelayWhenSubscriber;
}(OuterSubscriber_1.OuterSubscriber));
/**
 * We need this JSDoc comment for affecting ESDoc.
 * @ignore
 * @extends {Ignored}
 */
var SubscriptionDelayObservable = (function (_super) {
    __extends(SubscriptionDelayObservable, _super);
    function SubscriptionDelayObservable(source, subscriptionDelay) {
        _super.call(this);
        this.source = source;
        this.subscriptionDelay = subscriptionDelay;
    }
    SubscriptionDelayObservable.prototype._subscribe = function (subscriber) {
        this.subscriptionDelay.subscribe(new SubscriptionDelaySubscriber(subscriber, this.source));
    };
    return SubscriptionDelayObservable;
}(Observable_1.Observable));
/**
 * We need this JSDoc comment for affecting ESDoc.
 * @ignore
 * @extends {Ignored}
 */
var SubscriptionDelaySubscriber = (function (_super) {
    __extends(SubscriptionDelaySubscriber, _super);
    function SubscriptionDelaySubscriber(parent, source) {
        _super.call(this);
        this.parent = parent;
        this.source = source;
        this.sourceSubscribed = false;
    }
    SubscriptionDelaySubscriber.prototype._next = function (unused) {
        this.subscribeToSource();
    };
    SubscriptionDelaySubscriber.prototype._error = function (err) {
        this.unsubscribe();
        this.parent.error(err);
    };
    SubscriptionDelaySubscriber.prototype._complete = function () {
        this.subscribeToSource();
    };
    SubscriptionDelaySubscriber.prototype.subscribeToSource = function () {
        if (!this.sourceSubscribed) {
            this.sourceSubscribed = true;
            this.unsubscribe();
            this.source.subscribe(this.parent);
        }
    };
    return SubscriptionDelaySubscriber;
}(Subscriber_1.Subscriber));
//# sourceMappingURL=delayWhen.js.map

/***/ },
/* 803 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
"use strict";
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var Subscriber_1 = __webpack_require__(3);
/**
 * Converts an Observable of {@link Notification} objects into the emissions
 * that they represent.
 *
 * <span class="informal">Unwraps {@link Notification} objects as actual `next`,
 * `error` and `complete` emissions. The opposite of {@link materialize}.</span>
 *
 * <img src="./img/dematerialize.png" width="100%">
 *
 * `dematerialize` is assumed to operate an Observable that only emits
 * {@link Notification} objects as `next` emissions, and does not emit any
 * `error`. Such Observable is the output of a `materialize` operation. Those
 * notifications are then unwrapped using the metadata they contain, and emitted
 * as `next`, `error`, and `complete` on the output Observable.
 *
 * Use this operator in conjunction with {@link materialize}.
 *
 * @example <caption>Convert an Observable of Notifications to an actual Observable</caption>
 * var notifA = new Rx.Notification('N', 'A');
 * var notifB = new Rx.Notification('N', 'B');
 * var notifE = new Rx.Notification('E', void 0,
 *   new TypeError('x.toUpperCase is not a function')
 * );
 * var materialized = Rx.Observable.of(notifA, notifB, notifE);
 * var upperCase = materialized.dematerialize();
 * upperCase.subscribe(x => console.log(x), e => console.error(e));
 *
 * @see {@link Notification}
 * @see {@link materialize}
 *
 * @return {Observable} An Observable that emits items and notifications
 * embedded in Notification objects emitted by the source Observable.
 * @method dematerialize
 * @owner Observable
 */
function dematerialize() {
    return this.lift(new DeMaterializeOperator());
}
exports.dematerialize = dematerialize;
var DeMaterializeOperator = (function () {
    function DeMaterializeOperator() {
    }
    DeMaterializeOperator.prototype.call = function (subscriber, source) {
        return source._subscribe(new DeMaterializeSubscriber(subscriber));
    };
    return DeMaterializeOperator;
}());
/**
 * We need this JSDoc comment for affecting ESDoc.
 * @ignore
 * @extends {Ignored}
 */
var DeMaterializeSubscriber = (function (_super) {
    __extends(DeMaterializeSubscriber, _super);
    function DeMaterializeSubscriber(destination) {
        _super.call(this, destination);
    }
    DeMaterializeSubscriber.prototype._next = function (value) {
        value.observe(this.destination);
    };
    return DeMaterializeSubscriber;
}(Subscriber_1.Subscriber));
//# sourceMappingURL=dematerialize.js.map

/***/ },
/* 804 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
"use strict";
var distinct_1 = __webpack_require__(403);
/**
 * Returns an Observable that emits all items emitted by the source Observable that are distinct by comparison from previous items,
 * using a property accessed by using the key provided to check if the two items are distinct.
 * If a comparator function is provided, then it will be called for each item to test for whether or not that value should be emitted.
 * If a comparator function is not provided, an equality check is used by default.
 * As the internal HashSet of this operator grows larger and larger, care should be taken in the domain of inputs this operator may see.
 * An optional parameter is also provided such that an Observable can be provided to queue the internal HashSet to flush the values it holds.
 * @param {string} key string key for object property lookup on each item.
 * @param {function} [compare] optional comparison function called to test if an item is distinct from previous items in the source.
 * @param {Observable} [flushes] optional Observable for flushing the internal HashSet of the operator.
 * @return {Observable} an Observable that emits items from the source Observable with distinct values.
 * @method distinctKey
 * @owner Observable
 */
function distinctKey(key, compare, flushes) {
    return distinct_1.distinct.call(this, function (x, y) {
        if (compare) {
            return compare(x[key], y[key]);
        }
        return x[key] === y[key];
    }, flushes);
}
exports.distinctKey = distinctKey;
//# sourceMappingURL=distinctKey.js.map

/***/ },
/* 805 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
"use strict";
var distinctUntilChanged_1 = __webpack_require__(404);
/**
 * Returns an Observable that emits all items emitted by the source Observable that are distinct by comparison from the previous item,
 * using a property accessed by using the key provided to check if the two items are distinct.
 * If a comparator function is provided, then it will be called for each item to test for whether or not that value should be emitted.
 * If a comparator function is not provided, an equality check is used by default.
 * @param {string} key string key for object property lookup on each item.
 * @param {function} [compare] optional comparison function called to test if an item is distinct from the previous item in the source.
 * @return {Observable} an Observable that emits items from the source Observable with distinct values based on the key specified.
 * @method distinctUntilKeyChanged
 * @owner Observable
 */
function distinctUntilKeyChanged(key, compare) {
    return distinctUntilChanged_1.distinctUntilChanged.call(this, function (x, y) {
        if (compare) {
            return compare(x[key], y[key]);
        }
        return x[key] === y[key];
    });
}
exports.distinctUntilKeyChanged = distinctUntilKeyChanged;
//# sourceMappingURL=distinctUntilKeyChanged.js.map

/***/ },
/* 806 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
"use strict";
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var Subscriber_1 = __webpack_require__(3);
/**
 * Perform a side effect for every emission on the source Observable, but return
 * an Observable that is identical to the source.
 *
 * <span class="informal">Intercepts each emission on the source and runs a
 * function, but returns an output which is identical to the source.</span>
 *
 * <img src="./img/do.png" width="100%">
 *
 * Returns a mirrored Observable of the source Observable, but modified so that
 * the provided Observer is called to perform a side effect for every value,
 * error, and completion emitted by the source. Any errors that are thrown in
 * the aforementioned Observer or handlers are safely sent down the error path
 * of the output Observable.
 *
 * This operator is useful for debugging your Observables for the correct values
 * or performing other side effects.
 *
 * Note: this is different to a `subscribe` on the Observable. If the Observable
 * returned by `do` is not subscribed, the side effects specified by the
 * Observer will never happen. `do` therefore simply spies on existing
 * execution, it does not trigger an execution to happen like `subscribe` does.
 *
 * @example <caption>Map every every click to the clientX position of that click, while also logging the click event</caption>
 * var clicks = Rx.Observable.fromEvent(document, 'click');
 * var positions = clicks
 *   .do(ev => console.log(ev))
 *   .map(ev => ev.clientX);
 * positions.subscribe(x => console.log(x));
 *
 * @see {@link map}
 * @see {@link subscribe}
 *
 * @param {Observer|function} [nextOrObserver] A normal Observer object or a
 * callback for `next`.
 * @param {function} [error] Callback for errors in the source.
 * @param {function} [complete] Callback for the completion of the source.
 * @return {Observable} An Observable identical to the source, but runs the
 * specified Observer or callback(s) for each item.
 * @method do
 * @name do
 * @owner Observable
 */
function _do(nextOrObserver, error, complete) {
    return this.lift(new DoOperator(nextOrObserver, error, complete));
}
exports._do = _do;
var DoOperator = (function () {
    function DoOperator(nextOrObserver, error, complete) {
        this.nextOrObserver = nextOrObserver;
        this.error = error;
        this.complete = complete;
    }
    DoOperator.prototype.call = function (subscriber, source) {
        return source._subscribe(new DoSubscriber(subscriber, this.nextOrObserver, this.error, this.complete));
    };
    return DoOperator;
}());
/**
 * We need this JSDoc comment for affecting ESDoc.
 * @ignore
 * @extends {Ignored}
 */
var DoSubscriber = (function (_super) {
    __extends(DoSubscriber, _super);
    function DoSubscriber(destination, nextOrObserver, error, complete) {
        _super.call(this, destination);
        var safeSubscriber = new Subscriber_1.Subscriber(nextOrObserver, error, complete);
        safeSubscriber.syncErrorThrowable = true;
        this.add(safeSubscriber);
        this.safeSubscriber = safeSubscriber;
    }
    DoSubscriber.prototype._next = function (value) {
        var safeSubscriber = this.safeSubscriber;
        safeSubscriber.next(value);
        if (safeSubscriber.syncErrorThrown) {
            this.destination.error(safeSubscriber.syncErrorValue);
        }
        else {
            this.destination.next(value);
        }
    };
    DoSubscriber.prototype._error = function (err) {
        var safeSubscriber = this.safeSubscriber;
        safeSubscriber.error(err);
        if (safeSubscriber.syncErrorThrown) {
            this.destination.error(safeSubscriber.syncErrorValue);
        }
        else {
            this.destination.error(err);
        }
    };
    DoSubscriber.prototype._complete = function () {
        var safeSubscriber = this.safeSubscriber;
        safeSubscriber.complete();
        if (safeSubscriber.syncErrorThrown) {
            this.destination.error(safeSubscriber.syncErrorValue);
        }
        else {
            this.destination.complete();
        }
    };
    return DoSubscriber;
}(Subscriber_1.Subscriber));
//# sourceMappingURL=do.js.map

/***/ },
/* 807 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
"use strict";
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var Subscriber_1 = __webpack_require__(3);
var ArgumentOutOfRangeError_1 = __webpack_require__(125);
/**
 * Emits the single value at the specified `index` in a sequence of emissions
 * from the source Observable.
 *
 * <span class="informal">Emits only the i-th value, then completes.</span>
 *
 * <img src="./img/elementAt.png" width="100%">
 *
 * `elementAt` returns an Observable that emits the item at the specified
 * `index` in the source Observable, or a default value if that `index` is out
 * of range and the `default` argument is provided. If the `default` argument is
 * not given and the `index` is out of range, the output Observable will emit an
 * `ArgumentOutOfRangeError` error.
 *
 * @example <caption>Emit only the third click event</caption>
 * var clicks = Rx.Observable.fromEvent(document, 'click');
 * var result = clicks.elementAt(2);
 * result.subscribe(x => console.log(x));
 *
 * @see {@link first}
 * @see {@link last}
 * @see {@link skip}
 * @see {@link single}
 * @see {@link take}
 *
 * @throws {ArgumentOutOfRangeError} When using `elementAt(i)`, it delivers an
 * ArgumentOutOrRangeError to the Observer's `error` callback if `i < 0` or the
 * Observable has completed before emitting the i-th `next` notification.
 *
 * @param {number} index Is the number `i` for the i-th source emission that has
 * happened since the subscription, starting from the number `0`.
 * @param {T} [defaultValue] The default value returned for missing indices.
 * @return {Observable} An Observable that emits a single item, if it is found.
 * Otherwise, will emit the default value if given. If not, then emits an error.
 * @method elementAt
 * @owner Observable
 */
function elementAt(index, defaultValue) {
    return this.lift(new ElementAtOperator(index, defaultValue));
}
exports.elementAt = elementAt;
var ElementAtOperator = (function () {
    function ElementAtOperator(index, defaultValue) {
        this.index = index;
        this.defaultValue = defaultValue;
        if (index < 0) {
            throw new ArgumentOutOfRangeError_1.ArgumentOutOfRangeError;
        }
    }
    ElementAtOperator.prototype.call = function (subscriber, source) {
        return source._subscribe(new ElementAtSubscriber(subscriber, this.index, this.defaultValue));
    };
    return ElementAtOperator;
}());
/**
 * We need this JSDoc comment for affecting ESDoc.
 * @ignore
 * @extends {Ignored}
 */
var ElementAtSubscriber = (function (_super) {
    __extends(ElementAtSubscriber, _super);
    function ElementAtSubscriber(destination, index, defaultValue) {
        _super.call(this, destination);
        this.index = index;
        this.defaultValue = defaultValue;
    }
    ElementAtSubscriber.prototype._next = function (x) {
        if (this.index-- === 0) {
            this.destination.next(x);
            this.destination.complete();
        }
    };
    ElementAtSubscriber.prototype._complete = function () {
        var destination = this.destination;
        if (this.index >= 0) {
            if (typeof this.defaultValue !== 'undefined') {
                destination.next(this.defaultValue);
            }
            else {
                destination.error(new ArgumentOutOfRangeError_1.ArgumentOutOfRangeError);
            }
        }
        destination.complete();
    };
    return ElementAtSubscriber;
}(Subscriber_1.Subscriber));
//# sourceMappingURL=elementAt.js.map

/***/ },
/* 808 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
"use strict";
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var OuterSubscriber_1 = __webpack_require__(6);
var subscribeToResult_1 = __webpack_require__(7);
/**
 * Converts a higher-order Observable into a first-order Observable by dropping
 * inner Observables while the previous inner Observable has not yet completed.
 *
 * <span class="informal">Flattens an Observable-of-Observables by dropping the
 * next inner Observables while the current inner is still executing.</span>
 *
 * <img src="./img/exhaust.png" width="100%">
 *
 * `exhaust` subscribes to an Observable that emits Observables, also known as a
 * higher-order Observable. Each time it observes one of these emitted inner
 * Observables, the output Observable begins emitting the items emitted by that
 * inner Observable. So far, it behaves like {@link mergeAll}. However,
 * `exhaust` ignores every new inner Observable if the previous Observable has
 * not yet completed. Once that one completes, it will accept and flatten the
 * next inner Observable and repeat this process.
 *
 * @example <caption>Run a finite timer for each click, only if there is no currently active timer</caption>
 * var clicks = Rx.Observable.fromEvent(document, 'click');
 * var higherOrder = clicks.map((ev) => Rx.Observable.interval(1000));
 * var result = higherOrder.exhaust();
 * result.subscribe(x => console.log(x));
 *
 * @see {@link combineAll}
 * @see {@link concatAll}
 * @see {@link switch}
 * @see {@link mergeAll}
 * @see {@link exhaustMap}
 * @see {@link zipAll}
 *
 * @return {Observable} Returns an Observable that takes a source of Observables
 * and propagates the first observable exclusively until it completes before
 * subscribing to the next.
 * @method exhaust
 * @owner Observable
 */
function exhaust() {
    return this.lift(new SwitchFirstOperator());
}
exports.exhaust = exhaust;
var SwitchFirstOperator = (function () {
    function SwitchFirstOperator() {
    }
    SwitchFirstOperator.prototype.call = function (subscriber, source) {
        return source._subscribe(new SwitchFirstSubscriber(subscriber));
    };
    return SwitchFirstOperator;
}());
/**
 * We need this JSDoc comment for affecting ESDoc.
 * @ignore
 * @extends {Ignored}
 */
var SwitchFirstSubscriber = (function (_super) {
    __extends(SwitchFirstSubscriber, _super);
    function SwitchFirstSubscriber(destination) {
        _super.call(this, destination);
        this.hasCompleted = false;
        this.hasSubscription = false;
    }
    SwitchFirstSubscriber.prototype._next = function (value) {
        if (!this.hasSubscription) {
            this.hasSubscription = true;
            this.add(subscribeToResult_1.subscribeToResult(this, value));
        }
    };
    SwitchFirstSubscriber.prototype._complete = function () {
        this.hasCompleted = true;
        if (!this.hasSubscription) {
            this.destination.complete();
        }
    };
    SwitchFirstSubscriber.prototype.notifyComplete = function (innerSub) {
        this.remove(innerSub);
        this.hasSubscription = false;
        if (this.hasCompleted) {
            this.destination.complete();
        }
    };
    return SwitchFirstSubscriber;
}(OuterSubscriber_1.OuterSubscriber));
//# sourceMappingURL=exhaust.js.map

/***/ },
/* 809 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
"use strict";
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var OuterSubscriber_1 = __webpack_require__(6);
var subscribeToResult_1 = __webpack_require__(7);
/**
 * Projects each source value to an Observable which is merged in the output
 * Observable only if the previous projected Observable has completed.
 *
 * <span class="informal">Maps each value to an Observable, then flattens all of
 * these inner Observables using {@link exhaust}.</span>
 *
 * <img src="./img/exhaustMap.png" width="100%">
 *
 * Returns an Observable that emits items based on applying a function that you
 * supply to each item emitted by the source Observable, where that function
 * returns an (so-called "inner") Observable. When it projects a source value to
 * an Observable, the output Observable begins emitting the items emitted by
 * that projected Observable. However, `exhaustMap` ignores every new projected
 * Observable if the previous projected Observable has not yet completed. Once
 * that one completes, it will accept and flatten the next projected Observable
 * and repeat this process.
 *
 * @example <caption>Run a finite timer for each click, only if there is no currently active timer</caption>
 * var clicks = Rx.Observable.fromEvent(document, 'click');
 * var result = clicks.exhaustMap((ev) => Rx.Observable.interval(1000));
 * result.subscribe(x => console.log(x));
 *
 * @see {@link concatMap}
 * @see {@link exhaust}
 * @see {@link mergeMap}
 * @see {@link switchMap}
 *
 * @param {function(value: T, ?index: number): Observable} project A function
 * that, when applied to an item emitted by the source Observable, returns an
 * Observable.
 * @param {function(outerValue: T, innerValue: I, outerIndex: number, innerIndex: number): any} [resultSelector]
 * A function to produce the value on the output Observable based on the values
 * and the indices of the source (outer) emission and the inner Observable
 * emission. The arguments passed to this function are:
 * - `outerValue`: the value that came from the source
 * - `innerValue`: the value that came from the projected Observable
 * - `outerIndex`: the "index" of the value that came from the source
 * - `innerIndex`: the "index" of the value from the projected Observable
 * @return {Observable} An Observable containing projected Observables
 * of each item of the source, ignoring projected Observables that start before
 * their preceding Observable has completed.
 * @method exhaustMap
 * @owner Observable
 */
function exhaustMap(project, resultSelector) {
    return this.lift(new SwitchFirstMapOperator(project, resultSelector));
}
exports.exhaustMap = exhaustMap;
var SwitchFirstMapOperator = (function () {
    function SwitchFirstMapOperator(project, resultSelector) {
        this.project = project;
        this.resultSelector = resultSelector;
    }
    SwitchFirstMapOperator.prototype.call = function (subscriber, source) {
        return source._subscribe(new SwitchFirstMapSubscriber(subscriber, this.project, this.resultSelector));
    };
    return SwitchFirstMapOperator;
}());
/**
 * We need this JSDoc comment for affecting ESDoc.
 * @ignore
 * @extends {Ignored}
 */
var SwitchFirstMapSubscriber = (function (_super) {
    __extends(SwitchFirstMapSubscriber, _super);
    function SwitchFirstMapSubscriber(destination, project, resultSelector) {
        _super.call(this, destination);
        this.project = project;
        this.resultSelector = resultSelector;
        this.hasSubscription = false;
        this.hasCompleted = false;
        this.index = 0;
    }
    SwitchFirstMapSubscriber.prototype._next = function (value) {
        if (!this.hasSubscription) {
            this.tryNext(value);
        }
    };
    SwitchFirstMapSubscriber.prototype.tryNext = function (value) {
        var index = this.index++;
        var destination = this.destination;
        try {
            var result = this.project(value, index);
            this.hasSubscription = true;
            this.add(subscribeToResult_1.subscribeToResult(this, result, value, index));
        }
        catch (err) {
            destination.error(err);
        }
    };
    SwitchFirstMapSubscriber.prototype._complete = function () {
        this.hasCompleted = true;
        if (!this.hasSubscription) {
            this.destination.complete();
        }
    };
    SwitchFirstMapSubscriber.prototype.notifyNext = function (outerValue, innerValue, outerIndex, innerIndex, innerSub) {
        var _a = this, resultSelector = _a.resultSelector, destination = _a.destination;
        if (resultSelector) {
            this.trySelectResult(outerValue, innerValue, outerIndex, innerIndex);
        }
        else {
            destination.next(innerValue);
        }
    };
    SwitchFirstMapSubscriber.prototype.trySelectResult = function (outerValue, innerValue, outerIndex, innerIndex) {
        var _a = this, resultSelector = _a.resultSelector, destination = _a.destination;
        try {
            var result = resultSelector(outerValue, innerValue, outerIndex, innerIndex);
            destination.next(result);
        }
        catch (err) {
            destination.error(err);
        }
    };
    SwitchFirstMapSubscriber.prototype.notifyError = function (err) {
        this.destination.error(err);
    };
    SwitchFirstMapSubscriber.prototype.notifyComplete = function (innerSub) {
        this.remove(innerSub);
        this.hasSubscription = false;
        if (this.hasCompleted) {
            this.destination.complete();
        }
    };
    return SwitchFirstMapSubscriber;
}(OuterSubscriber_1.OuterSubscriber));
//# sourceMappingURL=exhaustMap.js.map

/***/ },
/* 810 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
"use strict";
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var tryCatch_1 = __webpack_require__(17);
var errorObject_1 = __webpack_require__(16);
var OuterSubscriber_1 = __webpack_require__(6);
var subscribeToResult_1 = __webpack_require__(7);
/**
 * Recursively projects each source value to an Observable which is merged in
 * the output Observable.
 *
 * <span class="informal">It's similar to {@link mergeMap}, but applies the
 * projection function to every source value as well as every output value.
 * It's recursive.</span>
 *
 * <img src="./img/expand.png" width="100%">
 *
 * Returns an Observable that emits items based on applying a function that you
 * supply to each item emitted by the source Observable, where that function
 * returns an Observable, and then merging those resulting Observables and
 * emitting the results of this merger. *Expand* will re-emit on the output
 * Observable every source value. Then, each output value is given to the
 * `project` function which returns an inner Observable to be merged on the
 * output Observable. Those output values resulting from the projection are also
 * given to the `project` function to produce new output values. This is how
 * *expand* behaves recursively.
 *
 * @example <caption>Start emitting the powers of two on every click, at most 10 of them</caption>
 * var clicks = Rx.Observable.fromEvent(document, 'click');
 * var powersOfTwo = clicks
 *   .mapTo(1)
 *   .expand(x => Rx.Observable.of(2 * x).delay(1000))
 *   .take(10);
 * powersOfTwo.subscribe(x => console.log(x));
 *
 * @see {@link mergeMap}
 * @see {@link mergeScan}
 *
 * @param {function(value: T, index: number) => Observable} project A function
 * that, when applied to an item emitted by the source or the output Observable,
 * returns an Observable.
 * @param {number} [concurrent=Number.POSITIVE_INFINITY] Maximum number of input
 * Observables being subscribed to concurrently.
 * @param {Scheduler} [scheduler=null] The Scheduler to use for subscribing to
 * each projected inner Observable.
 * @return {Observable} An Observable that emits the source values and also
 * result of applying the projection function to each value emitted on the
 * output Observable and and merging the results of the Observables obtained
 * from this transformation.
 * @method expand
 * @owner Observable
 */
function expand(project, concurrent, scheduler) {
    if (concurrent === void 0) { concurrent = Number.POSITIVE_INFINITY; }
    if (scheduler === void 0) { scheduler = undefined; }
    concurrent = (concurrent || 0) < 1 ? Number.POSITIVE_INFINITY : concurrent;
    return this.lift(new ExpandOperator(project, concurrent, scheduler));
}
exports.expand = expand;
var ExpandOperator = (function () {
    function ExpandOperator(project, concurrent, scheduler) {
        this.project = project;
        this.concurrent = concurrent;
        this.scheduler = scheduler;
    }
    ExpandOperator.prototype.call = function (subscriber, source) {
        return source._subscribe(new ExpandSubscriber(subscriber, this.project, this.concurrent, this.scheduler));
    };
    return ExpandOperator;
}());
exports.ExpandOperator = ExpandOperator;
/**
 * We need this JSDoc comment for affecting ESDoc.
 * @ignore
 * @extends {Ignored}
 */
var ExpandSubscriber = (function (_super) {
    __extends(ExpandSubscriber, _super);
    function ExpandSubscriber(destination, project, concurrent, scheduler) {
        _super.call(this, destination);
        this.project = project;
        this.concurrent = concurrent;
        this.scheduler = scheduler;
        this.index = 0;
        this.active = 0;
        this.hasCompleted = false;
        if (concurrent < Number.POSITIVE_INFINITY) {
            this.buffer = [];
        }
    }
    ExpandSubscriber.dispatch = function (arg) {
        var subscriber = arg.subscriber, result = arg.result, value = arg.value, index = arg.index;
        subscriber.subscribeToProjection(result, value, index);
    };
    ExpandSubscriber.prototype._next = function (value) {
        var destination = this.destination;
        if (destination.closed) {
            this._complete();
            return;
        }
        var index = this.index++;
        if (this.active < this.concurrent) {
            destination.next(value);
            var result = tryCatch_1.tryCatch(this.project)(value, index);
            if (result === errorObject_1.errorObject) {
                destination.error(errorObject_1.errorObject.e);
            }
            else if (!this.scheduler) {
                this.subscribeToProjection(result, value, index);
            }
            else {
                var state = { subscriber: this, result: result, value: value, index: index };
                this.add(this.scheduler.schedule(ExpandSubscriber.dispatch, 0, state));
            }
        }
        else {
            this.buffer.push(value);
        }
    };
    ExpandSubscriber.prototype.subscribeToProjection = function (result, value, index) {
        this.active++;
        this.add(subscribeToResult_1.subscribeToResult(this, result, value, index));
    };
    ExpandSubscriber.prototype._complete = function () {
        this.hasCompleted = true;
        if (this.hasCompleted && this.active === 0) {
            this.destination.complete();
        }
    };
    ExpandSubscriber.prototype.notifyNext = function (outerValue, innerValue, outerIndex, innerIndex, innerSub) {
        this._next(innerValue);
    };
    ExpandSubscriber.prototype.notifyComplete = function (innerSub) {
        var buffer = this.buffer;
        this.remove(innerSub);
        this.active--;
        if (buffer && buffer.length > 0) {
            this._next(buffer.shift());
        }
        if (this.hasCompleted && this.active === 0) {
            this.destination.complete();
        }
    };
    return ExpandSubscriber;
}(OuterSubscriber_1.OuterSubscriber));
exports.ExpandSubscriber = ExpandSubscriber;
//# sourceMappingURL=expand.js.map

/***/ },
/* 811 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
"use strict";
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var Subscriber_1 = __webpack_require__(3);
var Subscription_1 = __webpack_require__(15);
/**
 * Returns an Observable that mirrors the source Observable, but will call a specified function when
 * the source terminates on complete or error.
 * @param {function} callback function to be called when source terminates.
 * @return {Observable} an Observable that mirrors the source, but will call the specified function on termination.
 * @method finally
 * @owner Observable
 */
function _finally(callback) {
    return this.lift(new FinallyOperator(callback));
}
exports._finally = _finally;
var FinallyOperator = (function () {
    function FinallyOperator(callback) {
        this.callback = callback;
    }
    FinallyOperator.prototype.call = function (subscriber, source) {
        return source._subscribe(new FinallySubscriber(subscriber, this.callback));
    };
    return FinallyOperator;
}());
/**
 * We need this JSDoc comment for affecting ESDoc.
 * @ignore
 * @extends {Ignored}
 */
var FinallySubscriber = (function (_super) {
    __extends(FinallySubscriber, _super);
    function FinallySubscriber(destination, callback) {
        _super.call(this, destination);
        this.add(new Subscription_1.Subscription(callback));
    }
    return FinallySubscriber;
}(Subscriber_1.Subscriber));
//# sourceMappingURL=finally.js.map

/***/ },
/* 812 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
"use strict";
var find_1 = __webpack_require__(406);
/**
 * Emits only the index of the first value emitted by the source Observable that
 * meets some condition.
 *
 * <span class="informal">It's like {@link find}, but emits the index of the
 * found value, not the value itself.</span>
 *
 * <img src="./img/findIndex.png" width="100%">
 *
 * `findIndex` searches for the first item in the source Observable that matches
 * the specified condition embodied by the `predicate`, and returns the
 * (zero-based) index of the first occurrence in the source. Unlike
 * {@link first}, the `predicate` is required in `findIndex`, and does not emit
 * an error if a valid value is not found.
 *
 * @example <caption>Emit the index of first click that happens on a DIV element</caption>
 * var clicks = Rx.Observable.fromEvent(document, 'click');
 * var result = clicks.findIndex(ev => ev.target.tagName === 'DIV');
 * result.subscribe(x => console.log(x));
 *
 * @see {@link filter}
 * @see {@link find}
 * @see {@link first}
 * @see {@link take}
 *
 * @param {function(value: T, index: number, source: Observable<T>): boolean} predicate
 * A function called with each item to test for condition matching.
 * @param {any} [thisArg] An optional argument to determine the value of `this`
 * in the `predicate` function.
 * @return {Observable} An Observable of the index of the first item that
 * matches the condition.
 * @method find
 * @owner Observable
 */
function findIndex(predicate, thisArg) {
    return this.lift(new find_1.FindValueOperator(predicate, this, true, thisArg));
}
exports.findIndex = findIndex;
//# sourceMappingURL=findIndex.js.map

/***/ },
/* 813 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
"use strict";
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var Subscriber_1 = __webpack_require__(3);
var Subscription_1 = __webpack_require__(15);
var Observable_1 = __webpack_require__(0);
var Subject_1 = __webpack_require__(10);
var Map_1 = __webpack_require__(877);
var FastMap_1 = __webpack_require__(875);
/**
 * Groups the items emitted by an Observable according to a specified criterion,
 * and emits these grouped items as `GroupedObservables`, one
 * {@link GroupedObservable} per group.
 *
 * <img src="./img/groupBy.png" width="100%">
 *
 * @param {function(value: T): K} keySelector a function that extracts the key
 * for each item.
 * @param {function(value: T): R} [elementSelector] a function that extracts the
 * return element for each item.
 * @param {function(grouped: GroupedObservable<K,R>): Observable<any>} [durationSelector]
 * a function that returns an Observable to determine how long each group should
 * exist.
 * @return {Observable<GroupedObservable<K,R>>} an Observable that emits
 * GroupedObservables, each of which corresponds to a unique key value and each
 * of which emits those items from the source Observable that share that key
 * value.
 * @method groupBy
 * @owner Observable
 */
function groupBy(keySelector, elementSelector, durationSelector) {
    return this.lift(new GroupByOperator(this, keySelector, elementSelector, durationSelector));
}
exports.groupBy = groupBy;
var GroupByOperator = (function () {
    function GroupByOperator(source, keySelector, elementSelector, durationSelector) {
        this.source = source;
        this.keySelector = keySelector;
        this.elementSelector = elementSelector;
        this.durationSelector = durationSelector;
    }
    GroupByOperator.prototype.call = function (subscriber, source) {
        return source._subscribe(new GroupBySubscriber(subscriber, this.keySelector, this.elementSelector, this.durationSelector));
    };
    return GroupByOperator;
}());
/**
 * We need this JSDoc comment for affecting ESDoc.
 * @ignore
 * @extends {Ignored}
 */
var GroupBySubscriber = (function (_super) {
    __extends(GroupBySubscriber, _super);
    function GroupBySubscriber(destination, keySelector, elementSelector, durationSelector) {
        _super.call(this, destination);
        this.keySelector = keySelector;
        this.elementSelector = elementSelector;
        this.durationSelector = durationSelector;
        this.groups = null;
        this.attemptedToUnsubscribe = false;
        this.count = 0;
    }
    GroupBySubscriber.prototype._next = function (value) {
        var key;
        try {
            key = this.keySelector(value);
        }
        catch (err) {
            this.error(err);
            return;
        }
        this._group(value, key);
    };
    GroupBySubscriber.prototype._group = function (value, key) {
        var groups = this.groups;
        if (!groups) {
            groups = this.groups = typeof key === 'string' ? new FastMap_1.FastMap() : new Map_1.Map();
        }
        var group = groups.get(key);
        var element;
        if (this.elementSelector) {
            try {
                element = this.elementSelector(value);
            }
            catch (err) {
                this.error(err);
            }
        }
        else {
            element = value;
        }
        if (!group) {
            groups.set(key, group = new Subject_1.Subject());
            var groupedObservable = new GroupedObservable(key, group, this);
            this.destination.next(groupedObservable);
            if (this.durationSelector) {
                var duration = void 0;
                try {
                    duration = this.durationSelector(new GroupedObservable(key, group));
                }
                catch (err) {
                    this.error(err);
                    return;
                }
                this.add(duration.subscribe(new GroupDurationSubscriber(key, group, this)));
            }
        }
        if (!group.closed) {
            group.next(element);
        }
    };
    GroupBySubscriber.prototype._error = function (err) {
        var groups = this.groups;
        if (groups) {
            groups.forEach(function (group, key) {
                group.error(err);
            });
            groups.clear();
        }
        this.destination.error(err);
    };
    GroupBySubscriber.prototype._complete = function () {
        var groups = this.groups;
        if (groups) {
            groups.forEach(function (group, key) {
                group.complete();
            });
            groups.clear();
        }
        this.destination.complete();
    };
    GroupBySubscriber.prototype.removeGroup = function (key) {
        this.groups.delete(key);
    };
    GroupBySubscriber.prototype.unsubscribe = function () {
        if (!this.closed && !this.attemptedToUnsubscribe) {
            this.attemptedToUnsubscribe = true;
            if (this.count === 0) {
                _super.prototype.unsubscribe.call(this);
            }
        }
    };
    return GroupBySubscriber;
}(Subscriber_1.Subscriber));
/**
 * We need this JSDoc comment for affecting ESDoc.
 * @ignore
 * @extends {Ignored}
 */
var GroupDurationSubscriber = (function (_super) {
    __extends(GroupDurationSubscriber, _super);
    function GroupDurationSubscriber(key, group, parent) {
        _super.call(this);
        this.key = key;
        this.group = group;
        this.parent = parent;
    }
    GroupDurationSubscriber.prototype._next = function (value) {
        this._complete();
    };
    GroupDurationSubscriber.prototype._error = function (err) {
        var group = this.group;
        if (!group.closed) {
            group.error(err);
        }
        this.parent.removeGroup(this.key);
    };
    GroupDurationSubscriber.prototype._complete = function () {
        var group = this.group;
        if (!group.closed) {
            group.complete();
        }
        this.parent.removeGroup(this.key);
    };
    return GroupDurationSubscriber;
}(Subscriber_1.Subscriber));
/**
 * An Observable representing values belonging to the same group represented by
 * a common key. The values emitted by a GroupedObservable come from the source
 * Observable. The common key is available as the field `key` on a
 * GroupedObservable instance.
 *
 * @class GroupedObservable<K, T>
 */
var GroupedObservable = (function (_super) {
    __extends(GroupedObservable, _super);
    function GroupedObservable(key, groupSubject, refCountSubscription) {
        _super.call(this);
        this.key = key;
        this.groupSubject = groupSubject;
        this.refCountSubscription = refCountSubscription;
    }
    GroupedObservable.prototype._subscribe = function (subscriber) {
        var subscription = new Subscription_1.Subscription();
        var _a = this, refCountSubscription = _a.refCountSubscription, groupSubject = _a.groupSubject;
        if (refCountSubscription && !refCountSubscription.closed) {
            subscription.add(new InnerRefCountSubscription(refCountSubscription));
        }
        subscription.add(groupSubject.subscribe(subscriber));
        return subscription;
    };
    return GroupedObservable;
}(Observable_1.Observable));
exports.GroupedObservable = GroupedObservable;
/**
 * We need this JSDoc comment for affecting ESDoc.
 * @ignore
 * @extends {Ignored}
 */
var InnerRefCountSubscription = (function (_super) {
    __extends(InnerRefCountSubscription, _super);
    function InnerRefCountSubscription(parent) {
        _super.call(this);
        this.parent = parent;
        parent.count++;
    }
    InnerRefCountSubscription.prototype.unsubscribe = function () {
        var parent = this.parent;
        if (!parent.closed && !this.closed) {
            _super.prototype.unsubscribe.call(this);
            parent.count -= 1;
            if (parent.count === 0 && parent.attemptedToUnsubscribe) {
                parent.unsubscribe();
            }
        }
    };
    return InnerRefCountSubscription;
}(Subscription_1.Subscription));
//# sourceMappingURL=groupBy.js.map

/***/ },
/* 814 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
"use strict";
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var Subscriber_1 = __webpack_require__(3);
var noop_1 = __webpack_require__(424);
/**
 * Ignores all items emitted by the source Observable and only passes calls of `complete` or `error`.
 *
 * <img src="./img/ignoreElements.png" width="100%">
 *
 * @return {Observable} an empty Observable that only calls `complete`
 * or `error`, based on which one is called by the source Observable.
 * @method ignoreElements
 * @owner Observable
 */
function ignoreElements() {
    return this.lift(new IgnoreElementsOperator());
}
exports.ignoreElements = ignoreElements;
;
var IgnoreElementsOperator = (function () {
    function IgnoreElementsOperator() {
    }
    IgnoreElementsOperator.prototype.call = function (subscriber, source) {
        return source._subscribe(new IgnoreElementsSubscriber(subscriber));
    };
    return IgnoreElementsOperator;
}());
/**
 * We need this JSDoc comment for affecting ESDoc.
 * @ignore
 * @extends {Ignored}
 */
var IgnoreElementsSubscriber = (function (_super) {
    __extends(IgnoreElementsSubscriber, _super);
    function IgnoreElementsSubscriber() {
        _super.apply(this, arguments);
    }
    IgnoreElementsSubscriber.prototype._next = function (unused) {
        noop_1.noop();
    };
    return IgnoreElementsSubscriber;
}(Subscriber_1.Subscriber));
//# sourceMappingURL=ignoreElements.js.map

/***/ },
/* 815 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
"use strict";
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var Subscriber_1 = __webpack_require__(3);
/**
 * If the source Observable is empty it returns an Observable that emits true, otherwise it emits false.
 *
 * <img src="./img/isEmpty.png" width="100%">
 *
 * @return {Observable} an Observable that emits a Boolean.
 * @method isEmpty
 * @owner Observable
 */
function isEmpty() {
    return this.lift(new IsEmptyOperator());
}
exports.isEmpty = isEmpty;
var IsEmptyOperator = (function () {
    function IsEmptyOperator() {
    }
    IsEmptyOperator.prototype.call = function (observer, source) {
        return source._subscribe(new IsEmptySubscriber(observer));
    };
    return IsEmptyOperator;
}());
/**
 * We need this JSDoc comment for affecting ESDoc.
 * @ignore
 * @extends {Ignored}
 */
var IsEmptySubscriber = (function (_super) {
    __extends(IsEmptySubscriber, _super);
    function IsEmptySubscriber(destination) {
        _super.call(this, destination);
    }
    IsEmptySubscriber.prototype.notifyComplete = function (isEmpty) {
        var destination = this.destination;
        destination.next(isEmpty);
        destination.complete();
    };
    IsEmptySubscriber.prototype._next = function (value) {
        this.notifyComplete(false);
    };
    IsEmptySubscriber.prototype._complete = function () {
        this.notifyComplete(true);
    };
    return IsEmptySubscriber;
}(Subscriber_1.Subscriber));
//# sourceMappingURL=isEmpty.js.map

/***/ },
/* 816 */
/***/ function(module, exports) {

"use strict";
"use strict";
/**
 * @param func
 * @return {Observable<R>}
 * @method let
 * @owner Observable
 */
function letProto(func) {
    return func(this);
}
exports.letProto = letProto;
//# sourceMappingURL=let.js.map

/***/ },
/* 817 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
"use strict";
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var Subscriber_1 = __webpack_require__(3);
/**
 * Emits the given constant value on the output Observable every time the source
 * Observable emits a value.
 *
 * <span class="informal">Like {@link map}, but it maps every source value to
 * the same output value every time.</span>
 *
 * <img src="./img/mapTo.png" width="100%">
 *
 * Takes a constant `value` as argument, and emits that whenever the source
 * Observable emits a value. In other words, ignores the actual source value,
 * and simply uses the emission moment to know when to emit the given `value`.
 *
 * @example <caption>Map every every click to the string 'Hi'</caption>
 * var clicks = Rx.Observable.fromEvent(document, 'click');
 * var greetings = clicks.mapTo('Hi');
 * greetings.subscribe(x => console.log(x));
 *
 * @see {@link map}
 *
 * @param {any} value The value to map each source value to.
 * @return {Observable} An Observable that emits the given `value` every time
 * the source Observable emits something.
 * @method mapTo
 * @owner Observable
 */
function mapTo(value) {
    return this.lift(new MapToOperator(value));
}
exports.mapTo = mapTo;
var MapToOperator = (function () {
    function MapToOperator(value) {
        this.value = value;
    }
    MapToOperator.prototype.call = function (subscriber, source) {
        return source._subscribe(new MapToSubscriber(subscriber, this.value));
    };
    return MapToOperator;
}());
/**
 * We need this JSDoc comment for affecting ESDoc.
 * @ignore
 * @extends {Ignored}
 */
var MapToSubscriber = (function (_super) {
    __extends(MapToSubscriber, _super);
    function MapToSubscriber(destination, value) {
        _super.call(this, destination);
        this.value = value;
    }
    MapToSubscriber.prototype._next = function (x) {
        this.destination.next(this.value);
    };
    return MapToSubscriber;
}(Subscriber_1.Subscriber));
//# sourceMappingURL=mapTo.js.map

/***/ },
/* 818 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
"use strict";
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var Subscriber_1 = __webpack_require__(3);
var Notification_1 = __webpack_require__(78);
/**
 * Represents all of the notifications from the source Observable as `next`
 * emissions marked with their original types within {@link Notification}
 * objects.
 *
 * <span class="informal">Wraps `next`, `error` and `complete` emissions in
 * {@link Notification} objects, emitted as `next` on the output Observable.
 * </span>
 *
 * <img src="./img/materialize.png" width="100%">
 *
 * `materialize` returns an Observable that emits a `next` notification for each
 * `next`, `error`, or `complete` emission of the source Observable. When the
 * source Observable emits `complete`, the output Observable will emit `next` as
 * a Notification of type "complete", and then it will emit `complete` as well.
 * When the source Observable emits `error`, the output will emit `next` as a
 * Notification of type "error", and then `complete`.
 *
 * This operator is useful for producing metadata of the source Observable, to
 * be consumed as `next` emissions. Use it in conjunction with
 * {@link dematerialize}.
 *
 * @example <caption>Convert a faulty Observable to an Observable of Notifications</caption>
 * var letters = Rx.Observable.of('a', 'b', 13, 'd');
 * var upperCase = letters.map(x => x.toUpperCase());
 * var materialized = upperCase.materialize();
 * materialized.subscribe(x => console.log(x));
 *
 * @see {@link Notification}
 * @see {@link dematerialize}
 *
 * @return {Observable<Notification<T>>} An Observable that emits
 * {@link Notification} objects that wrap the original emissions from the source
 * Observable with metadata.
 * @method materialize
 * @owner Observable
 */
function materialize() {
    return this.lift(new MaterializeOperator());
}
exports.materialize = materialize;
var MaterializeOperator = (function () {
    function MaterializeOperator() {
    }
    MaterializeOperator.prototype.call = function (subscriber, source) {
        return source._subscribe(new MaterializeSubscriber(subscriber));
    };
    return MaterializeOperator;
}());
/**
 * We need this JSDoc comment for affecting ESDoc.
 * @ignore
 * @extends {Ignored}
 */
var MaterializeSubscriber = (function (_super) {
    __extends(MaterializeSubscriber, _super);
    function MaterializeSubscriber(destination) {
        _super.call(this, destination);
    }
    MaterializeSubscriber.prototype._next = function (value) {
        this.destination.next(Notification_1.Notification.createNext(value));
    };
    MaterializeSubscriber.prototype._error = function (err) {
        var destination = this.destination;
        destination.next(Notification_1.Notification.createError(err));
        destination.complete();
    };
    MaterializeSubscriber.prototype._complete = function () {
        var destination = this.destination;
        destination.next(Notification_1.Notification.createComplete());
        destination.complete();
    };
    return MaterializeSubscriber;
}(Subscriber_1.Subscriber));
//# sourceMappingURL=materialize.js.map

/***/ },
/* 819 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
"use strict";
var reduce_1 = __webpack_require__(122);
/**
 * The Max operator operates on an Observable that emits numbers (or items that can be evaluated as numbers),
 * and when source Observable completes it emits a single item: the item with the largest number.
 *
 * <img src="./img/max.png" width="100%">
 *
 * @param {Function} optional comparer function that it will use instead of its default to compare the value of two
 * items.
 * @return {Observable} an Observable that emits item with the largest number.
 * @method max
 * @owner Observable
 */
function max(comparer) {
    var max = (typeof comparer === 'function')
        ? function (x, y) { return comparer(x, y) > 0 ? x : y; }
        : function (x, y) { return x > y ? x : y; };
    return this.lift(new reduce_1.ReduceOperator(max));
}
exports.max = max;
//# sourceMappingURL=max.js.map

/***/ },
/* 820 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
"use strict";
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var tryCatch_1 = __webpack_require__(17);
var errorObject_1 = __webpack_require__(16);
var subscribeToResult_1 = __webpack_require__(7);
var OuterSubscriber_1 = __webpack_require__(6);
/**
 * @param project
 * @param seed
 * @param concurrent
 * @return {Observable<R>|WebSocketSubject<T>|Observable<T>}
 * @method mergeScan
 * @owner Observable
 */
function mergeScan(project, seed, concurrent) {
    if (concurrent === void 0) { concurrent = Number.POSITIVE_INFINITY; }
    return this.lift(new MergeScanOperator(project, seed, concurrent));
}
exports.mergeScan = mergeScan;
var MergeScanOperator = (function () {
    function MergeScanOperator(project, seed, concurrent) {
        this.project = project;
        this.seed = seed;
        this.concurrent = concurrent;
    }
    MergeScanOperator.prototype.call = function (subscriber, source) {
        return source._subscribe(new MergeScanSubscriber(subscriber, this.project, this.seed, this.concurrent));
    };
    return MergeScanOperator;
}());
exports.MergeScanOperator = MergeScanOperator;
/**
 * We need this JSDoc comment for affecting ESDoc.
 * @ignore
 * @extends {Ignored}
 */
var MergeScanSubscriber = (function (_super) {
    __extends(MergeScanSubscriber, _super);
    function MergeScanSubscriber(destination, project, acc, concurrent) {
        _super.call(this, destination);
        this.project = project;
        this.acc = acc;
        this.concurrent = concurrent;
        this.hasValue = false;
        this.hasCompleted = false;
        this.buffer = [];
        this.active = 0;
        this.index = 0;
    }
    MergeScanSubscriber.prototype._next = function (value) {
        if (this.active < this.concurrent) {
            var index = this.index++;
            var ish = tryCatch_1.tryCatch(this.project)(this.acc, value);
            var destination = this.destination;
            if (ish === errorObject_1.errorObject) {
                destination.error(errorObject_1.errorObject.e);
            }
            else {
                this.active++;
                this._innerSub(ish, value, index);
            }
        }
        else {
            this.buffer.push(value);
        }
    };
    MergeScanSubscriber.prototype._innerSub = function (ish, value, index) {
        this.add(subscribeToResult_1.subscribeToResult(this, ish, value, index));
    };
    MergeScanSubscriber.prototype._complete = function () {
        this.hasCompleted = true;
        if (this.active === 0 && this.buffer.length === 0) {
            if (this.hasValue === false) {
                this.destination.next(this.acc);
            }
            this.destination.complete();
        }
    };
    MergeScanSubscriber.prototype.notifyNext = function (outerValue, innerValue, outerIndex, innerIndex, innerSub) {
        var destination = this.destination;
        this.acc = innerValue;
        this.hasValue = true;
        destination.next(innerValue);
    };
    MergeScanSubscriber.prototype.notifyComplete = function (innerSub) {
        var buffer = this.buffer;
        this.remove(innerSub);
        this.active--;
        if (buffer.length > 0) {
            this._next(buffer.shift());
        }
        else if (this.active === 0 && this.hasCompleted) {
            if (this.hasValue === false) {
                this.destination.next(this.acc);
            }
            this.destination.complete();
        }
    };
    return MergeScanSubscriber;
}(OuterSubscriber_1.OuterSubscriber));
exports.MergeScanSubscriber = MergeScanSubscriber;
//# sourceMappingURL=mergeScan.js.map

/***/ },
/* 821 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
"use strict";
var reduce_1 = __webpack_require__(122);
/**
 * The Min operator operates on an Observable that emits numbers (or items that can be evaluated as numbers),
 * and when source Observable completes it emits a single item: the item with the smallest number.
 *
 * <img src="./img/min.png" width="100%">
 *
 * @param {Function} optional comparer function that it will use instead of its default to compare the value of two items.
 * @return {Observable<R>} an Observable that emits item with the smallest number.
 * @method min
 * @owner Observable
 */
function min(comparer) {
    var min = (typeof comparer === 'function')
        ? function (x, y) { return comparer(x, y) < 0 ? x : y; }
        : function (x, y) { return x < y ? x : y; };
    return this.lift(new reduce_1.ReduceOperator(min));
}
exports.min = min;
//# sourceMappingURL=min.js.map

/***/ },
/* 822 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
"use strict";
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var Subscriber_1 = __webpack_require__(3);
/**
 * Groups pairs of consecutive emissions together and emits them as an array of
 * two values.
 *
 * <span class="informal">Puts the current value and previous value together as
 * an array, and emits that.</span>
 *
 * <img src="./img/pairwise.png" width="100%">
 *
 * The Nth emission from the source Observable will cause the output Observable
 * to emit an array [(N-1)th, Nth] of the previous and the current value, as a
 * pair. For this reason, `pairwise` emits on the second and subsequent
 * emissions from the source Observable, but not on the first emission, because
 * there is no previous value in that case.
 *
 * @example <caption>On every click (starting from the second), emit the relative distance to the previous click</caption>
 * var clicks = Rx.Observable.fromEvent(document, 'click');
 * var pairs = clicks.pairwise();
 * var distance = pairs.map(pair => {
 *   var x0 = pair[0].clientX;
 *   var y0 = pair[0].clientY;
 *   var x1 = pair[1].clientX;
 *   var y1 = pair[1].clientY;
 *   return Math.sqrt(Math.pow(x0 - x1, 2) + Math.pow(y0 - y1, 2));
 * });
 * distance.subscribe(x => console.log(x));
 *
 * @see {@link buffer}
 * @see {@link bufferCount}
 *
 * @return {Observable<Array<T>>} An Observable of pairs (as arrays) of
 * consecutive values from the source Observable.
 * @method pairwise
 * @owner Observable
 */
function pairwise() {
    return this.lift(new PairwiseOperator());
}
exports.pairwise = pairwise;
var PairwiseOperator = (function () {
    function PairwiseOperator() {
    }
    PairwiseOperator.prototype.call = function (subscriber, source) {
        return source._subscribe(new PairwiseSubscriber(subscriber));
    };
    return PairwiseOperator;
}());
/**
 * We need this JSDoc comment for affecting ESDoc.
 * @ignore
 * @extends {Ignored}
 */
var PairwiseSubscriber = (function (_super) {
    __extends(PairwiseSubscriber, _super);
    function PairwiseSubscriber(destination) {
        _super.call(this, destination);
        this.hasPrev = false;
    }
    PairwiseSubscriber.prototype._next = function (value) {
        if (this.hasPrev) {
            this.destination.next([this.prev, value]);
        }
        else {
            this.hasPrev = true;
        }
        this.prev = value;
    };
    return PairwiseSubscriber;
}(Subscriber_1.Subscriber));
//# sourceMappingURL=pairwise.js.map

/***/ },
/* 823 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
"use strict";
var not_1 = __webpack_require__(881);
var filter_1 = __webpack_require__(405);
/**
 * Splits the source Observable into two, one with values that satisfy a
 * predicate, and another with values that don't satisfy the predicate.
 *
 * <span class="informal">It's like {@link filter}, but returns two Observables:
 * one like the output of {@link filter}, and the other with values that did not
 * pass the condition.</span>
 *
 * <img src="./img/partition.png" width="100%">
 *
 * `partition` outputs an array with two Observables that partition the values
 * from the source Observable through the given `predicate` function. The first
 * Observable in that array emits source values for which the predicate argument
 * returns true. The second Observable emits source values for which the
 * predicate returns false. The first behaves like {@link filter} and the second
 * behaves like {@link filter} with the predicate negated.
 *
 * @example <caption>Partition click events into those on DIV elements and those elsewhere</caption>
 * var clicks = Rx.Observable.fromEvent(document, 'click');
 * var parts = clicks.partition(ev => ev.target.tagName === 'DIV');
 * var clicksOnDivs = parts[0];
 * var clicksElsewhere = parts[1];
 * clicksOnDivs.subscribe(x => console.log('DIV clicked: ', x));
 * clicksElsewhere.subscribe(x => console.log('Other clicked: ', x));
 *
 * @see {@link filter}
 *
 * @param {function(value: T, index: number): boolean} predicate A function that
 * evaluates each value emitted by the source Observable. If it returns `true`,
 * the value is emitted on the first Observable in the returned array, if
 * `false` the value is emitted on the second Observable in the array. The
 * `index` parameter is the number `i` for the i-th source emission that has
 * happened since the subscription, starting from the number `0`.
 * @param {any} [thisArg] An optional argument to determine the value of `this`
 * in the `predicate` function.
 * @return {[Observable<T>, Observable<T>]} An array with two Observables: one
 * with values that passed the predicate, and another with values that did not
 * pass the predicate.
 * @method partition
 * @owner Observable
 */
function partition(predicate, thisArg) {
    return [
        filter_1.filter.call(this, predicate),
        filter_1.filter.call(this, not_1.not(predicate, thisArg))
    ];
}
exports.partition = partition;
//# sourceMappingURL=partition.js.map

/***/ },
/* 824 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
"use strict";
var map_1 = __webpack_require__(52);
/**
 * Maps each source value (an object) to its specified nested property.
 *
 * <span class="informal">Like {@link map}, but meant only for picking one of
 * the nested properties of every emitted object.</span>
 *
 * <img src="./img/pluck.png" width="100%">
 *
 * Given a list of strings describing a path to an object property, retrieves
 * the value of a specified nested property from all values in the source
 * Observable. If a property can't be resolved, it will return `undefined` for
 * that value.
 *
 * @example <caption>Map every every click to the tagName of the clicked target element</caption>
 * var clicks = Rx.Observable.fromEvent(document, 'click');
 * var tagNames = clicks.pluck('target', 'tagName');
 * tagNames.subscribe(x => console.log(x));
 *
 * @see {@link map}
 *
 * @param {...string} properties The nested properties to pluck from each source
 * value (an object).
 * @return {Observable} Returns a new Observable of property values from the
 * source values.
 * @method pluck
 * @owner Observable
 */
function pluck() {
    var properties = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        properties[_i - 0] = arguments[_i];
    }
    var length = properties.length;
    if (length === 0) {
        throw new Error('list of properties cannot be empty.');
    }
    return map_1.map.call(this, plucker(properties, length));
}
exports.pluck = pluck;
function plucker(props, length) {
    var mapper = function (x) {
        var currentProp = x;
        for (var i = 0; i < length; i++) {
            var p = currentProp[props[i]];
            if (typeof p !== 'undefined') {
                currentProp = p;
            }
            else {
                return undefined;
            }
        }
        return currentProp;
    };
    return mapper;
}
//# sourceMappingURL=pluck.js.map

/***/ },
/* 825 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
"use strict";
var Subject_1 = __webpack_require__(10);
var multicast_1 = __webpack_require__(65);
/**
 * Returns a ConnectableObservable, which is a variety of Observable that waits until its connect method is called
 * before it begins emitting items to those Observers that have subscribed to it.
 *
 * <img src="./img/publish.png" width="100%">
 *
 * @param {Function} Optional selector function which can use the multicasted source sequence as many times as needed,
 * without causing multiple subscriptions to the source sequence.
 * Subscribers to the given source will receive all notifications of the source from the time of the subscription on.
 * @return a ConnectableObservable that upon connection causes the source Observable to emit items to its Observers.
 * @method publish
 * @owner Observable
 */
function publish(selector) {
    return selector ? multicast_1.multicast.call(this, function () { return new Subject_1.Subject(); }, selector) :
        multicast_1.multicast.call(this, new Subject_1.Subject());
}
exports.publish = publish;
//# sourceMappingURL=publish.js.map

/***/ },
/* 826 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
"use strict";
var BehaviorSubject_1 = __webpack_require__(119);
var multicast_1 = __webpack_require__(65);
/**
 * @param value
 * @return {ConnectableObservable<T>}
 * @method publishBehavior
 * @owner Observable
 */
function publishBehavior(value) {
    return multicast_1.multicast.call(this, new BehaviorSubject_1.BehaviorSubject(value));
}
exports.publishBehavior = publishBehavior;
//# sourceMappingURL=publishBehavior.js.map

/***/ },
/* 827 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
"use strict";
var AsyncSubject_1 = __webpack_require__(118);
var multicast_1 = __webpack_require__(65);
/**
 * @return {ConnectableObservable<T>}
 * @method publishLast
 * @owner Observable
 */
function publishLast() {
    return multicast_1.multicast.call(this, new AsyncSubject_1.AsyncSubject());
}
exports.publishLast = publishLast;
//# sourceMappingURL=publishLast.js.map

/***/ },
/* 828 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
"use strict";
var ReplaySubject_1 = __webpack_require__(120);
var multicast_1 = __webpack_require__(65);
/**
 * @param bufferSize
 * @param windowTime
 * @param scheduler
 * @return {ConnectableObservable<T>}
 * @method publishReplay
 * @owner Observable
 */
function publishReplay(bufferSize, windowTime, scheduler) {
    if (bufferSize === void 0) { bufferSize = Number.POSITIVE_INFINITY; }
    if (windowTime === void 0) { windowTime = Number.POSITIVE_INFINITY; }
    return multicast_1.multicast.call(this, new ReplaySubject_1.ReplaySubject(bufferSize, windowTime, scheduler));
}
exports.publishReplay = publishReplay;
//# sourceMappingURL=publishReplay.js.map

/***/ },
/* 829 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
"use strict";
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var Subscriber_1 = __webpack_require__(3);
var EmptyObservable_1 = __webpack_require__(46);
/**
 * Returns an Observable that repeats the stream of items emitted by the source Observable at most count times,
 * on a particular Scheduler.
 *
 * <img src="./img/repeat.png" width="100%">
 *
 * @param {Scheduler} [scheduler] the Scheduler to emit the items on.
 * @param {number} [count] the number of times the source Observable items are repeated, a count of 0 will yield
 * an empty Observable.
 * @return {Observable} an Observable that repeats the stream of items emitted by the source Observable at most
 * count times.
 * @method repeat
 * @owner Observable
 */
function repeat(count) {
    if (count === void 0) { count = -1; }
    if (count === 0) {
        return new EmptyObservable_1.EmptyObservable();
    }
    else if (count < 0) {
        return this.lift(new RepeatOperator(-1, this));
    }
    else {
        return this.lift(new RepeatOperator(count - 1, this));
    }
}
exports.repeat = repeat;
var RepeatOperator = (function () {
    function RepeatOperator(count, source) {
        this.count = count;
        this.source = source;
    }
    RepeatOperator.prototype.call = function (subscriber, source) {
        return source._subscribe(new RepeatSubscriber(subscriber, this.count, this.source));
    };
    return RepeatOperator;
}());
/**
 * We need this JSDoc comment for affecting ESDoc.
 * @ignore
 * @extends {Ignored}
 */
var RepeatSubscriber = (function (_super) {
    __extends(RepeatSubscriber, _super);
    function RepeatSubscriber(destination, count, source) {
        _super.call(this, destination);
        this.count = count;
        this.source = source;
    }
    RepeatSubscriber.prototype.complete = function () {
        if (!this.isStopped) {
            var _a = this, source = _a.source, count = _a.count;
            if (count === 0) {
                return _super.prototype.complete.call(this);
            }
            else if (count > -1) {
                this.count = count - 1;
            }
            this.unsubscribe();
            this.isStopped = false;
            this.closed = false;
            source.subscribe(this);
        }
    };
    return RepeatSubscriber;
}(Subscriber_1.Subscriber));
//# sourceMappingURL=repeat.js.map

/***/ },
/* 830 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
"use strict";
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var Subject_1 = __webpack_require__(10);
var tryCatch_1 = __webpack_require__(17);
var errorObject_1 = __webpack_require__(16);
var OuterSubscriber_1 = __webpack_require__(6);
var subscribeToResult_1 = __webpack_require__(7);
/**
 * Returns an Observable that emits the same values as the source observable with the exception of a `complete`.
 * A `complete` will cause the emission of the Throwable that cause the complete to the Observable returned from
 * notificationHandler. If that Observable calls onComplete or `complete` then retry will call `complete` or `error`
 * on the child subscription. Otherwise, this Observable will resubscribe to the source observable, on a particular
 * Scheduler.
 *
 * <img src="./img/repeatWhen.png" width="100%">
 *
 * @param {notificationHandler} receives an Observable of notifications with which a user can `complete` or `error`,
 * aborting the retry.
 * @param {scheduler} the Scheduler on which to subscribe to the source Observable.
 * @return {Observable} the source Observable modified with retry logic.
 * @method repeatWhen
 * @owner Observable
 */
function repeatWhen(notifier) {
    return this.lift(new RepeatWhenOperator(notifier, this));
}
exports.repeatWhen = repeatWhen;
var RepeatWhenOperator = (function () {
    function RepeatWhenOperator(notifier, source) {
        this.notifier = notifier;
        this.source = source;
    }
    RepeatWhenOperator.prototype.call = function (subscriber, source) {
        return source._subscribe(new RepeatWhenSubscriber(subscriber, this.notifier, this.source));
    };
    return RepeatWhenOperator;
}());
/**
 * We need this JSDoc comment for affecting ESDoc.
 * @ignore
 * @extends {Ignored}
 */
var RepeatWhenSubscriber = (function (_super) {
    __extends(RepeatWhenSubscriber, _super);
    function RepeatWhenSubscriber(destination, notifier, source) {
        _super.call(this, destination);
        this.notifier = notifier;
        this.source = source;
    }
    RepeatWhenSubscriber.prototype.complete = function () {
        if (!this.isStopped) {
            var notifications = this.notifications;
            var retries = this.retries;
            var retriesSubscription = this.retriesSubscription;
            if (!retries) {
                notifications = new Subject_1.Subject();
                retries = tryCatch_1.tryCatch(this.notifier)(notifications);
                if (retries === errorObject_1.errorObject) {
                    return _super.prototype.complete.call(this);
                }
                retriesSubscription = subscribeToResult_1.subscribeToResult(this, retries);
            }
            else {
                this.notifications = null;
                this.retriesSubscription = null;
            }
            this.unsubscribe();
            this.closed = false;
            this.notifications = notifications;
            this.retries = retries;
            this.retriesSubscription = retriesSubscription;
            notifications.next();
        }
    };
    RepeatWhenSubscriber.prototype._unsubscribe = function () {
        var _a = this, notifications = _a.notifications, retriesSubscription = _a.retriesSubscription;
        if (notifications) {
            notifications.unsubscribe();
            this.notifications = null;
        }
        if (retriesSubscription) {
            retriesSubscription.unsubscribe();
            this.retriesSubscription = null;
        }
        this.retries = null;
    };
    RepeatWhenSubscriber.prototype.notifyNext = function (outerValue, innerValue, outerIndex, innerIndex, innerSub) {
        var _a = this, notifications = _a.notifications, retries = _a.retries, retriesSubscription = _a.retriesSubscription;
        this.notifications = null;
        this.retries = null;
        this.retriesSubscription = null;
        this.unsubscribe();
        this.isStopped = false;
        this.closed = false;
        this.notifications = notifications;
        this.retries = retries;
        this.retriesSubscription = retriesSubscription;
        this.source.subscribe(this);
    };
    return RepeatWhenSubscriber;
}(OuterSubscriber_1.OuterSubscriber));
//# sourceMappingURL=repeatWhen.js.map

/***/ },
/* 831 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
"use strict";
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var Subscriber_1 = __webpack_require__(3);
/**
 * Returns an Observable that mirrors the source Observable, resubscribing to it if it calls `error` and the
 * predicate returns true for that specific exception and retry count.
 * If the source Observable calls `error`, this method will resubscribe to the source Observable for a maximum of
 * count resubscriptions (given as a number parameter) rather than propagating the `error` call.
 *
 * <img src="./img/retry.png" width="100%">
 *
 * Any and all items emitted by the source Observable will be emitted by the resulting Observable, even those emitted
 * during failed subscriptions. For example, if an Observable fails at first but emits [1, 2] then succeeds the second
 * time and emits: [1, 2, 3, 4, 5] then the complete stream of emissions and notifications
 * would be: [1, 2, 1, 2, 3, 4, 5, `complete`].
 * @param {number} number of retry attempts before failing.
 * @return {Observable} the source Observable modified with the retry logic.
 * @method retry
 * @owner Observable
 */
function retry(count) {
    if (count === void 0) { count = -1; }
    return this.lift(new RetryOperator(count, this));
}
exports.retry = retry;
var RetryOperator = (function () {
    function RetryOperator(count, source) {
        this.count = count;
        this.source = source;
    }
    RetryOperator.prototype.call = function (subscriber, source) {
        return source._subscribe(new RetrySubscriber(subscriber, this.count, this.source));
    };
    return RetryOperator;
}());
/**
 * We need this JSDoc comment for affecting ESDoc.
 * @ignore
 * @extends {Ignored}
 */
var RetrySubscriber = (function (_super) {
    __extends(RetrySubscriber, _super);
    function RetrySubscriber(destination, count, source) {
        _super.call(this, destination);
        this.count = count;
        this.source = source;
    }
    RetrySubscriber.prototype.error = function (err) {
        if (!this.isStopped) {
            var _a = this, source = _a.source, count = _a.count;
            if (count === 0) {
                return _super.prototype.error.call(this, err);
            }
            else if (count > -1) {
                this.count = count - 1;
            }
            this.unsubscribe();
            this.isStopped = false;
            this.closed = false;
            source.subscribe(this);
        }
    };
    return RetrySubscriber;
}(Subscriber_1.Subscriber));
//# sourceMappingURL=retry.js.map

/***/ },
/* 832 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
"use strict";
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var Subject_1 = __webpack_require__(10);
var tryCatch_1 = __webpack_require__(17);
var errorObject_1 = __webpack_require__(16);
var OuterSubscriber_1 = __webpack_require__(6);
var subscribeToResult_1 = __webpack_require__(7);
/**
 * Returns an Observable that emits the same values as the source observable with the exception of an `error`.
 * An `error` will cause the emission of the Throwable that cause the error to the Observable returned from
 * notificationHandler. If that Observable calls onComplete or `error` then retry will call `complete` or `error`
 * on the child subscription. Otherwise, this Observable will resubscribe to the source observable, on a particular
 * Scheduler.
 *
 * <img src="./img/retryWhen.png" width="100%">
 *
 * @param {notificationHandler} receives an Observable of notifications with which a user can `complete` or `error`,
 * aborting the retry.
 * @param {scheduler} the Scheduler on which to subscribe to the source Observable.
 * @return {Observable} the source Observable modified with retry logic.
 * @method retryWhen
 * @owner Observable
 */
function retryWhen(notifier) {
    return this.lift(new RetryWhenOperator(notifier, this));
}
exports.retryWhen = retryWhen;
var RetryWhenOperator = (function () {
    function RetryWhenOperator(notifier, source) {
        this.notifier = notifier;
        this.source = source;
    }
    RetryWhenOperator.prototype.call = function (subscriber, source) {
        return source._subscribe(new RetryWhenSubscriber(subscriber, this.notifier, this.source));
    };
    return RetryWhenOperator;
}());
/**
 * We need this JSDoc comment for affecting ESDoc.
 * @ignore
 * @extends {Ignored}
 */
var RetryWhenSubscriber = (function (_super) {
    __extends(RetryWhenSubscriber, _super);
    function RetryWhenSubscriber(destination, notifier, source) {
        _super.call(this, destination);
        this.notifier = notifier;
        this.source = source;
    }
    RetryWhenSubscriber.prototype.error = function (err) {
        if (!this.isStopped) {
            var errors = this.errors;
            var retries = this.retries;
            var retriesSubscription = this.retriesSubscription;
            if (!retries) {
                errors = new Subject_1.Subject();
                retries = tryCatch_1.tryCatch(this.notifier)(errors);
                if (retries === errorObject_1.errorObject) {
                    return _super.prototype.error.call(this, errorObject_1.errorObject.e);
                }
                retriesSubscription = subscribeToResult_1.subscribeToResult(this, retries);
            }
            else {
                this.errors = null;
                this.retriesSubscription = null;
            }
            this.unsubscribe();
            this.closed = false;
            this.errors = errors;
            this.retries = retries;
            this.retriesSubscription = retriesSubscription;
            errors.next(err);
        }
    };
    RetryWhenSubscriber.prototype._unsubscribe = function () {
        var _a = this, errors = _a.errors, retriesSubscription = _a.retriesSubscription;
        if (errors) {
            errors.unsubscribe();
            this.errors = null;
        }
        if (retriesSubscription) {
            retriesSubscription.unsubscribe();
            this.retriesSubscription = null;
        }
        this.retries = null;
    };
    RetryWhenSubscriber.prototype.notifyNext = function (outerValue, innerValue, outerIndex, innerIndex, innerSub) {
        var _a = this, errors = _a.errors, retries = _a.retries, retriesSubscription = _a.retriesSubscription;
        this.errors = null;
        this.retries = null;
        this.retriesSubscription = null;
        this.unsubscribe();
        this.isStopped = false;
        this.closed = false;
        this.errors = errors;
        this.retries = retries;
        this.retriesSubscription = retriesSubscription;
        this.source.subscribe(this);
    };
    return RetryWhenSubscriber;
}(OuterSubscriber_1.OuterSubscriber));
//# sourceMappingURL=retryWhen.js.map

/***/ },
/* 833 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
"use strict";
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var OuterSubscriber_1 = __webpack_require__(6);
var subscribeToResult_1 = __webpack_require__(7);
/**
 * Emits the most recently emitted value from the source Observable whenever
 * another Observable, the `notifier`, emits.
 *
 * <span class="informal">It's like {@link sampleTime}, but samples whenever
 * the `notifier` Observable emits something.</span>
 *
 * <img src="./img/sample.png" width="100%">
 *
 * Whenever the `notifier` Observable emits a value or completes, `sample`
 * looks at the source Observable and emits whichever value it has most recently
 * emitted since the previous sampling, unless the source has not emitted
 * anything since the previous sampling. The `notifier` is subscribed to as soon
 * as the output Observable is subscribed.
 *
 * @example <caption>On every click, sample the most recent "seconds" timer</caption>
 * var seconds = Rx.Observable.interval(1000);
 * var clicks = Rx.Observable.fromEvent(document, 'click');
 * var result = seconds.sample(clicks);
 * result.subscribe(x => console.log(x));
 *
 * @see {@link audit}
 * @see {@link debounce}
 * @see {@link sampleTime}
 * @see {@link throttle}
 *
 * @param {Observable<any>} notifier The Observable to use for sampling the
 * source Observable.
 * @return {Observable<T>} An Observable that emits the results of sampling the
 * values emitted by the source Observable whenever the notifier Observable
 * emits value or completes.
 * @method sample
 * @owner Observable
 */
function sample(notifier) {
    return this.lift(new SampleOperator(notifier));
}
exports.sample = sample;
var SampleOperator = (function () {
    function SampleOperator(notifier) {
        this.notifier = notifier;
    }
    SampleOperator.prototype.call = function (subscriber, source) {
        return source._subscribe(new SampleSubscriber(subscriber, this.notifier));
    };
    return SampleOperator;
}());
/**
 * We need this JSDoc comment for affecting ESDoc.
 * @ignore
 * @extends {Ignored}
 */
var SampleSubscriber = (function (_super) {
    __extends(SampleSubscriber, _super);
    function SampleSubscriber(destination, notifier) {
        _super.call(this, destination);
        this.hasValue = false;
        this.add(subscribeToResult_1.subscribeToResult(this, notifier));
    }
    SampleSubscriber.prototype._next = function (value) {
        this.value = value;
        this.hasValue = true;
    };
    SampleSubscriber.prototype.notifyNext = function (outerValue, innerValue, outerIndex, innerIndex, innerSub) {
        this.emitValue();
    };
    SampleSubscriber.prototype.notifyComplete = function () {
        this.emitValue();
    };
    SampleSubscriber.prototype.emitValue = function () {
        if (this.hasValue) {
            this.hasValue = false;
            this.destination.next(this.value);
        }
    };
    return SampleSubscriber;
}(OuterSubscriber_1.OuterSubscriber));
//# sourceMappingURL=sample.js.map

/***/ },
/* 834 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
"use strict";
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var Subscriber_1 = __webpack_require__(3);
var async_1 = __webpack_require__(23);
/**
 * Emits the most recently emitted value from the source Observable within
 * periodic time intervals.
 *
 * <span class="informal">Samples the source Observable at periodic time
 * intervals, emitting what it samples.</span>
 *
 * <img src="./img/sampleTime.png" width="100%">
 *
 * `sampleTime` periodically looks at the source Observable and emits whichever
 * value it has most recently emitted since the previous sampling, unless the
 * source has not emitted anything since the previous sampling. The sampling
 * happens periodically in time every `period` milliseconds (or the time unit
 * defined by the optional `scheduler` argument). The sampling starts as soon as
 * the output Observable is subscribed.
 *
 * @example <caption>Every second, emit the most recent click at most once</caption>
 * var clicks = Rx.Observable.fromEvent(document, 'click');
 * var result = clicks.sampleTime(1000);
 * result.subscribe(x => console.log(x));
 *
 * @see {@link auditTime}
 * @see {@link debounceTime}
 * @see {@link delay}
 * @see {@link sample}
 * @see {@link throttleTime}
 *
 * @param {number} period The sampling period expressed in milliseconds or the
 * time unit determined internally by the optional `scheduler`.
 * @param {Scheduler} [scheduler=async] The {@link Scheduler} to use for
 * managing the timers that handle the sampling.
 * @return {Observable<T>} An Observable that emits the results of sampling the
 * values emitted by the source Observable at the specified time interval.
 * @method sampleTime
 * @owner Observable
 */
function sampleTime(period, scheduler) {
    if (scheduler === void 0) { scheduler = async_1.async; }
    return this.lift(new SampleTimeOperator(period, scheduler));
}
exports.sampleTime = sampleTime;
var SampleTimeOperator = (function () {
    function SampleTimeOperator(period, scheduler) {
        this.period = period;
        this.scheduler = scheduler;
    }
    SampleTimeOperator.prototype.call = function (subscriber, source) {
        return source._subscribe(new SampleTimeSubscriber(subscriber, this.period, this.scheduler));
    };
    return SampleTimeOperator;
}());
/**
 * We need this JSDoc comment for affecting ESDoc.
 * @ignore
 * @extends {Ignored}
 */
var SampleTimeSubscriber = (function (_super) {
    __extends(SampleTimeSubscriber, _super);
    function SampleTimeSubscriber(destination, period, scheduler) {
        _super.call(this, destination);
        this.period = period;
        this.scheduler = scheduler;
        this.hasValue = false;
        this.add(scheduler.schedule(dispatchNotification, period, { subscriber: this, period: period }));
    }
    SampleTimeSubscriber.prototype._next = function (value) {
        this.lastValue = value;
        this.hasValue = true;
    };
    SampleTimeSubscriber.prototype.notifyNext = function () {
        if (this.hasValue) {
            this.hasValue = false;
            this.destination.next(this.lastValue);
        }
    };
    return SampleTimeSubscriber;
}(Subscriber_1.Subscriber));
function dispatchNotification(state) {
    var subscriber = state.subscriber, period = state.period;
    subscriber.notifyNext();
    this.schedule(state, period);
}
//# sourceMappingURL=sampleTime.js.map

/***/ },
/* 835 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
"use strict";
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var Subscriber_1 = __webpack_require__(3);
/**
 * Applies an accumulator function over the source Observable, and returns each
 * intermediate result, with an optional seed value.
 *
 * <span class="informal">It's like {@link reduce}, but emits the current
 * accumulation whenever the source emits a value.</span>
 *
 * <img src="./img/scan.png" width="100%">
 *
 * Combines together all values emitted on the source, using an accumulator
 * function that knows how to join a new source value into the accumulation from
 * the past. Is similar to {@link reduce}, but emits the intermediate
 * accumulations.
 *
 * Returns an Observable that applies a specified `accumulator` function to each
 * item emitted by the source Observable. If a `seed` value is specified, then
 * that value will be used as the initial value for the accumulator. If no seed
 * value is specified, the first item of the source is used as the seed.
 *
 * @example <caption>Count the number of click events</caption>
 * var clicks = Rx.Observable.fromEvent(document, 'click');
 * var ones = clicks.mapTo(1);
 * var seed = 0;
 * var count = ones.scan((acc, one) => acc + one, seed);
 * count.subscribe(x => console.log(x));
 *
 * @see {@link expand}
 * @see {@link mergeScan}
 * @see {@link reduce}
 *
 * @param {function(acc: R, value: T, index: number): R} accumulator
 * The accumulator function called on each source value.
 * @param {T|R} [seed] The initial accumulation value.
 * @return {Observable<R>} An observable of the accumulated values.
 * @method scan
 * @owner Observable
 */
function scan(accumulator, seed) {
    return this.lift(new ScanOperator(accumulator, seed));
}
exports.scan = scan;
var ScanOperator = (function () {
    function ScanOperator(accumulator, seed) {
        this.accumulator = accumulator;
        this.seed = seed;
    }
    ScanOperator.prototype.call = function (subscriber, source) {
        return source._subscribe(new ScanSubscriber(subscriber, this.accumulator, this.seed));
    };
    return ScanOperator;
}());
/**
 * We need this JSDoc comment for affecting ESDoc.
 * @ignore
 * @extends {Ignored}
 */
var ScanSubscriber = (function (_super) {
    __extends(ScanSubscriber, _super);
    function ScanSubscriber(destination, accumulator, seed) {
        _super.call(this, destination);
        this.accumulator = accumulator;
        this.index = 0;
        this.accumulatorSet = false;
        this.seed = seed;
        this.accumulatorSet = typeof seed !== 'undefined';
    }
    Object.defineProperty(ScanSubscriber.prototype, "seed", {
        get: function () {
            return this._seed;
        },
        set: function (value) {
            this.accumulatorSet = true;
            this._seed = value;
        },
        enumerable: true,
        configurable: true
    });
    ScanSubscriber.prototype._next = function (value) {
        if (!this.accumulatorSet) {
            this.seed = value;
            this.destination.next(value);
        }
        else {
            return this._tryNext(value);
        }
    };
    ScanSubscriber.prototype._tryNext = function (value) {
        var index = this.index++;
        var result;
        try {
            result = this.accumulator(this.seed, value, index);
        }
        catch (err) {
            this.destination.error(err);
        }
        this.seed = result;
        this.destination.next(result);
    };
    return ScanSubscriber;
}(Subscriber_1.Subscriber));
//# sourceMappingURL=scan.js.map

/***/ },
/* 836 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
"use strict";
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var Subscriber_1 = __webpack_require__(3);
var tryCatch_1 = __webpack_require__(17);
var errorObject_1 = __webpack_require__(16);
/**
 * Compares all values of two observables in sequence using an optional comparor function
 * and returns an observable of a single boolean value representing whether or not the two sequences
 * are equal.
 *
 * <span class="informal">Checks to see of all values emitted by both observables are equal, in order.</span>
 *
 * <img src="./img/sequenceEqual.png" width="100%">
 *
 * `sequenceEqual` subscribes to two observables and buffers incoming values from each observable. Whenever either
 * observable emits a value, the value is buffered and the buffers are shifted and compared from the bottom
 * up; If any value pair doesn't match, the returned observable will emit `false` and complete. If one of the
 * observables completes, the operator will wait for the other observable to complete; If the other
 * observable emits before completing, the returned observable will emit `false` and complete. If one observable never
 * completes or emits after the other complets, the returned observable will never complete.
 *
 * @example <caption>figure out if the Konami code matches</caption>
 * var code = Observable.from([
 *  "ArrowUp",
 *  "ArrowUp",
 *  "ArrowDown",
 *  "ArrowDown",
 *  "ArrowLeft",
 *  "ArrowRight",
 *  "ArrowLeft",
 *  "ArrowRight",
 *  "KeyB",
 *  "KeyA",
 *  "Enter" // no start key, clearly.
 * ]);
 *
 * var keys = Rx.Observable.fromEvent(document, 'keyup')
 *  .map(e => e.code);
 * var matches = keys.bufferCount(11, 1)
 *  .mergeMap(
 *    last11 =>
 *      Rx.Observable.from(last11)
 *        .sequenceEqual(code)
 *   );
 * matches.subscribe(matched => console.log('Successful cheat at Contra? ', matched));
 *
 * @see {@link combineLatest}
 * @see {@link zip}
 * @see {@link withLatestFrom}
 *
 * @param {Observable} compareTo the observable sequence to compare the source sequence to.
 * @param {function} [comparor] An optional function to compare each value pair
 * @return {Observable} An Observable of a single boolean value representing whether or not
 * the values emitted by both observables were equal in sequence
 * @method sequenceEqual
 * @owner Observable
 */
function sequenceEqual(compareTo, comparor) {
    return this.lift(new SequenceEqualOperator(compareTo, comparor));
}
exports.sequenceEqual = sequenceEqual;
var SequenceEqualOperator = (function () {
    function SequenceEqualOperator(compareTo, comparor) {
        this.compareTo = compareTo;
        this.comparor = comparor;
    }
    SequenceEqualOperator.prototype.call = function (subscriber, source) {
        return source._subscribe(new SequenceEqualSubscriber(subscriber, this.compareTo, this.comparor));
    };
    return SequenceEqualOperator;
}());
exports.SequenceEqualOperator = SequenceEqualOperator;
/**
 * We need this JSDoc comment for affecting ESDoc.
 * @ignore
 * @extends {Ignored}
 */
var SequenceEqualSubscriber = (function (_super) {
    __extends(SequenceEqualSubscriber, _super);
    function SequenceEqualSubscriber(destination, compareTo, comparor) {
        _super.call(this, destination);
        this.compareTo = compareTo;
        this.comparor = comparor;
        this._a = [];
        this._b = [];
        this._oneComplete = false;
        this.add(compareTo.subscribe(new SequenceEqualCompareToSubscriber(destination, this)));
    }
    SequenceEqualSubscriber.prototype._next = function (value) {
        if (this._oneComplete && this._b.length === 0) {
            this.emit(false);
        }
        else {
            this._a.push(value);
            this.checkValues();
        }
    };
    SequenceEqualSubscriber.prototype._complete = function () {
        if (this._oneComplete) {
            this.emit(this._a.length === 0 && this._b.length === 0);
        }
        else {
            this._oneComplete = true;
        }
    };
    SequenceEqualSubscriber.prototype.checkValues = function () {
        var _c = this, _a = _c._a, _b = _c._b, comparor = _c.comparor;
        while (_a.length > 0 && _b.length > 0) {
            var a = _a.shift();
            var b = _b.shift();
            var areEqual = false;
            if (comparor) {
                areEqual = tryCatch_1.tryCatch(comparor)(a, b);
                if (areEqual === errorObject_1.errorObject) {
                    this.destination.error(errorObject_1.errorObject.e);
                }
            }
            else {
                areEqual = a === b;
            }
            if (!areEqual) {
                this.emit(false);
            }
        }
    };
    SequenceEqualSubscriber.prototype.emit = function (value) {
        var destination = this.destination;
        destination.next(value);
        destination.complete();
    };
    SequenceEqualSubscriber.prototype.nextB = function (value) {
        if (this._oneComplete && this._a.length === 0) {
            this.emit(false);
        }
        else {
            this._b.push(value);
            this.checkValues();
        }
    };
    return SequenceEqualSubscriber;
}(Subscriber_1.Subscriber));
exports.SequenceEqualSubscriber = SequenceEqualSubscriber;
var SequenceEqualCompareToSubscriber = (function (_super) {
    __extends(SequenceEqualCompareToSubscriber, _super);
    function SequenceEqualCompareToSubscriber(destination, parent) {
        _super.call(this, destination);
        this.parent = parent;
    }
    SequenceEqualCompareToSubscriber.prototype._next = function (value) {
        this.parent.nextB(value);
    };
    SequenceEqualCompareToSubscriber.prototype._error = function (err) {
        this.parent.error(err);
    };
    SequenceEqualCompareToSubscriber.prototype._complete = function () {
        this.parent._complete();
    };
    return SequenceEqualCompareToSubscriber;
}(Subscriber_1.Subscriber));
//# sourceMappingURL=sequenceEqual.js.map

/***/ },
/* 837 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
"use strict";
var multicast_1 = __webpack_require__(65);
var Subject_1 = __webpack_require__(10);
function shareSubjectFactory() {
    return new Subject_1.Subject();
}
/**
 * Returns a new Observable that multicasts (shares) the original Observable. As long as there is at least one
 * Subscriber this Observable will be subscribed and emitting data. When all subscribers have unsubscribed it will
 * unsubscribe from the source Observable. Because the Observable is multicasting it makes the stream `hot`.
 * This is an alias for .publish().refCount().
 *
 * <img src="./img/share.png" width="100%">
 *
 * @return {Observable<T>} an Observable that upon connection causes the source Observable to emit items to its Observers
 * @method share
 * @owner Observable
 */
function share() {
    return multicast_1.multicast.call(this, shareSubjectFactory).refCount();
}
exports.share = share;
;
//# sourceMappingURL=share.js.map

/***/ },
/* 838 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
"use strict";
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var Subscriber_1 = __webpack_require__(3);
var EmptyError_1 = __webpack_require__(83);
/**
 * Returns an Observable that emits the single item emitted by the source Observable that matches a specified
 * predicate, if that Observable emits one such item. If the source Observable emits more than one such item or no
 * such items, notify of an IllegalArgumentException or NoSuchElementException respectively.
 *
 * <img src="./img/single.png" width="100%">
 *
 * @throws {EmptyError} Delivers an EmptyError to the Observer's `error`
 * callback if the Observable completes before any `next` notification was sent.
 * @param {Function} a predicate function to evaluate items emitted by the source Observable.
 * @return {Observable<T>} an Observable that emits the single item emitted by the source Observable that matches
 * the predicate.
 .
 * @method single
 * @owner Observable
 */
function single(predicate) {
    return this.lift(new SingleOperator(predicate, this));
}
exports.single = single;
var SingleOperator = (function () {
    function SingleOperator(predicate, source) {
        this.predicate = predicate;
        this.source = source;
    }
    SingleOperator.prototype.call = function (subscriber, source) {
        return source._subscribe(new SingleSubscriber(subscriber, this.predicate, this.source));
    };
    return SingleOperator;
}());
/**
 * We need this JSDoc comment for affecting ESDoc.
 * @ignore
 * @extends {Ignored}
 */
var SingleSubscriber = (function (_super) {
    __extends(SingleSubscriber, _super);
    function SingleSubscriber(destination, predicate, source) {
        _super.call(this, destination);
        this.predicate = predicate;
        this.source = source;
        this.seenValue = false;
        this.index = 0;
    }
    SingleSubscriber.prototype.applySingleValue = function (value) {
        if (this.seenValue) {
            this.destination.error('Sequence contains more than one element');
        }
        else {
            this.seenValue = true;
            this.singleValue = value;
        }
    };
    SingleSubscriber.prototype._next = function (value) {
        var predicate = this.predicate;
        this.index++;
        if (predicate) {
            this.tryNext(value);
        }
        else {
            this.applySingleValue(value);
        }
    };
    SingleSubscriber.prototype.tryNext = function (value) {
        try {
            var result = this.predicate(value, this.index, this.source);
            if (result) {
                this.applySingleValue(value);
            }
        }
        catch (err) {
            this.destination.error(err);
        }
    };
    SingleSubscriber.prototype._complete = function () {
        var destination = this.destination;
        if (this.index > 0) {
            destination.next(this.seenValue ? this.singleValue : undefined);
            destination.complete();
        }
        else {
            destination.error(new EmptyError_1.EmptyError);
        }
    };
    return SingleSubscriber;
}(Subscriber_1.Subscriber));
//# sourceMappingURL=single.js.map

/***/ },
/* 839 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
"use strict";
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var Subscriber_1 = __webpack_require__(3);
/**
 * Returns an Observable that skips `n` items emitted by an Observable.
 *
 * <img src="./img/skip.png" width="100%">
 *
 * @param {Number} the `n` of times, items emitted by source Observable should be skipped.
 * @return {Observable} an Observable that skips values emitted by the source Observable.
 *
 * @method skip
 * @owner Observable
 */
function skip(total) {
    return this.lift(new SkipOperator(total));
}
exports.skip = skip;
var SkipOperator = (function () {
    function SkipOperator(total) {
        this.total = total;
    }
    SkipOperator.prototype.call = function (subscriber, source) {
        return source._subscribe(new SkipSubscriber(subscriber, this.total));
    };
    return SkipOperator;
}());
/**
 * We need this JSDoc comment for affecting ESDoc.
 * @ignore
 * @extends {Ignored}
 */
var SkipSubscriber = (function (_super) {
    __extends(SkipSubscriber, _super);
    function SkipSubscriber(destination, total) {
        _super.call(this, destination);
        this.total = total;
        this.count = 0;
    }
    SkipSubscriber.prototype._next = function (x) {
        if (++this.count > this.total) {
            this.destination.next(x);
        }
    };
    return SkipSubscriber;
}(Subscriber_1.Subscriber));
//# sourceMappingURL=skip.js.map

/***/ },
/* 840 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
"use strict";
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var OuterSubscriber_1 = __webpack_require__(6);
var subscribeToResult_1 = __webpack_require__(7);
/**
 * Returns an Observable that skips items emitted by the source Observable until a second Observable emits an item.
 *
 * <img src="./img/skipUntil.png" width="100%">
 *
 * @param {Observable} the second Observable that has to emit an item before the source Observable's elements begin to
 * be mirrored by the resulting Observable.
 * @return {Observable<T>} an Observable that skips items from the source Observable until the second Observable emits
 * an item, then emits the remaining items.
 * @method skipUntil
 * @owner Observable
 */
function skipUntil(notifier) {
    return this.lift(new SkipUntilOperator(notifier));
}
exports.skipUntil = skipUntil;
var SkipUntilOperator = (function () {
    function SkipUntilOperator(notifier) {
        this.notifier = notifier;
    }
    SkipUntilOperator.prototype.call = function (subscriber, source) {
        return source._subscribe(new SkipUntilSubscriber(subscriber, this.notifier));
    };
    return SkipUntilOperator;
}());
/**
 * We need this JSDoc comment for affecting ESDoc.
 * @ignore
 * @extends {Ignored}
 */
var SkipUntilSubscriber = (function (_super) {
    __extends(SkipUntilSubscriber, _super);
    function SkipUntilSubscriber(destination, notifier) {
        _super.call(this, destination);
        this.hasValue = false;
        this.isInnerStopped = false;
        this.add(subscribeToResult_1.subscribeToResult(this, notifier));
    }
    SkipUntilSubscriber.prototype._next = function (value) {
        if (this.hasValue) {
            _super.prototype._next.call(this, value);
        }
    };
    SkipUntilSubscriber.prototype._complete = function () {
        if (this.isInnerStopped) {
            _super.prototype._complete.call(this);
        }
        else {
            this.unsubscribe();
        }
    };
    SkipUntilSubscriber.prototype.notifyNext = function (outerValue, innerValue, outerIndex, innerIndex, innerSub) {
        this.hasValue = true;
    };
    SkipUntilSubscriber.prototype.notifyComplete = function () {
        this.isInnerStopped = true;
        if (this.isStopped) {
            _super.prototype._complete.call(this);
        }
    };
    return SkipUntilSubscriber;
}(OuterSubscriber_1.OuterSubscriber));
//# sourceMappingURL=skipUntil.js.map

/***/ },
/* 841 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
"use strict";
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var Subscriber_1 = __webpack_require__(3);
/**
 * Returns an Observable that skips all items emitted by the source Observable as long as a specified condition holds
 * true, but emits all further source items as soon as the condition becomes false.
 *
 * <img src="./img/skipWhile.png" width="100%">
 *
 * @param {Function} predicate - a function to test each item emitted from the source Observable.
 * @return {Observable<T>} an Observable that begins emitting items emitted by the source Observable when the
 * specified predicate becomes false.
 * @method skipWhile
 * @owner Observable
 */
function skipWhile(predicate) {
    return this.lift(new SkipWhileOperator(predicate));
}
exports.skipWhile = skipWhile;
var SkipWhileOperator = (function () {
    function SkipWhileOperator(predicate) {
        this.predicate = predicate;
    }
    SkipWhileOperator.prototype.call = function (subscriber, source) {
        return source._subscribe(new SkipWhileSubscriber(subscriber, this.predicate));
    };
    return SkipWhileOperator;
}());
/**
 * We need this JSDoc comment for affecting ESDoc.
 * @ignore
 * @extends {Ignored}
 */
var SkipWhileSubscriber = (function (_super) {
    __extends(SkipWhileSubscriber, _super);
    function SkipWhileSubscriber(destination, predicate) {
        _super.call(this, destination);
        this.predicate = predicate;
        this.skipping = true;
        this.index = 0;
    }
    SkipWhileSubscriber.prototype._next = function (value) {
        var destination = this.destination;
        if (this.skipping) {
            this.tryCallPredicate(value);
        }
        if (!this.skipping) {
            destination.next(value);
        }
    };
    SkipWhileSubscriber.prototype.tryCallPredicate = function (value) {
        try {
            var result = this.predicate(value, this.index++);
            this.skipping = Boolean(result);
        }
        catch (err) {
            this.destination.error(err);
        }
    };
    return SkipWhileSubscriber;
}(Subscriber_1.Subscriber));
//# sourceMappingURL=skipWhile.js.map

/***/ },
/* 842 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
"use strict";
var ArrayObservable_1 = __webpack_require__(40);
var ScalarObservable_1 = __webpack_require__(292);
var EmptyObservable_1 = __webpack_require__(46);
var concat_1 = __webpack_require__(295);
var isScheduler_1 = __webpack_require__(47);
/**
 * Returns an Observable that emits the items in a specified Iterable before it begins to emit items emitted by the
 * source Observable.
 *
 * <img src="./img/startWith.png" width="100%">
 *
 * @param {Values} an Iterable that contains the items you want the modified Observable to emit first.
 * @return {Observable} an Observable that emits the items in the specified Iterable and then emits the items
 * emitted by the source Observable.
 * @method startWith
 * @owner Observable
 */
function startWith() {
    var array = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        array[_i - 0] = arguments[_i];
    }
    var scheduler = array[array.length - 1];
    if (isScheduler_1.isScheduler(scheduler)) {
        array.pop();
    }
    else {
        scheduler = null;
    }
    var len = array.length;
    if (len === 1) {
        return concat_1.concatStatic(new ScalarObservable_1.ScalarObservable(array[0], scheduler), this);
    }
    else if (len > 1) {
        return concat_1.concatStatic(new ArrayObservable_1.ArrayObservable(array, scheduler), this);
    }
    else {
        return concat_1.concatStatic(new EmptyObservable_1.EmptyObservable(scheduler), this);
    }
}
exports.startWith = startWith;
//# sourceMappingURL=startWith.js.map

/***/ },
/* 843 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
"use strict";
var SubscribeOnObservable_1 = __webpack_require__(761);
/**
 * Asynchronously subscribes Observers to this Observable on the specified Scheduler.
 *
 * <img src="./img/subscribeOn.png" width="100%">
 *
 * @param {Scheduler} the Scheduler to perform subscription actions on.
 * @return {Observable<T>} the source Observable modified so that its subscriptions happen on the specified Scheduler
 .
 * @method subscribeOn
 * @owner Observable
 */
function subscribeOn(scheduler, delay) {
    if (delay === void 0) { delay = 0; }
    return new SubscribeOnObservable_1.SubscribeOnObservable(this, delay, scheduler);
}
exports.subscribeOn = subscribeOn;
//# sourceMappingURL=subscribeOn.js.map

/***/ },
/* 844 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
"use strict";
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var OuterSubscriber_1 = __webpack_require__(6);
var subscribeToResult_1 = __webpack_require__(7);
/**
 * Converts a higher-order Observable into a first-order Observable by
 * subscribing to only the most recently emitted of those inner Observables.
 *
 * <span class="informal">Flattens an Observable-of-Observables by dropping the
 * previous inner Observable once a new one appears.</span>
 *
 * <img src="./img/switch.png" width="100%">
 *
 * `switch` subscribes to an Observable that emits Observables, also known as a
 * higher-order Observable. Each time it observes one of these emitted inner
 * Observables, the output Observable subscribes to the inner Observable and
 * begins emitting the items emitted by that. So far, it behaves
 * like {@link mergeAll}. However, when a new inner Observable is emitted,
 * `switch` unsubscribes from the earlier-emitted inner Observable and
 * subscribes to the new inner Observable and begins emitting items from it. It
 * continues to behave like this for subsequent inner Observables.
 *
 * @example <caption>Rerun an interval Observable on every click event</caption>
 * var clicks = Rx.Observable.fromEvent(document, 'click');
 * // Each click event is mapped to an Observable that ticks every second
 * var higherOrder = clicks.map((ev) => Rx.Observable.interval(1000));
 * var switched = higherOrder.switch();
 * // The outcome is that `switched` is essentially a timer that restarts
 * // on every click. The interval Observables from older clicks do not merge
 * // with the current interval Observable.
 * switched.subscribe(x => console.log(x));
 *
 * @see {@link combineAll}
 * @see {@link concatAll}
 * @see {@link exhaust}
 * @see {@link mergeAll}
 * @see {@link switchMap}
 * @see {@link switchMapTo}
 * @see {@link zipAll}
 *
 * @return {Observable<T>} An Observable that emits the items emitted by the
 * Observable most recently emitted by the source Observable.
 * @method switch
 * @name switch
 * @owner Observable
 */
function _switch() {
    return this.lift(new SwitchOperator());
}
exports._switch = _switch;
var SwitchOperator = (function () {
    function SwitchOperator() {
    }
    SwitchOperator.prototype.call = function (subscriber, source) {
        return source._subscribe(new SwitchSubscriber(subscriber));
    };
    return SwitchOperator;
}());
/**
 * We need this JSDoc comment for affecting ESDoc.
 * @ignore
 * @extends {Ignored}
 */
var SwitchSubscriber = (function (_super) {
    __extends(SwitchSubscriber, _super);
    function SwitchSubscriber(destination) {
        _super.call(this, destination);
        this.active = 0;
        this.hasCompleted = false;
    }
    SwitchSubscriber.prototype._next = function (value) {
        this.unsubscribeInner();
        this.active++;
        this.add(this.innerSubscription = subscribeToResult_1.subscribeToResult(this, value));
    };
    SwitchSubscriber.prototype._complete = function () {
        this.hasCompleted = true;
        if (this.active === 0) {
            this.destination.complete();
        }
    };
    SwitchSubscriber.prototype.unsubscribeInner = function () {
        this.active = this.active > 0 ? this.active - 1 : 0;
        var innerSubscription = this.innerSubscription;
        if (innerSubscription) {
            innerSubscription.unsubscribe();
            this.remove(innerSubscription);
        }
    };
    SwitchSubscriber.prototype.notifyNext = function (outerValue, innerValue, outerIndex, innerIndex, innerSub) {
        this.destination.next(innerValue);
    };
    SwitchSubscriber.prototype.notifyError = function (err) {
        this.destination.error(err);
    };
    SwitchSubscriber.prototype.notifyComplete = function () {
        this.unsubscribeInner();
        if (this.hasCompleted && this.active === 0) {
            this.destination.complete();
        }
    };
    return SwitchSubscriber;
}(OuterSubscriber_1.OuterSubscriber));
//# sourceMappingURL=switch.js.map

/***/ },
/* 845 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
"use strict";
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var OuterSubscriber_1 = __webpack_require__(6);
var subscribeToResult_1 = __webpack_require__(7);
/**
 * Projects each source value to an Observable which is merged in the output
 * Observable, emitting values only from the most recently projected Observable.
 *
 * <span class="informal">Maps each value to an Observable, then flattens all of
 * these inner Observables using {@link switch}.</span>
 *
 * <img src="./img/switchMap.png" width="100%">
 *
 * Returns an Observable that emits items based on applying a function that you
 * supply to each item emitted by the source Observable, where that function
 * returns an (so-called "inner") Observable. Each time it observes one of these
 * inner Observables, the output Observable begins emitting the items emitted by
 * that inner Observable. When a new inner Observable is emitted, `switchMap`
 * stops emitting items from the earlier-emitted inner Observable and begins
 * emitting items from the new one. It continues to behave like this for
 * subsequent inner Observables.
 *
 * @example <caption>Rerun an interval Observable on every click event</caption>
 * var clicks = Rx.Observable.fromEvent(document, 'click');
 * var result = clicks.switchMap((ev) => Rx.Observable.interval(1000));
 * result.subscribe(x => console.log(x));
 *
 * @see {@link concatMap}
 * @see {@link exhaustMap}
 * @see {@link mergeMap}
 * @see {@link switch}
 * @see {@link switchMapTo}
 *
 * @param {function(value: T, ?index: number): Observable} project A function
 * that, when applied to an item emitted by the source Observable, returns an
 * Observable.
 * @param {function(outerValue: T, innerValue: I, outerIndex: number, innerIndex: number): any} [resultSelector]
 * A function to produce the value on the output Observable based on the values
 * and the indices of the source (outer) emission and the inner Observable
 * emission. The arguments passed to this function are:
 * - `outerValue`: the value that came from the source
 * - `innerValue`: the value that came from the projected Observable
 * - `outerIndex`: the "index" of the value that came from the source
 * - `innerIndex`: the "index" of the value from the projected Observable
 * @return {Observable} An Observable that emits the result of applying the
 * projection function (and the optional `resultSelector`) to each item emitted
 * by the source Observable and taking only the values from the most recently
 * projected inner Observable.
 * @method switchMap
 * @owner Observable
 */
function switchMap(project, resultSelector) {
    return this.lift(new SwitchMapOperator(project, resultSelector));
}
exports.switchMap = switchMap;
var SwitchMapOperator = (function () {
    function SwitchMapOperator(project, resultSelector) {
        this.project = project;
        this.resultSelector = resultSelector;
    }
    SwitchMapOperator.prototype.call = function (subscriber, source) {
        return source._subscribe(new SwitchMapSubscriber(subscriber, this.project, this.resultSelector));
    };
    return SwitchMapOperator;
}());
/**
 * We need this JSDoc comment for affecting ESDoc.
 * @ignore
 * @extends {Ignored}
 */
var SwitchMapSubscriber = (function (_super) {
    __extends(SwitchMapSubscriber, _super);
    function SwitchMapSubscriber(destination, project, resultSelector) {
        _super.call(this, destination);
        this.project = project;
        this.resultSelector = resultSelector;
        this.index = 0;
    }
    SwitchMapSubscriber.prototype._next = function (value) {
        var result;
        var index = this.index++;
        try {
            result = this.project(value, index);
        }
        catch (error) {
            this.destination.error(error);
            return;
        }
        this._innerSub(result, value, index);
    };
    SwitchMapSubscriber.prototype._innerSub = function (result, value, index) {
        var innerSubscription = this.innerSubscription;
        if (innerSubscription) {
            innerSubscription.unsubscribe();
        }
        this.add(this.innerSubscription = subscribeToResult_1.subscribeToResult(this, result, value, index));
    };
    SwitchMapSubscriber.prototype._complete = function () {
        var innerSubscription = this.innerSubscription;
        if (!innerSubscription || innerSubscription.closed) {
            _super.prototype._complete.call(this);
        }
    };
    SwitchMapSubscriber.prototype._unsubscribe = function () {
        this.innerSubscription = null;
    };
    SwitchMapSubscriber.prototype.notifyComplete = function (innerSub) {
        this.remove(innerSub);
        this.innerSubscription = null;
        if (this.isStopped) {
            _super.prototype._complete.call(this);
        }
    };
    SwitchMapSubscriber.prototype.notifyNext = function (outerValue, innerValue, outerIndex, innerIndex, innerSub) {
        if (this.resultSelector) {
            this._tryNotifyNext(outerValue, innerValue, outerIndex, innerIndex);
        }
        else {
            this.destination.next(innerValue);
        }
    };
    SwitchMapSubscriber.prototype._tryNotifyNext = function (outerValue, innerValue, outerIndex, innerIndex) {
        var result;
        try {
            result = this.resultSelector(outerValue, innerValue, outerIndex, innerIndex);
        }
        catch (err) {
            this.destination.error(err);
            return;
        }
        this.destination.next(result);
    };
    return SwitchMapSubscriber;
}(OuterSubscriber_1.OuterSubscriber));
//# sourceMappingURL=switchMap.js.map

/***/ },
/* 846 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
"use strict";
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var OuterSubscriber_1 = __webpack_require__(6);
var subscribeToResult_1 = __webpack_require__(7);
/**
 * Projects each source value to the same Observable which is flattened multiple
 * times with {@link switch} in the output Observable.
 *
 * <span class="informal">It's like {@link switchMap}, but maps each value
 * always to the same inner Observable.</span>
 *
 * <img src="./img/switchMapTo.png" width="100%">
 *
 * Maps each source value to the given Observable `innerObservable` regardless
 * of the source value, and then flattens those resulting Observables into one
 * single Observable, which is the output Observable. The output Observables
 * emits values only from the most recently emitted instance of
 * `innerObservable`.
 *
 * @example <caption>Rerun an interval Observable on every click event</caption>
 * var clicks = Rx.Observable.fromEvent(document, 'click');
 * var result = clicks.switchMapTo(Rx.Observable.interval(1000));
 * result.subscribe(x => console.log(x));
 *
 * @see {@link concatMapTo}
 * @see {@link switch}
 * @see {@link switchMap}
 * @see {@link mergeMapTo}
 *
 * @param {Observable} innerObservable An Observable to replace each value from
 * the source Observable.
 * @param {function(outerValue: T, innerValue: I, outerIndex: number, innerIndex: number): any} [resultSelector]
 * A function to produce the value on the output Observable based on the values
 * and the indices of the source (outer) emission and the inner Observable
 * emission. The arguments passed to this function are:
 * - `outerValue`: the value that came from the source
 * - `innerValue`: the value that came from the projected Observable
 * - `outerIndex`: the "index" of the value that came from the source
 * - `innerIndex`: the "index" of the value from the projected Observable
 * @return {Observable} An Observable that emits items from the given
 * `innerObservable` every time a value is emitted on the source Observable.
 * @return {Observable} An Observable that emits items from the given
 * `innerObservable` (and optionally transformed through `resultSelector`) every
 * time a value is emitted on the source Observable, and taking only the values
 * from the most recently projected inner Observable.
 * @method switchMapTo
 * @owner Observable
 */
function switchMapTo(innerObservable, resultSelector) {
    return this.lift(new SwitchMapToOperator(innerObservable, resultSelector));
}
exports.switchMapTo = switchMapTo;
var SwitchMapToOperator = (function () {
    function SwitchMapToOperator(observable, resultSelector) {
        this.observable = observable;
        this.resultSelector = resultSelector;
    }
    SwitchMapToOperator.prototype.call = function (subscriber, source) {
        return source._subscribe(new SwitchMapToSubscriber(subscriber, this.observable, this.resultSelector));
    };
    return SwitchMapToOperator;
}());
/**
 * We need this JSDoc comment for affecting ESDoc.
 * @ignore
 * @extends {Ignored}
 */
var SwitchMapToSubscriber = (function (_super) {
    __extends(SwitchMapToSubscriber, _super);
    function SwitchMapToSubscriber(destination, inner, resultSelector) {
        _super.call(this, destination);
        this.inner = inner;
        this.resultSelector = resultSelector;
        this.index = 0;
    }
    SwitchMapToSubscriber.prototype._next = function (value) {
        var innerSubscription = this.innerSubscription;
        if (innerSubscription) {
            innerSubscription.unsubscribe();
        }
        this.add(this.innerSubscription = subscribeToResult_1.subscribeToResult(this, this.inner, value, this.index++));
    };
    SwitchMapToSubscriber.prototype._complete = function () {
        var innerSubscription = this.innerSubscription;
        if (!innerSubscription || innerSubscription.closed) {
            _super.prototype._complete.call(this);
        }
    };
    SwitchMapToSubscriber.prototype._unsubscribe = function () {
        this.innerSubscription = null;
    };
    SwitchMapToSubscriber.prototype.notifyComplete = function (innerSub) {
        this.remove(innerSub);
        this.innerSubscription = null;
        if (this.isStopped) {
            _super.prototype._complete.call(this);
        }
    };
    SwitchMapToSubscriber.prototype.notifyNext = function (outerValue, innerValue, outerIndex, innerIndex, innerSub) {
        var _a = this, resultSelector = _a.resultSelector, destination = _a.destination;
        if (resultSelector) {
            this.tryResultSelector(outerValue, innerValue, outerIndex, innerIndex);
        }
        else {
            destination.next(innerValue);
        }
    };
    SwitchMapToSubscriber.prototype.tryResultSelector = function (outerValue, innerValue, outerIndex, innerIndex) {
        var _a = this, resultSelector = _a.resultSelector, destination = _a.destination;
        var result;
        try {
            result = resultSelector(outerValue, innerValue, outerIndex, innerIndex);
        }
        catch (err) {
            destination.error(err);
            return;
        }
        destination.next(result);
    };
    return SwitchMapToSubscriber;
}(OuterSubscriber_1.OuterSubscriber));
//# sourceMappingURL=switchMapTo.js.map

/***/ },
/* 847 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
"use strict";
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var Subscriber_1 = __webpack_require__(3);
var ArgumentOutOfRangeError_1 = __webpack_require__(125);
var EmptyObservable_1 = __webpack_require__(46);
/**
 * Emits only the first `count` values emitted by the source Observable.
 *
 * <span class="informal">Takes the first `count` values from the source, then
 * completes.</span>
 *
 * <img src="./img/take.png" width="100%">
 *
 * `take` returns an Observable that emits only the first `count` values emitted
 * by the source Observable. If the source emits fewer than `count` values then
 * all of its values are emitted. After that, it completes, regardless if the
 * source completes.
 *
 * @example <caption>Take the first 5 seconds of an infinite 1-second interval Observable</caption>
 * var interval = Rx.Observable.interval(1000);
 * var five = interval.take(5);
 * five.subscribe(x => console.log(x));
 *
 * @see {@link takeLast}
 * @see {@link takeUntil}
 * @see {@link takeWhile}
 * @see {@link skip}
 *
 * @throws {ArgumentOutOfRangeError} When using `take(i)`, it delivers an
 * ArgumentOutOrRangeError to the Observer's `error` callback if `i < 0`.
 *
 * @param {number} count The maximum number of `next` values to emit.
 * @return {Observable<T>} An Observable that emits only the first `count`
 * values emitted by the source Observable, or all of the values from the source
 * if the source emits fewer than `count` values.
 * @method take
 * @owner Observable
 */
function take(count) {
    if (count === 0) {
        return new EmptyObservable_1.EmptyObservable();
    }
    else {
        return this.lift(new TakeOperator(count));
    }
}
exports.take = take;
var TakeOperator = (function () {
    function TakeOperator(total) {
        this.total = total;
        if (this.total < 0) {
            throw new ArgumentOutOfRangeError_1.ArgumentOutOfRangeError;
        }
    }
    TakeOperator.prototype.call = function (subscriber, source) {
        return source._subscribe(new TakeSubscriber(subscriber, this.total));
    };
    return TakeOperator;
}());
/**
 * We need this JSDoc comment for affecting ESDoc.
 * @ignore
 * @extends {Ignored}
 */
var TakeSubscriber = (function (_super) {
    __extends(TakeSubscriber, _super);
    function TakeSubscriber(destination, total) {
        _super.call(this, destination);
        this.total = total;
        this.count = 0;
    }
    TakeSubscriber.prototype._next = function (value) {
        var total = this.total;
        if (++this.count <= total) {
            this.destination.next(value);
            if (this.count === total) {
                this.destination.complete();
                this.unsubscribe();
            }
        }
    };
    return TakeSubscriber;
}(Subscriber_1.Subscriber));
//# sourceMappingURL=take.js.map

/***/ },
/* 848 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
"use strict";
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var Subscriber_1 = __webpack_require__(3);
var ArgumentOutOfRangeError_1 = __webpack_require__(125);
var EmptyObservable_1 = __webpack_require__(46);
/**
 * Emits only the last `count` values emitted by the source Observable.
 *
 * <span class="informal">Remembers the latest `count` values, then emits those
 * only when the source completes.</span>
 *
 * <img src="./img/takeLast.png" width="100%">
 *
 * `takeLast` returns an Observable that emits at most the last `count` values
 * emitted by the source Observable. If the source emits fewer than `count`
 * values then all of its values are emitted. This operator must wait until the
 * `complete` notification emission from the source in order to emit the `next`
 * values on the output Observable, because otherwise it is impossible to know
 * whether or not more values will be emitted on the source. For this reason,
 * all values are emitted synchronously, followed by the complete notification.
 *
 * @example <caption>Take the last 3 values of an Observable with many values</caption>
 * var many = Rx.Observable.range(1, 100);
 * var lastThree = many.takeLast(3);
 * lastThree.subscribe(x => console.log(x));
 *
 * @see {@link take}
 * @see {@link takeUntil}
 * @see {@link takeWhile}
 * @see {@link skip}
 *
 * @throws {ArgumentOutOfRangeError} When using `takeLast(i)`, it delivers an
 * ArgumentOutOrRangeError to the Observer's `error` callback if `i < 0`.
 *
 * @param {number} count The maximum number of values to emit from the end of
 * the sequence of values emitted by the source Observable.
 * @return {Observable<T>} An Observable that emits at most the last count
 * values emitted by the source Observable.
 * @method takeLast
 * @owner Observable
 */
function takeLast(count) {
    if (count === 0) {
        return new EmptyObservable_1.EmptyObservable();
    }
    else {
        return this.lift(new TakeLastOperator(count));
    }
}
exports.takeLast = takeLast;
var TakeLastOperator = (function () {
    function TakeLastOperator(total) {
        this.total = total;
        if (this.total < 0) {
            throw new ArgumentOutOfRangeError_1.ArgumentOutOfRangeError;
        }
    }
    TakeLastOperator.prototype.call = function (subscriber, source) {
        return source._subscribe(new TakeLastSubscriber(subscriber, this.total));
    };
    return TakeLastOperator;
}());
/**
 * We need this JSDoc comment for affecting ESDoc.
 * @ignore
 * @extends {Ignored}
 */
var TakeLastSubscriber = (function (_super) {
    __extends(TakeLastSubscriber, _super);
    function TakeLastSubscriber(destination, total) {
        _super.call(this, destination);
        this.total = total;
        this.ring = new Array();
        this.count = 0;
    }
    TakeLastSubscriber.prototype._next = function (value) {
        var ring = this.ring;
        var total = this.total;
        var count = this.count++;
        if (ring.length < total) {
            ring.push(value);
        }
        else {
            var index = count % total;
            ring[index] = value;
        }
    };
    TakeLastSubscriber.prototype._complete = function () {
        var destination = this.destination;
        var count = this.count;
        if (count > 0) {
            var total = this.count >= this.total ? this.total : this.count;
            var ring = this.ring;
            for (var i = 0; i < total; i++) {
                var idx = (count++) % total;
                destination.next(ring[idx]);
            }
        }
        destination.complete();
    };
    return TakeLastSubscriber;
}(Subscriber_1.Subscriber));
//# sourceMappingURL=takeLast.js.map

/***/ },
/* 849 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
"use strict";
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var OuterSubscriber_1 = __webpack_require__(6);
var subscribeToResult_1 = __webpack_require__(7);
/**
 * Emits the values emitted by the source Observable until a `notifier`
 * Observable emits a value.
 *
 * <span class="informal">Lets values pass until a second Observable,
 * `notifier`, emits something. Then, it completes.</span>
 *
 * <img src="./img/takeUntil.png" width="100%">
 *
 * `takeUntil` subscribes and begins mirroring the source Observable. It also
 * monitors a second Observable, `notifier` that you provide. If the `notifier`
 * emits a value or a complete notification, the output Observable stops
 * mirroring the source Observable and completes.
 *
 * @example <caption>Tick every second until the first click happens</caption>
 * var interval = Rx.Observable.interval(1000);
 * var clicks = Rx.Observable.fromEvent(document, 'click');
 * var result = interval.takeUntil(clicks);
 * result.subscribe(x => console.log(x));
 *
 * @see {@link take}
 * @see {@link takeLast}
 * @see {@link takeWhile}
 * @see {@link skip}
 *
 * @param {Observable} notifier The Observable whose first emitted value will
 * cause the output Observable of `takeUntil` to stop emitting values from the
 * source Observable.
 * @return {Observable<T>} An Observable that emits the values from the source
 * Observable until such time as `notifier` emits its first value.
 * @method takeUntil
 * @owner Observable
 */
function takeUntil(notifier) {
    return this.lift(new TakeUntilOperator(notifier));
}
exports.takeUntil = takeUntil;
var TakeUntilOperator = (function () {
    function TakeUntilOperator(notifier) {
        this.notifier = notifier;
    }
    TakeUntilOperator.prototype.call = function (subscriber, source) {
        return source._subscribe(new TakeUntilSubscriber(subscriber, this.notifier));
    };
    return TakeUntilOperator;
}());
/**
 * We need this JSDoc comment for affecting ESDoc.
 * @ignore
 * @extends {Ignored}
 */
var TakeUntilSubscriber = (function (_super) {
    __extends(TakeUntilSubscriber, _super);
    function TakeUntilSubscriber(destination, notifier) {
        _super.call(this, destination);
        this.notifier = notifier;
        this.add(subscribeToResult_1.subscribeToResult(this, notifier));
    }
    TakeUntilSubscriber.prototype.notifyNext = function (outerValue, innerValue, outerIndex, innerIndex, innerSub) {
        this.complete();
    };
    TakeUntilSubscriber.prototype.notifyComplete = function () {
        // noop
    };
    return TakeUntilSubscriber;
}(OuterSubscriber_1.OuterSubscriber));
//# sourceMappingURL=takeUntil.js.map

/***/ },
/* 850 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
"use strict";
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var Subscriber_1 = __webpack_require__(3);
/**
 * Emits values emitted by the source Observable so long as each value satisfies
 * the given `predicate`, and then completes as soon as this `predicate` is not
 * satisfied.
 *
 * <span class="informal">Takes values from the source only while they pass the
 * condition given. When the first value does not satisfy, it completes.</span>
 *
 * <img src="./img/takeWhile.png" width="100%">
 *
 * `takeWhile` subscribes and begins mirroring the source Observable. Each value
 * emitted on the source is given to the `predicate` function which returns a
 * boolean, representing a condition to be satisfied by the source values. The
 * output Observable emits the source values until such time as the `predicate`
 * returns false, at which point `takeWhile` stops mirroring the source
 * Observable and completes the output Observable.
 *
 * @example <caption>Emit click events only while the clientX property is greater than 200</caption>
 * var clicks = Rx.Observable.fromEvent(document, 'click');
 * var result = clicks.takeWhile(ev => ev.clientX > 200);
 * result.subscribe(x => console.log(x));
 *
 * @see {@link take}
 * @see {@link takeLast}
 * @see {@link takeUntil}
 * @see {@link skip}
 *
 * @param {function(value: T, index: number): boolean} predicate A function that
 * evaluates a value emitted by the source Observable and returns a boolean.
 * Also takes the (zero-based) index as the second argument.
 * @return {Observable<T>} An Observable that emits the values from the source
 * Observable so long as each value satisfies the condition defined by the
 * `predicate`, then completes.
 * @method takeWhile
 * @owner Observable
 */
function takeWhile(predicate) {
    return this.lift(new TakeWhileOperator(predicate));
}
exports.takeWhile = takeWhile;
var TakeWhileOperator = (function () {
    function TakeWhileOperator(predicate) {
        this.predicate = predicate;
    }
    TakeWhileOperator.prototype.call = function (subscriber, source) {
        return source._subscribe(new TakeWhileSubscriber(subscriber, this.predicate));
    };
    return TakeWhileOperator;
}());
/**
 * We need this JSDoc comment for affecting ESDoc.
 * @ignore
 * @extends {Ignored}
 */
var TakeWhileSubscriber = (function (_super) {
    __extends(TakeWhileSubscriber, _super);
    function TakeWhileSubscriber(destination, predicate) {
        _super.call(this, destination);
        this.predicate = predicate;
        this.index = 0;
    }
    TakeWhileSubscriber.prototype._next = function (value) {
        var destination = this.destination;
        var result;
        try {
            result = this.predicate(value, this.index++);
        }
        catch (err) {
            destination.error(err);
            return;
        }
        this.nextOrComplete(value, result);
    };
    TakeWhileSubscriber.prototype.nextOrComplete = function (value, predicateResult) {
        var destination = this.destination;
        if (Boolean(predicateResult)) {
            destination.next(value);
        }
        else {
            destination.complete();
        }
    };
    return TakeWhileSubscriber;
}(Subscriber_1.Subscriber));
//# sourceMappingURL=takeWhile.js.map

/***/ },
/* 851 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
"use strict";
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var OuterSubscriber_1 = __webpack_require__(6);
var subscribeToResult_1 = __webpack_require__(7);
/**
 * Emits a value from the source Observable, then ignores subsequent source
 * values for a duration determined by another Observable, then repeats this
 * process.
 *
 * <span class="informal">It's like {@link throttleTime}, but the silencing
 * duration is determined by a second Observable.</span>
 *
 * <img src="./img/throttle.png" width="100%">
 *
 * `throttle` emits the source Observable values on the output Observable
 * when its internal timer is disabled, and ignores source values when the timer
 * is enabled. Initially, the timer is disabled. As soon as the first source
 * value arrives, it is forwarded to the output Observable, and then the timer
 * is enabled by calling the `durationSelector` function with the source value,
 * which returns the "duration" Observable. When the duration Observable emits a
 * value or completes, the timer is disabled, and this process repeats for the
 * next source value.
 *
 * @example <caption>Emit clicks at a rate of at most one click per second</caption>
 * var clicks = Rx.Observable.fromEvent(document, 'click');
 * var result = clicks.throttle(ev => Rx.Observable.interval(1000));
 * result.subscribe(x => console.log(x));
 *
 * @see {@link audit}
 * @see {@link debounce}
 * @see {@link delayWhen}
 * @see {@link sample}
 * @see {@link throttleTime}
 *
 * @param {function(value: T): Observable|Promise} durationSelector A function
 * that receives a value from the source Observable, for computing the silencing
 * duration for each source value, returned as an Observable or a Promise.
 * @return {Observable<T>} An Observable that performs the throttle operation to
 * limit the rate of emissions from the source.
 * @method throttle
 * @owner Observable
 */
function throttle(durationSelector) {
    return this.lift(new ThrottleOperator(durationSelector));
}
exports.throttle = throttle;
var ThrottleOperator = (function () {
    function ThrottleOperator(durationSelector) {
        this.durationSelector = durationSelector;
    }
    ThrottleOperator.prototype.call = function (subscriber, source) {
        return source._subscribe(new ThrottleSubscriber(subscriber, this.durationSelector));
    };
    return ThrottleOperator;
}());
/**
 * We need this JSDoc comment for affecting ESDoc.
 * @ignore
 * @extends {Ignored}
 */
var ThrottleSubscriber = (function (_super) {
    __extends(ThrottleSubscriber, _super);
    function ThrottleSubscriber(destination, durationSelector) {
        _super.call(this, destination);
        this.destination = destination;
        this.durationSelector = durationSelector;
    }
    ThrottleSubscriber.prototype._next = function (value) {
        if (!this.throttled) {
            this.tryDurationSelector(value);
        }
    };
    ThrottleSubscriber.prototype.tryDurationSelector = function (value) {
        var duration = null;
        try {
            duration = this.durationSelector(value);
        }
        catch (err) {
            this.destination.error(err);
            return;
        }
        this.emitAndThrottle(value, duration);
    };
    ThrottleSubscriber.prototype.emitAndThrottle = function (value, duration) {
        this.add(this.throttled = subscribeToResult_1.subscribeToResult(this, duration));
        this.destination.next(value);
    };
    ThrottleSubscriber.prototype._unsubscribe = function () {
        var throttled = this.throttled;
        if (throttled) {
            this.remove(throttled);
            this.throttled = null;
            throttled.unsubscribe();
        }
    };
    ThrottleSubscriber.prototype.notifyNext = function (outerValue, innerValue, outerIndex, innerIndex, innerSub) {
        this._unsubscribe();
    };
    ThrottleSubscriber.prototype.notifyComplete = function () {
        this._unsubscribe();
    };
    return ThrottleSubscriber;
}(OuterSubscriber_1.OuterSubscriber));
//# sourceMappingURL=throttle.js.map

/***/ },
/* 852 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
"use strict";
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var Subscriber_1 = __webpack_require__(3);
var async_1 = __webpack_require__(23);
/**
 * Emits a value from the source Observable, then ignores subsequent source
 * values for `duration` milliseconds, then repeats this process.
 *
 * <span class="informal">Lets a value pass, then ignores source values for the
 * next `duration` milliseconds.</span>
 *
 * <img src="./img/throttleTime.png" width="100%">
 *
 * `throttleTime` emits the source Observable values on the output Observable
 * when its internal timer is disabled, and ignores source values when the timer
 * is enabled. Initially, the timer is disabled. As soon as the first source
 * value arrives, it is forwarded to the output Observable, and then the timer
 * is enabled. After `duration` milliseconds (or the time unit determined
 * internally by the optional `scheduler`) has passed, the timer is disabled,
 * and this process repeats for the next source value. Optionally takes a
 * {@link Scheduler} for managing timers.
 *
 * @example <caption>Emit clicks at a rate of at most one click per second</caption>
 * var clicks = Rx.Observable.fromEvent(document, 'click');
 * var result = clicks.throttleTime(1000);
 * result.subscribe(x => console.log(x));
 *
 * @see {@link auditTime}
 * @see {@link debounceTime}
 * @see {@link delay}
 * @see {@link sampleTime}
 * @see {@link throttle}
 *
 * @param {number} duration Time to wait before emitting another value after
 * emitting the last value, measured in milliseconds or the time unit determined
 * internally by the optional `scheduler`.
 * @param {Scheduler} [scheduler=async] The {@link Scheduler} to use for
 * managing the timers that handle the sampling.
 * @return {Observable<T>} An Observable that performs the throttle operation to
 * limit the rate of emissions from the source.
 * @method throttleTime
 * @owner Observable
 */
function throttleTime(duration, scheduler) {
    if (scheduler === void 0) { scheduler = async_1.async; }
    return this.lift(new ThrottleTimeOperator(duration, scheduler));
}
exports.throttleTime = throttleTime;
var ThrottleTimeOperator = (function () {
    function ThrottleTimeOperator(duration, scheduler) {
        this.duration = duration;
        this.scheduler = scheduler;
    }
    ThrottleTimeOperator.prototype.call = function (subscriber, source) {
        return source._subscribe(new ThrottleTimeSubscriber(subscriber, this.duration, this.scheduler));
    };
    return ThrottleTimeOperator;
}());
/**
 * We need this JSDoc comment for affecting ESDoc.
 * @ignore
 * @extends {Ignored}
 */
var ThrottleTimeSubscriber = (function (_super) {
    __extends(ThrottleTimeSubscriber, _super);
    function ThrottleTimeSubscriber(destination, duration, scheduler) {
        _super.call(this, destination);
        this.duration = duration;
        this.scheduler = scheduler;
    }
    ThrottleTimeSubscriber.prototype._next = function (value) {
        if (!this.throttled) {
            this.add(this.throttled = this.scheduler.schedule(dispatchNext, this.duration, { subscriber: this }));
            this.destination.next(value);
        }
    };
    ThrottleTimeSubscriber.prototype.clearThrottle = function () {
        var throttled = this.throttled;
        if (throttled) {
            throttled.unsubscribe();
            this.remove(throttled);
            this.throttled = null;
        }
    };
    return ThrottleTimeSubscriber;
}(Subscriber_1.Subscriber));
function dispatchNext(arg) {
    var subscriber = arg.subscriber;
    subscriber.clearThrottle();
}
//# sourceMappingURL=throttleTime.js.map

/***/ },
/* 853 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
"use strict";
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var async_1 = __webpack_require__(23);
var isDate_1 = __webpack_require__(126);
var Subscriber_1 = __webpack_require__(3);
/**
 * @param due
 * @param errorToSend
 * @param scheduler
 * @return {Observable<R>|WebSocketSubject<T>|Observable<T>}
 * @method timeout
 * @owner Observable
 */
function timeout(due, errorToSend, scheduler) {
    if (errorToSend === void 0) { errorToSend = null; }
    if (scheduler === void 0) { scheduler = async_1.async; }
    var absoluteTimeout = isDate_1.isDate(due);
    var waitFor = absoluteTimeout ? (+due - scheduler.now()) : Math.abs(due);
    return this.lift(new TimeoutOperator(waitFor, absoluteTimeout, errorToSend, scheduler));
}
exports.timeout = timeout;
var TimeoutOperator = (function () {
    function TimeoutOperator(waitFor, absoluteTimeout, errorToSend, scheduler) {
        this.waitFor = waitFor;
        this.absoluteTimeout = absoluteTimeout;
        this.errorToSend = errorToSend;
        this.scheduler = scheduler;
    }
    TimeoutOperator.prototype.call = function (subscriber, source) {
        return source._subscribe(new TimeoutSubscriber(subscriber, this.absoluteTimeout, this.waitFor, this.errorToSend, this.scheduler));
    };
    return TimeoutOperator;
}());
/**
 * We need this JSDoc comment for affecting ESDoc.
 * @ignore
 * @extends {Ignored}
 */
var TimeoutSubscriber = (function (_super) {
    __extends(TimeoutSubscriber, _super);
    function TimeoutSubscriber(destination, absoluteTimeout, waitFor, errorToSend, scheduler) {
        _super.call(this, destination);
        this.absoluteTimeout = absoluteTimeout;
        this.waitFor = waitFor;
        this.errorToSend = errorToSend;
        this.scheduler = scheduler;
        this.index = 0;
        this._previousIndex = 0;
        this._hasCompleted = false;
        this.scheduleTimeout();
    }
    Object.defineProperty(TimeoutSubscriber.prototype, "previousIndex", {
        get: function () {
            return this._previousIndex;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(TimeoutSubscriber.prototype, "hasCompleted", {
        get: function () {
            return this._hasCompleted;
        },
        enumerable: true,
        configurable: true
    });
    TimeoutSubscriber.dispatchTimeout = function (state) {
        var source = state.subscriber;
        var currentIndex = state.index;
        if (!source.hasCompleted && source.previousIndex === currentIndex) {
            source.notifyTimeout();
        }
    };
    TimeoutSubscriber.prototype.scheduleTimeout = function () {
        var currentIndex = this.index;
        this.scheduler.schedule(TimeoutSubscriber.dispatchTimeout, this.waitFor, { subscriber: this, index: currentIndex });
        this.index++;
        this._previousIndex = currentIndex;
    };
    TimeoutSubscriber.prototype._next = function (value) {
        this.destination.next(value);
        if (!this.absoluteTimeout) {
            this.scheduleTimeout();
        }
    };
    TimeoutSubscriber.prototype._error = function (err) {
        this.destination.error(err);
        this._hasCompleted = true;
    };
    TimeoutSubscriber.prototype._complete = function () {
        this.destination.complete();
        this._hasCompleted = true;
    };
    TimeoutSubscriber.prototype.notifyTimeout = function () {
        this.error(this.errorToSend || new Error('timeout'));
    };
    return TimeoutSubscriber;
}(Subscriber_1.Subscriber));
//# sourceMappingURL=timeout.js.map

/***/ },
/* 854 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
"use strict";
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var async_1 = __webpack_require__(23);
var isDate_1 = __webpack_require__(126);
var OuterSubscriber_1 = __webpack_require__(6);
var subscribeToResult_1 = __webpack_require__(7);
/**
 * @param due
 * @param withObservable
 * @param scheduler
 * @return {Observable<R>|WebSocketSubject<T>|Observable<T>}
 * @method timeoutWith
 * @owner Observable
 */
function timeoutWith(due, withObservable, scheduler) {
    if (scheduler === void 0) { scheduler = async_1.async; }
    var absoluteTimeout = isDate_1.isDate(due);
    var waitFor = absoluteTimeout ? (+due - scheduler.now()) : Math.abs(due);
    return this.lift(new TimeoutWithOperator(waitFor, absoluteTimeout, withObservable, scheduler));
}
exports.timeoutWith = timeoutWith;
var TimeoutWithOperator = (function () {
    function TimeoutWithOperator(waitFor, absoluteTimeout, withObservable, scheduler) {
        this.waitFor = waitFor;
        this.absoluteTimeout = absoluteTimeout;
        this.withObservable = withObservable;
        this.scheduler = scheduler;
    }
    TimeoutWithOperator.prototype.call = function (subscriber, source) {
        return source._subscribe(new TimeoutWithSubscriber(subscriber, this.absoluteTimeout, this.waitFor, this.withObservable, this.scheduler));
    };
    return TimeoutWithOperator;
}());
/**
 * We need this JSDoc comment for affecting ESDoc.
 * @ignore
 * @extends {Ignored}
 */
var TimeoutWithSubscriber = (function (_super) {
    __extends(TimeoutWithSubscriber, _super);
    function TimeoutWithSubscriber(destination, absoluteTimeout, waitFor, withObservable, scheduler) {
        _super.call(this);
        this.destination = destination;
        this.absoluteTimeout = absoluteTimeout;
        this.waitFor = waitFor;
        this.withObservable = withObservable;
        this.scheduler = scheduler;
        this.timeoutSubscription = undefined;
        this.index = 0;
        this._previousIndex = 0;
        this._hasCompleted = false;
        destination.add(this);
        this.scheduleTimeout();
    }
    Object.defineProperty(TimeoutWithSubscriber.prototype, "previousIndex", {
        get: function () {
            return this._previousIndex;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(TimeoutWithSubscriber.prototype, "hasCompleted", {
        get: function () {
            return this._hasCompleted;
        },
        enumerable: true,
        configurable: true
    });
    TimeoutWithSubscriber.dispatchTimeout = function (state) {
        var source = state.subscriber;
        var currentIndex = state.index;
        if (!source.hasCompleted && source.previousIndex === currentIndex) {
            source.handleTimeout();
        }
    };
    TimeoutWithSubscriber.prototype.scheduleTimeout = function () {
        var currentIndex = this.index;
        var timeoutState = { subscriber: this, index: currentIndex };
        this.scheduler.schedule(TimeoutWithSubscriber.dispatchTimeout, this.waitFor, timeoutState);
        this.index++;
        this._previousIndex = currentIndex;
    };
    TimeoutWithSubscriber.prototype._next = function (value) {
        this.destination.next(value);
        if (!this.absoluteTimeout) {
            this.scheduleTimeout();
        }
    };
    TimeoutWithSubscriber.prototype._error = function (err) {
        this.destination.error(err);
        this._hasCompleted = true;
    };
    TimeoutWithSubscriber.prototype._complete = function () {
        this.destination.complete();
        this._hasCompleted = true;
    };
    TimeoutWithSubscriber.prototype.handleTimeout = function () {
        if (!this.closed) {
            var withObservable = this.withObservable;
            this.unsubscribe();
            this.destination.add(this.timeoutSubscription = subscribeToResult_1.subscribeToResult(this, withObservable));
        }
    };
    return TimeoutWithSubscriber;
}(OuterSubscriber_1.OuterSubscriber));
//# sourceMappingURL=timeoutWith.js.map

/***/ },
/* 855 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
"use strict";
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var Subscriber_1 = __webpack_require__(3);
/**
 * @return {Observable<any[]>|WebSocketSubject<T>|Observable<T>}
 * @method toArray
 * @owner Observable
 */
function toArray() {
    return this.lift(new ToArrayOperator());
}
exports.toArray = toArray;
var ToArrayOperator = (function () {
    function ToArrayOperator() {
    }
    ToArrayOperator.prototype.call = function (subscriber, source) {
        return source._subscribe(new ToArraySubscriber(subscriber));
    };
    return ToArrayOperator;
}());
/**
 * We need this JSDoc comment for affecting ESDoc.
 * @ignore
 * @extends {Ignored}
 */
var ToArraySubscriber = (function (_super) {
    __extends(ToArraySubscriber, _super);
    function ToArraySubscriber(destination) {
        _super.call(this, destination);
        this.array = [];
    }
    ToArraySubscriber.prototype._next = function (x) {
        this.array.push(x);
    };
    ToArraySubscriber.prototype._complete = function () {
        this.destination.next(this.array);
        this.destination.complete();
    };
    return ToArraySubscriber;
}(Subscriber_1.Subscriber));
//# sourceMappingURL=toArray.js.map

/***/ },
/* 856 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
"use strict";
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var Subject_1 = __webpack_require__(10);
var OuterSubscriber_1 = __webpack_require__(6);
var subscribeToResult_1 = __webpack_require__(7);
/**
 * Branch out the source Observable values as a nested Observable whenever
 * `windowBoundaries` emits.
 *
 * <span class="informal">It's like {@link buffer}, but emits a nested Observable
 * instead of an array.</span>
 *
 * <img src="./img/window.png" width="100%">
 *
 * Returns an Observable that emits windows of items it collects from the source
 * Observable. The output Observable emits connected, non-overlapping
 * windows. It emits the current window and opens a new one whenever the
 * Observable `windowBoundaries` emits an item. Because each window is an
 * Observable, the output is a higher-order Observable.
 *
 * @example <caption>In every window of 1 second each, emit at most 2 click events</caption>
 * var clicks = Rx.Observable.fromEvent(document, 'click');
 * var interval = Rx.Observable.interval(1000);
 * var result = clicks.window(interval)
 *   .map(win => win.take(2)) // each window has at most 2 emissions
 *   .mergeAll(); // flatten the Observable-of-Observables
 * result.subscribe(x => console.log(x));
 *
 * @see {@link windowCount}
 * @see {@link windowTime}
 * @see {@link windowToggle}
 * @see {@link windowWhen}
 * @see {@link buffer}
 *
 * @param {Observable<any>} windowBoundaries An Observable that completes the
 * previous window and starts a new window.
 * @return {Observable<Observable<T>>} An Observable of windows, which are
 * Observables emitting values of the source Observable.
 * @method window
 * @owner Observable
 */
function window(windowBoundaries) {
    return this.lift(new WindowOperator(windowBoundaries));
}
exports.window = window;
var WindowOperator = (function () {
    function WindowOperator(windowBoundaries) {
        this.windowBoundaries = windowBoundaries;
    }
    WindowOperator.prototype.call = function (subscriber, source) {
        var windowSubscriber = new WindowSubscriber(subscriber);
        var sourceSubscription = source._subscribe(windowSubscriber);
        if (!sourceSubscription.closed) {
            windowSubscriber.add(subscribeToResult_1.subscribeToResult(windowSubscriber, this.windowBoundaries));
        }
        return sourceSubscription;
    };
    return WindowOperator;
}());
/**
 * We need this JSDoc comment for affecting ESDoc.
 * @ignore
 * @extends {Ignored}
 */
var WindowSubscriber = (function (_super) {
    __extends(WindowSubscriber, _super);
    function WindowSubscriber(destination) {
        _super.call(this, destination);
        this.window = new Subject_1.Subject();
        destination.next(this.window);
    }
    WindowSubscriber.prototype.notifyNext = function (outerValue, innerValue, outerIndex, innerIndex, innerSub) {
        this.openWindow();
    };
    WindowSubscriber.prototype.notifyError = function (error, innerSub) {
        this._error(error);
    };
    WindowSubscriber.prototype.notifyComplete = function (innerSub) {
        this._complete();
    };
    WindowSubscriber.prototype._next = function (value) {
        this.window.next(value);
    };
    WindowSubscriber.prototype._error = function (err) {
        this.window.error(err);
        this.destination.error(err);
    };
    WindowSubscriber.prototype._complete = function () {
        this.window.complete();
        this.destination.complete();
    };
    WindowSubscriber.prototype._unsubscribe = function () {
        this.window = null;
    };
    WindowSubscriber.prototype.openWindow = function () {
        var prevWindow = this.window;
        if (prevWindow) {
            prevWindow.complete();
        }
        var destination = this.destination;
        var newWindow = this.window = new Subject_1.Subject();
        destination.next(newWindow);
    };
    return WindowSubscriber;
}(OuterSubscriber_1.OuterSubscriber));
//# sourceMappingURL=window.js.map

/***/ },
/* 857 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
"use strict";
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var Subscriber_1 = __webpack_require__(3);
var Subject_1 = __webpack_require__(10);
/**
 * Branch out the source Observable values as a nested Observable with each
 * nested Observable emitting at most `windowSize` values.
 *
 * <span class="informal">It's like {@link bufferCount}, but emits a nested
 * Observable instead of an array.</span>
 *
 * <img src="./img/windowCount.png" width="100%">
 *
 * Returns an Observable that emits windows of items it collects from the source
 * Observable. The output Observable emits windows every `startWindowEvery`
 * items, each containing no more than `windowSize` items. When the source
 * Observable completes or encounters an error, the output Observable emits
 * the current window and propagates the notification from the source
 * Observable. If `startWindowEvery` is not provided, then new windows are
 * started immediately at the start of the source and when each window completes
 * with size `windowSize`.
 *
 * @example <caption>Ignore every 3rd click event, starting from the first one</caption>
 * var clicks = Rx.Observable.fromEvent(document, 'click');
 * var result = clicks.windowCount(3)
 *   .map(win => win.skip(1)) // skip first of every 3 clicks
 *   .mergeAll(); // flatten the Observable-of-Observables
 * result.subscribe(x => console.log(x));
 *
 * @example <caption>Ignore every 3rd click event, starting from the third one</caption>
 * var clicks = Rx.Observable.fromEvent(document, 'click');
 * var result = clicks.windowCount(2, 3)
 *   .mergeAll(); // flatten the Observable-of-Observables
 * result.subscribe(x => console.log(x));
 *
 * @see {@link window}
 * @see {@link windowTime}
 * @see {@link windowToggle}
 * @see {@link windowWhen}
 * @see {@link bufferCount}
 *
 * @param {number} windowSize The maximum number of values emitted by each
 * window.
 * @param {number} [startWindowEvery] Interval at which to start a new window.
 * For example if `startWindowEvery` is `2`, then a new window will be started
 * on every other value from the source. A new window is started at the
 * beginning of the source by default.
 * @return {Observable<Observable<T>>} An Observable of windows, which in turn
 * are Observable of values.
 * @method windowCount
 * @owner Observable
 */
function windowCount(windowSize, startWindowEvery) {
    if (startWindowEvery === void 0) { startWindowEvery = 0; }
    return this.lift(new WindowCountOperator(windowSize, startWindowEvery));
}
exports.windowCount = windowCount;
var WindowCountOperator = (function () {
    function WindowCountOperator(windowSize, startWindowEvery) {
        this.windowSize = windowSize;
        this.startWindowEvery = startWindowEvery;
    }
    WindowCountOperator.prototype.call = function (subscriber, source) {
        return source._subscribe(new WindowCountSubscriber(subscriber, this.windowSize, this.startWindowEvery));
    };
    return WindowCountOperator;
}());
/**
 * We need this JSDoc comment for affecting ESDoc.
 * @ignore
 * @extends {Ignored}
 */
var WindowCountSubscriber = (function (_super) {
    __extends(WindowCountSubscriber, _super);
    function WindowCountSubscriber(destination, windowSize, startWindowEvery) {
        _super.call(this, destination);
        this.destination = destination;
        this.windowSize = windowSize;
        this.startWindowEvery = startWindowEvery;
        this.windows = [new Subject_1.Subject()];
        this.count = 0;
        destination.next(this.windows[0]);
    }
    WindowCountSubscriber.prototype._next = function (value) {
        var startWindowEvery = (this.startWindowEvery > 0) ? this.startWindowEvery : this.windowSize;
        var destination = this.destination;
        var windowSize = this.windowSize;
        var windows = this.windows;
        var len = windows.length;
        for (var i = 0; i < len && !this.closed; i++) {
            windows[i].next(value);
        }
        var c = this.count - windowSize + 1;
        if (c >= 0 && c % startWindowEvery === 0 && !this.closed) {
            windows.shift().complete();
        }
        if (++this.count % startWindowEvery === 0 && !this.closed) {
            var window_1 = new Subject_1.Subject();
            windows.push(window_1);
            destination.next(window_1);
        }
    };
    WindowCountSubscriber.prototype._error = function (err) {
        var windows = this.windows;
        if (windows) {
            while (windows.length > 0 && !this.closed) {
                windows.shift().error(err);
            }
        }
        this.destination.error(err);
    };
    WindowCountSubscriber.prototype._complete = function () {
        var windows = this.windows;
        if (windows) {
            while (windows.length > 0 && !this.closed) {
                windows.shift().complete();
            }
        }
        this.destination.complete();
    };
    WindowCountSubscriber.prototype._unsubscribe = function () {
        this.count = 0;
        this.windows = null;
    };
    return WindowCountSubscriber;
}(Subscriber_1.Subscriber));
//# sourceMappingURL=windowCount.js.map

/***/ },
/* 858 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
"use strict";
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var Subject_1 = __webpack_require__(10);
var async_1 = __webpack_require__(23);
var Subscriber_1 = __webpack_require__(3);
/**
 * Branch out the source Observable values as a nested Observable periodically
 * in time.
 *
 * <span class="informal">It's like {@link bufferTime}, but emits a nested
 * Observable instead of an array.</span>
 *
 * <img src="./img/windowTime.png" width="100%">
 *
 * Returns an Observable that emits windows of items it collects from the source
 * Observable. The output Observable starts a new window periodically, as
 * determined by the `windowCreationInterval` argument. It emits each window
 * after a fixed timespan, specified by the `windowTimeSpan` argument. When the
 * source Observable completes or encounters an error, the output Observable
 * emits the current window and propagates the notification from the source
 * Observable. If `windowCreationInterval` is not provided, the output
 * Observable starts a new window when the previous window of duration
 * `windowTimeSpan` completes.
 *
 * @example <caption>In every window of 1 second each, emit at most 2 click events</caption>
 * var clicks = Rx.Observable.fromEvent(document, 'click');
 * var result = clicks.windowTime(1000)
 *   .map(win => win.take(2)) // each window has at most 2 emissions
 *   .mergeAll(); // flatten the Observable-of-Observables
 * result.subscribe(x => console.log(x));
 *
 * @example <caption>Every 5 seconds start a window 1 second long, and emit at most 2 click events per window</caption>
 * var clicks = Rx.Observable.fromEvent(document, 'click');
 * var result = clicks.windowTime(1000, 5000)
 *   .map(win => win.take(2)) // each window has at most 2 emissions
 *   .mergeAll(); // flatten the Observable-of-Observables
 * result.subscribe(x => console.log(x));
 *
 * @see {@link window}
 * @see {@link windowCount}
 * @see {@link windowToggle}
 * @see {@link windowWhen}
 * @see {@link bufferTime}
 *
 * @param {number} windowTimeSpan The amount of time to fill each window.
 * @param {number} [windowCreationInterval] The interval at which to start new
 * windows.
 * @param {Scheduler} [scheduler=async] The scheduler on which to schedule the
 * intervals that determine window boundaries.
 * @return {Observable<Observable<T>>} An observable of windows, which in turn
 * are Observables.
 * @method windowTime
 * @owner Observable
 */
function windowTime(windowTimeSpan, windowCreationInterval, scheduler) {
    if (windowCreationInterval === void 0) { windowCreationInterval = null; }
    if (scheduler === void 0) { scheduler = async_1.async; }
    return this.lift(new WindowTimeOperator(windowTimeSpan, windowCreationInterval, scheduler));
}
exports.windowTime = windowTime;
var WindowTimeOperator = (function () {
    function WindowTimeOperator(windowTimeSpan, windowCreationInterval, scheduler) {
        this.windowTimeSpan = windowTimeSpan;
        this.windowCreationInterval = windowCreationInterval;
        this.scheduler = scheduler;
    }
    WindowTimeOperator.prototype.call = function (subscriber, source) {
        return source._subscribe(new WindowTimeSubscriber(subscriber, this.windowTimeSpan, this.windowCreationInterval, this.scheduler));
    };
    return WindowTimeOperator;
}());
/**
 * We need this JSDoc comment for affecting ESDoc.
 * @ignore
 * @extends {Ignored}
 */
var WindowTimeSubscriber = (function (_super) {
    __extends(WindowTimeSubscriber, _super);
    function WindowTimeSubscriber(destination, windowTimeSpan, windowCreationInterval, scheduler) {
        _super.call(this, destination);
        this.destination = destination;
        this.windowTimeSpan = windowTimeSpan;
        this.windowCreationInterval = windowCreationInterval;
        this.scheduler = scheduler;
        this.windows = [];
        if (windowCreationInterval !== null && windowCreationInterval >= 0) {
            var window_1 = this.openWindow();
            var closeState = { subscriber: this, window: window_1, context: null };
            var creationState = { windowTimeSpan: windowTimeSpan, windowCreationInterval: windowCreationInterval, subscriber: this, scheduler: scheduler };
            this.add(scheduler.schedule(dispatchWindowClose, windowTimeSpan, closeState));
            this.add(scheduler.schedule(dispatchWindowCreation, windowCreationInterval, creationState));
        }
        else {
            var window_2 = this.openWindow();
            var timeSpanOnlyState = { subscriber: this, window: window_2, windowTimeSpan: windowTimeSpan };
            this.add(scheduler.schedule(dispatchWindowTimeSpanOnly, windowTimeSpan, timeSpanOnlyState));
        }
    }
    WindowTimeSubscriber.prototype._next = function (value) {
        var windows = this.windows;
        var len = windows.length;
        for (var i = 0; i < len; i++) {
            var window_3 = windows[i];
            if (!window_3.closed) {
                window_3.next(value);
            }
        }
    };
    WindowTimeSubscriber.prototype._error = function (err) {
        var windows = this.windows;
        while (windows.length > 0) {
            windows.shift().error(err);
        }
        this.destination.error(err);
    };
    WindowTimeSubscriber.prototype._complete = function () {
        var windows = this.windows;
        while (windows.length > 0) {
            var window_4 = windows.shift();
            if (!window_4.closed) {
                window_4.complete();
            }
        }
        this.destination.complete();
    };
    WindowTimeSubscriber.prototype.openWindow = function () {
        var window = new Subject_1.Subject();
        this.windows.push(window);
        var destination = this.destination;
        destination.next(window);
        return window;
    };
    WindowTimeSubscriber.prototype.closeWindow = function (window) {
        window.complete();
        var windows = this.windows;
        windows.splice(windows.indexOf(window), 1);
    };
    return WindowTimeSubscriber;
}(Subscriber_1.Subscriber));
function dispatchWindowTimeSpanOnly(state) {
    var subscriber = state.subscriber, windowTimeSpan = state.windowTimeSpan, window = state.window;
    if (window) {
        window.complete();
    }
    state.window = subscriber.openWindow();
    this.schedule(state, windowTimeSpan);
}
function dispatchWindowCreation(state) {
    var windowTimeSpan = state.windowTimeSpan, subscriber = state.subscriber, scheduler = state.scheduler, windowCreationInterval = state.windowCreationInterval;
    var window = subscriber.openWindow();
    var action = this;
    var context = { action: action, subscription: null };
    var timeSpanState = { subscriber: subscriber, window: window, context: context };
    context.subscription = scheduler.schedule(dispatchWindowClose, windowTimeSpan, timeSpanState);
    action.add(context.subscription);
    action.schedule(state, windowCreationInterval);
}
function dispatchWindowClose(arg) {
    var subscriber = arg.subscriber, window = arg.window, context = arg.context;
    if (context && context.action && context.subscription) {
        context.action.remove(context.subscription);
    }
    subscriber.closeWindow(window);
}
//# sourceMappingURL=windowTime.js.map

/***/ },
/* 859 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
"use strict";
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var Subject_1 = __webpack_require__(10);
var Subscription_1 = __webpack_require__(15);
var tryCatch_1 = __webpack_require__(17);
var errorObject_1 = __webpack_require__(16);
var OuterSubscriber_1 = __webpack_require__(6);
var subscribeToResult_1 = __webpack_require__(7);
/**
 * Branch out the source Observable values as a nested Observable starting from
 * an emission from `openings` and ending when the output of `closingSelector`
 * emits.
 *
 * <span class="informal">It's like {@link bufferToggle}, but emits a nested
 * Observable instead of an array.</span>
 *
 * <img src="./img/windowToggle.png" width="100%">
 *
 * Returns an Observable that emits windows of items it collects from the source
 * Observable. The output Observable emits windows that contain those items
 * emitted by the source Observable between the time when the `openings`
 * Observable emits an item and when the Observable returned by
 * `closingSelector` emits an item.
 *
 * @example <caption>Every other second, emit the click events from the next 500ms</caption>
 * var clicks = Rx.Observable.fromEvent(document, 'click');
 * var openings = Rx.Observable.interval(1000);
 * var result = clicks.windowToggle(openings, i =>
 *   i % 2 ? Rx.Observable.interval(500) : Rx.Observable.empty()
 * ).mergeAll();
 * result.subscribe(x => console.log(x));
 *
 * @see {@link window}
 * @see {@link windowCount}
 * @see {@link windowTime}
 * @see {@link windowWhen}
 * @see {@link bufferToggle}
 *
 * @param {Observable<O>} openings An observable of notifications to start new
 * windows.
 * @param {function(value: O): Observable} closingSelector A function that takes
 * the value emitted by the `openings` observable and returns an Observable,
 * which, when it emits (either `next` or `complete`), signals that the
 * associated window should complete.
 * @return {Observable<Observable<T>>} An observable of windows, which in turn
 * are Observables.
 * @method windowToggle
 * @owner Observable
 */
function windowToggle(openings, closingSelector) {
    return this.lift(new WindowToggleOperator(openings, closingSelector));
}
exports.windowToggle = windowToggle;
var WindowToggleOperator = (function () {
    function WindowToggleOperator(openings, closingSelector) {
        this.openings = openings;
        this.closingSelector = closingSelector;
    }
    WindowToggleOperator.prototype.call = function (subscriber, source) {
        return source._subscribe(new WindowToggleSubscriber(subscriber, this.openings, this.closingSelector));
    };
    return WindowToggleOperator;
}());
/**
 * We need this JSDoc comment for affecting ESDoc.
 * @ignore
 * @extends {Ignored}
 */
var WindowToggleSubscriber = (function (_super) {
    __extends(WindowToggleSubscriber, _super);
    function WindowToggleSubscriber(destination, openings, closingSelector) {
        _super.call(this, destination);
        this.openings = openings;
        this.closingSelector = closingSelector;
        this.contexts = [];
        this.add(this.openSubscription = subscribeToResult_1.subscribeToResult(this, openings, openings));
    }
    WindowToggleSubscriber.prototype._next = function (value) {
        var contexts = this.contexts;
        if (contexts) {
            var len = contexts.length;
            for (var i = 0; i < len; i++) {
                contexts[i].window.next(value);
            }
        }
    };
    WindowToggleSubscriber.prototype._error = function (err) {
        var contexts = this.contexts;
        this.contexts = null;
        if (contexts) {
            var len = contexts.length;
            var index = -1;
            while (++index < len) {
                var context = contexts[index];
                context.window.error(err);
                context.subscription.unsubscribe();
            }
        }
        _super.prototype._error.call(this, err);
    };
    WindowToggleSubscriber.prototype._complete = function () {
        var contexts = this.contexts;
        this.contexts = null;
        if (contexts) {
            var len = contexts.length;
            var index = -1;
            while (++index < len) {
                var context = contexts[index];
                context.window.complete();
                context.subscription.unsubscribe();
            }
        }
        _super.prototype._complete.call(this);
    };
    WindowToggleSubscriber.prototype._unsubscribe = function () {
        var contexts = this.contexts;
        this.contexts = null;
        if (contexts) {
            var len = contexts.length;
            var index = -1;
            while (++index < len) {
                var context = contexts[index];
                context.window.unsubscribe();
                context.subscription.unsubscribe();
            }
        }
    };
    WindowToggleSubscriber.prototype.notifyNext = function (outerValue, innerValue, outerIndex, innerIndex, innerSub) {
        if (outerValue === this.openings) {
            var closingSelector = this.closingSelector;
            var closingNotifier = tryCatch_1.tryCatch(closingSelector)(innerValue);
            if (closingNotifier === errorObject_1.errorObject) {
                return this.error(errorObject_1.errorObject.e);
            }
            else {
                var window_1 = new Subject_1.Subject();
                var subscription = new Subscription_1.Subscription();
                var context = { window: window_1, subscription: subscription };
                this.contexts.push(context);
                var innerSubscription = subscribeToResult_1.subscribeToResult(this, closingNotifier, context);
                if (innerSubscription.closed) {
                    this.closeWindow(this.contexts.length - 1);
                }
                else {
                    innerSubscription.context = context;
                    subscription.add(innerSubscription);
                }
                this.destination.next(window_1);
            }
        }
        else {
            this.closeWindow(this.contexts.indexOf(outerValue));
        }
    };
    WindowToggleSubscriber.prototype.notifyError = function (err) {
        this.error(err);
    };
    WindowToggleSubscriber.prototype.notifyComplete = function (inner) {
        if (inner !== this.openSubscription) {
            this.closeWindow(this.contexts.indexOf(inner.context));
        }
    };
    WindowToggleSubscriber.prototype.closeWindow = function (index) {
        if (index === -1) {
            return;
        }
        var contexts = this.contexts;
        var context = contexts[index];
        var window = context.window, subscription = context.subscription;
        contexts.splice(index, 1);
        window.complete();
        subscription.unsubscribe();
    };
    return WindowToggleSubscriber;
}(OuterSubscriber_1.OuterSubscriber));
//# sourceMappingURL=windowToggle.js.map

/***/ },
/* 860 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
"use strict";
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var Subject_1 = __webpack_require__(10);
var tryCatch_1 = __webpack_require__(17);
var errorObject_1 = __webpack_require__(16);
var OuterSubscriber_1 = __webpack_require__(6);
var subscribeToResult_1 = __webpack_require__(7);
/**
 * Branch out the source Observable values as a nested Observable using a
 * factory function of closing Observables to determine when to start a new
 * window.
 *
 * <span class="informal">It's like {@link bufferWhen}, but emits a nested
 * Observable instead of an array.</span>
 *
 * <img src="./img/windowWhen.png" width="100%">
 *
 * Returns an Observable that emits windows of items it collects from the source
 * Observable. The output Observable emits connected, non-overlapping windows.
 * It emits the current window and opens a new one whenever the Observable
 * produced by the specified `closingSelector` function emits an item. The first
 * window is opened immediately when subscribing to the output Observable.
 *
 * @example <caption>Emit only the first two clicks events in every window of [1-5] random seconds</caption>
 * var clicks = Rx.Observable.fromEvent(document, 'click');
 * var result = clicks
 *   .windowWhen(() => Rx.Observable.interval(1000 + Math.random() * 4000))
 *   .map(win => win.take(2)) // each window has at most 2 emissions
 *   .mergeAll(); // flatten the Observable-of-Observables
 * result.subscribe(x => console.log(x));
 *
 * @see {@link window}
 * @see {@link windowCount}
 * @see {@link windowTime}
 * @see {@link windowToggle}
 * @see {@link bufferWhen}
 *
 * @param {function(): Observable} closingSelector A function that takes no
 * arguments and returns an Observable that signals (on either `next` or
 * `complete`) when to close the previous window and start a new one.
 * @return {Observable<Observable<T>>} An observable of windows, which in turn
 * are Observables.
 * @method windowWhen
 * @owner Observable
 */
function windowWhen(closingSelector) {
    return this.lift(new WindowOperator(closingSelector));
}
exports.windowWhen = windowWhen;
var WindowOperator = (function () {
    function WindowOperator(closingSelector) {
        this.closingSelector = closingSelector;
    }
    WindowOperator.prototype.call = function (subscriber, source) {
        return source._subscribe(new WindowSubscriber(subscriber, this.closingSelector));
    };
    return WindowOperator;
}());
/**
 * We need this JSDoc comment for affecting ESDoc.
 * @ignore
 * @extends {Ignored}
 */
var WindowSubscriber = (function (_super) {
    __extends(WindowSubscriber, _super);
    function WindowSubscriber(destination, closingSelector) {
        _super.call(this, destination);
        this.destination = destination;
        this.closingSelector = closingSelector;
        this.openWindow();
    }
    WindowSubscriber.prototype.notifyNext = function (outerValue, innerValue, outerIndex, innerIndex, innerSub) {
        this.openWindow(innerSub);
    };
    WindowSubscriber.prototype.notifyError = function (error, innerSub) {
        this._error(error);
    };
    WindowSubscriber.prototype.notifyComplete = function (innerSub) {
        this.openWindow(innerSub);
    };
    WindowSubscriber.prototype._next = function (value) {
        this.window.next(value);
    };
    WindowSubscriber.prototype._error = function (err) {
        this.window.error(err);
        this.destination.error(err);
        this.unsubscribeClosingNotification();
    };
    WindowSubscriber.prototype._complete = function () {
        this.window.complete();
        this.destination.complete();
        this.unsubscribeClosingNotification();
    };
    WindowSubscriber.prototype.unsubscribeClosingNotification = function () {
        if (this.closingNotification) {
            this.closingNotification.unsubscribe();
        }
    };
    WindowSubscriber.prototype.openWindow = function (innerSub) {
        if (innerSub === void 0) { innerSub = null; }
        if (innerSub) {
            this.remove(innerSub);
            innerSub.unsubscribe();
        }
        var prevWindow = this.window;
        if (prevWindow) {
            prevWindow.complete();
        }
        var window = this.window = new Subject_1.Subject();
        this.destination.next(window);
        var closingNotifier = tryCatch_1.tryCatch(this.closingSelector)();
        if (closingNotifier === errorObject_1.errorObject) {
            var err = errorObject_1.errorObject.e;
            this.destination.error(err);
            this.window.error(err);
        }
        else {
            this.add(this.closingNotification = subscribeToResult_1.subscribeToResult(this, closingNotifier));
        }
    };
    return WindowSubscriber;
}(OuterSubscriber_1.OuterSubscriber));
//# sourceMappingURL=windowWhen.js.map

/***/ },
/* 861 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
"use strict";
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var OuterSubscriber_1 = __webpack_require__(6);
var subscribeToResult_1 = __webpack_require__(7);
/**
 * Combines the source Observable with other Observables to create an Observable
 * whose values are calculated from the latest values of each, only when the
 * source emits.
 *
 * <span class="informal">Whenever the source Observable emits a value, it
 * computes a formula using that value plus the latest values from other input
 * Observables, then emits the output of that formula.</span>
 *
 * <img src="./img/withLatestFrom.png" width="100%">
 *
 * `withLatestFrom` combines each value from the source Observable (the
 * instance) with the latest values from the other input Observables only when
 * the source emits a value, optionally using a `project` function to determine
 * the value to be emitted on the output Observable. All input Observables must
 * emit at least one value before the output Observable will emit a value.
 *
 * @example <caption>On every click event, emit an array with the latest timer event plus the click event</caption>
 * var clicks = Rx.Observable.fromEvent(document, 'click');
 * var timer = Rx.Observable.interval(1000);
 * var result = clicks.withLatestFrom(timer);
 * result.subscribe(x => console.log(x));
 *
 * @see {@link combineLatest}
 *
 * @param {Observable} other An input Observable to combine with the source
 * Observable. More than one input Observables may be given as argument.
 * @param {Function} [project] Projection function for combining values
 * together. Receives all values in order of the Observables passed, where the
 * first parameter is a value from the source Observable. (e.g.
 * `a.withLatestFrom(b, c, (a1, b1, c1) => a1 + b1 + c1)`). If this is not
 * passed, arrays will be emitted on the output Observable.
 * @return {Observable} An Observable of projected values from the most recent
 * values from each input Observable, or an array of the most recent values from
 * each input Observable.
 * @method withLatestFrom
 * @owner Observable
 */
function withLatestFrom() {
    var args = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        args[_i - 0] = arguments[_i];
    }
    var project;
    if (typeof args[args.length - 1] === 'function') {
        project = args.pop();
    }
    var observables = args;
    return this.lift(new WithLatestFromOperator(observables, project));
}
exports.withLatestFrom = withLatestFrom;
/* tslint:enable:max-line-length */
var WithLatestFromOperator = (function () {
    function WithLatestFromOperator(observables, project) {
        this.observables = observables;
        this.project = project;
    }
    WithLatestFromOperator.prototype.call = function (subscriber, source) {
        return source._subscribe(new WithLatestFromSubscriber(subscriber, this.observables, this.project));
    };
    return WithLatestFromOperator;
}());
/**
 * We need this JSDoc comment for affecting ESDoc.
 * @ignore
 * @extends {Ignored}
 */
var WithLatestFromSubscriber = (function (_super) {
    __extends(WithLatestFromSubscriber, _super);
    function WithLatestFromSubscriber(destination, observables, project) {
        _super.call(this, destination);
        this.observables = observables;
        this.project = project;
        this.toRespond = [];
        var len = observables.length;
        this.values = new Array(len);
        for (var i = 0; i < len; i++) {
            this.toRespond.push(i);
        }
        for (var i = 0; i < len; i++) {
            var observable = observables[i];
            this.add(subscribeToResult_1.subscribeToResult(this, observable, observable, i));
        }
    }
    WithLatestFromSubscriber.prototype.notifyNext = function (outerValue, innerValue, outerIndex, innerIndex, innerSub) {
        this.values[outerIndex] = innerValue;
        var toRespond = this.toRespond;
        if (toRespond.length > 0) {
            var found = toRespond.indexOf(outerIndex);
            if (found !== -1) {
                toRespond.splice(found, 1);
            }
        }
    };
    WithLatestFromSubscriber.prototype.notifyComplete = function () {
        // noop
    };
    WithLatestFromSubscriber.prototype._next = function (value) {
        if (this.toRespond.length === 0) {
            var args = [value].concat(this.values);
            if (this.project) {
                this._tryProject(args);
            }
            else {
                this.destination.next(args);
            }
        }
    };
    WithLatestFromSubscriber.prototype._tryProject = function (args) {
        var result;
        try {
            result = this.project.apply(this, args);
        }
        catch (err) {
            this.destination.error(err);
            return;
        }
        this.destination.next(result);
    };
    return WithLatestFromSubscriber;
}(OuterSubscriber_1.OuterSubscriber));
//# sourceMappingURL=withLatestFrom.js.map

/***/ },
/* 862 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
"use strict";
var zip_1 = __webpack_require__(299);
/**
 * @param project
 * @return {Observable<R>|WebSocketSubject<T>|Observable<T>}
 * @method zipAll
 * @owner Observable
 */
function zipAll(project) {
    return this.lift(new zip_1.ZipOperator(project));
}
exports.zipAll = zipAll;
//# sourceMappingURL=zipAll.js.map

/***/ },
/* 863 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
"use strict";
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var Subscription_1 = __webpack_require__(15);
/**
 * A unit of work to be executed in a {@link Scheduler}. An action is typically
 * created from within a Scheduler and an RxJS user does not need to concern
 * themselves about creating and manipulating an Action.
 *
 * ```ts
 * class Action<T> extends Subscription {
 *   new (scheduler: Scheduler, work: (state?: T) => void);
 *   schedule(state?: T, delay: number = 0): Subscription;
 * }
 * ```
 *
 * @class Action<T>
 */
var Action = (function (_super) {
    __extends(Action, _super);
    function Action(scheduler, work) {
        _super.call(this);
    }
    /**
     * Schedules this action on its parent Scheduler for execution. May be passed
     * some context object, `state`. May happen at some point in the future,
     * according to the `delay` parameter, if specified.
     * @param {T} [state] Some contextual data that the `work` function uses when
     * called by the Scheduler.
     * @param {number} [delay] Time to wait before executing the work, where the
     * time unit is implicit and defined by the Scheduler.
     * @return {void}
     */
    Action.prototype.schedule = function (state, delay) {
        if (delay === void 0) { delay = 0; }
        return this;
    };
    return Action;
}(Subscription_1.Subscription));
exports.Action = Action;
//# sourceMappingURL=Action.js.map

/***/ },
/* 864 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
"use strict";
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var AsyncAction_1 = __webpack_require__(80);
var AnimationFrame_1 = __webpack_require__(874);
/**
 * We need this JSDoc comment for affecting ESDoc.
 * @ignore
 * @extends {Ignored}
 */
var AnimationFrameAction = (function (_super) {
    __extends(AnimationFrameAction, _super);
    function AnimationFrameAction(scheduler, work) {
        _super.call(this, scheduler, work);
        this.scheduler = scheduler;
        this.work = work;
    }
    AnimationFrameAction.prototype.requestAsyncId = function (scheduler, id, delay) {
        if (delay === void 0) { delay = 0; }
        // If delay is greater than 0, request as an async action.
        if (delay !== null && delay > 0) {
            return _super.prototype.requestAsyncId.call(this, scheduler, id, delay);
        }
        // Push the action to the end of the scheduler queue.
        scheduler.actions.push(this);
        // If an animation frame has already been requested, don't request another
        // one. If an animation frame hasn't been requested yet, request one. Return
        // the current animation frame request id.
        return scheduler.scheduled || (scheduler.scheduled = AnimationFrame_1.AnimationFrame.requestAnimationFrame(scheduler.flush.bind(scheduler, null)));
    };
    AnimationFrameAction.prototype.recycleAsyncId = function (scheduler, id, delay) {
        if (delay === void 0) { delay = 0; }
        // If delay exists and is greater than 0, recycle as an async action.
        if (delay !== null && delay > 0) {
            return _super.prototype.recycleAsyncId.call(this, scheduler, id, delay);
        }
        // If the scheduler queue is empty, cancel the requested animation frame and
        // set the scheduled flag to undefined so the next AnimationFrameAction will
        // request its own.
        if (scheduler.actions.length === 0) {
            AnimationFrame_1.AnimationFrame.cancelAnimationFrame(id);
            scheduler.scheduled = undefined;
        }
        // Return undefined so the action knows to request a new async id if it's rescheduled.
        return undefined;
    };
    return AnimationFrameAction;
}(AsyncAction_1.AsyncAction));
exports.AnimationFrameAction = AnimationFrameAction;
//# sourceMappingURL=AnimationFrameAction.js.map

/***/ },
/* 865 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
"use strict";
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var AsyncScheduler_1 = __webpack_require__(81);
var AnimationFrameScheduler = (function (_super) {
    __extends(AnimationFrameScheduler, _super);
    function AnimationFrameScheduler() {
        _super.apply(this, arguments);
    }
    AnimationFrameScheduler.prototype.flush = function () {
        this.active = true;
        this.scheduled = undefined;
        var actions = this.actions;
        var error;
        var index = -1;
        var count = actions.length;
        var action = actions.shift();
        do {
            if (error = action.execute(action.state, action.delay)) {
                break;
            }
        } while (++index < count && (action = actions.shift()));
        this.active = false;
        if (error) {
            while (++index < count && (action = actions.shift())) {
                action.unsubscribe();
            }
            throw error;
        }
    };
    return AnimationFrameScheduler;
}(AsyncScheduler_1.AsyncScheduler));
exports.AnimationFrameScheduler = AnimationFrameScheduler;
//# sourceMappingURL=AnimationFrameScheduler.js.map

/***/ },
/* 866 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
"use strict";
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var Immediate_1 = __webpack_require__(876);
var AsyncAction_1 = __webpack_require__(80);
/**
 * We need this JSDoc comment for affecting ESDoc.
 * @ignore
 * @extends {Ignored}
 */
var AsapAction = (function (_super) {
    __extends(AsapAction, _super);
    function AsapAction(scheduler, work) {
        _super.call(this, scheduler, work);
        this.scheduler = scheduler;
        this.work = work;
    }
    AsapAction.prototype.requestAsyncId = function (scheduler, id, delay) {
        if (delay === void 0) { delay = 0; }
        // If delay is greater than 0, request as an async action.
        if (delay !== null && delay > 0) {
            return _super.prototype.requestAsyncId.call(this, scheduler, id, delay);
        }
        // Push the action to the end of the scheduler queue.
        scheduler.actions.push(this);
        // If a microtask has already been scheduled, don't schedule another
        // one. If a microtask hasn't been scheduled yet, schedule one now. Return
        // the current scheduled microtask id.
        return scheduler.scheduled || (scheduler.scheduled = Immediate_1.Immediate.setImmediate(scheduler.flush.bind(scheduler, null)));
    };
    AsapAction.prototype.recycleAsyncId = function (scheduler, id, delay) {
        if (delay === void 0) { delay = 0; }
        // If delay exists and is greater than 0, recycle as an async action.
        if (delay !== null && delay > 0) {
            return _super.prototype.recycleAsyncId.call(this, scheduler, id, delay);
        }
        // If the scheduler queue is empty, cancel the requested microtask and
        // set the scheduled flag to undefined so the next AsapAction will schedule
        // its own.
        if (scheduler.actions.length === 0) {
            Immediate_1.Immediate.clearImmediate(id);
            scheduler.scheduled = undefined;
        }
        // Return undefined so the action knows to request a new async id if it's rescheduled.
        return undefined;
    };
    return AsapAction;
}(AsyncAction_1.AsyncAction));
exports.AsapAction = AsapAction;
//# sourceMappingURL=AsapAction.js.map

/***/ },
/* 867 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
"use strict";
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var AsyncScheduler_1 = __webpack_require__(81);
var AsapScheduler = (function (_super) {
    __extends(AsapScheduler, _super);
    function AsapScheduler() {
        _super.apply(this, arguments);
    }
    AsapScheduler.prototype.flush = function () {
        this.active = true;
        this.scheduled = undefined;
        var actions = this.actions;
        var error;
        var index = -1;
        var count = actions.length;
        var action = actions.shift();
        do {
            if (error = action.execute(action.state, action.delay)) {
                break;
            }
        } while (++index < count && (action = actions.shift()));
        this.active = false;
        if (error) {
            while (++index < count && (action = actions.shift())) {
                action.unsubscribe();
            }
            throw error;
        }
    };
    return AsapScheduler;
}(AsyncScheduler_1.AsyncScheduler));
exports.AsapScheduler = AsapScheduler;
//# sourceMappingURL=AsapScheduler.js.map

/***/ },
/* 868 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
"use strict";
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var AsyncAction_1 = __webpack_require__(80);
/**
 * We need this JSDoc comment for affecting ESDoc.
 * @ignore
 * @extends {Ignored}
 */
var QueueAction = (function (_super) {
    __extends(QueueAction, _super);
    function QueueAction(scheduler, work) {
        _super.call(this, scheduler, work);
        this.scheduler = scheduler;
        this.work = work;
    }
    QueueAction.prototype.schedule = function (state, delay) {
        if (delay === void 0) { delay = 0; }
        if (delay > 0) {
            return _super.prototype.schedule.call(this, state, delay);
        }
        this.delay = delay;
        this.state = state;
        this.scheduler.flush(this);
        return this;
    };
    QueueAction.prototype.execute = function (state, delay) {
        return (delay > 0 || this.closed) ?
            _super.prototype.execute.call(this, state, delay) :
            this._execute(state, delay);
    };
    QueueAction.prototype.requestAsyncId = function (scheduler, id, delay) {
        if (delay === void 0) { delay = 0; }
        // If delay is greater than 0, enqueue as an async action.
        if (delay !== null && delay > 0) {
            return _super.prototype.requestAsyncId.call(this, scheduler, id, delay);
        }
        // Otherwise flush the scheduler starting with this action.
        return scheduler.flush(this);
    };
    return QueueAction;
}(AsyncAction_1.AsyncAction));
exports.QueueAction = QueueAction;
//# sourceMappingURL=QueueAction.js.map

/***/ },
/* 869 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
"use strict";
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var AsyncScheduler_1 = __webpack_require__(81);
var QueueScheduler = (function (_super) {
    __extends(QueueScheduler, _super);
    function QueueScheduler() {
        _super.apply(this, arguments);
    }
    return QueueScheduler;
}(AsyncScheduler_1.AsyncScheduler));
exports.QueueScheduler = QueueScheduler;
//# sourceMappingURL=QueueScheduler.js.map

/***/ },
/* 870 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
"use strict";
var AnimationFrameAction_1 = __webpack_require__(864);
var AnimationFrameScheduler_1 = __webpack_require__(865);
exports.animationFrame = new AnimationFrameScheduler_1.AnimationFrameScheduler(AnimationFrameAction_1.AnimationFrameAction);
//# sourceMappingURL=animationFrame.js.map

/***/ },
/* 871 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
"use strict";
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var Observable_1 = __webpack_require__(0);
var Subscription_1 = __webpack_require__(15);
var SubscriptionLoggable_1 = __webpack_require__(420);
var applyMixins_1 = __webpack_require__(422);
/**
 * We need this JSDoc comment for affecting ESDoc.
 * @ignore
 * @extends {Ignored}
 */
var ColdObservable = (function (_super) {
    __extends(ColdObservable, _super);
    function ColdObservable(messages, scheduler) {
        _super.call(this, function (subscriber) {
            var observable = this;
            var index = observable.logSubscribedFrame();
            subscriber.add(new Subscription_1.Subscription(function () {
                observable.logUnsubscribedFrame(index);
            }));
            observable.scheduleMessages(subscriber);
            return subscriber;
        });
        this.messages = messages;
        this.subscriptions = [];
        this.scheduler = scheduler;
    }
    ColdObservable.prototype.scheduleMessages = function (subscriber) {
        var messagesLength = this.messages.length;
        for (var i = 0; i < messagesLength; i++) {
            var message = this.messages[i];
            subscriber.add(this.scheduler.schedule(function (_a) {
                var message = _a.message, subscriber = _a.subscriber;
                message.notification.observe(subscriber);
            }, message.frame, { message: message, subscriber: subscriber }));
        }
    };
    return ColdObservable;
}(Observable_1.Observable));
exports.ColdObservable = ColdObservable;
applyMixins_1.applyMixins(ColdObservable, [SubscriptionLoggable_1.SubscriptionLoggable]);
//# sourceMappingURL=ColdObservable.js.map

/***/ },
/* 872 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
"use strict";
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var Subject_1 = __webpack_require__(10);
var Subscription_1 = __webpack_require__(15);
var SubscriptionLoggable_1 = __webpack_require__(420);
var applyMixins_1 = __webpack_require__(422);
/**
 * We need this JSDoc comment for affecting ESDoc.
 * @ignore
 * @extends {Ignored}
 */
var HotObservable = (function (_super) {
    __extends(HotObservable, _super);
    function HotObservable(messages, scheduler) {
        _super.call(this);
        this.messages = messages;
        this.subscriptions = [];
        this.scheduler = scheduler;
    }
    HotObservable.prototype._subscribe = function (subscriber) {
        var subject = this;
        var index = subject.logSubscribedFrame();
        subscriber.add(new Subscription_1.Subscription(function () {
            subject.logUnsubscribedFrame(index);
        }));
        return _super.prototype._subscribe.call(this, subscriber);
    };
    HotObservable.prototype.setup = function () {
        var subject = this;
        var messagesLength = subject.messages.length;
        /* tslint:disable:no-var-keyword */
        for (var i = 0; i < messagesLength; i++) {
            (function () {
                var message = subject.messages[i];
                /* tslint:enable */
                subject.scheduler.schedule(function () { message.notification.observe(subject); }, message.frame);
            })();
        }
    };
    return HotObservable;
}(Subject_1.Subject));
exports.HotObservable = HotObservable;
applyMixins_1.applyMixins(HotObservable, [SubscriptionLoggable_1.SubscriptionLoggable]);
//# sourceMappingURL=HotObservable.js.map

/***/ },
/* 873 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
"use strict";
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var Observable_1 = __webpack_require__(0);
var Notification_1 = __webpack_require__(78);
var ColdObservable_1 = __webpack_require__(871);
var HotObservable_1 = __webpack_require__(872);
var SubscriptionLog_1 = __webpack_require__(419);
var VirtualTimeScheduler_1 = __webpack_require__(416);
var defaultMaxFrame = 750;
var TestScheduler = (function (_super) {
    __extends(TestScheduler, _super);
    function TestScheduler(assertDeepEqual) {
        _super.call(this, VirtualTimeScheduler_1.VirtualAction, defaultMaxFrame);
        this.assertDeepEqual = assertDeepEqual;
        this.hotObservables = [];
        this.coldObservables = [];
        this.flushTests = [];
    }
    TestScheduler.prototype.createTime = function (marbles) {
        var indexOf = marbles.indexOf('|');
        if (indexOf === -1) {
            throw new Error('marble diagram for time should have a completion marker "|"');
        }
        return indexOf * TestScheduler.frameTimeFactor;
    };
    TestScheduler.prototype.createColdObservable = function (marbles, values, error) {
        if (marbles.indexOf('^') !== -1) {
            throw new Error('cold observable cannot have subscription offset "^"');
        }
        if (marbles.indexOf('!') !== -1) {
            throw new Error('cold observable cannot have unsubscription marker "!"');
        }
        var messages = TestScheduler.parseMarbles(marbles, values, error);
        var cold = new ColdObservable_1.ColdObservable(messages, this);
        this.coldObservables.push(cold);
        return cold;
    };
    TestScheduler.prototype.createHotObservable = function (marbles, values, error) {
        if (marbles.indexOf('!') !== -1) {
            throw new Error('hot observable cannot have unsubscription marker "!"');
        }
        var messages = TestScheduler.parseMarbles(marbles, values, error);
        var subject = new HotObservable_1.HotObservable(messages, this);
        this.hotObservables.push(subject);
        return subject;
    };
    TestScheduler.prototype.materializeInnerObservable = function (observable, outerFrame) {
        var _this = this;
        var messages = [];
        observable.subscribe(function (value) {
            messages.push({ frame: _this.frame - outerFrame, notification: Notification_1.Notification.createNext(value) });
        }, function (err) {
            messages.push({ frame: _this.frame - outerFrame, notification: Notification_1.Notification.createError(err) });
        }, function () {
            messages.push({ frame: _this.frame - outerFrame, notification: Notification_1.Notification.createComplete() });
        });
        return messages;
    };
    TestScheduler.prototype.expectObservable = function (observable, unsubscriptionMarbles) {
        var _this = this;
        if (unsubscriptionMarbles === void 0) { unsubscriptionMarbles = null; }
        var actual = [];
        var flushTest = { actual: actual, ready: false };
        var unsubscriptionFrame = TestScheduler
            .parseMarblesAsSubscriptions(unsubscriptionMarbles).unsubscribedFrame;
        var subscription;
        this.schedule(function () {
            subscription = observable.subscribe(function (x) {
                var value = x;
                // Support Observable-of-Observables
                if (x instanceof Observable_1.Observable) {
                    value = _this.materializeInnerObservable(value, _this.frame);
                }
                actual.push({ frame: _this.frame, notification: Notification_1.Notification.createNext(value) });
            }, function (err) {
                actual.push({ frame: _this.frame, notification: Notification_1.Notification.createError(err) });
            }, function () {
                actual.push({ frame: _this.frame, notification: Notification_1.Notification.createComplete() });
            });
        }, 0);
        if (unsubscriptionFrame !== Number.POSITIVE_INFINITY) {
            this.schedule(function () { return subscription.unsubscribe(); }, unsubscriptionFrame);
        }
        this.flushTests.push(flushTest);
        return {
            toBe: function (marbles, values, errorValue) {
                flushTest.ready = true;
                flushTest.expected = TestScheduler.parseMarbles(marbles, values, errorValue, true);
            }
        };
    };
    TestScheduler.prototype.expectSubscriptions = function (actualSubscriptionLogs) {
        var flushTest = { actual: actualSubscriptionLogs, ready: false };
        this.flushTests.push(flushTest);
        return {
            toBe: function (marbles) {
                var marblesArray = (typeof marbles === 'string') ? [marbles] : marbles;
                flushTest.ready = true;
                flushTest.expected = marblesArray.map(function (marbles) {
                    return TestScheduler.parseMarblesAsSubscriptions(marbles);
                });
            }
        };
    };
    TestScheduler.prototype.flush = function () {
        var hotObservables = this.hotObservables;
        while (hotObservables.length > 0) {
            hotObservables.shift().setup();
        }
        _super.prototype.flush.call(this);
        var readyFlushTests = this.flushTests.filter(function (test) { return test.ready; });
        while (readyFlushTests.length > 0) {
            var test = readyFlushTests.shift();
            this.assertDeepEqual(test.actual, test.expected);
        }
    };
    TestScheduler.parseMarblesAsSubscriptions = function (marbles) {
        if (typeof marbles !== 'string') {
            return new SubscriptionLog_1.SubscriptionLog(Number.POSITIVE_INFINITY);
        }
        var len = marbles.length;
        var groupStart = -1;
        var subscriptionFrame = Number.POSITIVE_INFINITY;
        var unsubscriptionFrame = Number.POSITIVE_INFINITY;
        for (var i = 0; i < len; i++) {
            var frame = i * this.frameTimeFactor;
            var c = marbles[i];
            switch (c) {
                case '-':
                case ' ':
                    break;
                case '(':
                    groupStart = frame;
                    break;
                case ')':
                    groupStart = -1;
                    break;
                case '^':
                    if (subscriptionFrame !== Number.POSITIVE_INFINITY) {
                        throw new Error('found a second subscription point \'^\' in a ' +
                            'subscription marble diagram. There can only be one.');
                    }
                    subscriptionFrame = groupStart > -1 ? groupStart : frame;
                    break;
                case '!':
                    if (unsubscriptionFrame !== Number.POSITIVE_INFINITY) {
                        throw new Error('found a second subscription point \'^\' in a ' +
                            'subscription marble diagram. There can only be one.');
                    }
                    unsubscriptionFrame = groupStart > -1 ? groupStart : frame;
                    break;
                default:
                    throw new Error('there can only be \'^\' and \'!\' markers in a ' +
                        'subscription marble diagram. Found instead \'' + c + '\'.');
            }
        }
        if (unsubscriptionFrame < 0) {
            return new SubscriptionLog_1.SubscriptionLog(subscriptionFrame);
        }
        else {
            return new SubscriptionLog_1.SubscriptionLog(subscriptionFrame, unsubscriptionFrame);
        }
    };
    TestScheduler.parseMarbles = function (marbles, values, errorValue, materializeInnerObservables) {
        if (materializeInnerObservables === void 0) { materializeInnerObservables = false; }
        if (marbles.indexOf('!') !== -1) {
            throw new Error('conventional marble diagrams cannot have the ' +
                'unsubscription marker "!"');
        }
        var len = marbles.length;
        var testMessages = [];
        var subIndex = marbles.indexOf('^');
        var frameOffset = subIndex === -1 ? 0 : (subIndex * -this.frameTimeFactor);
        var getValue = typeof values !== 'object' ?
            function (x) { return x; } :
            function (x) {
                // Support Observable-of-Observables
                if (materializeInnerObservables && values[x] instanceof ColdObservable_1.ColdObservable) {
                    return values[x].messages;
                }
                return values[x];
            };
        var groupStart = -1;
        for (var i = 0; i < len; i++) {
            var frame = i * this.frameTimeFactor + frameOffset;
            var notification = void 0;
            var c = marbles[i];
            switch (c) {
                case '-':
                case ' ':
                    break;
                case '(':
                    groupStart = frame;
                    break;
                case ')':
                    groupStart = -1;
                    break;
                case '|':
                    notification = Notification_1.Notification.createComplete();
                    break;
                case '^':
                    break;
                case '#':
                    notification = Notification_1.Notification.createError(errorValue || 'error');
                    break;
                default:
                    notification = Notification_1.Notification.createNext(getValue(c));
                    break;
            }
            if (notification) {
                testMessages.push({ frame: groupStart > -1 ? groupStart : frame, notification: notification });
            }
        }
        return testMessages;
    };
    return TestScheduler;
}(VirtualTimeScheduler_1.VirtualTimeScheduler));
exports.TestScheduler = TestScheduler;
//# sourceMappingURL=TestScheduler.js.map

/***/ },
/* 874 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
"use strict";
var root_1 = __webpack_require__(20);
var RequestAnimationFrameDefinition = (function () {
    function RequestAnimationFrameDefinition(root) {
        if (root.requestAnimationFrame) {
            this.cancelAnimationFrame = root.cancelAnimationFrame.bind(root);
            this.requestAnimationFrame = root.requestAnimationFrame.bind(root);
        }
        else if (root.mozRequestAnimationFrame) {
            this.cancelAnimationFrame = root.mozCancelAnimationFrame.bind(root);
            this.requestAnimationFrame = root.mozRequestAnimationFrame.bind(root);
        }
        else if (root.webkitRequestAnimationFrame) {
            this.cancelAnimationFrame = root.webkitCancelAnimationFrame.bind(root);
            this.requestAnimationFrame = root.webkitRequestAnimationFrame.bind(root);
        }
        else if (root.msRequestAnimationFrame) {
            this.cancelAnimationFrame = root.msCancelAnimationFrame.bind(root);
            this.requestAnimationFrame = root.msRequestAnimationFrame.bind(root);
        }
        else if (root.oRequestAnimationFrame) {
            this.cancelAnimationFrame = root.oCancelAnimationFrame.bind(root);
            this.requestAnimationFrame = root.oRequestAnimationFrame.bind(root);
        }
        else {
            this.cancelAnimationFrame = root.clearTimeout.bind(root);
            this.requestAnimationFrame = function (cb) { return root.setTimeout(cb, 1000 / 60); };
        }
    }
    return RequestAnimationFrameDefinition;
}());
exports.RequestAnimationFrameDefinition = RequestAnimationFrameDefinition;
exports.AnimationFrame = new RequestAnimationFrameDefinition(root_1.root);
//# sourceMappingURL=AnimationFrame.js.map

/***/ },
/* 875 */
/***/ function(module, exports) {

"use strict";
"use strict";
var FastMap = (function () {
    function FastMap() {
        this.values = {};
    }
    FastMap.prototype.delete = function (key) {
        this.values[key] = null;
        return true;
    };
    FastMap.prototype.set = function (key, value) {
        this.values[key] = value;
        return this;
    };
    FastMap.prototype.get = function (key) {
        return this.values[key];
    };
    FastMap.prototype.forEach = function (cb, thisArg) {
        var values = this.values;
        for (var key in values) {
            if (values.hasOwnProperty(key) && values[key] !== null) {
                cb.call(thisArg, values[key], key);
            }
        }
    };
    FastMap.prototype.clear = function () {
        this.values = {};
    };
    return FastMap;
}());
exports.FastMap = FastMap;
//# sourceMappingURL=FastMap.js.map

/***/ },
/* 876 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(clearImmediate, setImmediate) {/**
Some credit for this helper goes to http://github.com/YuzuJS/setImmediate
*/
"use strict";
var root_1 = __webpack_require__(20);
var ImmediateDefinition = (function () {
    function ImmediateDefinition(root) {
        this.root = root;
        if (root.setImmediate && typeof root.setImmediate === 'function') {
            this.setImmediate = root.setImmediate.bind(root);
            this.clearImmediate = root.clearImmediate.bind(root);
        }
        else {
            this.nextHandle = 1;
            this.tasksByHandle = {};
            this.currentlyRunningATask = false;
            // Don't get fooled by e.g. browserify environments.
            if (this.canUseProcessNextTick()) {
                // For Node.js before 0.9
                this.setImmediate = this.createProcessNextTickSetImmediate();
            }
            else if (this.canUsePostMessage()) {
                // For non-IE10 modern browsers
                this.setImmediate = this.createPostMessageSetImmediate();
            }
            else if (this.canUseMessageChannel()) {
                // For web workers, where supported
                this.setImmediate = this.createMessageChannelSetImmediate();
            }
            else if (this.canUseReadyStateChange()) {
                // For IE 6–8
                this.setImmediate = this.createReadyStateChangeSetImmediate();
            }
            else {
                // For older browsers
                this.setImmediate = this.createSetTimeoutSetImmediate();
            }
            var ci = function clearImmediate(handle) {
                delete clearImmediate.instance.tasksByHandle[handle];
            };
            ci.instance = this;
            this.clearImmediate = ci;
        }
    }
    ImmediateDefinition.prototype.identify = function (o) {
        return this.root.Object.prototype.toString.call(o);
    };
    ImmediateDefinition.prototype.canUseProcessNextTick = function () {
        return this.identify(this.root.process) === '[object process]';
    };
    ImmediateDefinition.prototype.canUseMessageChannel = function () {
        return Boolean(this.root.MessageChannel);
    };
    ImmediateDefinition.prototype.canUseReadyStateChange = function () {
        var document = this.root.document;
        return Boolean(document && 'onreadystatechange' in document.createElement('script'));
    };
    ImmediateDefinition.prototype.canUsePostMessage = function () {
        var root = this.root;
        // The test against `importScripts` prevents this implementation from being installed inside a web worker,
        // where `root.postMessage` means something completely different and can't be used for this purpose.
        if (root.postMessage && !root.importScripts) {
            var postMessageIsAsynchronous_1 = true;
            var oldOnMessage = root.onmessage;
            root.onmessage = function () {
                postMessageIsAsynchronous_1 = false;
            };
            root.postMessage('', '*');
            root.onmessage = oldOnMessage;
            return postMessageIsAsynchronous_1;
        }
        return false;
    };
    // This function accepts the same arguments as setImmediate, but
    // returns a function that requires no arguments.
    ImmediateDefinition.prototype.partiallyApplied = function (handler) {
        var args = [];
        for (var _i = 1; _i < arguments.length; _i++) {
            args[_i - 1] = arguments[_i];
        }
        var fn = function result() {
            var _a = result, handler = _a.handler, args = _a.args;
            if (typeof handler === 'function') {
                handler.apply(undefined, args);
            }
            else {
                (new Function('' + handler))();
            }
        };
        fn.handler = handler;
        fn.args = args;
        return fn;
    };
    ImmediateDefinition.prototype.addFromSetImmediateArguments = function (args) {
        this.tasksByHandle[this.nextHandle] = this.partiallyApplied.apply(undefined, args);
        return this.nextHandle++;
    };
    ImmediateDefinition.prototype.createProcessNextTickSetImmediate = function () {
        var fn = function setImmediate() {
            var instance = setImmediate.instance;
            var handle = instance.addFromSetImmediateArguments(arguments);
            instance.root.process.nextTick(instance.partiallyApplied(instance.runIfPresent, handle));
            return handle;
        };
        fn.instance = this;
        return fn;
    };
    ImmediateDefinition.prototype.createPostMessageSetImmediate = function () {
        // Installs an event handler on `global` for the `message` event: see
        // * https://developer.mozilla.org/en/DOM/window.postMessage
        // * http://www.whatwg.org/specs/web-apps/current-work/multipage/comms.html#crossDocumentMessages
        var root = this.root;
        var messagePrefix = 'setImmediate$' + root.Math.random() + '$';
        var onGlobalMessage = function globalMessageHandler(event) {
            var instance = globalMessageHandler.instance;
            if (event.source === root &&
                typeof event.data === 'string' &&
                event.data.indexOf(messagePrefix) === 0) {
                instance.runIfPresent(+event.data.slice(messagePrefix.length));
            }
        };
        onGlobalMessage.instance = this;
        root.addEventListener('message', onGlobalMessage, false);
        var fn = function setImmediate() {
            var _a = setImmediate, messagePrefix = _a.messagePrefix, instance = _a.instance;
            var handle = instance.addFromSetImmediateArguments(arguments);
            instance.root.postMessage(messagePrefix + handle, '*');
            return handle;
        };
        fn.instance = this;
        fn.messagePrefix = messagePrefix;
        return fn;
    };
    ImmediateDefinition.prototype.runIfPresent = function (handle) {
        // From the spec: 'Wait until any invocations of this algorithm started before this one have completed.'
        // So if we're currently running a task, we'll need to delay this invocation.
        if (this.currentlyRunningATask) {
            // Delay by doing a setTimeout. setImmediate was tried instead, but in Firefox 7 it generated a
            // 'too much recursion' error.
            this.root.setTimeout(this.partiallyApplied(this.runIfPresent, handle), 0);
        }
        else {
            var task = this.tasksByHandle[handle];
            if (task) {
                this.currentlyRunningATask = true;
                try {
                    task();
                }
                finally {
                    this.clearImmediate(handle);
                    this.currentlyRunningATask = false;
                }
            }
        }
    };
    ImmediateDefinition.prototype.createMessageChannelSetImmediate = function () {
        var _this = this;
        var channel = new this.root.MessageChannel();
        channel.port1.onmessage = function (event) {
            var handle = event.data;
            _this.runIfPresent(handle);
        };
        var fn = function setImmediate() {
            var _a = setImmediate, channel = _a.channel, instance = _a.instance;
            var handle = instance.addFromSetImmediateArguments(arguments);
            channel.port2.postMessage(handle);
            return handle;
        };
        fn.channel = channel;
        fn.instance = this;
        return fn;
    };
    ImmediateDefinition.prototype.createReadyStateChangeSetImmediate = function () {
        var fn = function setImmediate() {
            var instance = setImmediate.instance;
            var root = instance.root;
            var doc = root.document;
            var html = doc.documentElement;
            var handle = instance.addFromSetImmediateArguments(arguments);
            // Create a <script> element; its readystatechange event will be fired asynchronously once it is inserted
            // into the document. Do so, thus queuing up the task. Remember to clean up once it's been called.
            var script = doc.createElement('script');
            script.onreadystatechange = function () {
                instance.runIfPresent(handle);
                script.onreadystatechange = null;
                html.removeChild(script);
                script = null;
            };
            html.appendChild(script);
            return handle;
        };
        fn.instance = this;
        return fn;
    };
    ImmediateDefinition.prototype.createSetTimeoutSetImmediate = function () {
        var fn = function setImmediate() {
            var instance = setImmediate.instance;
            var handle = instance.addFromSetImmediateArguments(arguments);
            instance.root.setTimeout(instance.partiallyApplied(instance.runIfPresent, handle), 0);
            return handle;
        };
        fn.instance = this;
        return fn;
    };
    return ImmediateDefinition;
}());
exports.ImmediateDefinition = ImmediateDefinition;
exports.Immediate = new ImmediateDefinition(root_1.root);
//# sourceMappingURL=Immediate.js.map
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(127).clearImmediate, __webpack_require__(127).setImmediate))

/***/ },
/* 877 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
"use strict";
var root_1 = __webpack_require__(20);
var MapPolyfill_1 = __webpack_require__(878);
exports.Map = root_1.root.Map || (function () { return MapPolyfill_1.MapPolyfill; })();
//# sourceMappingURL=Map.js.map

/***/ },
/* 878 */
/***/ function(module, exports) {

"use strict";
"use strict";
var MapPolyfill = (function () {
    function MapPolyfill() {
        this.size = 0;
        this._values = [];
        this._keys = [];
    }
    MapPolyfill.prototype.get = function (key) {
        var i = this._keys.indexOf(key);
        return i === -1 ? undefined : this._values[i];
    };
    MapPolyfill.prototype.set = function (key, value) {
        var i = this._keys.indexOf(key);
        if (i === -1) {
            this._keys.push(key);
            this._values.push(value);
            this.size++;
        }
        else {
            this._values[i] = value;
        }
        return this;
    };
    MapPolyfill.prototype.delete = function (key) {
        var i = this._keys.indexOf(key);
        if (i === -1) {
            return false;
        }
        this._values.splice(i, 1);
        this._keys.splice(i, 1);
        this.size--;
        return true;
    };
    MapPolyfill.prototype.clear = function () {
        this._keys.length = 0;
        this._values.length = 0;
        this.size = 0;
    };
    MapPolyfill.prototype.forEach = function (cb, thisArg) {
        for (var i = 0; i < this.size; i++) {
            cb.call(thisArg, this._values[i], this._keys[i]);
        }
    };
    return MapPolyfill;
}());
exports.MapPolyfill = MapPolyfill;
//# sourceMappingURL=MapPolyfill.js.map

/***/ },
/* 879 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
"use strict";
var root_1 = __webpack_require__(20);
var Object = root_1.root.Object;
if (typeof Object.assign != 'function') {
    (function () {
        Object.assign = function assignPolyfill(target) {
            var sources = [];
            for (var _i = 1; _i < arguments.length; _i++) {
                sources[_i - 1] = arguments[_i];
            }
            if (target === undefined || target === null) {
                throw new TypeError('cannot convert undefined or null to object');
            }
            var output = Object(target);
            var len = sources.length;
            for (var index = 0; index < len; index++) {
                var source = sources[index];
                if (source !== undefined && source !== null) {
                    for (var key in source) {
                        if (source.hasOwnProperty(key)) {
                            output[key] = source[key];
                        }
                    }
                }
            }
            return output;
        };
    })();
}
exports.assign = Object.assign;
//# sourceMappingURL=assign.js.map

/***/ },
/* 880 */,
/* 881 */
/***/ function(module, exports) {

"use strict";
"use strict";
function not(pred, thisArg) {
    function notPred() {
        return !(notPred.pred.apply(notPred.thisArg, arguments));
    }
    notPred.pred = pred;
    notPred.thisArg = thisArg;
    return notPred;
}
exports.not = not;
//# sourceMappingURL=not.js.map

/***/ },
/* 882 */,
/* 883 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
"use strict";
var router_1 = __webpack_require__(128);
var home_1 = __webpack_require__(429);
var about_1 = __webpack_require__(425);
var econ_component_1 = __webpack_require__(428);
var statistics_component_1 = __webpack_require__(436);
// Routing is declared here
exports.ROUTES = [
    { path: '', component: home_1.Home },
    { path: 'about', component: about_1.About },
    { path: 'econ', component: econ_component_1.EconComponent },
    { path: 'stat', component: statistics_component_1.StatisticsComponent }
];
exports.ROUTING = router_1.RouterModule.forRoot(exports.ROUTES);


/***/ },
/* 884 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
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
var core_1 = __webpack_require__(1);
var MyApp = (function () {
    //query = window.matchMedia("(orientation:landscape)")
    //console.log("Device held " + (this.query.matches ? "horizontally" : "vertically"));
    function MyApp() {
    }
    MyApp = __decorate([
        core_1.Component({
            selector: 'my-app',
            template: "\n    <div>\n      <router-outlet></router-outlet>\n    </div>\n    <my-footer></my-footer>\n  ",
            styles: [String(__webpack_require__(588))]
        }), 
        __metadata('design:paramtypes', [])
    ], MyApp);
    return MyApp;
}());
exports.MyApp = MyApp;


/***/ },
/* 885 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
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
var core_1 = __webpack_require__(1);
var OffClickDirective = (function () {
    function OffClickDirective() {
    }
    /* tslint:enable */
    OffClickDirective.prototype.onClick = function ($event) {
        $event.stopPropagation();
    };
    OffClickDirective.prototype.ngOnInit = function () {
        var _this = this;
        setTimeout(function () { document.addEventListener('click', _this.offClickHandler); }, 0);
    };
    OffClickDirective.prototype.ngOnDestroy = function () {
        document.removeEventListener('click', this.offClickHandler);
    };
    __decorate([
        core_1.Input('offClick'), 
        __metadata('design:type', Object)
    ], OffClickDirective.prototype, "offClickHandler", void 0);
    __decorate([
        core_1.HostListener('click', ['$event']), 
        __metadata('design:type', Function), 
        __metadata('design:paramtypes', [MouseEvent]), 
        __metadata('design:returntype', void 0)
    ], OffClickDirective.prototype, "onClick", null);
    OffClickDirective = __decorate([
        core_1.Directive({
            selector: '[offClick]'
        }), 
        __metadata('design:paramtypes', [])
    ], OffClickDirective);
    return OffClickDirective;
}());
exports.OffClickDirective = OffClickDirective;


/***/ },
/* 886 */
/***/ function(module, exports) {

"use strict";
"use strict";
var SelectItem = (function () {
    function SelectItem(source) {
        var _this = this;
        if (typeof source === 'string') {
            this.id = this.text = source;
        }
        if (typeof source === 'object') {
            this.id = source.id || source.text;
            this.text = source.text;
            if (source.children && source.text) {
                this.children = source.children.map(function (c) {
                    var r = new SelectItem(c);
                    r.parent = _this;
                    return r;
                });
                this.text = source.text;
            }
        }
    }
    SelectItem.prototype.fillChildrenHash = function (optionsMap, startIndex) {
        var i = startIndex;
        this.children.map(function (child) {
            optionsMap.set(child.id, i++);
        });
        return i;
    };
    SelectItem.prototype.hasChildren = function () {
        return this.children && this.children.length > 0;
    };
    SelectItem.prototype.getSimilar = function () {
        var r = new SelectItem(false);
        r.id = this.id;
        r.text = this.text;
        r.parent = this.parent;
        return r;
    };
    return SelectItem;
}());
exports.SelectItem = SelectItem;


/***/ },
/* 887 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
"use strict";
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = __webpack_require__(1);
var platform_browser_1 = __webpack_require__(60);
var select_item_1 = __webpack_require__(886);
var select_pipes_1 = __webpack_require__(427);
var common_1 = __webpack_require__(426);
var styles = "\n  .ui-select-toggle {\n    position: relative;\n  }\n  \n  /* Fix Bootstrap dropdown position when inside a input-group */\n  .input-group > .dropdown {\n    /* Instead of relative */\n    position: static;\n  }\n  \n  .ui-select-match > .btn {\n    /* Instead of center because of .btn */\n    text-align: left !important;\n  }\n  \n  .ui-select-match > .caret {\n    position: absolute;\n    top: 45%;\n    right: 15px;\n  }\n  \n  .ui-disabled {\n    background-color: #eceeef;\n    border-radius: 4px;\n    position: absolute;\n    width: 100%;\n    height: 100%;\n    z-index: 5;\n    opacity: 0.6;\n    top: 0;\n    left: 0;\n    cursor: not-allowed;\n  }\n  \n  .ui-select-choices {\n    width: 100%;\n    height: auto;\n    max-height: 200px;\n    overflow-x: hidden;\n    margin-top: 0;\n  }\n  \n  .ui-select-multiple .ui-select-choices {\n    margin-top: 1px;\n  }\n  .ui-select-choices-row>a {\n      display: block;\n      padding: 3px 20px;\n      clear: both;\n      font-weight: 400;\n      line-height: 1.42857143;\n      color: #333;\n      white-space: nowrap;\n  }\n  .ui-select-choices-row.active>a {\n      color: #fff;\n      text-decoration: none;\n      outline: 0;\n      background-color: #428bca;\n  }\n  \n  .ui-select-multiple {\n    height: auto;\n    padding:3px 3px 0 3px;\n  }\n  \n  .ui-select-multiple input.ui-select-search {\n    background-color: transparent !important; /* To prevent double background when disabled */\n    border: 4px solid green;\n    outline: none;\n    box-shadow: none;\n    height: 1.6666em;\n    padding: 0;\n    margin-bottom: 3px;\n    \n  }\n  .ui-select-match .close {\n      font-size: 1.6em;\n      line-height: 0.75;\n  }\n  \n  .ui-select-multiple .ui-select-match-item {\n    outline: 0;\n    margin: 0 3px 3px 0;\n  }\n  .ui-select-toggle > .caret {\n      position: absolute;\n      height: 10px;\n      top: 50%;\n      right: 10px;\n      margin-top: -2px;\n  }\n";
var SelectComponent = (function () {
    function SelectComponent(element, sanitizer) {
        this.sanitizer = sanitizer;
        this.allowClear = false;
        this.placeholder = '';
        this.idField = 'id';
        this.textField = 'text';
        this.multiple = false;
        this.data = new core_1.EventEmitter();
        this.selected = new core_1.EventEmitter();
        this.removed = new core_1.EventEmitter();
        this.typed = new core_1.EventEmitter();
        this.options = [];
        this.itemObjects = [];
        this.inputMode = false;
        this.optionsOpened = false;
        this.inputValue = '';
        this._items = [];
        this._disabled = false;
        this._active = [];
        this.element = element;
        this.clickedOutside = this.clickedOutside.bind(this);
    }
    Object.defineProperty(SelectComponent.prototype, "items", {
        set: function (value) {
            if (!value) {
                this._items = this.itemObjects = [];
            }
            else {
                this._items = value.filter(function (item) {
                    // if ((typeof item === 'string' && item) || (typeof item === 'object' && item && item.text && item.id)) {
                    if ((typeof item === 'string') || (typeof item === 'object' && item.text)) {
                        return item;
                    }
                });
                // this.itemObjects = this._items.map((item:any) => (typeof item === 'string' ? new SelectItem(item) : new SelectItem({id: item[this.idField], text: item[this.textField]})));
                this.itemObjects = this._items.map(function (item) { return new select_item_1.SelectItem(item); });
            }
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(SelectComponent.prototype, "disabled", {
        get: function () {
            return this._disabled;
        },
        set: function (value) {
            this._disabled = value;
            if (this._disabled === true) {
                this.hideOptions();
            }
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(SelectComponent.prototype, "active", {
        get: function () {
            return this._active;
        },
        set: function (selectedItems) {
            var _this = this;
            if (!selectedItems || selectedItems.length === 0) {
                this._active = [];
            }
            else {
                var areItemsStrings_1 = typeof selectedItems[0] === 'string';
                this._active = selectedItems.map(function (item) {
                    var data = areItemsStrings_1
                        ? item
                        : { id: item[_this.idField], text: item[_this.textField] };
                    return new select_item_1.SelectItem(data);
                });
            }
        },
        enumerable: true,
        configurable: true
    });
    SelectComponent.prototype.sanitize = function (html) {
        return this.sanitizer.bypassSecurityTrustHtml(html);
    };
    SelectComponent.prototype.inputEvent = function (e, isUpMode) {
        if (isUpMode === void 0) { isUpMode = false; }
        // tab
        if (e.keyCode === 9) {
            return;
        }
        if (isUpMode && (e.keyCode === 37 || e.keyCode === 39 || e.keyCode === 38 ||
            e.keyCode === 40 || e.keyCode === 13)) {
            e.preventDefault();
            return;
        }
        // backspace
        if (!isUpMode && e.keyCode === 8) {
            var el = this.element.nativeElement
                .querySelector('div.ui-select-container > input');
            if (!el.value || el.value.length <= 0) {
                if (this.active.length > 0) {
                    this.remove(this.active[this.active.length - 1]);
                }
                e.preventDefault();
            }
        }
        // esc
        if (!isUpMode && e.keyCode === 27) {
            this.hideOptions();
            this.element.nativeElement.children[0].focus();
            e.preventDefault();
            return;
        }
        // del
        if (!isUpMode && e.keyCode === 46) {
            if (this.active.length > 0) {
                this.remove(this.active[this.active.length - 1]);
            }
            e.preventDefault();
        }
        // left
        if (!isUpMode && e.keyCode === 37 && this._items.length > 0) {
            this.behavior.first();
            e.preventDefault();
            return;
        }
        // right
        if (!isUpMode && e.keyCode === 39 && this._items.length > 0) {
            this.behavior.last();
            e.preventDefault();
            return;
        }
        // up
        if (!isUpMode && e.keyCode === 38) {
            this.behavior.prev();
            e.preventDefault();
            return;
        }
        // down
        if (!isUpMode && e.keyCode === 40) {
            this.behavior.next();
            e.preventDefault();
            return;
        }
        // enter
        if (!isUpMode && e.keyCode === 13) {
            if (this.active.indexOf(this.activeOption) === -1) {
                this.selectActiveMatch();
                this.behavior.next();
            }
            e.preventDefault();
            return;
        }
        var target = e.target || e.srcElement;
        if (target && target.value) {
            this.inputValue = target.value;
            this.behavior.filter(new RegExp(common_1.escapeRegexp(this.inputValue), 'ig'));
            this.doEvent('typed', this.inputValue);
        }
    };
    SelectComponent.prototype.ngOnInit = function () {
        this.behavior = (this.firstItemHasChildren) ?
            new ChildrenBehavior(this) : new GenericBehavior(this);
    };
    SelectComponent.prototype.remove = function (item) {
        if (this._disabled === true) {
            return;
        }
        if (this.multiple === true && this.active) {
            var index = this.active.indexOf(item);
            this.active.splice(index, 1);
            this.data.next(this.active);
            this.doEvent('removed', item);
        }
        if (this.multiple === false) {
            this.active = [];
            this.data.next(this.active);
            this.doEvent('removed', item);
        }
    };
    SelectComponent.prototype.doEvent = function (type, value) {
        if (this[type] && value) {
            this[type].next(value);
        }
    };
    SelectComponent.prototype.clickedOutside = function () {
        this.inputMode = false;
        this.optionsOpened = false;
    };
    Object.defineProperty(SelectComponent.prototype, "firstItemHasChildren", {
        get: function () {
            return this.itemObjects[0] && this.itemObjects[0].hasChildren();
        },
        enumerable: true,
        configurable: true
    });
    SelectComponent.prototype.matchClick = function (e) {
        if (this._disabled === true) {
            return;
        }
        this.inputMode = !this.inputMode;
        if (this.inputMode === true && ((this.multiple === true && e) || this.multiple === false)) {
            this.focusToInput();
            this.open();
        }
    };
    SelectComponent.prototype.mainClick = function (event) {
        if (this.inputMode === true || this._disabled === true) {
            return;
        }
        if (event.keyCode === 46) {
            event.preventDefault();
            this.inputEvent(event);
            return;
        }
        if (event.keyCode === 8) {
            event.preventDefault();
            this.inputEvent(event, true);
            return;
        }
        if (event.keyCode === 9 || event.keyCode === 13 ||
            event.keyCode === 27 || (event.keyCode >= 37 && event.keyCode <= 40)) {
            event.preventDefault();
            return;
        }
        this.inputMode = true;
        var value = String
            .fromCharCode(96 <= event.keyCode && event.keyCode <= 105 ? event.keyCode - 48 : event.keyCode)
            .toLowerCase();
        this.focusToInput(value);
        this.open();
        var target = event.target || event.srcElement;
        target.value = value;
        this.inputEvent(event);
    };
    SelectComponent.prototype.selectActive = function (value) {
        this.activeOption = value;
    };
    SelectComponent.prototype.isActive = function (value) {
        return this.activeOption.text === value.text;
    };
    SelectComponent.prototype.focusToInput = function (value) {
        var _this = this;
        if (value === void 0) { value = ''; }
        setTimeout(function () {
            var el = _this.element.nativeElement.querySelector('div.ui-select-container > input');
            if (el) {
                el.focus();
                el.value = value;
            }
        }, 0);
    };
    SelectComponent.prototype.open = function () {
        var _this = this;
        this.options = this.itemObjects
            .filter(function (option) { return (_this.multiple === false ||
            _this.multiple === true && !_this.active.find(function (o) { return option.text === o.text; })); });
        if (this.options.length > 0) {
            this.behavior.first();
        }
        this.optionsOpened = true;
    };
    SelectComponent.prototype.hideOptions = function () {
        this.inputMode = false;
        this.optionsOpened = false;
    };
    SelectComponent.prototype.selectActiveMatch = function () {
        this.selectMatch(this.activeOption);
    };
    SelectComponent.prototype.selectMatch = function (value, e) {
        if (e === void 0) { e = void 0; }
        if (e) {
            e.stopPropagation();
            e.preventDefault();
        }
        if (this.options.length <= 0) {
            return;
        }
        if (this.multiple === true) {
            this.active.push(value);
            this.data.next(this.active);
        }
        if (this.multiple === false) {
            this.active[0] = value;
            this.data.next(this.active[0]);
        }
        this.doEvent('selected', value);
        this.hideOptions();
        if (this.multiple === true) {
            this.focusToInput('');
        }
        else {
            this.focusToInput(select_pipes_1.stripTags(value.text));
            this.element.nativeElement.querySelector('.ui-select-container').focus();
        }
    };
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Boolean)
    ], SelectComponent.prototype, "allowClear", void 0);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', String)
    ], SelectComponent.prototype, "placeholder", void 0);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', String)
    ], SelectComponent.prototype, "idField", void 0);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', String)
    ], SelectComponent.prototype, "textField", void 0);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Boolean)
    ], SelectComponent.prototype, "multiple", void 0);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Array), 
        __metadata('design:paramtypes', [Array])
    ], SelectComponent.prototype, "items", null);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Boolean), 
        __metadata('design:paramtypes', [Boolean])
    ], SelectComponent.prototype, "disabled", null);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Array), 
        __metadata('design:paramtypes', [Array])
    ], SelectComponent.prototype, "active", null);
    __decorate([
        core_1.Output(), 
        __metadata('design:type', core_1.EventEmitter)
    ], SelectComponent.prototype, "data", void 0);
    __decorate([
        core_1.Output(), 
        __metadata('design:type', core_1.EventEmitter)
    ], SelectComponent.prototype, "selected", void 0);
    __decorate([
        core_1.Output(), 
        __metadata('design:type', core_1.EventEmitter)
    ], SelectComponent.prototype, "removed", void 0);
    __decorate([
        core_1.Output(), 
        __metadata('design:type', core_1.EventEmitter)
    ], SelectComponent.prototype, "typed", void 0);
    SelectComponent = __decorate([
        core_1.Component({
            selector: 'ng-select',
            styles: [styles],
            template: "\n  <div tabindex=\"0\"\n     *ngIf=\"multiple === false\"\n     (keyup)=\"mainClick($event)\"\n     [offClick]=\"clickedOutside\"\n     class=\"ui-select-container dropdown open\">\n    <div [ngClass]=\"{'ui-disabled': disabled}\"></div>\n    <div class=\"ui-select-match\"\n         *ngIf=\"!inputMode\">\n      <span tabindex=\"-1\"\n          class=\"btn btn-default btn-secondary form-control ui-select-toggle\"\n          (click)=\"matchClick($event)\"\n          style=\"outline: 0;\">\n        <span *ngIf=\"active.length <= 0\" class=\"ui-select-placeholder text-muted\">{{placeholder}}</span>\n        <span *ngIf=\"active.length > 0\" class=\"ui-select-match-text pull-left\"\n              [ngClass]=\"{'ui-select-allow-clear': allowClear && active.length > 0}\"\n              [innerHTML]=\"sanitize(active[0].text.length >= 20 ? active[0].text.substring(0,20).concat('...') : active[0].text)\"></span>\n        <i class=\"dropdown-toggle pull-right\"></i>\n        <object class=\"menu-arrow pull-right\" type=\"image/svg+xml\" data=\"../../assets/img/play.svg\">\n          <img src=\"../../assets/img/play.png\" />\n        </object>\n      </span>\n    </div>\n    <input type=\"text\" autocomplete=\"false\" tabindex=\"-1\"\n           (keydown)=\"inputEvent($event)\"\n           (keyup)=\"inputEvent($event, true)\"\n           [disabled]=\"disabled\"\n           class=\"form-control ui-select-search\"\n           *ngIf=\"inputMode\"\n           placeholder=\"{{active.length <= 0 ? placeholder : ''}}\">\n     <!-- options template -->\n     <ul *ngIf=\"optionsOpened && options && options.length > 0 && !firstItemHasChildren\"\n          class=\"ui-select-choices dropdown-menu\" role=\"menu\">\n        <li *ngFor=\"let o of options\" role=\"menuitem\">\n          <div class=\"ui-select-choices-row\"\n               [class.active]=\"isActive(o)\"\n               (mouseenter)=\"selectActive(o)\"\n               (click)=\"selectMatch(o, $event)\">\n            <a href=\"javascript:void(0)\" class=\"dropdown-item\">\n              <div [innerHtml]=\"sanitize(o.text | highlight:inputValue)\"></div>\n            </a>\n          </div>\n        </li>\n      </ul>\n  \n      <ul *ngIf=\"optionsOpened && options && options.length > 0 && firstItemHasChildren\"\n          class=\"ui-select-choices dropdown-menu\" role=\"menu\">\n        <li *ngFor=\"let c of options; let index=index\" role=\"menuitem\">\n          <div class=\"divider dropdown-divider\" *ngIf=\"index > 0\"></div>\n          <div class=\"dropdown-header\">{{c.text}}</div>\n  \n          <div *ngFor=\"let o of c.children\"\n               class=\"ui-select-choices-row\"\n               [class.active]=\"isActive(o)\"\n               (mouseenter)=\"selectActive(o)\"\n               (click)=\"selectMatch(o, $event)\"\n               [ngClass]=\"{'active': isActive(o)}\">\n            <a href=\"javascript:void(0)\" class=\"dropdown-item\">\n              <div [innerHtml]=\"sanitize(o.text | highlight:inputValue)\"></div>\n            </a>\n          </div>\n        </li>\n      </ul>\n  </div>\n\n  <div tabindex=\"0\"\n     *ngIf=\"multiple === true\"\n     (keyup)=\"mainClick($event)\"\n     (focus)=\"focusToInput('')\"\n     class=\"ui-select-container ui-select-multiple dropdown form-control open\">\n    <div [ngClass]=\"{'ui-disabled': disabled}\"></div>\n    <span class=\"ui-select-match\">\n        <span *ngFor=\"let a of active\">\n            <span class=\"ui-select-match-item btn btn-default btn-secondary btn-xs\"\n                  tabindex=\"-1\"\n                  type=\"button\"\n                  [ngClass]=\"{'btn-default': true}\">\n               <a class=\"close\"\n                  style=\"margin-left: 5px; padding: 0;\"\n                  (click)=\"remove(a)\">&times;</a>\n               <span>{{a.text}}</span>\n           </span>\n        </span>\n    </span>\n    <input type=\"text\"\n           (keydown)=\"inputEvent($event)\"\n           (keyup)=\"inputEvent($event, true)\"\n           (click)=\"matchClick($event)\"\n           [disabled]=\"disabled\"\n           autocomplete=\"false\"\n           autocorrect=\"off\"\n           autocapitalize=\"off\"\n           spellcheck=\"false\"\n           class=\"form-control ui-select-search\"\n           placeholder=\"{{active.length <= 0 ? placeholder : ''}}\"\n           role=\"combobox\">\n     <!-- options template -->\n     <ul *ngIf=\"optionsOpened && options && options.length > 0 && !firstItemHasChildren\"\n          class=\"ui-select-choices dropdown-menu\" role=\"menu\">\n        <li *ngFor=\"let o of options\" role=\"menuitem\">\n          <div class=\"ui-select-choices-row\"\n               [class.active]=\"isActive(o)\"\n               (mouseenter)=\"selectActive(o)\"\n               (click)=\"selectMatch(o, $event)\">\n            <a href=\"javascript:void(0)\" class=\"dropdown-item\">\n              <div [innerHtml]=\"sanitize(o.text | highlight:inputValue)\"></div>\n            </a>\n          </div>\n        </li>\n      </ul>\n  \n      <ul *ngIf=\"optionsOpened && options && options.length > 0 && firstItemHasChildren\"\n          class=\"ui-select-choices dropdown-menu\" role=\"menu\">\n        <li *ngFor=\"let c of options; let index=index\" role=\"menuitem\">\n          <div class=\"divider dropdown-divider\" *ngIf=\"index > 0\"></div>\n          <div class=\"dropdown-header\">{{c.text}}</div>\n  \n          <div *ngFor=\"let o of c.children\"\n               class=\"ui-select-choices-row\"\n               [class.active]=\"isActive(o)\"\n               (mouseenter)=\"selectActive(o)\"\n               (click)=\"selectMatch(o, $event)\"\n               [ngClass]=\"{'active': isActive(o)}\">\n            <a href=\"javascript:void(0)\" class=\"dropdown-item\">\n              <div [innerHtml]=\"sanitize(o.text | highlight:inputValue)\"></div>\n            </a>\n          </div>\n        </li>\n      </ul>\n  </div>\n  "
        }), 
        __metadata('design:paramtypes', [core_1.ElementRef, platform_browser_1.DomSanitizer])
    ], SelectComponent);
    return SelectComponent;
}());
exports.SelectComponent = SelectComponent;
var Behavior = (function () {
    function Behavior(actor) {
        this.optionsMap = new Map();
        this.actor = actor;
    }
    Behavior.prototype.fillOptionsMap = function () {
        var _this = this;
        this.optionsMap.clear();
        var startPos = 0;
        this.actor.itemObjects
            .map(function (item) {
            startPos = item.fillChildrenHash(_this.optionsMap, startPos);
        });
    };
    Behavior.prototype.ensureHighlightVisible = function (optionsMap) {
        if (optionsMap === void 0) { optionsMap = void 0; }
        var container = this.actor.element.nativeElement.querySelector('.ui-select-choices-content');
        if (!container) {
            return;
        }
        var choices = container.querySelectorAll('.ui-select-choices-row');
        if (choices.length < 1) {
            return;
        }
        var activeIndex = this.getActiveIndex(optionsMap);
        if (activeIndex < 0) {
            return;
        }
        var highlighted = choices[activeIndex];
        if (!highlighted) {
            return;
        }
        var posY = highlighted.offsetTop + highlighted.clientHeight - container.scrollTop;
        var height = container.offsetHeight;
        if (posY > height) {
            container.scrollTop += posY - height;
        }
        else if (posY < highlighted.clientHeight) {
            container.scrollTop -= highlighted.clientHeight - posY;
        }
    };
    Behavior.prototype.getActiveIndex = function (optionsMap) {
        if (optionsMap === void 0) { optionsMap = void 0; }
        var ai = this.actor.options.indexOf(this.actor.activeOption);
        if (ai < 0 && optionsMap !== void 0) {
            ai = optionsMap.get(this.actor.activeOption.id);
        }
        return ai;
    };
    return Behavior;
}());
exports.Behavior = Behavior;
var GenericBehavior = (function (_super) {
    __extends(GenericBehavior, _super);
    function GenericBehavior(actor) {
        _super.call(this, actor);
    }
    GenericBehavior.prototype.first = function () {
        this.actor.activeOption = this.actor.options[0];
        _super.prototype.ensureHighlightVisible.call(this);
    };
    GenericBehavior.prototype.last = function () {
        this.actor.activeOption = this.actor.options[this.actor.options.length - 1];
        _super.prototype.ensureHighlightVisible.call(this);
    };
    GenericBehavior.prototype.prev = function () {
        var index = this.actor.options.indexOf(this.actor.activeOption);
        this.actor.activeOption = this.actor
            .options[index - 1 < 0 ? this.actor.options.length - 1 : index - 1];
        _super.prototype.ensureHighlightVisible.call(this);
    };
    GenericBehavior.prototype.next = function () {
        var index = this.actor.options.indexOf(this.actor.activeOption);
        this.actor.activeOption = this.actor
            .options[index + 1 > this.actor.options.length - 1 ? 0 : index + 1];
        _super.prototype.ensureHighlightVisible.call(this);
    };
    GenericBehavior.prototype.filter = function (query) {
        var _this = this;
        var options = this.actor.itemObjects
            .filter(function (option) {
            return select_pipes_1.stripTags(option.text).match(query) &&
                (_this.actor.multiple === false ||
                    (_this.actor.multiple === true && _this.actor.active.map(function (item) { return item.id; }).indexOf(option.id) < 0));
        });
        this.actor.options = options;
        if (this.actor.options.length > 0) {
            this.actor.activeOption = this.actor.options[0];
            _super.prototype.ensureHighlightVisible.call(this);
        }
    };
    return GenericBehavior;
}(Behavior));
exports.GenericBehavior = GenericBehavior;
var ChildrenBehavior = (function (_super) {
    __extends(ChildrenBehavior, _super);
    function ChildrenBehavior(actor) {
        _super.call(this, actor);
    }
    ChildrenBehavior.prototype.first = function () {
        this.actor.activeOption = this.actor.options[0].children[0];
        this.fillOptionsMap();
        this.ensureHighlightVisible(this.optionsMap);
    };
    ChildrenBehavior.prototype.last = function () {
        this.actor.activeOption =
            this.actor
                .options[this.actor.options.length - 1]
                .children[this.actor.options[this.actor.options.length - 1].children.length - 1];
        this.fillOptionsMap();
        this.ensureHighlightVisible(this.optionsMap);
    };
    ChildrenBehavior.prototype.prev = function () {
        var _this = this;
        var indexParent = this.actor.options
            .findIndex(function (option) { return _this.actor.activeOption.parent && _this.actor.activeOption.parent.id === option.id; });
        var index = this.actor.options[indexParent].children
            .findIndex(function (option) { return _this.actor.activeOption && _this.actor.activeOption.id === option.id; });
        this.actor.activeOption = this.actor.options[indexParent].children[index - 1];
        if (!this.actor.activeOption) {
            if (this.actor.options[indexParent - 1]) {
                this.actor.activeOption = this.actor
                    .options[indexParent - 1]
                    .children[this.actor.options[indexParent - 1].children.length - 1];
            }
        }
        if (!this.actor.activeOption) {
            this.last();
        }
        this.fillOptionsMap();
        this.ensureHighlightVisible(this.optionsMap);
    };
    ChildrenBehavior.prototype.next = function () {
        var _this = this;
        var indexParent = this.actor.options
            .findIndex(function (option) { return _this.actor.activeOption.parent && _this.actor.activeOption.parent.id === option.id; });
        var index = this.actor.options[indexParent].children
            .findIndex(function (option) { return _this.actor.activeOption && _this.actor.activeOption.id === option.id; });
        this.actor.activeOption = this.actor.options[indexParent].children[index + 1];
        if (!this.actor.activeOption) {
            if (this.actor.options[indexParent + 1]) {
                this.actor.activeOption = this.actor.options[indexParent + 1].children[0];
            }
        }
        if (!this.actor.activeOption) {
            this.first();
        }
        this.fillOptionsMap();
        this.ensureHighlightVisible(this.optionsMap);
    };
    ChildrenBehavior.prototype.filter = function (query) {
        var options = [];
        var optionsMap = new Map();
        var startPos = 0;
        for (var _i = 0, _a = this.actor.itemObjects; _i < _a.length; _i++) {
            var si = _a[_i];
            var children = si.children.filter(function (option) { return query.test(option.text); });
            startPos = si.fillChildrenHash(optionsMap, startPos);
            if (children.length > 0) {
                var newSi = si.getSimilar();
                newSi.children = children;
                options.push(newSi);
            }
        }
        this.actor.options = options;
        if (this.actor.options.length > 0) {
            this.actor.activeOption = this.actor.options[0].children[0];
            _super.prototype.ensureHighlightVisible.call(this, optionsMap);
        }
    };
    return ChildrenBehavior;
}(Behavior));
exports.ChildrenBehavior = ChildrenBehavior;


/***/ },
/* 888 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
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
var core_1 = __webpack_require__(1);
var statistics_service_1 = __webpack_require__(48);
var FooterComponent = (function () {
    function FooterComponent(statisticsService) {
        this.statisticsService = statisticsService;
        this.footerSubjects = [
            { contact: {
                    title: "Kontakt",
                    name: "Jonas Johnasson",
                    website: "http://jonasjohansson.net/",
                    email: "mail@domain.com"
                } },
            {
                statisticsSource: {
                    title: "Statistiska källor",
                    sources: [{
                            name: "Statistiska centralbyrån",
                            website: "http://www.scb.se/"
                        }
                    ]
                } },
            { sitemap: {
                    title: "Webbplatskarta",
                    links: [
                        "#home",
                        "#econ",
                        "#health",
                        "#power",
                        "#drugs",
                        "#family"
                    ]
                } }
        ];
        this.subjects = statisticsService.subjects.subjects;
    }
    FooterComponent = __decorate([
        core_1.Component({
            selector: 'my-footer',
            template: __webpack_require__(600),
            styles: [String(__webpack_require__(590))]
        }), 
        __metadata('design:paramtypes', [statistics_service_1.StatisticsService])
    ], FooterComponent);
    return FooterComponent;
}());
exports.FooterComponent = FooterComponent;


/***/ },
/* 889 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
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
var core_1 = __webpack_require__(1);
var statistics_service_1 = __webpack_require__(48);
var InputMenuComponent = (function () {
    function InputMenuComponent(statisticsService) {
        this.statisticsService = statisticsService;
        //Output from child to parent through an eventemitter
        this.notify = new core_1.EventEmitter();
        /*
          values from selections is stored
          in options-object. This archetecture
          needs a remake!
        */
        this.options = {
            workgroup: null,
            yearFrom: 0,
            yearTo: 0
        };
        this.selValues = {};
        //initialisation of value-variables (NOT GOOD SYSTEM)
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
    // // @HostListener('window:resize', ['$event'])
    // onResize(event) {
    //   event.target.innerWidth;
    // }
    /*
      fetches menu options on initialisation
    */
    InputMenuComponent.prototype.ngOnInit = function () {
        this.getOptions();
        this.win = window;
    };
    /*
      refreches values of selected options
      needs a remake as well!
    */
    InputMenuComponent.prototype.refreshValue = function (value, type) {
        var values = this.selValues;
        this.menu['options'].forEach(function (option) {
            if (type == option.id) {
                values[type] = value.id;
            }
        });
        this.disabled = this.disable();
    };
    /*
      checks wether selection is valid or not. Loops through
      selValues object and returns true or false
    */
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
    /*
      Tells service to get data depending on
      selected options. When data is resolved
      tell chart to update via parent component,
      statistics.component.ts
    */
    InputMenuComponent.prototype.getStatistics = function () {
        this.win = window;
        var t = this;
        var args = [];
        // this.selValues.forEach(function(value) {
        //   args.push(value)
        // })
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
    /*
      fetches menu options from statistics service,
      sends which subject and url to SCB,
      recives options for spesific table
    */
    InputMenuComponent.prototype.getOptions = function () {
        var t = this;
        this.statisticsService
            .getOptions(this.subject['subject'], this.subject['optionsUrl'])
            .then(function (data) {
            t.menu = data;
        });
    };
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Object)
    ], InputMenuComponent.prototype, "subject", void 0);
    __decorate([
        core_1.Output(), 
        __metadata('design:type', core_1.EventEmitter)
    ], InputMenuComponent.prototype, "notify", void 0);
    InputMenuComponent = __decorate([
        core_1.Component({
            selector: 'input-menu',
            template: __webpack_require__(601),
            styles: [String(__webpack_require__(592))]
        }), 
        __metadata('design:paramtypes', [statistics_service_1.StatisticsService])
    ], InputMenuComponent);
    return InputMenuComponent;
}());
exports.InputMenuComponent = InputMenuComponent;


/***/ },
/* 890 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
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
var core_1 = __webpack_require__(1);
var http_1 = __webpack_require__(26);
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
    MaillistComponent = __decorate([
        core_1.Component({
            selector: 'mail-list',
            template: __webpack_require__(603),
            styles: [String(__webpack_require__(594))]
        }), 
        __metadata('design:paramtypes', [http_1.Jsonp])
    ], MaillistComponent);
    return MaillistComponent;
}());
exports.MaillistComponent = MaillistComponent;


/***/ },
/* 891 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
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
var core_1 = __webpack_require__(1);
var statistics_service_1 = __webpack_require__(48);
var platform_browser_1 = __webpack_require__(60);
var MenuComponent = (function () {
    function MenuComponent(statisticsService, sanitizer) {
        this.statisticsService = statisticsService;
        this.sanitizer = sanitizer;
        this.info = statisticsService.subjects.subjects;
    }
    MenuComponent.prototype.secureUrl = function (url) {
        return this.sanitizer.bypassSecurityTrustResourceUrl(url);
    };
    MenuComponent.prototype.activeSrc = function (sub) {
        //console.log(this.subject['subject'])
        if (this.subject['subject'] === sub['subject']) {
            return this.subject['iconUrl'] + "_active.svg";
        }
        else {
            return sub.iconUrl + "_inactive.svg";
        }
    };
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Object)
    ], MenuComponent.prototype, "subject", void 0);
    MenuComponent = __decorate([
        core_1.Component({
            selector: 'menu',
            template: __webpack_require__(604),
            styles: [String(__webpack_require__(595))],
            providers: [statistics_service_1.StatisticsService, platform_browser_1.__platform_browser_private__.BROWSER_SANITIZATION_PROVIDERS]
        }), 
        __metadata('design:paramtypes', [statistics_service_1.StatisticsService, platform_browser_1.DomSanitizer])
    ], MenuComponent);
    return MenuComponent;
}());
exports.MenuComponent = MenuComponent;


/***/ },
/* 892 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
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
var core_1 = __webpack_require__(1);
var statistics_service_1 = __webpack_require__(48);
var StartComponent = (function () {
    function StartComponent(statisticsService) {
        this.statisticsService = statisticsService;
        this.info = statisticsService.subjects.subjects;
    }
    StartComponent = __decorate([
        core_1.Component({
            selector: 'start',
            template: __webpack_require__(605),
            styles: [String(__webpack_require__(596))]
        }), 
        __metadata('design:paramtypes', [statistics_service_1.StatisticsService])
    ], StartComponent);
    return StartComponent;
}());
exports.StartComponent = StartComponent;


/***/ },
/* 893 */
/***/ function(module, exports) {

module.exports = "data:image/png;base64,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"

/***/ },
/* 894 */,
/* 895 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
"use strict";
var platform_browser_dynamic_1 = __webpack_require__(129);
var app_module_1 = __webpack_require__(439);
var core_1 = __webpack_require__(1);
core_1.enableProdMode();
platform_browser_dynamic_1.platformBrowserDynamic().bootstrapModule(app_module_1.AppModule);


/***/ }
]),[895]);
//# sourceMappingURL=bundle.js.map