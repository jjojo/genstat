import { Component, Inject } from '@angular/core';
import { Jsonp } from '@angular/http';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'mail-list',
  template: require('./maillist.component.html'),
  styles: [String(require('./maillist.component.styl'))]
})
export class MaillistComponent {
  result:JSON;
  response:string;
  constructor(private _jsonp:Jsonp) {
  }

  onSubmit(email) {
    if(email.valid){
      this.subscribe(email.value)
    }
  }

  subscribe(address:string){
    let url = '//jonasjohansson.us14.list-manage.com/subscribe/post-json?u=218abe1ceb94c87c87f853351&id=680fa7325a&subscribe=Subscribe&EMAIL=jan.jonas.johansson@gmail.com&c=JSONP_CALLBACK';
    this._jsonp.request(url, { method: 'Get' })
     .subscribe((res) => {
       this.result = res.json()
     });
     this.response = "Tack! Du har nu fått ett mail där du kan bekräfta prenumerationen."
     console.log("subscribtion sent")

  }

}
