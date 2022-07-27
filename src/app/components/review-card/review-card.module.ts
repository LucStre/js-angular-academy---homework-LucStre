import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { ReviewRatingModule } from '../review-rating/review-rating.module';
import { ReviewCardComponent } from './review-card.component';

@NgModule({
	declarations: [ReviewCardComponent],
	exports: [ReviewCardComponent],
	imports: [CommonModule, MatCardModule, ReviewRatingModule],
})
export class ReviewCardModule {}
