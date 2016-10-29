import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import 'rxjs/add/operator/toPromise';

@Injectable()
export class StatisticsService {

	constructor (private http: Http) {}

	econData = {};

	data = {
    labels: ["feb","jan"],
    datasets: [
      {
        label: "",
        data: [],
        backgroundColor: 'rgba(247,183,51,0.8)',
        borderColor: 'rgba(247,183,51,1)',
        pointBackgroundColor: 'rgba(0,0,0,1)',
        pointBorderColor: '#fff',
        pointHoverBackgroundColor: '#fff',
        pointHoverBorderColor: 'rgba(252,74,26,0.8)'
      },
      {
        label: "",
        data: [],
        backgroundColor: 'rgba(252,74,26,0.8)',
        borderColor: 'rgba(252,74,26,1)',
        pointBackgroundColor: 'rgba(0,0,0,1)',
        pointBorderColor: '#fff',
        pointHoverBackgroundColor: '#fff',
        pointHoverBorderColor: 'rgba(252,74,26,1)'
      },
    ]
  };

	getData(){
		return Promise.resolve(this.data)
	}

	getEconData(){
		return Promise.resolve(this.econData);
	}

	getOptions(){
		return this.http.get('http://api.scb.se/OV0104/v1/doris/sv/ssd/START/AM/AM0112/TidsserieYrke')
             .toPromise()
             .then(response => response.json())
             .catch(this.handleError);
	}

	fetchEconData(yrkesgrupp, yearFrom, yearTo){
		let years = [];
		let i = 0;
		while(years[years.length-1] !== yearTo){
			years[i] = (parseInt(yearFrom) + i).toString();
			i++; 
		}
		console.log(years)
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
		let headers = new Headers({ 'Content-Type': 'application/json' });
		//this.econData2.labels = ["nu", "ändras", "den"]
		this.data.labels = ["jonas", "äger"]
		return this.econData = this.http.post('http://api.scb.se/OV0104/v1/doris/sv/ssd/START/AM/AM0112/TidsserieYrke', body)
             .toPromise()
             .then(this.extractData)
             .catch(this.handleError);
        
	}










	//hämta data från SCB!
	getStatistics(){
		let body = JSON.stringify({   
"query": [
 {       
 "code": "ContentsCode",
  "selection": {         
    "filter": "item",         
    "values": [           
      "BE0101N1"         
    ]       
   }     
},    
{       
  "code": "Tid",
   "selection": {         
   "filter": "item",         
   "values": [           
   "2010",           
   "2011"         
   ]       
  }     
 }    
],   
"response": {     
  "format": "json"   
 } 
});
		let headers = new Headers({ 'Content-Type': 'application/json' });

		return this.http.post('http://api.scb.se/OV0104/v1/doris/sv/ssd/BE/BE0101/BE0101A/BefolkningNy', body)
             .toPromise()
             .then(this.extractData)
             .catch(this.handleError);
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