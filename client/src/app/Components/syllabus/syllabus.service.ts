import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SyllabusService {
  constructor(private http: HttpClient) { }

  getDataFromAPI() {
    const apiUrl = 'http://localhost:3000/api/data';
    return this.http.get(apiUrl);
    // console.log(res.subscribe());

  }

}
