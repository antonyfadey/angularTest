import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SelectorComponent } from './selector/selector.component';
import { ButtonComponent } from './button/button.component';
import { SelectorWithDividerComponent } from './selector-with-divider/selector-with-divider.component';
import { DropdownComponent } from './dropdown/dropdown.component';
import { SwitchComponent } from './switch/switch.component';
import { InputComponent } from './input/input.component';

@NgModule({
  declarations: [
    SelectorComponent,
    ButtonComponent,
    SelectorWithDividerComponent,
    DropdownComponent,
    SwitchComponent,
    InputComponent,
  ],
  imports: [CommonModule],
  exports: [
    SelectorComponent,
    ButtonComponent,
    SelectorWithDividerComponent,
    DropdownComponent,
    SwitchComponent,
    InputComponent,
  ],
})
export class SharedModule {}
