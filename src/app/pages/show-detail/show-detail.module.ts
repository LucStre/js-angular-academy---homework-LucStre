import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ShowDetailComponent } from './show-detail.component';
import { MatCardModule } from '@angular/material/card';
import { ShowRatingModule } from 'src/app/components/show-rating/show-rating.module';

@NgModule({
	declarations: [ShowDetailComponent],
	imports: [CommonModule, MatCardModule, ShowRatingModule],
})
export class ShowDetailModule {}
