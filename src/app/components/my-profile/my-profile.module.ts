import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MyProfileComponent } from './my-profile.component';

@NgModule({
	declarations: [MyProfileComponent],
	exports: [MyProfileComponent],
	imports: [CommonModule],
})
export class MyProfileModule {}
