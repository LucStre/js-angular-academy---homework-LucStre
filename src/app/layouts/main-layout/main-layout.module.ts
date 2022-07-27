import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MatSidenavModule } from '@angular/material/sidenav';
import { RouterModule } from '@angular/router';
import { NavigationModule } from 'src/app/components/navigation/navigation.module';
import { MainLayoutComponent } from './main-layout.component';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { LayoutModule } from '@angular/cdk/layout';

@NgModule({
	declarations: [MainLayoutComponent],
	imports: [
		CommonModule,
		RouterModule,
		NavigationModule,
		MatSidenavModule,
		MatIconModule,
		MatButtonModule,
		LayoutModule,
	],
})
export class MainLayoutModule {}
