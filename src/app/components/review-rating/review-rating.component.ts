import { Component, Input, OnInit } from '@angular/core';

@Component({
	selector: 'app-review-rating',
	templateUrl: './review-rating.component.html',
	styleUrls: ['./review-rating.component.scss'],
})
export class ReviewRatingComponent {
	@Input() public rating: number = 0;
}
