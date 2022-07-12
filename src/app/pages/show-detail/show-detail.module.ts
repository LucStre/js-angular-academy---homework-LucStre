import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ShowDetailComponent } from './show-detail.component';
import { MatCardModule } from '@angular/material/card';

@NgModule({
	declarations: [ShowDetailComponent],
	imports: [CommonModule, MatCardModule],
})
export class ShowDetailModule {}
