import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FileInputComponent } from './file-input.component';

@NgModule({
	declarations: [FileInputComponent],
	exports: [FileInputComponent],
	imports: [CommonModule],
})
export class FileInputModule {}
