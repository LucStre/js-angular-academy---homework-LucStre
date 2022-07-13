import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AllShowsComponent } from './all-shows.component';
import { RouterModule } from '@angular/router';

@NgModule({
	declarations: [AllShowsComponent],
	imports: [CommonModule, RouterModule],
})
export class AllShowsModule {}
