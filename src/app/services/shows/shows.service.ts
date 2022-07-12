import { Injectable } from '@angular/core';
import { IShowModel } from 'src/app/interfaces/show-model.interface';

@Injectable({
	providedIn: 'root',
})
export class ShowsService {
	private shows: Array<IShowModel> = [
		{
			show: {
				title: 'The Crown',
				description:
					'Follows the political rivalries and romance of Queen Elizabeth IIs reign and the events that shaped the second half of the twentieth century.',
				averageRating: 5,
				imageUrl: 'https://www.znet.hr/wp-content/uploads/2021/04/crown.jpg',
			},
			uuid: 1,
		},
		{
			show: {
				title: 'Merlin',
				description:
					'These are the brand new adventures of Merlin, the legendary sorcerer as a young man, when he was just a servant to young Prince Arthur on the royal court of Camelot, who has soon become his best friend, and turned Arthur into a great king and a legend.',
				averageRating: 4,
				imageUrl: 'https://static.next-episode.net/tv-shows-images/huge/merlin.jpg',
			},
			uuid: 2,
		},
		{
			show: {
				title: 'Friends',
				description:
					'Follows the personal and professional lives of six twenty to thirty-something-year-old friends living in Manhattan.',
				averageRating: 5,
				imageUrl:
					'https://cdn.vox-cdn.com/thumbor/sK3gMTENF_LR1DhAUl9e3V_5jC4=/0x0:2592x2017/1200x800/filters:focal(1089x801:1503x1215)/cdn.vox-cdn.com/uploads/chorus_image/image/65282724/friendscast.0.0.1429818191.0.jpg',
			},
			uuid: 3,
		},
		{
			show: {
				title: 'The Office',
				description:
					'A mockumentary on a group of typical office workers, where the workday consists of ego clashes, inappropriate behavior, and tedium.',
				averageRating: 4,
				imageUrl:
					'https://entertainment.time.com/wp-content/uploads/sites/3/2013/05/nup_155312_23351.jpg?w=600',
			},
			uuid: 4,
		},
		{
			show: {
				title: 'Stranger Things',
				description:
					'When a young boy disappears, his mother, a police chief and his friends must confront terrifying supernatural forces in order to get him back.',
				averageRating: 3,
				imageUrl: 'https://mezha.media/wp-content/uploads/2022/04/dyvni-dyva-600x400.jpg',
			},
			uuid: 5,
		},
	];

	public all() {
		return this.shows;
	}

	public topRated() {
		return this.shows
			.map((topRatedShow) => {
				if (topRatedShow.show.averageRating ? topRatedShow.show.averageRating > 4 : false) return topRatedShow;
				return;
			})
			.filter((value) => {
				return value !== undefined;
			});
	}

	public get(id: number) {
		return this.shows.find((show) => show.uuid === id);
	}
}
