import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Show } from 'src/app/services/show/show.model';
import { ShowsService } from 'src/app/services/shows/shows.service';

@Component({
	selector: 'app-show-detail',
	templateUrl: './show-detail.component.html',
	styleUrls: ['./show-detail.component.scss'],
})
export class ShowDetailComponent {
	public currentShow: Show = this.showsService.get(parseInt(this.route.snapshot.params['id'])) as Show;

	constructor(private readonly route: ActivatedRoute, private readonly showsService: ShowsService) {}
}
