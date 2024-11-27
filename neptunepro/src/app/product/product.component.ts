import { Component } from '@angular/core';
import { AgGridAngular } from 'ag-grid-angular';
import { ColDef, GridReadyEvent, GridApi, ColumnState } from 'ag-grid-community';
import "ag-grid-community/styles/ag-grid.css";
import "ag-grid-community/styles/ag-theme-quartz.css";
import { IProduct } from '../interfaces/IProduct';

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

  public constructor(){
    this.columnOrder = [];
  }

  onGridReady(params: { api: GridApi<IProduct>; }) {
    this.gridApi = params.api;
    this.restoreColState();
  }

  restoreColState() {
    const savedOrder = localStorage.getItem('columnOrder');
    if (!savedOrder) {
      console.log("no columns state to restore by, you must save state first");
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

  rowData =  [
      { ProductName: "Product HIAY", VersionCode: 35000, SalesCode: 7900, RequireApprovals: true },
      { ProductName: "Product GGIB", VersionCode: 35001, SalesCode: 7920, RequireApprovals: false },
      { ProductName: "Product UAHI", VersionCode: 35002, SalesCode: 7300, RequireApprovals: true },
      { ProductName: "Product YVGG",VersionCode: 35003, SalesCode: 7450, RequireApprovals: true },
      { ProductName: "Product ATUA",VersionCode: 35003, SalesCode: 7340, RequireApprovals: false },
      { ProductName: "Product RDYV",VersionCode: 35004, SalesCode: 7740, RequireApprovals: true },
      { ProductName: "Product HIMX", VersionCode: 35005, SalesCode: 7330, RequireApprovals: false },
      { ProductName: "Product GGPZ", VersionCode: 35006, SalesCode: 7880, RequireApprovals: false },
      { ProductName: "Product AYOZ", VersionCode: 35007, SalesCode: 7885, RequireApprovals: false },
      { ProductName: "Product IBAI", VersionCode: 35008, SalesCode: 7904, RequireApprovals: true },
      { ProductName: "Product UAUD", VersionCode: 35009, SalesCode: 7970, RequireApprovals: true },
      { ProductName: "Product YVYD", VersionCode: 35010, SalesCode: 7200, RequireApprovals: false },
      { ProductName: "Product ATEF", VersionCode: 35011, SalesCode: 7300, RequireApprovals: true },
      { ProductName: "Product RDWM", VersionCode: 35012, SalesCode: 7100, RequireApprovals: false },
      { ProductName: "Product MXZP", VersionCode: 35013, SalesCode: 7955, RequireApprovals: true },
      { ProductName: "Product PZSO", VersionCode: 35014, SalesCode: 7930, RequireApprovals: true },
      { ProductName: "Product HIUA", VersionCode: 35015, SalesCode: 7966, RequireApprovals: true },
      { ProductName: "Product GGYV", VersionCode: 35016, SalesCode: 7330, RequireApprovals: false },
    ];

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