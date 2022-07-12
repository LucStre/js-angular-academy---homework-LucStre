import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ShowsContainerModule } from './components/shows-container/shows-container.module';
import { MainLayoutModule } from './layouts/main-layout/main-layout.module';
import { AllShowsModule } from './pages/all-shows/all-shows.module';
import { TopRatedModule } from './pages/top-rated/top-rated.module';
import { ShowDetailModule } from './pages/show-detail/show-detail.module';

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
	],
	providers: [],
	bootstrap: [AppComponent],
})
export class AppModule {}
