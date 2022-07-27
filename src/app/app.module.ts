import { HttpClientModule } from '@angular/common/http';
import { APP_INITIALIZER, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MyProfileModule } from './components/my-profile/my-profile.module';
import { ShowsContainerModule } from './components/shows-container/shows-container.module';
import { AuthLayoutModule } from './layouts/auth-layout/auth-layout.module';
import { MainLayoutModule } from './layouts/main-layout/main-layout.module';
import { AllShowsModule } from './pages/all-shows/all-shows.module';
import { LoginModule } from './pages/login/login.module';
import { RegisterModule } from './pages/register/register.module';
import { ShowDetailModule } from './pages/show-detail/show-detail.module';
import { TopRatedModule } from './pages/top-rated/top-rated.module';
import { AuthService } from './services/auth/auth.service';

@NgModule({
	declarations: [AppComponent],
	imports: [
		BrowserModule,
		AppRoutingModule,
		BrowserAnimationsModule,
		ShowsContainerModule,
		MainLayoutModule,
		AllShowsModule,
		TopRatedModule,
		ShowDetailModule,
		AuthLayoutModule,
		LoginModule,
		RegisterModule,
		HttpClientModule,
		MyProfileModule,
	],
	providers: [
		{
			provide: APP_INITIALIZER,
			multi: true,
			useFactory: (authService: AuthService) => {
				return () => authService.init();
			},
			deps: [AuthService],
		},
	],
	bootstrap: [AppComponent],
})
export class AppModule {}
