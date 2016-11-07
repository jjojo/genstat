import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import 'rxjs/add/operator/toPromise';

@Injectable()
export class HealthService {

	constructor (private http: Http) {}

	healthData:Object;

	getHealthData(){
		return Promise.resolve(this.healthData);
	}

	healthOptions(res: Response){
		let body = res.json();
		let illness = []
		let ages = []
		let years = []

		for (var i = 0; i < body.variables[0].valueTexts.length; i++) {
			illness[i] = {
				text: body.variables[0].valueTexts[i],
				id: body.variables[0].values[i]
			}
		}
		for (var i = 0; i < body.variables[1].valueTexts.length; i++) {
			ages[i] = {
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
			
		return {subject: "health",
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
				}
	}


	fetchHealthData(illness, age, years, url){

		//console.log(yrkesgrupp + yearFrom + yearTo)

		let body = JSON.stringify({
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
						})
		let headers = new Headers({ 'Content-Type': 'application/json' })
		return this.healthData = this.http.post(url, body)
             .toPromise()
             .then(this.exportHealthData)
             .catch(this.handleError);
        
	}


	private exportHealthData(res: Response) {
		let body = res.json();
		let years = [];
		let valuesM = [];
		let valuesF = [];
		let yLabel = body.columns[4].text
    	let xLabel = body.columns[3].text
		for (var i = 0; i < body['data'].length/2; ++i) {
			years[i] = body['data'][i].key[3]
			if(body['data'][i].key[2] === "1") {
				valuesM[i] = body['data'][i].values[0]
			}
			if(body['data'][body['data'].length/2 + i].key[2] === "2") {
				valuesF[i] = body['data'][body['data'].length/2 + i].values[0]
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
		}
	}

	private handleError (error: any) {
	  let errMsg = (error.message) ? error.message :
	    error.status ? `${error.status} - ${error.statusText}` : 'Server error';
	  console.error(errMsg); // log to console instead
	  return Promise.reject(errMsg);
	}
}