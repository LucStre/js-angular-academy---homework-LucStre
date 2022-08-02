import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MyProfileComponent } from './my-profile.component';
import { FileInputModule } from '../file-input/file-input.module';
import { MatButtonModule } from '@angular/material/button';

@NgModule({
	declarations: [MyProfileComponent],
	exports: [MyProfileComponent],
	imports: [CommonModule, FileInputModule, MatButtonModule],
})
export class MyProfileModule {}
