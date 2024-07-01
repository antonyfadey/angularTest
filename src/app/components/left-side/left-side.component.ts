import { Component } from '@angular/core';
import { SharedModule } from '../../shared/shared.module';
import { DataService } from '../../services/data.service';
import { TableComponent } from '../table/table.component';

@Component({
  selector: 'app-left-side',
  standalone: true,
  imports: [SharedModule, TableComponent],
  templateUrl: './left-side.component.html',
  styleUrl: './left-side.component.scss',
})
export class LeftSideComponent {
  selectorWDItems = [{ text: 'Подстанция' }, { text: 'Оборудование' }];
  selectorItems = [{ text: 'Список' }, { text: 'Ведомость' }];

  tableData = this.dataService.getFacilities();

  columns = [
    { header: 'Наименование', key: 'name', width: '50%' },
    { header: 'U ном.', key: 'u', width: '50%' },
  ];

  preselectedRows: number[] = [1];

  constructor(private dataService: DataService) {}
}
