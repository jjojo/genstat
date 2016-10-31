import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import { EconService } from './econ.service';
import { HealthService } from './health.service';
import { PowerService } from './power.service';
import { DrugsService } from './drugs.service';
import { FamilyService } from './family.service';

import 'rxjs/add/operator/toPromise';

@Injectable()
export class StatisticsService {

	constructor (private http: Http, 
		private _econ: EconService,
		private _health: HealthService,
		private _power: PowerService,
		private _drugs: DrugsService,
		private _family: FamilyService) {

	}

	// Titles, descriptions, technically meta data for the statistics components
	subjects = {
		subjects:[{
				subject: "econ",
				subjectNr: 0,
				optionsUrl: "http://api.scb.se/OV0104/v1/doris/sv/ssd/START/AM/AM0112/TidsserieYrke",
				title: "ekonomi",
				iconUrl: "../../assets/img/pig-coin.svg",
				color: "rgba(120, 173, 181, 1)",
				description:"Hur ser statistiken ut för kvinnors & mäns löner, besparingar och kapital?"
			},
			{	
				subject: "health",
				subjectNr: 1,
				optionsUrl: "http://api.scb.se/OV0104/v1/doris/sv/ssd/START/LE/LE0101/LE0101H/LE0101H01",
				title: "hälsa",
				iconUrl: "../../assets/img/health.svg",
				color: "rgba(208, 134, 146, 1)",
				description:"Hur ser statistiken ut för kvinnors & mäns hälsa, sjukdommar och stress?"
			},
			{	
				subject: "power",
				subjectNr: 2,
				optionsUrl: "http://api.scb.se/OV0104/v1/doris/sv/ssd/START/ME/ME0107/ME0107C/Riksdagsledamoter",
				title: "inflytande",
				iconUrl: "../../assets/img/tie.svg",
				color: "rgba(149, 134, 122, 1)",
				description:"Hur ser inflytandet ut i samhället? hur många kvinnor & män väljs in i riksdagen till exempel"
			},
			{
				subject: "drugs",
				subjectNr: 3,
				optionsUrl: "http://api.scb.se/OV0104/v1/doris/sv/ssd/START/LE/LE0101/LE0101H/LE0101H25",
				title: "tobak",
				iconUrl: "../../assets/img/drink.svg",
				color: "rgba(174, 200, 137, 1)",
				description:"Hur ser tobaksvanorna ut för kvinnor & män?"
			},
			{
				subject: "family",
				subjectNr: 4,
				optionsUrl: "http://api.scb.se/OV0104/v1/doris/sv/ssd/START/SF/SF0101/ForaldraPenning",
				title: "familj",
				iconUrl: "../../assets/img/fam.svg",
				color: "rgba(239, 153, 98, 1)",
				description:"Hur ser statistik för familjelivet ut för kvinnor & män?"
			}
		]
	}


	getData(type){
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
		console.error("Could not get data from statistics.Service.getData() function")
	}

	getOptions(type, url){
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
		console.error("Could not get options from statistics.Service.getOptions() function")
	}

	fetchData(menuSettings, type){
		console.log(menuSettings)

		switch (type) {
			case "econ":
				return this._econ.fetchEconData(menuSettings[0],menuSettings[1],menuSettings[2]);
			case "health":
				return this._health.fetchHealthData(menuSettings[0],menuSettings[1],menuSettings[2]);
			case "power":
				return this._power.fetchPowerData(menuSettings[0],menuSettings[1],menuSettings[2]);
			case "drugs":
				return this._drugs.fetchDrugsData(menuSettings[0],menuSettings[1]);
			case "family":
				return this._family.fetchFamilyData(menuSettings[0],menuSettings[1],menuSettings[2]);
			}
		console.error("Could not fetch data from statistics.Service.fetchData() function")
	}


	private extractData(res: Response) {
	  let body = res.json();
	  return body || { };
	}

	private handleError (error: any) {
	  let errMsg = (error.message) ? error.message :
	    error.status ? `${error.status} - ${error.statusText}` : 'Server error';
	  console.error(errMsg); // log to console instead
	  return Promise.reject(errMsg);
	}
}