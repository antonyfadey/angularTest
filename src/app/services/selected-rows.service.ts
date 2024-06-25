import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class SelectedRowsService {
  private selectedRows: any[] = [];

  getSelectedRows() {
    return this.selectedRows;
  }

  setSelectedRows(rows: any[]): void {
    this.selectedRows = rows;
  }

  clearSelectedRows() {
    this.selectedRows = [];
  }
  constructor() {}
}
