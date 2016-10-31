import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import 'rxjs/add/operator/toPromise';

@Injectable()
export class DrugsService {

	constructor (private http: Http) {}
	
	url = "http://api.scb.se/OV0104/v1/doris/sv/ssd/START/LE/LE0101/LE0101H/LE0101H25"
	drugsData:Object;

	getDrugsData(){
		return Promise.resolve(this.drugsData);
	}

	drugsOptions(res: Response){
		let body = res.json();
		console.log(body)
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
		for (var i = 0; i < body.variables[3].valueTexts.length; i++) {
  		    years[i] = {
				text:body.variables[3].valueTexts[i],
          		id:body.variables[3].values[i]
			}
		}
			
		return {subject: "drugs",
				title: body.title,
				options: [
					{
						items: illness,
						placeholder: "hälsoproblem",
						id: "workgroup"
					},
					{
						items: ages,
						placeholder: "åldrar",
						id: "yearFrom"
					}
				]
				}
	}


	fetchDrugsData(habit, age){

		//console.log(yrkesgrupp + yearFrom + yearTo)

		let body = JSON.stringify({
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
						})
		let headers = new Headers({ 'Content-Type': 'application/json' })
		return this.drugsData = this.http.post(this.url, body)
             .toPromise()
             .then(this.exportDrugsData)
             .catch(this.handleError);
        
	}


	private exportDrugsData(res: Response) {
		let body = res.json();
	  	console.log(body)
		let years = [];
		let valuesM = [];
		let valuesF = [];
		
		for (var i = 0; i < body['data'].length/2; ++i) {
			years[i] = body['data'][i].key[3]
			if(body['data'][i].key[2] === "1") {
				valuesM[i] = body['data'][i].values[0]
			}
			if(body['data'][body['data'].length/2 + i].key[2] === "2") {
				valuesF[i] = body['data'][body['data'].length/2 + i].values[0]
			}
		}
		
		console.log(years)

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