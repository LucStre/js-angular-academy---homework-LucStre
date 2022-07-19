import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { Show } from 'src/app/services/show/show.model';
import { ShowsService } from 'src/app/services/shows/shows.service';

@Component({
	selector: 'app-top-rated',
	templateUrl: './top-rated.component.html',
	styleUrls: ['./top-rated.component.scss'],
})
export class TopRatedComponent {
	public topRatedShows$: Observable<Array<Show>> = this.showsService.topRated() as Observable<Array<Show>>;

	constructor(private readonly showsService: ShowsService) {}
}
