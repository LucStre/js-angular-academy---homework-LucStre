import { Component, Input, OnDestroy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { EMPTY, Observable, Subscription, switchMap } from 'rxjs';
import { IReview } from 'src/app/interfaces/review.interface';
import { AuthService } from 'src/app/services/auth/auth.service';
import { ReviewsService } from 'src/app/services/reviews/reviews.service';

@Component({
	selector: 'app-review-card',
	templateUrl: './review-card.component.html',
	styleUrls: ['./review-card.component.scss'],
})
export class ReviewCardComponent implements OnDestroy {
	@Input() public reviews$: Observable<Array<IReview>> = EMPTY;
	public currentEmail: string | null = null;
	private subscription?: Subscription;

	constructor(
		private readonly authService: AuthService,
		private readonly reviewsService: ReviewsService,
		private readonly route: ActivatedRoute,
	) {
		this.subscription = this.authService.token$.subscribe((token) => {
			if (token) {
				this.currentEmail = token?.uid;
			}
		});
	}

	public onDeleteClick(idReview: string | undefined): void {
		if (idReview) {
			this.reviews$ = this.reviewsService.delete(idReview).pipe(
				switchMap(() => {
					return this.reviewsService.allShow(this.route.snapshot.params['id']);
				}),
			);
		}
	}

	public ngOnDestroy(): void {
		this.subscription?.unsubscribe();
	}
}
