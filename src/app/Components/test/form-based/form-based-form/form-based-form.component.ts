import { Component, OnInit } from '@angular/core';
import { TESTURLS } from 'src/app/Constants/materialURLS';
import { TestService } from '../test.service';
@Component({
  selector: 'app-form-based-form',
  templateUrl: './form-based-form.component.html',
  styleUrls: ['./form-based-form.component.css']
})
export class FormBasedFormComponent implements OnInit {

  showList: boolean = true;
  activty: any;
  ind!:any;
  ngOnInit(): void {
    console.log(typeof(TESTURLS[0][1]));

  }

  constructor(private dataService:TestService){}

  active(data: string) {
    this.activty = data;
    if (this.activty == "yes"){
      this.activty = true;
      this.openTest(this.ind);
    }
    else
      this.activty = false;
    console.log("nor", this.activty);
  }

  openTest(index: any) {
    this.ind=index;
    this.dataService.updateData(this.ind);
    console.log(this.ind);

    if(this.activty){
      let script = document.createElement("script");
      script.id = "ff-script";
      script.src = String(TESTURLS[index][0]);
      script.defer = true;
      script.async = true;
      document.body.appendChild(script);
    }
  }
}
