import { Component, Input, SimpleChanges } from '@angular/core';
import { SelectedRowsService } from '../../services/selected-rows.service';
import { DialogComponent } from '../../components/dialog/dialog.component';
import { SharedModule } from '../shared.module';
import { CommonModule } from '@angular/common';
import { DataService } from '../../services/data.service';

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
  createSourceVal: string = '';

  ngOnChanges(changes: SimpleChanges) {
    if (changes['preselectedRows']) {
      this.selectedRows = new Set(this.preselectedRows);
    }
  }

  toggleRow(event: MouseEvent, index: number) {
    event.stopPropagation();

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
      this.data.forEach((_, index) => this.selectedRows.add(index));
      this.setSelectedRows();
    }
  }

  isAllSelected(): boolean {
    return this.selectedRows.size === this.data.length;
  }

  handleCreateClick(event: any) {
    this.isDialogOpen = true;
    this.title = 'Создание';
  }

  handleConfirmClick() {
    if (this.createSourceVal !== '')
      this.dataService.createMeasure(this.createSourceVal);
    this.createSourceVal = '';
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
