import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { ReviewFormComponent } from './review-form.component';

@NgModule({
	declarations: [ReviewFormComponent],
	exports: [ReviewFormComponent],
	imports: [CommonModule, MatCardModule, MatInputModule, ReactiveFormsModule, MatButtonModule, MatIconModule],
})
export class ReviewFormModule {}
