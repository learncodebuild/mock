import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class StudyMaterialServiceService {

  constructor(private http: HttpClient) { }

  getDataFromAPI() {
    const apiUrl = 'http://localhost:3000/api/data';
    return this.http.get(apiUrl);
    // console.log(res.subscribe());

  }

}
