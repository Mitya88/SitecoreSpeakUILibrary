import { Component, OnInit } from '@angular/core';
import { NgScService } from '@speak/ng-sc';

import { SciAuthService } from '@speak/ng-sc/auth';
import { SciLogoutService } from '@speak/ng-sc/logout';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  isNavigationShown : boolean;
  logoutService: SciLogoutService;
  isActive:boolean;
  constructor(
    private ngScService: NgScService
  ) { }

  ngOnInit() {
    // Call init to first fetch context, then translations
    this.ngScService.init();
  }
}
