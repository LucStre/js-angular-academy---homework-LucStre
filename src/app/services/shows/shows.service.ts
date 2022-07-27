import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, map, delay, tap } from 'rxjs';
import { IShowData } from 'src/app/interfaces/show-data.interface';
import { IShows } from 'src/app/interfaces/shows-data.interface';
import { ITokenData } from 'src/app/interfaces/token-data.interface';
import { IShow } from '../show/show.interface';
import { Show } from '../show/show.model';

@Injectable({
	providedIn: 'root',
})
export class ShowsService {
	private readonly shows$ = new BehaviorSubject<Array<Show>>([]);
	private options = {};

	constructor(private readonly http: HttpClient) {
		console.log('Show service created');
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

	public all(): Observable<Array<Show>> {
		return this.http.get<IShows>('https://tv-shows.infinum.academy/shows', this.options).pipe(
			map((shows) =>
				shows.shows.map((show: IShow) => {
					return new Show(show);
				}),
			),
			tap((shows) => {
				this.shows$.next(shows);
			}),
		);
	}

	public topRated(): Observable<Array<Show>> | unknown {
		return this.http.get<IShows>('https://tv-shows.infinum.academy/shows/top_rated', this.options).pipe(
			map((shows) =>
				shows.shows.map((show: IShow) => {
					return new Show(show);
				}),
			),
			tap((shows) => {
				this.shows$.next(shows);
			}),
		);
	}

	public get(id: string): Observable<Show> | unknown {
		return this.http.get<IShowData>(`https://tv-shows.infinum.academy/shows/${id}`, this.options).pipe(
			map((show: IShowData) => {
				return new Show(show.show);
			}),
			tap((show) => {
				this.shows$.next([show]);
			}),
		);
	}
}
