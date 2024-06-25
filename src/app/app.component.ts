import { Component } from '@angular/core';
import { SharedModule } from './shared/shared.module';
import { LeftSideComponent } from './components/left-side/left-side.component';
import { RightSideComponent } from './components/right-side/right-side.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [SharedModule, LeftSideComponent, RightSideComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  navItems = [
    { text: 'Замеры', icon: 'assets/icons/timeline.svg' },
    { text: 'Отчеты', icon: 'assets/icons/document.svg' },
    { text: 'Сервис', icon: 'assets/icons/service.svg' },
  ];

  viewItems = [
    { icon: 'assets/icons/compactView.svg' },
    { icon: 'assets/icons/weekView.svg' },
  ];

  constructor() {}
}
