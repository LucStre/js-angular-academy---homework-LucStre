import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { ShowSpinnerModule } from 'src/app/components/show-spinner/show-spinner.module';
import { ShowsListModule } from 'src/app/components/shows-list/shows-list.module';
import { TopRatedComponent } from './top-rated.component';

@NgModule({
	declarations: [TopRatedComponent],
	imports: [CommonModule, RouterModule, ShowsListModule, ShowSpinnerModule],
})
export class TopRatedModule {}
