import { Component, Input, Output } from '@angular/core';
import { Show } from 'src/app/services/show/show.model';

@Component({
	selector: 'app-shows-list',
	templateUrl: './shows-list.component.html',
	styleUrls: ['./shows-list.component.scss'],
})
export class ShowsListComponent {
	@Input() public shows: Array<Show> = [];
	// eslint-disable-next-line @angular-eslint/no-output-native
	@Output() public show: Show = {
		title: '',
		description: '',
		average_rating: null,
		image_url: null,
	};
}
