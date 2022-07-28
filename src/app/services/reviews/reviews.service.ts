import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';
import { IReviewData } from 'src/app/interfaces/review-data.interface';
import { IReview } from 'src/app/interfaces/review.interface';
import { IReviews } from 'src/app/interfaces/reviews-data.interface';
import { AuthService } from '../auth/auth.service';

@Injectable({
	providedIn: 'root',
})
export class ReviewsService {
	constructor(private readonly http: HttpClient, private readonly authService: AuthService) {}

	public create(data: IReview): Observable<IReview> {
		return this.http
			.post<IReviewData>('https://tv-shows.infinum.academy/reviews', data, this.authService.getOptions())
			.pipe(map((review) => review.review));
	}

	public allShow(showid: string): Observable<Array<IReview>> {
		return this.http
			.get<IReviews>(`https://tv-shows.infinum.academy/shows/${showid}/reviews`, this.authService.getOptions())
			.pipe(map((reviews) => reviews.reviews));
	}

	public delete(id: string): Observable<void> {
		return this.http.delete<void>(`https://tv-shows.infinum.academy/reviews/${id}`, this.authService.getOptions());
	}
}
