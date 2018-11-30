import { Component, OnInit } from '@angular/core';
import { NgScService } from '@speak/ng-sc';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  constructor(
    private ngScService: NgScService
  ) { }

  ngOnInit() {
    // Call init to first fetch context, then translations
    this.ngScService.init();
  }
}
