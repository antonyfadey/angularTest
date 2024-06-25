import { Component, Input } from '@angular/core';

interface SelectorItem {
  text?: string;
  icon?: string;
}

@Component({
  selector: 'app-selector',
  templateUrl: './selector.component.html',
  styleUrl: './selector.component.scss',
})
export class SelectorComponent {
  @Input() items: SelectorItem[] = [];
  @Input() size?: 'big' | 'medium' | 'small' = 'small';
  @Input() type?: 'primary'| 'secondary' = 'secondary';
  @Input() activeIndex?: number = 0;

  setActive(index: number) {
    this.activeIndex = index;
  }
}
