import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TestService {
  private dataSubject = new BehaviorSubject<number>(360);

  constructor() { }

  updateData(newData: any) {
    this.dataSubject.next(newData);
  }

  getData() {
    return this.dataSubject.asObservable();
  }
}
