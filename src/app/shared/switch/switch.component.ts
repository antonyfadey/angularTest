import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-switch',
  templateUrl: './switch.component.html',
  styleUrl: './switch.component.scss',
})
export class SwitchComponent {
  @Input() label?: string = '';
  isChecked: boolean = false;

  toggleSwitch() {
    this.isChecked = !this.isChecked;
  }
}
