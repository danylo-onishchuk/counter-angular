import { Component } from '@angular/core';

@Component({
  selector: 'app-counter',
  templateUrl: './counter.component.html',
  styleUrls: ['./counter.component.scss']
})
export class CounterComponent {
  currentCount = 0;

  add(number: number) {
    this.currentCount += number;
  }

  increase() {
    if (this.currentCount % 5 === 0 && this.currentCount !== 0) {
      this.currentCount += 101;
    } else {
      this.currentCount += 1;
    }
  }
}
