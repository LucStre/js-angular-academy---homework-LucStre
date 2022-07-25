import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ShowDetailComponent } from './show-detail.component';
import { MatCardModule } from '@angular/material/card';
import { ShowRatingModule } from 'src/app/components/show-rating/show-rating.module';
import { ReviewCardModule } from 'src/app/components/review-card/review-card.module';
import { ReviewFormModule } from 'src/app/components/review-form/review-form.module';

@NgModule({
	declarations: [ShowDetailComponent],
	imports: [CommonModule, MatCardModule, ShowRatingModule, ReviewCardModule, ReviewFormModule],
})
export class ShowDetailModule {}
