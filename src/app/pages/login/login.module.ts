import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { RouterModule } from '@angular/router';
import { LoginComponent } from './login.component';
import { MatSnackBarModule } from '@angular/material/snack-bar';

@NgModule({
	declarations: [LoginComponent],
	exports: [LoginComponent],
	imports: [
		CommonModule,
		MatCardModule,
		MatInputModule,
		MatButtonModule,
		MatIconModule,
		RouterModule,
		ReactiveFormsModule,
		MatSnackBarModule,
	],
})
export class LoginModule {}
