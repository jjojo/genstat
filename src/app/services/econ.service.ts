import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import 'rxjs/add/operator/toPromise';

@Injectable()
export class EconService {

	constructor (private http: Http) {}
	url = 'http://api.scb.se/OV0104/v1/doris/sv/ssd/START/AM/AM0112/TidsserieYrke'
	econData:Object;

	getEconData(){
		return Promise.resolve(this.econData);
	}

	econOptions(res: Response){
		let body = res.json();
		//console.log(body)
		let yrken = []
		let years = []

		for (var i = 0; i < body.variables[0].valueTexts.length; i++) {
			yrken[i] = {
				text: body.variables[0].valueTexts[i],
				id: body.variables[0].values[i]
			}
		}
		for (var i = 0; i < body.variables[3].valueTexts.length; i++) {
  		    years[i] = {
				text:body.variables[3].valueTexts[i],
          		id:body.variables[3].values[i]
			}
		}
			
		return {subject: "econ",
				title: body.title,
				options: [
					{
						items: yrken,
						placeholder: "Välj yrkesgrupp",
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

	fetchEconData(yrkesgrupp, yearFrom, yearTo){
		console.log(yrkesgrupp + yearFrom + yearTo)
		let years = this.calcYears(yearFrom, yearTo)
		let body = JSON.stringify({
			  "query": [
			    {
			      "code": "Yrkesgrupp",
			      "selection": {
			        "filter": "item",
			        "values": [
			          yrkesgrupp
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
			          "AM0112A1"
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
		return this.econData = this.http.post('http://api.scb.se/OV0104/v1/doris/sv/ssd/START/AM/AM0112/TidsserieYrke', body)
             .toPromise()
             .then(this.exportEconData)
             .catch(this.handleError);
        
	}

	private calcYears(from:string, to:string):String[]{
		let years = [];
		let i = 0;
		while(years[years.length-1] !== to){
			years[i] = (parseInt(from) + i).toString();
			i++; 
		}
		return years;
	}

	private exportEconData(res: Response) {
		let body = res.json();
	  
		let years = [];
		let valuesM = [];
		let valuesF = [];
		
		for (var i = 0; i < body['data'].length/2; ++i) {
			years[i] = body['data'][i].key[2]
			if(body['data'][i].key[1] === "1") {
				valuesM[i] = body['data'][i].values[0]
			}
			if(body['data'][body['data'].length/2 + i].key[1] === "2") {
				valuesF[i] = body['data'][body['data'].length/2 + i].values[0]
			}
		}
		// this.econData.labels = years
		// this.econData.maleData = valuesM
		// this.econData.femaleData = valuesF

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