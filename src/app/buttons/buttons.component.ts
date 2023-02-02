import { Component, EventEmitter, Output, Input } from '@angular/core';

@Component({
  selector: 'app-buttons',
  templateUrl: './buttons.component.html',
  styleUrls: ['./buttons.component.scss']
})
export class ButtonsComponent {
  @Output() newCountEvent = new EventEmitter<number>();
  @Output() newIncreaseEvent = new EventEmitter<number>();
  @Input() currentCount = 0;

  addOne() {
    this.newCountEvent.emit(1);
  }

  addOneHundred() {
    this.newCountEvent.emit(100);
  }

  increase() {
    this.newIncreaseEvent.emit();
  }
}
