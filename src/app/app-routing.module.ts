import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthLayoutComponent } from './layouts/auth-layout/auth-layout.component';
import { MainLayoutComponent } from './layouts/main-layout/main-layout.component';
import { AllShowsComponent } from './pages/all-shows/all-shows.component';
import { LoginComponent } from './pages/login/login.component';
import { RegisterComponent } from './pages/register/register.component';
import { ShowDetailComponent } from './pages/show-detail/show-detail.component';
import { TopRatedComponent } from './pages/top-rated/top-rated.component';

const routes: Routes = [
	{
		path: '',
		component: MainLayoutComponent,
		children: [
			{
				path: '',
				component: AllShowsComponent,
			},
			{
				path: 'top-rated',
				component: TopRatedComponent,
			},
			{
				path: 'show/:id',
				component: ShowDetailComponent,
			},
		],
	},
	{
		path: '',
		component: AuthLayoutComponent,
		children: [
			{
				path: 'login',
				component: LoginComponent,
			},
			{
				path: 'register',
				component: RegisterComponent,
			},
		],
	},
	{
		path: '**',
		redirectTo: '',
	},
];

@NgModule({
	imports: [RouterModule.forRoot(routes)],
	exports: [RouterModule],
})
export class AppRoutingModule {}
