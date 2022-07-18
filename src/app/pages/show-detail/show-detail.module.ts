import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { ShowRatingModule } from 'src/app/components/show-rating/show-rating.module';
import { ShowSpinnerModule } from 'src/app/components/show-spinner/show-spinner.module';
import { ShowDetailComponent } from './show-detail.component';

@NgModule({
	declarations: [ShowDetailComponent],
	imports: [CommonModule, MatCardModule, ShowRatingModule, ShowSpinnerModule],
})
export class ShowDetailModule {}
