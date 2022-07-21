import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { RouterModule } from '@angular/router';
import { RegisterComponent } from './register.component';

@NgModule({
	declarations: [RegisterComponent],
	exports: [RegisterComponent],
	imports: [
		CommonModule,
		MatCardModule,
		MatInputModule,
		MatButtonModule,
		MatIconModule,
		RouterModule,
		ReactiveFormsModule,
	],
})
export class RegisterModule {}
