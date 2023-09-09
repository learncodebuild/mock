import { Component } from '@angular/core';

@Component({
  selector: 'app-validate',
  templateUrl: './validate.component.html',
  styleUrls: ['./validate.component.css']
})
export class ValidateComponent {
  password: string = '';

  validatePassword() {
    // Replace 'yourPassword' with the actual password you want to use.
    if (this.password === 'yourPassword') {
      const doc = document.documentElement;

      if (doc.requestFullscreen) {
        doc.requestFullscreen();
      } else if (doc.requestFullscreen) {
        doc.requestFullscreen();
      } else if (doc.requestFullscreen) {
        doc.requestFullscreen();
      } else if (doc.requestFullscreen) {
        doc.requestFullscreen();
      }
    } else {
      alert('Incorrect password. Please try again.');
    }
  }
}
