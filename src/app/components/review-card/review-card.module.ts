import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReviewCardComponent } from './review-card.component';
import { MatCardModule } from '@angular/material/card';
import { ShowRatingModule } from '../show-rating/show-rating.module';

@NgModule({
	declarations: [ReviewCardComponent],
	exports: [ReviewCardComponent],
	imports: [CommonModule, MatCardModule, ShowRatingModule],
})
export class ReviewCardModule {}
