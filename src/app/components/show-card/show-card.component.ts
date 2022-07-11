import { Component, Input } from '@angular/core';
import { Show } from 'src/app/services/show/show.model';

@Component({
	selector: 'app-show-card',
	templateUrl: './show-card.component.html',
	styleUrls: ['./show-card.component.scss'],
})
export class ShowCardComponent {
	@Input() public title: string = '';
	@Input() public averageRating: number | null = null;
	@Input() public imageUrl: string | null = null;
}
