import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ShowRatingComponent } from './show-rating.component';

@NgModule({
	declarations: [ShowRatingComponent],
	exports: [ShowRatingComponent],
	imports: [CommonModule],
})
export class ShowRatingModule {}
