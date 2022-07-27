import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, map, Observable, tap } from 'rxjs';
import { IReview } from 'src/app/interfaces/review-interface';
import { IReviews } from 'src/app/interfaces/reviews-data.interface';
import { ITokenData } from 'src/app/interfaces/token-data.interface';

@Injectable({
	providedIn: 'root',
})
export class ReviewsService {
	private readonly reviews$ = new BehaviorSubject<Array<IReview>>([]);
	private options = {};

	constructor(private readonly http: HttpClient) {
		const data = localStorage.getItem('token');
		let token = null;
		if (data) {
			token = JSON.parse(data);
		}
		this.options = this.getOptions(token);
	}

	private getOptions(token: ITokenData) {
		return token?.client && token?.access_token && token?.uid
			? {
					headers: new HttpHeaders()
						.set('client', token?.client)
						.set('access-token', token?.access_token)
						.set('uid', token?.uid),
			  }
			: {};
	}

	public post(data: IReview): void {
		console.log(data);
	}

	public allShow(showid: string): Observable<Array<IReview>> {
		return this.http.get<IReviews>(`https://tv-shows.infinum.academy/shows/${showid}/reviews`, this.options).pipe(
			map((reviews) => reviews.reviews),
			tap((reviews) => {
				this.reviews$.next(reviews);
			}),
		);
	}
}
