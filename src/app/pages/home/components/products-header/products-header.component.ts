import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-products-header',
  templateUrl: './products-header.component.html',
})
export class ProductsHeaderComponent {
  @Output() columnsCountChange = new EventEmitter<number>();
  @Output() itemsCountChange = new EventEmitter<number>();
  @Output() sortChange = new EventEmitter<string>();
  itemsShowCount = 12;
  sort = 'desc';

  constructor() { }

  onColumnsUpdate(colsNum: number): void {
    this.columnsCountChange.emit(colsNum);
  }

  onItemsUpdate(count: number): void {
    this.itemsCountChange.emit(count);
    this.itemsShowCount = count;
  }

  onSortUpdate(newSort: string): void {
    this.sortChange.emit(newSort);
    this.sort = newSort;
  }
}