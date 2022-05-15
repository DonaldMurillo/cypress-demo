import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddressFormComponent, NotFoundComponent } from '@cypress-demo/shared';
import { TestHomeComponent } from './componets/test-home/test-home.component';

//https://angular.io/guide/lazy-loading-ngmodules
//ng generate module customers --route customers --module app.module
const routes: Routes = [
	{ path: 'home', component: TestHomeComponent },
	{ path: '404', component: NotFoundComponent },
	{ path: 'address-form', component: AddressFormComponent },

	{ path: '', redirectTo: 'home', pathMatch: 'full' },
	{ path: '**', redirectTo: '404', pathMatch: 'full' },// TODO: MAKE 404 PAGE;
];

@NgModule({
	imports: [RouterModule.forRoot(routes)],
	// imports: [RouterModule.forRoot(routes, { enableTracing: true,  })], //To realice a follow-up
	exports: [RouterModule],
})
export class AppRoutingModule { }