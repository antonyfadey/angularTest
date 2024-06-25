import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrl: './button.component.scss',
})
export class ButtonComponent {
  @Input() text?: string = '';
  @Input() icon?: string = '';
  @Output() click: EventEmitter<void> = new EventEmitter<void>();
  @Input() size?: 'medium' | 'small' = 'small';
  @Input() type?: 'primary' | 'secondary' = 'primary';
  @Input() active?: boolean = true;

  handleClick(event: MouseEvent) {
    event.stopPropagation();
    if (this.active) {
      this.click.emit();
    }
  }
}
