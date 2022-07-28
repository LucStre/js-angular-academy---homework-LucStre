import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, map, Observable, tap } from 'rxjs';
import { IReviewData } from 'src/app/interfaces/review-data.interface';
import { IReview } from 'src/app/interfaces/review.interface';
import { IReviews } from 'src/app/interfaces/reviews-data.interface';
import { AuthService } from '../auth/auth.service';

@Injectable({
	providedIn: 'root',
})
export class ReviewsService {
	private readonly _reviews$ = new BehaviorSubject<Array<IReview>>([]);
	public readonly reviews$ = this._reviews$.asObservable();

	constructor(private readonly http: HttpClient, private readonly authService: AuthService) {}

	public create(data: IReview): void {
		let newReview: IReview;
		this.http
			.post<IReviewData>('https://tv-shows.infinum.academy/reviews', data, this.authService.getOptions())
			.pipe(map((review) => review.review))
			.subscribe((review) => {
				if (review) {
					newReview = review;
				}
			});
		this.reviews$.pipe(
			tap((reviews) => {
				reviews.push(newReview);
				this._reviews$.next(reviews);
			}),
		);
	}

	public allShow(showid: string): Observable<Array<IReview>> {
		return this.http
			.get<IReviews>(`https://tv-shows.infinum.academy/shows/${showid}/reviews`, this.authService.getOptions())
			.pipe(
				map((reviews) => reviews.reviews),
				tap((reviews) => {
					this._reviews$.next(reviews);
				}),
			);
	}
}
