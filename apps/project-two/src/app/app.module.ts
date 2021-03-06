import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { NxWelcomeComponent } from './nx-welcome.component';
import { SharedModule } from '@cypress-demo/shared';
import { TestHomeComponent } from './componets/test-home/test-home.component';
import { AppRoutingModule } from './app-routing.module';
import { CypressHelperModule } from '@cypress-demo/cypress-helper';
import { environment } from '../environments/environment';

@NgModule({
	declarations: [
		AppComponent,
		NxWelcomeComponent,
		TestHomeComponent,
	],
	imports: [
		BrowserModule,
		AppRoutingModule,
		SharedModule.forRoot(environment.production),
		CypressHelperModule
	],
	providers: [],
	bootstrap: [AppComponent],
})
export class AppModule { }
