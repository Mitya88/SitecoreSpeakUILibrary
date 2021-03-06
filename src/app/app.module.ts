import { BrowserModule } from '@angular/platform-browser';
import { NgModule, Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';

import { ScAccountInformationModule } from '@speak/ng-bcl/account-information';
import { ScActionBarModule } from '@speak/ng-bcl/action-bar';
import { ScApplicationHeaderModule } from '@speak/ng-bcl/application-header';
import { ScButtonModule } from '@speak/ng-bcl/button';
import { ScGlobalHeaderModule } from '@speak/ng-bcl/global-header';
import { ScGlobalLogoModule } from '@speak/ng-bcl/global-logo';
import { ScIconModule } from '@speak/ng-bcl/icon';
import { ScPageModule } from '@speak/ng-bcl/page';
import { ScTabsModule } from '@speak/ng-bcl/tabs';
import { ScDropdownModule } from '@speak/ng-bcl/dropdown';
import { ScTableModule } from '@speak/ng-bcl/table'; 
import { ScMenu, ScMenuModule } from '@speak/ng-bcl/menu';
import { CONTEXT, DICTIONARY } from '@speak/ng-bcl';
import { ScActionControlModule } from '@speak/ng-bcl/action-control';
import { NgScModule } from '@speak/ng-sc';
import { SciAntiCSRFModule } from '@speak/ng-sc/anti-csrf';

import { ScDialogModule } from '@speak/ng-bcl/dialog';

import { AppComponent } from './app.component';
import { ButtonPageComponent } from './button-page/button-page.component';
import { StartPageComponent } from './start-page/start-page.component';
import { TablePageComponent } from './table-page/table-page.component';
import { ProgressIndicatorComponent } from './progress-indicator/progress-indicator.component';
import { TabPageComponent } from './tab-page/tab-page.component';
import { IconPageComponent } from './icon-page/icon-page.component';
import { MenuPageComponent } from './menu-page/menu-page.component';
import { ScProgressIndicatorPanelModule } from "@speak/ng-bcl/progress-indicator-panel";
import { ColorPageComponent } from './color-page/color-page.component';
import { TextHeadingPageComponent } from './text-heading-page/text-heading-page.component';
import { ImagePageComponent } from './image-page/image-page.component';
import { ContainersPageComponent } from './containers-page/containers-page.component';
import { DialogsPageComponent } from './dialogs-page/dialogs-page.component';
import { ControlsPageComponent } from './controls-page/controls-page.component';
import { NgxGistModule } from 'ngx-gist/dist/ngx-gist.module';
import { SideMenuComponent } from './shared-components/side-menu/side-menu.component';
import { HeaderComponent } from './shared-components/header/header.component';

@NgModule({
  declarations: [
    AppComponent,
    ButtonPageComponent,
    StartPageComponent,
    TablePageComponent,
    ProgressIndicatorComponent,
    TabPageComponent,
    IconPageComponent,
    MenuPageComponent,
    ColorPageComponent,
    TextHeadingPageComponent,
    ImagePageComponent,
    ContainersPageComponent,
    DialogsPageComponent,
    ControlsPageComponent,
    SideMenuComponent,
    HeaderComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    NgxGistModule,
    HttpClientModule,
    RouterModule.forRoot([
      { path: '', component: StartPageComponent, pathMatch: 'full' },
      { path: 'buttonpage', component: ButtonPageComponent },
      { path: 'iconpage', component: IconPageComponent },
      { path: 'progressindicatorpage', component: ProgressIndicatorComponent },
      { path: 'tabpage', component: TabPageComponent },
      { path: 'tablepages', component: TablePageComponent },
      { path: 'menupage', component: MenuPageComponent },
      { path: 'colorpage', component: ColorPageComponent },
      { path: 'textheadingpage', component: TextHeadingPageComponent },
      { path: 'imagepage', component: ImagePageComponent },
      { path: 'containerspage', component: ContainersPageComponent },
      { path: 'dialogspage', component: DialogsPageComponent },
      { path: 'controlspage', component: ControlsPageComponent }
    ]),
    ScAccountInformationModule,
    ScActionBarModule,
    ScApplicationHeaderModule,
    ScButtonModule,
    ScGlobalHeaderModule,
    ScGlobalLogoModule,
    ScProgressIndicatorPanelModule,
    ScIconModule,
    ScPageModule,
    ScMenuModule,
    ScTabsModule,
    ScTableModule,
    ScDropdownModule,
    ScDialogModule,
    ScActionControlModule,
    SciAntiCSRFModule,
    NgScModule.forRoot({
      authItemId: '1023A91F-E7C0-410C-BE84-472204C71FD7',
      contextToken: CONTEXT,
      dictionaryToken: DICTIONARY,
      translateItemId: 'B76C8EC2-1139-4BB1-915D-0F0DB4A04FE4'
    })
  ],
  providers: [
    // ItemService,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
