import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MyProfileComponent } from './components/my-profile/my-profile.component';
import { AnonymousGuard } from './guards/anonymous/anonymous.guard';
import { AuthGuard } from './guards/auth/auth.guard';
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
		canActivate: [AuthGuard],
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
				path: 'my-profile',
				component: MyProfileComponent,
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
		canActivate: [AnonymousGuard],
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
