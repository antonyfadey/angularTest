import { Component, Input, SimpleChanges } from '@angular/core';
import { SelectedRowsService } from '../../services/selected-rows.service';
import { DialogComponent } from '../../components/dialog/dialog.component';
import { CommonModule } from '@angular/common';
import { DataService } from '../../services/data.service';
import { Measure } from '../../models/measure.model';
import { SharedModule } from '../../shared/shared.module';

interface Column {
  header: string;
  key: string;
  width?: string;
}


@Component({
  selector: 'app-table',
  standalone: true,
  imports: [DialogComponent, SharedModule, CommonModule],
  templateUrl: './table.component.html',
  styleUrl: './table.component.scss',
})
export class TableComponent {
  @Input() data: any[] = [];
  @Input() multiSelect?: boolean = false;
  @Input() columns: Column[] = [];
  @Input() preselectedRows: number[] = [];
  @Input() addLine?: boolean = false;

  selectedRows: Set<number> = new Set();

  isDialogOpen = false;
  title = '';

  createObject: Measure = {};

  ngOnChanges(changes: SimpleChanges) {
    if (changes['preselectedRows']) {
      this.selectedRows = new Set(this.preselectedRows);
    }
  }

  toggleRow(index: number) {
    if (this.multiSelect) {
      if (this.selectedRows.has(index)) {
        this.selectedRows.delete(index);
        this.setSelectedRows();
      } else {
        this.selectedRows.add(index);
        this.setSelectedRows();
      }
    } else {
      this.selectedRows.clear();
      this.selectedRows.add(index);
    }
  }

  isSelected(index: number): boolean {
    return this.selectedRows.has(index);
  }

  toggleAll() {
    if (this.selectedRows.size === this.data.length) {
      this.selectedRows.clear();
      this.setSelectedRows();
    } else {
      this.data.forEach((item, index) => this.selectedRows.add(index));
      this.setSelectedRows();
    }
  }

  isAllSelected(): boolean {
    return this.selectedRows.size === this.data.length;
  }

  handleCreateClick(event: any) {
    this.isDialogOpen = true;
    this.title = 'Создание';

    let currentDate = new Date();

    let day = currentDate.getDate();
    let month = (currentDate.getMonth() + 1).toString().padStart(2, '0');
    let year = currentDate.getFullYear();
    let hours = currentDate.getHours().toString().padStart(2, '0');
    let minutes = currentDate.getMinutes().toString().padStart(2, '0');
    let seconds = currentDate.getSeconds().toString().padStart(2, '0');

    let formattedDate = `${day}.${month}.${year}`;
    let formattedTime = `${hours}:${minutes}:${seconds}`;

    this.createObject.date = formattedDate;
    this.createObject.time = formattedTime;
  }

  handleConfirmClick() {
    this.dataService.createMeasure(this.createObject);
    this.createObject = {};
    this.isDialogOpen = false;
  }

  closeDialog() {
    this.isDialogOpen = false;
  }


  private setSelectedRows() {
    this.selectedRowsService.setSelectedRows(
      this.data.filter((item, index) => this.selectedRows.has(index))
    );
  }

  constructor(
    private selectedRowsService: SelectedRowsService,
    private dataService: DataService
  ) {}
}
