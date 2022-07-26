import { Component, Input } from '@angular/core';
import { IReview } from 'src/app/interfaces/review-interface';

@Component({
	selector: 'app-review-card',
	templateUrl: './review-card.component.html',
	styleUrls: ['./review-card.component.scss'],
})
export class ReviewCardComponent {
	@Input() public reviews: IReview[] = [];
	public image_url: string = '';
	constructor() {
		this.image_url = 'https://material.angular.io/assets/img/examples/shiba1.jpg';
	}
}
