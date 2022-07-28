import { Component, EventEmitter, Input, OnDestroy, Output } from '@angular/core';
import { Subscription } from 'rxjs';
import { IReview } from 'src/app/interfaces/review.interface';
import { AuthService } from 'src/app/services/auth/auth.service';
import { ReviewsService } from 'src/app/services/reviews/reviews.service';

@Component({
	selector: 'app-review-card',
	templateUrl: './review-card.component.html',
	styleUrls: ['./review-card.component.scss'],
})
export class ReviewCardComponent implements OnDestroy {
	@Input() reviews: Array<IReview> = [];
	@Output() deleteReview = new EventEmitter();
	public currentEmail: string | null = null;
	private subscription?: Subscription;

	constructor(private readonly authService: AuthService, private readonly reviewsService: ReviewsService) {
		this.subscription = this.authService.token$.subscribe((token) => {
			if (token) {
				this.currentEmail = token?.uid;
			}
		});
	}

	public onDeleteClick(idReview: string | undefined): void {
		if (idReview) {
			this.reviewsService.delete(idReview).subscribe(() => {
				this.deleteReview.emit();
			});
		}
	}

	public ngOnDestroy(): void {
		this.subscription?.unsubscribe();
	}
}
