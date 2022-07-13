import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TopRatedComponent } from './top-rated.component';
import { RouterModule } from '@angular/router';

@NgModule({
	declarations: [TopRatedComponent],
	imports: [CommonModule, RouterModule],
})
export class TopRatedModule {}
