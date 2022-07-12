import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { IShowModel } from 'src/app/interfaces/show-model.interface';
import { ShowsService } from 'src/app/services/shows/shows.service';

@Component({
	selector: 'app-show-detail',
	templateUrl: './show-detail.component.html',
	styleUrls: ['./show-detail.component.scss'],
})
export class ShowDetailComponent {
	public currentShow: IShowModel = this.showsService.get(parseInt(this.route.snapshot.params['id'])) as IShowModel;

	constructor(private readonly route: ActivatedRoute, private readonly showsService: ShowsService) {
		console.log(this.currentShow);
	}
}
