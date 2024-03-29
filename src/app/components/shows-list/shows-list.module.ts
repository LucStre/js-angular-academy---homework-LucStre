import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ShowsListComponent } from './shows-list.component';
import { MatCardModule } from '@angular/material/card';
import { ShowCardModule } from '../show-card/show-card.module';
import { RouterModule } from '@angular/router';

@NgModule({
	declarations: [ShowsListComponent],
	exports: [ShowsListComponent],
	imports: [CommonModule, MatCardModule, ShowCardModule, RouterModule],
})
export class ShowsListModule {}
