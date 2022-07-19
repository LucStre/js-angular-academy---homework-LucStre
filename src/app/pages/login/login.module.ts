import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatInputModule } from '@angular/material/input';
import { RouterModule } from '@angular/router';
import { LoginComponent } from './login.component';
import { MatIconModule } from '@angular/material/icon';
import { ReactiveFormsModule } from '@angular/forms';

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
	],
})
export class LoginModule {}
