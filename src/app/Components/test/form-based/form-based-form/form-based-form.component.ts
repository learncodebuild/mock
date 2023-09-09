import { Component, OnInit } from '@angular/core';
import { TESTURLS } from 'src/app/Constants/materialURLS';
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
  }

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
    if(this.activty){
      var script = document.createElement("script");
      script.id = "ff-script";
      script.src = TESTURLS[index];
      script.defer = true;
      script.async = true;
      document.body.appendChild(script);
    }
  }
}
