import { Component, Input, OnInit } from '@angular/core';

@Component({
	selector: 'app-show-rating',
	templateUrl: './show-rating.component.html',
	styleUrls: ['./show-rating.component.scss'],
})
export class ShowRatingComponent {
	@Input() public rating: number | null = null;

	public ratings(showRating: number | null) {
		if (showRating === null) return;
		return Array(Math.round(showRating)).map((x, i) => i);
	}
}
