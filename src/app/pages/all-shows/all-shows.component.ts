import { Component, OnInit } from '@angular/core';
import { Show } from 'src/app/services/show/show.model';
import { ShowsService } from 'src/app/services/shows/shows.service';

@Component({
	selector: 'app-all-shows',
	templateUrl: './all-shows.component.html',
	styleUrls: ['./all-shows.component.scss'],
})
export class AllShowsComponent {
	public allShows: Array<Show> = this.showsService.all();

	constructor(private readonly showsService: ShowsService) {}
}
