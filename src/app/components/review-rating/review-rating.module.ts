import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { ReviewRatingComponent } from './review-rating.component';

@NgModule({
	declarations: [ReviewRatingComponent],
	exports: [ReviewRatingComponent],
	imports: [CommonModule, MatIconModule],
})
export class ReviewRatingModule {}
