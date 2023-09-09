import { Component, Output,EventEmitter } from '@angular/core';
import { Subscription, interval } from 'rxjs';

@Component({
  selector: 'app-clock',
  templateUrl: './clock.component.html',
  styleUrls: ['./clock.component.css']
})
export class ClockComponent {
  // currentTime: Date = new Date();
  @Output() activeness = new EventEmitter<string>();
  active:boolean=false;
  // constructor() { }

  // ngOnInit(): void {
  //   // Update the clock every second
  //   setInterval(() => {
  //     this.currentTime = new Date();
  //   }, 1000);
  // }

  countdown: number = 50;
  timer!: Subscription;
  timerRunning: boolean = false;

  constructor() { }

  ngOnInit(): void {
  }

  startTimer(): void {
    this.activeness.emit(this.active?"yes":"no");
    if (this.countdown > 0 && !this.timerRunning) {
      this.timerRunning = true;

      this.timer = interval(1000).subscribe(() => {
        this.countdown--;

        if (this.countdown <= 0) {
          this.stopTimer();
        }
      });
    }
  }

  stopTimer(): void {
    if (this.timer) {
      this.timer.unsubscribe();
    }
    this.timerRunning = false;
    // this.openPrompt();

  }

  openPrompt() {
    const enteredValue = window.prompt('Enter the password:');
    if (enteredValue === 'iamanidiot') {
      alert('Password matched! Access granted.');
    } else {
      alert('Password does not match. Access denied.');
      this.openPrompt();
    }
  }

  formatTime(seconds: number): string {
    const hours = Math.floor(seconds / 3600);
    const minutes = Math.floor((seconds % 3600) / 60);
    const remainingSeconds = seconds % 60;

    const formattedHours = String(hours).padStart(2, '0');
    const formattedMinutes = String(minutes).padStart(2, '0');
    const formattedSeconds = String(remainingSeconds).padStart(2, '0');

    return `${formattedHours}:${formattedMinutes}:${formattedSeconds}`;
  }

}
