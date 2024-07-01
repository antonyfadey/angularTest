import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-input',
  templateUrl: './input.component.html',
  styleUrl: './input.component.scss',
})
export class InputComponent {
  private _value: string = '';

  @Input() set value(val: string | undefined) {
    this._value = val ?? '';
  }

  get value(): string {
    return this._value;
  }

  @Input() editable?: boolean = true;
  @Output() valueChange: EventEmitter<string> = new EventEmitter<string>();

  isFocused: boolean = false;

  onInputChange(event: any) {
    this.value = event.target.value;
    this.valueChange.emit(this.value);
  }
}
