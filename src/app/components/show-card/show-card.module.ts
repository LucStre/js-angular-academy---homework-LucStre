import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ShowCardComponent } from './show-card.component';
import { MatCardModule } from '@angular/material/card';
import { ShowRatingModule } from '../show-rating/show-rating.module';

@NgModule({
	declarations: [ShowCardComponent],
	exports: [ShowCardComponent],
	imports: [CommonModule, MatCardModule, ShowRatingModule],
})
export class ShowCardModule {}
