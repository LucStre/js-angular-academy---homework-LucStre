import { Component, OnInit } from '@angular/core';
import { IShowModel } from 'src/app/interfaces/show-model.interface';
import { ShowsService } from 'src/app/services/shows/shows.service';

@Component({
	selector: 'app-all-shows',
	templateUrl: './all-shows.component.html',
	styleUrls: ['./all-shows.component.scss'],
})
export class AllShowsComponent {
	public allShows: Array<IShowModel> = this.showsService.all();

	constructor(private readonly showsService: ShowsService) {}
}
