import { HttpClient } from '@angular/common/http';
import { Injectable, signal } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SyllabusService {
  constructor(private http: HttpClient) { }

  emitPass:any=signal(null);


  getDataFromAPI() {
    const apiUrl = 'http://localhost:3000/api/data';
    return this.http.get(apiUrl);
    // console.log(res.subscribe());

  }

  getter(){
    return this.emitPass();
  }

  setter(val:any){
    this.emitPass.set(val);
    // this.getDataFromAPI().subscribe((data:any)=>{
    //   if(data == this.emitPass()){
    //     return true;
    //   }
    //   return false;
    // });
  }
}

