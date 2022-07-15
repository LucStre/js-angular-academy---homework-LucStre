import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { IShow } from 'src/app/services/show/show.interface';
import { Show } from 'src/app/services/show/show.model';

@Component({
	selector: 'app-show-form',
	templateUrl: './show-form.component.html',
	styleUrls: ['./show-form.component.scss'],
})
export class ShowFormComponent {
	@Output() addShow = new EventEmitter<Show>();

	public onAddButtonClick(showTitle: string, showDescription: string): void {
		const newShow: Show = new Show({
			title: showTitle,
			description: showDescription,
			average_rating: null,
			image_url: null,
			id: 6,
		});
		this.addShow.emit(newShow);
	}
}
