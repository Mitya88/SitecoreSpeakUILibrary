import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-containers-page',
  templateUrl: './containers-page.component.html',
  styleUrls: ['./containers-page.component.scss']
})
export class ContainersPageComponent implements OnInit {

  constructor() { }

  isEditing = false;
  ngOnInit() {
  }
  edit() {
    this.isEditing = true;
  }

  close() {
    this.isEditing = false;
  }
}
