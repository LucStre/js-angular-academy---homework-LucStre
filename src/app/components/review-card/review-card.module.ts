import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { ReviewRatingModule } from '../review-rating/review-rating.module';
import { ReviewCardComponent } from './review-card.component';
import { MatButtonModule } from '@angular/material/button';

@NgModule({
	declarations: [ReviewCardComponent],
	exports: [ReviewCardComponent],
	imports: [CommonModule, MatCardModule, ReviewRatingModule, MatButtonModule],
})
export class ReviewCardModule {}
