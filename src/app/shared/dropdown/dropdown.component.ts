import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-dropdown',
  templateUrl: './dropdown.component.html',
  styleUrl: './dropdown.component.scss',
})
export class DropdownComponent {
  @Input() text: string = '';
  @Input() value: string = '';
  @Input() size: 'long' | 'short' = 'long';
  icon = 'assets/icons/icon-down.svg';
}
