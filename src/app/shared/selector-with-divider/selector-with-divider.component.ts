import { Component, Input } from '@angular/core';

interface SelectorWDItem {
  text: string;
}

@Component({
  selector: 'app-selector-with-divider',
  templateUrl: './selector-with-divider.component.html',
  styleUrl: './selector-with-divider.component.scss',
})
  
export class SelectorWithDividerComponent {
  @Input() items: SelectorWDItem[] = [];
  @Input() activeIndex: number = 0;

  setActive(index: number) {
    this.activeIndex = index;
  }
}
