import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatCardModule } from '@angular/material/card';
import { MatMenuModule } from '@angular/material/menu';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { LayoutModule } from '@angular/cdk/layout';
import { NavComponent } from './components/nav/nav.component';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatListModule } from '@angular/material/list';
import { AddressFormComponent } from './components/address-form/address-form.component';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatRadioModule } from '@angular/material/radio';
import { ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterModule } from '@angular/router';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { DynamicCyDirective } from './directives/dynamic-cy.directive';
import { CypressFormDirective } from './directives/cypress-form.directive';

@NgModule({
	imports: [
		CommonModule,
		MatGridListModule,
		MatCardModule,
		MatMenuModule,
		MatIconModule,
		MatButtonModule,
		LayoutModule,
		MatToolbarModule,
		MatSidenavModule,
		MatListModule,
		MatInputModule,
		MatSelectModule,
		MatRadioModule,
		ReactiveFormsModule,
		BrowserAnimationsModule,
		RouterModule,
	],
	declarations: [
		DashboardComponent,
		NavComponent,
		AddressFormComponent,
		NotFoundComponent,
		DynamicCyDirective,
		CypressFormDirective,
	],
	exports: [DashboardComponent, NavComponent, AddressFormComponent],
})
export class SharedModule { }
