import { Injectable } from '@angular/core';
import { IReview } from 'src/app/interfaces/review-interface';

@Injectable({
	providedIn: 'root',
})
export class ReviewService {
	constructor() {}

	public post(data: IReview): void {
		console.log(data);
	}
}
