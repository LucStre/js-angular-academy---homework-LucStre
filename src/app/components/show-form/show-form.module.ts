import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ShowFormComponent } from './show-form.component';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { MatCardModule } from '@angular/material/card';

@NgModule({
	declarations: [ShowFormComponent],
	exports: [ShowFormComponent],
	imports: [CommonModule, MatButtonModule, MatInputModule, MatCardModule],
})
export class ShowFormModule {}
