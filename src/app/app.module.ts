import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
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
import { ScTabsModule} from '@speak/ng-bcl/tabs';
import { ScTableModule} from '@speak/ng-bcl/table';
import { ScMenu, ScMenuModule } from '@speak/ng-bcl/menu';
import { CONTEXT, DICTIONARY } from '@speak/ng-bcl';

import { NgScModule } from '@speak/ng-sc';
import { SciAntiCSRFModule } from '@speak/ng-sc/anti-csrf';

import { AppComponent } from './app.component';
import { ButtonPageComponent } from './button-page/button-page.component';
import { StartPageComponent } from './start-page/start-page.component';
import { TablePageComponent } from './table-page/table-page.component';
import { ProgressIndicatorComponent } from './progress-indicator/progress-indicator.component';
import { TabPageComponent } from './tab-page/tab-page.component';
import { IconPageComponent } from './icon-page/icon-page.component';
import { MenuPageComponent } from './menu-page/menu-page.component';
import { ScProgressIndicatorPanelModule} from "@speak/ng-bcl/progress-indicator-panel";
import { HighlightJsModule } from 'ngx-highlight-js';
@NgModule({
  declarations: [
    AppComponent,
    ButtonPageComponent,
    StartPageComponent,
    TablePageComponent,
    ProgressIndicatorComponent,
    TabPageComponent,
    IconPageComponent,
    MenuPageComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    HttpClientModule,
    RouterModule.forRoot([
      { path: '', component: StartPageComponent, pathMatch: 'full' },
      { path: 'buttonpage', component: ButtonPageComponent },
      { path: 'iconpage', component: IconPageComponent },
      { path: 'progressindicatorpage', component: ProgressIndicatorComponent },
      { path: 'tabpage', component: TabPageComponent },
      { path: 'tablepages', component: TablePageComponent },
      {path : 'menupage', component: MenuPageComponent}
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
    SciAntiCSRFModule,
    HighlightJsModule ,
    NgScModule.forRoot({
      // The ItemId refers to '/sitecore/client/Applications/ScIntegrationRefApp/UserAccess' AccessFolder item
      authItemId: '1023A91F-E7C0-410C-BE84-472204C71FD7',
      contextToken: CONTEXT,
      dictionaryToken: DICTIONARY,
      // The ItemId refers to '/sitecore/client/Applications/ScIntegrationRefApp/Translations' Speak3DictionaryFolder item
      translateItemId: 'B76C8EC2-1139-4BB1-915D-0F0DB4A04FE4'
    })
  ],
  providers: [
   // ItemService,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
