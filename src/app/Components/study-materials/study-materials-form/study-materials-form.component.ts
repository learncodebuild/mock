import { Component, OnInit, ViewChild } from '@angular/core';
import { MatSidenav } from '@angular/material/sidenav';
import { URLS, DRIVEURLS, WEBTESTURLS, CONTENT, YOUTUBE } from 'src/app/Constants/materialURLS';
import { StudyMaterialServiceService } from '../study-material-service.service';
import { HttpClient } from '@angular/common/http';
import { DomSanitizer } from '@angular/platform-browser';
import { IB_APTITUDE } from 'src/app/Constants/indiabixAptitude';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

interface Data{
  name:string;
  url:string;
  index:number;
}
@Component({
  selector: 'app-study-materials-form',
  templateUrl: './study-materials-form.component.html',
  styleUrls: ['./study-materials-form.component.css'],
})
export class StudyMaterialsFormComponent implements OnInit{

  @ViewChild('sidenav') sidenav!: MatSidenav;

  secureKeyvalidate!: string;
  isSecureKeyValidated: boolean = false;
  whichOne!: string;
  // myForm: FormGroup;
  isMediaChecked:boolean=false;
  iframeSrc: string = 'about:blank';
  data:Data[]=[];
  ytData:Data[]=[];
  activeItemChild:any;


  // constructor(private syllbusService: StudyMaterialServiceService, private fb: FormBuilder) {
  //   this.myForm = this.fb.group({
  //     pass: ['', [Validators.required]],
  //   });
  // }
  ngOnInit(): void {
    // this.syllbusService.getDataFromAPI().subscribe((data: any) => this.secureKeyvalidate = data);
    CONTENT.forEach((element,index)=>{
      this.data.push({name:element.name, url:element.url, index:index});
    })
    YOUTUBE.forEach((element,index)=>{
      this.ytData.push({name:element.name, url:element.url, index:index});
    })
  }

  openNewTab(url: any) {
    this.isMediaChecked=false;
      window.open(url, '_blank');
    this.sidenav.close();
  }

  apiHitDriveSecureURLVerify() {
    let ans = window.prompt('enter secureKey: ');
    if (ans == this.secureKeyvalidate) {
      this.isSecureKeyValidated = true;
    }
  }

  toggleSelectionChild(item: any) {
    if (this.activeItemChild === item) {
      this.activeItemChild = null;
    } else {
      this.activeItemChild = item;
    }
  }

  // public async getWhichOne() {
  //   const ans = this.myForm.controls['pass'].value;
  //   switch (ans) {
  //     case 'pdf': {
  //       this.whichOne = 'pdf';
  //       break;
  //     }
  //     case 'url': {
  //       this.whichOne = 'url';
  //       break;
  //     }
  //     default: {
  //       alert('Not valid');
  //     }
  //   }
  // }

}
