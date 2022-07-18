import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { ShowSpinnerComponent } from './show-spinner.component';

@NgModule({
	declarations: [ShowSpinnerComponent],
	imports: [CommonModule, MatProgressSpinnerModule],
	exports: [ShowSpinnerComponent],
})
export class ShowSpinnerModule {}
