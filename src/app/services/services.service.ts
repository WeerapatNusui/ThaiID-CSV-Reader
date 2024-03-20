import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
@Injectable({
  providedIn: 'root'
})
export class ApiResult {

  constructor(private http: HttpClient) {}
  backendURL: string = 'http://localhost:5000/ThaiID-CSV-Reader/';
  viewOneURL: string = 'http://localhost:4200/viewone';

  postResult(location: any,data: any) {
    return this.http.post(this.backendURL+location,data);
  }
}

export class ListForm {

  showForm(idForm: any) {
    let form = document.getElementById(idForm)as HTMLElement;
    form?.style.setProperty('display','flex');
  }

  hideForm(idForm: any) {
    let form = document.getElementById(idForm)as HTMLElement;
    form?.style.setProperty('display','none');
  }
}
