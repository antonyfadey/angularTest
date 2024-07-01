import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-checkbox',
  templateUrl: './checkbox.component.html',
  styleUrl: './checkbox.component.scss',
})
export class CheckboxComponent {
  @Output() change: EventEmitter<boolean> = new EventEmitter<boolean>();
  @Input() checked: boolean = false;

  handleClick(event: MouseEvent) {
    event.stopPropagation();
    this.checked = !this.checked;
    this.change.emit(this.checked);
  }
}
