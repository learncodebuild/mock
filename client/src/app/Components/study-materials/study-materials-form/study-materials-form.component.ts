import { Component, OnInit, ViewChild } from '@angular/core';
import { FormControl } from '@angular/forms';
import { MatDrawerMode, MatSidenav } from '@angular/material/sidenav';
import { URLS, DRIVEURLS } from 'src/app/Constants/materialURLS';
import { StudyMaterialServiceService } from '../study-material-service.service';

@Component({
  selector: 'app-study-materials-form',
  templateUrl: './study-materials-form.component.html',
  styleUrls: ['./study-materials-form.component.css'],
})
export class StudyMaterialsFormComponent implements OnInit{

  @ViewChild('sidenav') sidenav!: MatSidenav;

  secureKeyvalidate!:string;
  isSecureKeyValidated: boolean = false;
  whichOne!: string;

  constructor(private studyService:StudyMaterialServiceService){}
  ngOnInit(): void {
    this.studyService.getDataFromAPI().subscribe((data: any) =>this.secureKeyvalidate=data);
  }

  openNewTab(whichOne: any) {
    if (whichOne == 'pdf') {
      if (this.isSecureKeyValidated) {
        window.open(DRIVEURLS.SHIKSHA_SYLLABUS_URL, '_blank');
        this.isSecureKeyValidated = false;
      } else alert('you are not authenticated');
    } else if(whichOne == "url") {
      window.open(URLS.BYJUS_SYLLABUS, '_blank');
    }
    this.sidenav.close();
  }

  apiHitDriveSecureURLVerify() {
    let ans = window.prompt('enter secureKey: ');
    if (ans == this.secureKeyvalidate) {
      this.isSecureKeyValidated = true;
    }
  }

  getWhichOne() {
    let ans = window.prompt('PDF or URL?');
    switch (ans) {
      case 'pdf': {
        this.whichOne = 'pdf';
        break;
      }
      case 'url': {
        this.whichOne = 'url';
        break;
      }
      default: {
        alert('Not valid');
      }
    }
  }
}
