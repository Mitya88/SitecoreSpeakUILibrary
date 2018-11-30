import { Component, OnInit } from '@angular/core';

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
  constructor() { }

  ngOnInit() {
    
  }

}
