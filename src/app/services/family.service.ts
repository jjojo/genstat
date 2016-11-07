import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import 'rxjs/add/operator/toPromise';

@Injectable()
export class FamilyService {

  constructor (private http: Http) {}
  familyData:Object;

  getFamilyData(){
    return Promise.resolve(this.familyData);
  }

  familyOptions(res: Response){
    let body = res.json();
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
      
    return {subject: "family",
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
        }
  }

  fetchFamilyData(region, yearFrom, yearTo, url){
    let years = this.calcYears(yearFrom, yearTo)
    let filter:String;
    if(parseInt(region) === 0) filter = "vs:RegionRiket99";
    if(parseInt(region) > 0 && parseInt(region) < 100) filter = "vs:RegionLän07EjAggrFK";
    if(parseInt(region) > 100) filter = "vs:RegionKommun07EjAggrFKH";
    let body = JSON.stringify({
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
    let headers = new Headers({ 'Content-Type': 'application/json' })
    return this.familyData = this.http.post(url, body)
             .toPromise()
             .then(this.exportFamilyData)
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

  private exportFamilyData(res: Response) {
    let body = res.json();
    let years = [];
    let valuesM = [];
    let valuesF = [];
    let yLabel = body.columns[3].text
    let xLabel = body.columns[2].text
    for (var i = 0; i < body['data'].length/2; ++i) {
      years[i] = body['data'][i].key[2]
      if(body['data'][i].key[1] === "1") {
        valuesM[i] = body['data'][i].values[0]
      }
      if(body['data'][body['data'].length/2 + i].key[1] === "2") {
        valuesF[i] = body['data'][body['data'].length/2 + i].values[0]
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
    }
  }

  private handleError (error: any) {
    let errMsg = (error.message) ? error.message :
      error.status ? `${error.status} - ${error.statusText}` : 'Server error';
    console.error(errMsg); // log to console instead
    return Promise.reject(errMsg);
  }
}