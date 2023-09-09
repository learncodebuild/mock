import { Component } from '@angular/core';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import {FormBuilder, FormGroup, FormsModule, Validators} from '@angular/forms';
import { SyllabusService } from '../syllabus.service';
import { MatDialog } from '@angular/material/dialog';
@Component({
  selector: 'app-dialog-box',
  templateUrl: './dialog-box.component.html',
  styleUrls: ['./dialog-box.component.css']
})
export class DialogBoxComponent {

  myForm: FormGroup;
  password:any;
  validationBool:boolean=false;
  constructor(private fb: FormBuilder, private syllabusService:SyllabusService, public dialog: MatDialog) {
    this.myForm = this.fb.group({
      pass: ['', [Validators.required]],
    });
  }

  submit(){
    const vl = this.myForm.controls['pass'].value;
    switch (vl) {
      case 'pdf': {
        this.password = 'pdf';
        console.log(this.password);
        this.dialog.closeAll();
        break;
      }
      case 'url': {
        this.password = 'url';
        console.log(this.password);
        this.dialog.closeAll();
        break;
      }
      default: {
        alert('Not validlllllllllllllllllll');
      }
    }
    this.syllabusService.setter(this.password);

  }
}
