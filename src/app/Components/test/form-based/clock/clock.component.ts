import { Component, Output,EventEmitter } from '@angular/core';
import { Observable, Subscription, interval } from 'rxjs';
import { TestService } from '../test.service';
import { TESTURLS } from 'src/app/Constants/materialURLS';
import { takeWhile } from 'rxjs/operators';

@Component({
  selector: 'app-clock',
  templateUrl: './clock.component.html',
  styleUrls: ['./clock.component.css']
})
export class ClockComponent {
  // currentTime: Date = new Date();
  @Output() activeness = new EventEmitter<string>();
  active:boolean=false;

  timer$!: Observable<number>;
  timerSubscription!: Subscription;
  isRunning: boolean = false;
  elapsedTime: number = 0;
  displayTime: string = '00:00:00';
  lapTimes: string[] = [];
  currentLapTime: number = 0;
  // constructor() { }

  // ngOnInit(): void {
  //   // Update the clock every second
  //   setInterval(() => {
  //     this.currentTime = new Date();
  //   }, 1000);
  // }

  countdown: any = 360;
  timer!: Subscription;
  timerRunning: boolean = false;

  constructor(private dataService:TestService) { }

  ngOnInit(): void {
    this.timer$ = interval(1000);
    this.dataService.getData().subscribe((data) => {
      this.countdown = TESTURLS[data][1];
      console.log(this.countdown);

    });
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
    this.openPrompt();

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

// --------------------------------------------------------------------------------------

  startStopwatch() {
    if (!this.isRunning) {
      this.isRunning = true;
      this.timerSubscription = this.timer$.pipe(
        takeWhile(() => this.isRunning)
      ).subscribe(() => {
        this.elapsedTime++;
        this.updateDisplayTime();
      });
    }
  }

  stopStopwatch() {
    this.isRunning = false;
    if (this.timerSubscription) {
      this.timerSubscription.unsubscribe();
    }
  }

  resetStopwatch() {
    this.isRunning = false;
    this.elapsedTime = 0;
    // this.updateDisplayTime();
    this.startStopwatch();
  }

  formatTimeeee(value: number): string {
    return value < 10 ? `0${value}` : value.toString();
  }

  updateDisplayTime() {
    let hours = Math.floor(this.elapsedTime / 3600);
    let minutes = Math.floor((this.elapsedTime % 3600) / 60);
    let seconds = this.elapsedTime % 60;
    let lapHours = Math.floor(this.currentLapTime / 3600);
    let lapMinutes = Math.floor((this.currentLapTime % 3600) / 60);
    let lapSeconds = this.currentLapTime % 60;
    this.displayTime = `${this.formatTimeeee(hours)}:${this.formatTimeeee(minutes)}:${this.formatTimeeee(seconds)} (Lap: ${this.formatTimeeee(lapHours)}:${this.formatTimeeee(lapMinutes)}:${this.formatTimeeee(lapSeconds)})`;
  }

  addLap() {
    console.log(this.displayTime);

    if (this.isRunning) {
      this.lapTimes.push(this.displayTime);
      this.currentLapTime = this.elapsedTime;
      this.resetStopwatch();
    }
  }


}
