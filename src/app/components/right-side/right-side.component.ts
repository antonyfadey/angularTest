import { Component, TemplateRef, ViewChild } from '@angular/core';
import { SharedModule } from '../../shared/shared.module';
import { DataService } from '../../services/data.service';
import { SelectedRowsService } from '../../services/selected-rows.service';
import { DialogComponent } from '../dialog/dialog.component';
import { CommonModule } from '@angular/common';
import { TableComponent } from '../../shared/table/table.component';

@Component({
  selector: 'app-right-side',
  standalone: true,
  imports: [SharedModule, DialogComponent, CommonModule, TableComponent],
  templateUrl: './right-side.component.html',
  styleUrl: './right-side.component.scss',
})
export class RightSideComponent {
  tableViewItems = [
    { icon: 'assets/icons/viewTable1.svg' },
    { icon: 'assets/icons/viewTable2.svg' },
  ];

  preselectedRows: number[] = [];

  tableData = this.dataService.getMeasures();

  columns = [
    { header: 'Дата', key: 'date' },
    { header: 'Время', key: 'time' },
    { header: 'Источник', key: 'source' },
    { header: 'Фаза', key: 'phase' },
    { header: 'U, kB', key: 'U' },
    { header: 'I, A', key: 'I' },
    { header: 'P, MBt', key: 'P' },
    { header: 'Q, Mвар', key: 'Q' },
    { header: 'cos φ', key: 'cos' },
  ];

  private type: string = '';
  title = '';

  sourceEdit = '';
  dateEdit = '';
  timeEdit = '';

  @ViewChild('deleteContent') deleteContent!: TemplateRef<any>;
  @ViewChild('editContent') editContent!: TemplateRef<any>;
  contentTemplate!: TemplateRef<any>;
  isDialogOpen = false;

  handleDeleteClick() {
    let rows = this.selectedRowsService.getSelectedRows();

    if (rows.length !== 0) {
      this.isDialogOpen = true;
      this.type = 'delete';
      this.title = 'Удаление';
      this.contentTemplate = this.deleteContent;
    }
  }

  handleEditClick() {
    let rows = this.selectedRowsService.getSelectedRows();

    if (rows.length !== 0) {
      this.isDialogOpen = true;
      this.type = 'edit';
      this.title = 'Редактирование';
      this.contentTemplate = this.editContent;
      this.sourceEdit = rows[0].source;
      this.dateEdit = rows[0].date;
      this.timeEdit = rows[0].time;
    }
  }

  handleConfirmClick() {
    let rows = this.selectedRowsService.getSelectedRows();
    if (this.type === 'delete') {
      if (rows.length !== 0) this.dataService.deleteMeasures(rows);
    } else if (this.type === 'edit') {
      rows[0].source = this.sourceEdit;
      rows[0].date = this.dateEdit;
      rows[0].time = this.timeEdit;
      this.dataService.updateMeasure(rows[0]);
    }
    this.isDialogOpen = false;
    this.selectedRowsService.clearSelectedRows();
    this.tableData = this.dataService.getMeasures();
    this.preselectedRows = [];
  }

  closeDialog() {
    this.isDialogOpen = false;
  }

  constructor(
    private dataService: DataService,
    private selectedRowsService: SelectedRowsService
  ) {}
}
