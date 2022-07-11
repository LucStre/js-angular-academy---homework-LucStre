import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Show } from 'src/app/services/show/show.model';

@Component({
	selector: 'app-show-form',
	templateUrl: './show-form.component.html',
	styleUrls: ['./show-form.component.scss'],
})
export class ShowFormComponent {
	@Output() addShow = new EventEmitter<Show>();

	public onAddButtonClick(showTitle: string, showDescription: string) {
		const newShow: Show = {
			title: showTitle,
			description: showDescription,
			average_rating: null,
			image_url: null,
		};
		this.addShow.emit(newShow);
	}
}
