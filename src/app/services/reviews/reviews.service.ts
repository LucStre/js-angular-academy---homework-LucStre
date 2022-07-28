import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, map, Observable, tap } from 'rxjs';
import { IReview } from 'src/app/interfaces/review.interface';
import { IReviews } from 'src/app/interfaces/reviews-data.interface';
import { AuthService } from '../auth/auth.service';

@Injectable({
	providedIn: 'root',
})
export class ReviewsService {
	private readonly reviews$ = new BehaviorSubject<Array<IReview>>([]);

	constructor(private readonly http: HttpClient, private readonly authService: AuthService) {}

	public post(data: IReview): void {
		console.log(data);
	}

	public allShow(showid: string): Observable<Array<IReview>> {
		return this.http
			.get<IReviews>(`https://tv-shows.infinum.academy/shows/${showid}/reviews`, this.authService.getOptions())
			.pipe(
				map((reviews) => reviews.reviews),
				tap((reviews) => {
					this.reviews$.next(reviews);
				}),
			);
	}
}
