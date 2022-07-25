import { Component, Input, OnInit } from '@angular/core';
import { IReview } from 'src/app/interfaces/review-interface';
import { Show } from 'src/app/services/show/show.model';

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
