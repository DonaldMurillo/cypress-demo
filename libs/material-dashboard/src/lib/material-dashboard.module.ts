import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AppComponent } from '../app/app.component';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from '../app/app.routing';
import { ComponentsModule } from '../app/components/components.module';
import { AdminLayoutComponent } from '../app/layouts/admin-layout/admin-layout.component';

@NgModule({
	imports: [
		BrowserAnimationsModule,
		FormsModule,
		ReactiveFormsModule,
		HttpClientModule,
		ComponentsModule,
		RouterModule,
		AppRoutingModule,
		CommonModule
	],
	declarations: [
		AppComponent,
		AdminLayoutComponent,
	],
	providers: [],
	bootstrap: [AppComponent]
})
export class MaterialDashboardModule { }
