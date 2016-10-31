import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import 'rxjs/add/operator/toPromise';

@Injectable()
export class PowerService {

	constructor (private http: Http) {}
	url = 'http://api.scb.se/OV0104/v1/doris/sv/ssd/START/ME/ME0107/ME0107C/Riksdagsledamoter'
	powerData:Object;
	years;
	getPowerData(){
		return Promise.resolve(this.powerData);
	}

	powerOptions(res: Response){
		let body = res.json();
		console.log(body)
		let yrken = []
		let years = []

		for (var i = 0; i < body.variables[1].valueTexts.length; i++) {
			yrken[i] = {
				text: body.variables[1].valueTexts[i],
				id: body.variables[1].values[i]
			}
		}
		for (var i = 0; i < body.variables[4].valueTexts.length; i++) {
  		    years[i] = {
				text:body.variables[4].valueTexts[i],
          		id:body.variables[4].values[i]
			}
		}
			
		return {subject: "power",
				title: body.title,
				options: [
					{
						items: yrken,
						placeholder: "Välj parti",
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
				}
	}

	fetchPowerData(parti, yearFrom, yearTo){
		console.log(parti + yearFrom + yearTo)
		let years = this.calcYears(yearFrom, yearTo)
		let body = JSON.stringify({
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
		let headers = new Headers({ 'Content-Type': 'application/json' })
		return this.powerData = this.http.post(this.url, body)
             .toPromise()
             .then(this.exportPowerData)
             .catch(this.handleError);
        
	}

	private calcYears(from:string, to:string):String[]{
		let years = [from];
		let i = 1;
		let j = 1;
		while(years[years.length-1] !== to){
			if(parseInt(years[i-1]) < 1994) {
				years[i] = (parseInt(from) + i*3).toString();
			}
			else {
				years[i] = (parseInt(years[i-1]) + 4).toString();
				j++;
			}
			i++; 
			if(i>1000 || j>1000) {
				console.error("Infninite loop on calcYears() poverService")
				break
			}
		}
		console.log(years)
		return years;
	}

	private exportPowerData(res: Response) {
		let body = res.json();
	  	console.log(body)
		let years = [];
		let valuesM = [];
		let valuesF = [];
		console.log(body)
		for (var i = 0; i < body['data'].length/2; ++i) {
			years[i] = body['data'][i].key[3]
			if(body['data'][i].key[2] === "1") {
				valuesM[i] = body['data'][i].values[0]
			}
			if(body['data'][body['data'].length/2 + i].key[2] === "2") {
				valuesF[i] = body['data'][body['data'].length/2 + i].values[0]
			}
		}
		// this.powerData.labels = years
		// this.powerData.maleData = valuesM
		// this.powerData.femaleData = valuesF

	  return { 
			labels: years,
			maleData: valuesM,
			femaleData: valuesF
		}
	}

	private handleError (error: any) {
	  let errMsg = (error.message) ? error.message :
	    error.status ? `${error.status} - ${error.statusText}` : 'Server error';
	  console.error(errMsg); // log to console instead
	  return Promise.reject(errMsg);
	}
}