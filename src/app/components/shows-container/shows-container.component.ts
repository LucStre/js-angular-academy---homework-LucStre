import { Component } from '@angular/core';
import { Show } from 'src/app/services/show/show.model';

@Component({
	selector: 'app-shows-container',
	templateUrl: './shows-container.component.html',
	styleUrls: ['./shows-container.component.scss'],
})
export class ShowsContainerComponent {
	public shows: Array<Show> = [
		{
			title: 'The Crown',
			description:
				'Follows the political rivalries and romance of Queen Elizabeth IIs reign and the events that shaped the second half of the twentieth century.',
			average_rating: 5,
			image_url: 'https://www.znet.hr/wp-content/uploads/2021/04/crown.jpg',
		},
		{
			title: 'Merlin',
			description:
				'These are the brand new adventures of Merlin, the legendary sorcerer as a young man, when he was just a servant to young Prince Arthur on the royal court of Camelot, who has soon become his best friend, and turned Arthur into a great king and a legend.',
			average_rating: 4,
			image_url: 'https://static.next-episode.net/tv-shows-images/huge/merlin.jpg',
		},
		{
			title: 'Friends',
			description:
				'Follows the personal and professional lives of six twenty to thirty-something-year-old friends living in Manhattan.',
			average_rating: 5,
			image_url:
				'https://cdn.vox-cdn.com/thumbor/sK3gMTENF_LR1DhAUl9e3V_5jC4=/0x0:2592x2017/1200x800/filters:focal(1089x801:1503x1215)/cdn.vox-cdn.com/uploads/chorus_image/image/65282724/friendscast.0.0.1429818191.0.jpg',
		},
		{
			title: 'The Office',
			description:
				'A mockumentary on a group of typical office workers, where the workday consists of ego clashes, inappropriate behavior, and tedium.',
			average_rating: 4,
			image_url: 'https://entertainment.time.com/wp-content/uploads/sites/3/2013/05/nup_155312_23351.jpg?w=600',
		},
		{
			title: 'Stranger Things',
			description:
				'When a young boy disappears, his mother, a police chief and his friends must confront terrifying supernatural forces in order to get him back.',
			average_rating: 3,
			image_url: 'https://mezha.media/wp-content/uploads/2022/04/dyvni-dyva-600x400.jpg',
		},
	];

	public onShowAdd(newShow: Show) {
		this.shows.push(newShow);
	}
}
