import { Component, OnInit } from '@angular/core';
import { SortHeaderState } from '@speak/ng-bcl/table';

@Component({
  selector: 'app-table-page',
  templateUrl: './table-page.component.html',
  styleUrls: ['./table-page.component.scss']
})
export class TablePageComponent implements OnInit {

  sortedData = [
    {
      id: '1',
      name: 'Mark',
      lastname: 'Otto',
      username: '@mdo'
    }];

    trackByItemId(id: string, header): number { return header.id; }

  onSortChange(sortState: SortHeaderState[]) {
    this.sortedData.sort((a, b) => {
      let result = 0;
      sortState.forEach(header => {
        if (result !== 0) {
          return;
        }
        if (a[header.id] < b[header.id]) {
          if (header.direction === 'asc') {
            result = -1;
          } else if (header.direction === 'desc') {
            result = 1;
          }
        } else if (a[header.id] > b[header.id]) {
          if (header.direction === 'asc') {
            result = 1;
          } else if (header.direction === 'desc') {
            result = -1;
          }
        }
      });
      return result;
    });
  }
  constructor() { }

  ngOnInit() {
    
  }

}
