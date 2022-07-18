import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AllShowsComponent } from './all-shows.component';
import { RouterModule } from '@angular/router';
import { ShowsListModule } from 'src/app/components/shows-list/shows-list.module';
import { ShowSpinnerModule } from 'src/app/components/show-spinner/show-spinner.module';

@NgModule({
	declarations: [AllShowsComponent],
	imports: [CommonModule, RouterModule, ShowsListModule, ShowSpinnerModule],
})
export class AllShowsModule {}
