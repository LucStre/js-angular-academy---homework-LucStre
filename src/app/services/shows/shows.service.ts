import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, map, delay } from 'rxjs';
import { IShow } from '../show/show.interface';
import { Show } from '../show/show.model';

@Injectable({
	providedIn: 'root',
})
export class ShowsService {
	private readonly shows$ = new BehaviorSubject<Array<Show>>([]);

	constructor() {
		console.log('Show service created');
		const loadedShows: Array<Show> = [
			{
				title: 'The Crown',
				description:
					'Follows the political rivalries and romance of Queen Elizabeth IIs reign and the events that shaped the second half of the twentieth century.',
				average_rating: null,
				image_url: 'https://www.znet.hr/wp-content/uploads/2021/04/crown.jpg',
				id: 1,
				reviews: [
					{
						id: 1,
						rating: 5,
						comment: 'Great show!',
					},
				],
			},
			{
				title: 'Merlin',
				description:
					'These are the brand new adventures of Merlin, the legendary sorcerer as a young man, when he was just a servant to young Prince Arthur on the royal court of Camelot, who has soon become his best friend, and turned Arthur into a great king and a legend.',
				average_rating: null,
				image_url: 'https://static.next-episode.net/tv-shows-images/huge/merlin.jpg',
				id: 2,
				reviews: [
					{
						id: 2,
						rating: 5,
						comment: 'Love this show!',
					},
					{
						id: 3,
						rating: 3,
						comment: 'I really dont like the ending...',
					},
				],
			},
			{
				title: 'Friends',
				description:
					'Follows the personal and professional lives of six twenty to thirty-something-year-old friends living in Manhattan.',
				average_rating: null,
				image_url:
					'https://cdn.vox-cdn.com/thumbor/sK3gMTENF_LR1DhAUl9e3V_5jC4=/0x0:2592x2017/1200x800/filters:focal(1089x801:1503x1215)/cdn.vox-cdn.com/uploads/chorus_image/image/65282724/friendscast.0.0.1429818191.0.jpg',
				id: 3,
				reviews: [
					{
						id: 4,
						rating: 5,
						comment: 'Love it',
					},
					{
						id: 5,
						rating: 5,
						comment: 'Amazing show and cast',
					},
				],
			},
			{
				title: 'The Office',
				description:
					'A mockumentary on a group of typical office workers, where the workday consists of ego clashes, inappropriate behavior, and tedium.',
				average_rating: null,
				image_url:
					'https://entertainment.time.com/wp-content/uploads/sites/3/2013/05/nup_155312_23351.jpg?w=600',
				id: 4,
				reviews: [],
			},
			{
				title: 'Stranger Things',
				description:
					'When a young boy disappears, his mother, a police chief and his friends must confront terrifying supernatural forces in order to get him back.',
				average_rating: null,
				image_url: 'https://mezha.media/wp-content/uploads/2022/04/dyvni-dyva-600x400.jpg',
				id: 5,
				reviews: [
					{
						id: 6,
						rating: 2,
						comment: 'I just dont like it',
					},
					{
						id: 7,
						rating: 4,
						comment: 'Good',
					},
					{
						id: 8,
						rating: 3,
						comment: 'Not too bad but not amazing',
					},
					{
						id: 9,
						rating: 4,
						comment: 'Like it',
					},
				],
			},
		].map((show: IShow) => {
			return new Show(show);
		});
		loadedShows.forEach((show) => {
			const sum = show.reviews.reduce((current, review) => {
				return current + review.rating;
			}, 0);
			if (sum) {
				show.averageRating = Number((sum / show.reviews.length).toFixed(0));
			}
		});
		this.shows$.next(loadedShows);
	}

	public all(): Observable<Array<Show>> {
		return this.shows$.asObservable().pipe(delay(1000));
	}

	public topRated(): Observable<Array<Show>> | unknown {
		return this.shows$.pipe(
			map((shows: Array<Show>) => {
				return shows.filter((topRatedShow) => {
					return topRatedShow.averageRating ? topRatedShow.averageRating > 4 : false;
				});
			}),
			delay(1000),
		);
	}

	public get(id: number): Observable<Show> | unknown {
		return this.shows$.pipe(
			map((shows: Array<Show>) => {
				return shows.find((show) => show.id === id);
			}),
			delay(1000),
		);
	}
}
