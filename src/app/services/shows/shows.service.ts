import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, map, Observable, tap } from 'rxjs';
import { IShowData } from 'src/app/interfaces/show-data.interface';
import { IShows } from 'src/app/interfaces/shows-data.interface';
import { AuthService } from '../auth/auth.service';
import { IShow } from '../show/show.interface';
import { Show } from '../show/show.model';

@Injectable({
	providedIn: 'root',
})
export class ShowsService {
	private readonly shows$ = new BehaviorSubject<Array<Show>>([]);

	constructor(private readonly http: HttpClient, private readonly authService: AuthService) {
		console.log('Show service created');
	}

	public all(): Observable<Array<Show>> {
		return this.http.get<IShows>('https://tv-shows.infinum.academy/shows', this.authService.getOptions()).pipe(
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
		return this.http
			.get<IShows>('https://tv-shows.infinum.academy/shows/top_rated', this.authService.getOptions())
			.pipe(
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
		return this.http
			.get<IShowData>(`https://tv-shows.infinum.academy/shows/${id}`, this.authService.getOptions())
			.pipe(
				map((show: IShowData) => {
					return new Show(show.show);
				}),
				tap((show) => {
					this.shows$.next([show]);
				}),
			);
	}
}
