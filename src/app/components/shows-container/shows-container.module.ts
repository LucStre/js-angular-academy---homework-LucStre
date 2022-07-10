import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ShowsContainerComponent } from './shows-container.component';
import { ShowsListModule } from '../shows-list/shows-list.module';

@NgModule({
	declarations: [ShowsContainerComponent],
	exports: [ShowsContainerComponent],
	imports: [CommonModule, ShowsListModule],
})
export class ShowsContainerModule {}
