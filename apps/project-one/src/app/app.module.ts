import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { MaterialDashboardModule } from '@cypress-demo/material-dashboard';

import { AppComponent } from './app.component';
import { NxWelcomeComponent } from './nx-welcome.component';
import { AppComponent as MaterialAppComponent } from '@cypress-demo/material-dashboard';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [AppComponent, NxWelcomeComponent],
  imports: [BrowserModule, MaterialDashboardModule, RouterModule],
  providers: [],
  bootstrap: [MaterialAppComponent],
})
export class AppModule {}
