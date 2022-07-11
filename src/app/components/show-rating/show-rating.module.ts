import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ShowRatingComponent } from './show-rating.component';
import { MatIconModule } from '@angular/material/icon';

@NgModule({
	declarations: [ShowRatingComponent],
	exports: [ShowRatingComponent],
	imports: [CommonModule, MatIconModule],
})
export class ShowRatingModule {}
