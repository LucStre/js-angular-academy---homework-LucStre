import { Component } from '@angular/core';
import { IShowModel } from 'src/app/interfaces/show-model.interface';
import { ShowsService } from 'src/app/services/shows/shows.service';

@Component({
	selector: 'app-top-rated',
	templateUrl: './top-rated.component.html',
	styleUrls: ['./top-rated.component.scss'],
})
export class TopRatedComponent {
	public topRatedShows: Array<IShowModel> = this.showsService.topRated() as Array<IShowModel>;

	constructor(private readonly showsService: ShowsService) {}
}
