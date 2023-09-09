import { Component, OnInit, ViewChild } from '@angular/core';
import { MatSidenav } from '@angular/material/sidenav';
import { DRIVEURLS, URLS } from 'src/app/Constants/materialURLS';
import { SyllabusService } from '../syllabus.service';

@Component({
  selector: 'app-syllabus-form',
  templateUrl: './syllabus-form.component.html',
  styleUrls: ['./syllabus-form.component.css']
})
export class SyllabusFormComponent implements OnInit{
  @ViewChild('sidenav') sidenav!: MatSidenav;

  secureKeyvalidate!:string;
  isSecureKeyValidated: boolean = false;
  whichOne!: string;

  constructor(private syllabusService:SyllabusService){}
  ngOnInit(): void {
    this.syllabusService.getDataFromAPI().subscribe((data: any) =>this.secureKeyvalidate=data);
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
