import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RetryComponent } from './retry.component';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';

@NgModule({
	declarations: [RetryComponent],
	imports: [CommonModule, MatCardModule, MatButtonModule],
	exports: [RetryComponent],
})
export class RetryModule {}
