import { Component, EventEmitter, OnDestroy, Output } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';
import { IReview } from 'src/app/interfaces/review.interface';
import { ReviewsService } from 'src/app/services/reviews/reviews.service';

@Component({
	selector: 'app-review-form',
	templateUrl: './review-form.component.html',
	styleUrls: ['./review-form.component.scss'],
})
export class ReviewFormComponent implements OnDestroy {
	@Output() createReview = new EventEmitter();
	public form = new FormGroup({
		comment: new FormControl('', Validators.required),
		rating: new FormControl(0, [Validators.required, Validators.min(1), Validators.max(5)]),
	});
	private displayValue: number = 0;
	private subscription?: Subscription;

	constructor(private readonly reviewsService: ReviewsService, private readonly route: ActivatedRoute) {}
	ngOnDestroy(): void {
		this.subscription?.unsubscribe();
	}

	public onStarClick(starNumber: number): void {
		this.displayValue = starNumber;
		this.form.controls['rating'].setValue(starNumber);
	}

	public onMouseEnter(starNumber: number): void {
		this.displayValue = starNumber;
	}

	public onMouseLeave(): void {
		this.displayValue = this.form.controls['rating'].value || 0;
	}

	public isStarFilled(index: number): boolean {
		return this.displayValue >= index;
	}

	public onPostClick(event: Event): void {
		event.preventDefault();
		this.subscription = this.reviewsService
			.create({
				rating: this.form.controls.rating.value,
				comment: this.form.controls.comment.value,
				show_id: this.route.snapshot.params['id'],
			} as IReview)
			.subscribe(() => {
				this.createReview.emit();
				this.form.controls.comment.setValue('');
				this.form.controls.rating.setValue(0);
				this.displayValue = 0;
			});
	}
}
