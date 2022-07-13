import { Component } from '@angular/core';
import { Show } from 'src/app/services/show/show.model';
import { ShowsService } from 'src/app/services/shows/shows.service';

@Component({
	selector: 'app-top-rated',
	templateUrl: './top-rated.component.html',
	styleUrls: ['./top-rated.component.scss'],
})
export class TopRatedComponent {
	public topRatedShows: Array<Show> = this.showsService.topRated() as Array<Show>;

	constructor(private readonly showsService: ShowsService) {}
}
