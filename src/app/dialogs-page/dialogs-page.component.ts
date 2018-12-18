import { Component, OnInit } from '@angular/core';

import{ScDialogService} from '@speak/ng-bcl/dialog';
@Component({
  selector: 'app-dialogs-page',
  templateUrl: './dialogs-page.component.html',
  styleUrls: ['./dialogs-page.component.scss']
})
export class DialogsPageComponent implements OnInit {
 isDisabled: boolean;
  constructor(public dialogService: ScDialogService) {
    this.isDisabled = true;
   }

  ngOnInit() {
  }
  alertAndClose() {
    alert('Save button pressed!');
    this.dialogService.close();
  }
}
