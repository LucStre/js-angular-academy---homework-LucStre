import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { IReview } from 'src/app/interfaces/review-interface';
import { ReviewsService } from 'src/app/services/reviews/reviews.service';
import { Show } from 'src/app/services/show/show.model';
import { ShowsService } from 'src/app/services/shows/shows.service';

@Component({
	selector: 'app-show-detail',
	templateUrl: './show-detail.component.html',
	styleUrls: ['./show-detail.component.scss'],
})
export class ShowDetailComponent {
	public show$: Observable<Show> = this.showsService.get(this.route.snapshot.params['id']) as Observable<Show>;
	public reviews$: Observable<Array<IReview>> = this.reviewService.allShow(this.route.snapshot.params['id']);

	constructor(
		private readonly route: ActivatedRoute,
		private readonly showsService: ShowsService,
		private readonly reviewService: ReviewsService,
	) {}
}
