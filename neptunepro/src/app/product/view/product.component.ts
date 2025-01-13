import { Component } from '@angular/core';
import { AgGridAngular } from 'ag-grid-angular';
import { ColDef, GridApi, ColumnState } from 'ag-grid-community';
import "ag-grid-community/styles/ag-grid.css";
import "ag-grid-community/styles/ag-theme-quartz.css";
import { IProduct } from '../../interfaces/IProduct';

@Component({
  selector: 'app-product',
  standalone: true,
  imports: [AgGridAngular],
  templateUrl: './product.component.html',
  styleUrl: './product.component.scss'
})
export class ProductComponent {
  private gridApi!: GridApi<IProduct>;
  private columnOrder: ColumnState[];
  rowData: any[] = [];
  products: IProduct[] = [];

  public constructor(){
    this.columnOrder = [];
  }

  onGridReady(params: { api: GridApi<IProduct>; }) {
    this.gridApi = params.api;
    this.restoreColState();
    this.loadProducts();
  }
 
  loadProducts() {
    this.rowData =  [];
    let storedProducts = localStorage.getItem('products');
  if (storedProducts) {
      this.rowData = JSON.parse(storedProducts);
    }
  }

  restoreColState() {
    const savedOrder = localStorage.getItem('columnOrder');
    if (!savedOrder) {
      return;
    }
    this.columnOrder = JSON.parse(savedOrder);
    this.gridApi.applyColumnState({
      state: this.columnOrder,
      applyOrder: true,
    });
    console.log("column state restored");
}

saveColState() {
  this.columnOrder = this.gridApi.getColumnState();
  localStorage.setItem('columnOrder', JSON.stringify(this.columnOrder));
  console.log("column state saved");
  }

  colDefs: ColDef[] = [
    { 
      field: 'ProductName',
      filter: true,
      floatingFilter: true

    },
    { 
      field: 'VersionCode',
      filter: 'agNumberColumnFilter',
      floatingFilter: true
    },
    { 
      field: 'SalesCode',
      filter: 'agNumberColumnFilter',
      floatingFilter: true
    },
    { 
      field: 'RequireApprovals',
      filter: true,
      floatingFilter: true
    }
  ];
    
}