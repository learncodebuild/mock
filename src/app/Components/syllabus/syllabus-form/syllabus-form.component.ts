import { Component, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDrawerMode, MatSidenav } from '@angular/material/sidenav';
import { URLS, DRIVEURLS } from 'src/app/Constants/materialURLS';
import { MatDialog, MatDialogModule } from '@angular/material/dialog';
import { MatButtonModule } from '@angular/material/button';
import { SyllabusService } from '../syllabus.service';
import { DialogBoxComponent } from '../dialog-box/dialog-box.component';

@Component({
  selector: 'app-syllabus-form',
  templateUrl: './syllabus-form.component.html',
  styleUrls: ['./syllabus-form.component.css'],
})
export class SyllabusFormComponent implements OnInit {

  @ViewChild('sidenav') sidenav!: MatSidenav;

  secureKeyvalidate: string = "12345";
  isSecureKeyValidated: boolean = false;
  whichOne!: string;
  myForm: FormGroup;
  isMediaChecked:boolean=false;
  iframeSrc: string = 'about:blank';


  constructor(private syllbusService: SyllabusService, public dialog: MatDialog,private fb: FormBuilder) {
    this.myForm = this.fb.group({
      pass: ['', [Validators.required]],
    });
  }
  ngOnInit(): void {
    this.syllbusService.getDataFromAPI().subscribe((data: any) => this.secureKeyvalidate = data);
  }

  openNewTab(index: any) {
    this.isMediaChecked=false;
    if (this.whichOne == 'pdf') {
      if (this.isSecureKeyValidated) {
        window.open(DRIVEURLS[index], '_blank');
        this.isSecureKeyValidated = false;
      } else alert('you are not authenticated');
    } else if (this.whichOne == "url") {
      window.open(URLS[index], '_blank');
    }
    this.sidenav.close();
  }

  apiHitDriveSecureURLVerify() {
    let ans = window.prompt('enter secureKey: ');
    // if (ans == this.secureKeyvalidate) {
    if (ans == this.secureKeyvalidate) {
      this.isSecureKeyValidated = true;
    }
  }

  public async getWhichOne() {
    const ans = this.myForm.controls['pass'].value;
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
