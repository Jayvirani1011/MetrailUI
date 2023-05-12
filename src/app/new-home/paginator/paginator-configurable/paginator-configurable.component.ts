import { Component } from '@angular/core';
import { PageEvent } from '@angular/material/paginator';
 
@Component({
  selector: 'app-paginator-configurable',
  templateUrl: './paginator-configurable.component.html',
  styleUrls: ['./paginator-configurable.component.css']
})
export class PaginatorConfigurableComponent {
  length: number = 50;
  pageSize: number = 10;
  pageIndex: number = 0;
  pageSizeOptions: number[] = [5, 10, 25];

  hidePageSize: boolean = false
  showPageSizeOptions: boolean = true;
  showFirstLastButtons: boolean = true;
  disabled: boolean = false;

  pageEvent: PageEvent | any;

  handlePageEvent(e: PageEvent){
    this.pageEvent = e;
    this.length = e.length;
    this.pageSize = e.pageSize;
    this.pageIndex = e.pageIndex;
  }

  setPageSizeOptions(setPageSizeOptionInput: string){
    if (setPageSizeOptionInput) {
      this.pageSizeOptions = setPageSizeOptionInput.split(',').map(str => +str);
    }
  }
}
