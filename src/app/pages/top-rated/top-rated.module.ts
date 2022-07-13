import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TopRatedComponent } from './top-rated.component';
import { RouterModule } from '@angular/router';
import { ShowsListModule } from 'src/app/components/shows-list/shows-list.module';

@NgModule({
	declarations: [TopRatedComponent],
	imports: [CommonModule, RouterModule, ShowsListModule],
})
export class TopRatedModule {}
