import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { IReview } from 'src/app/interfaces/review.interface';
import { AuthService } from 'src/app/services/auth/auth.service';
import { ReviewsService } from 'src/app/services/reviews/reviews.service';

@Component({
	selector: 'app-review-form',
	templateUrl: './review-form.component.html',
	styleUrls: ['./review-form.component.scss'],
})
export class ReviewFormComponent {
	public form = new FormGroup({
		comment: new FormControl('', Validators.required),
		rating: new FormControl(0, [Validators.required, Validators.min(1), Validators.max(5)]),
	});
	public readonly user$ = this.authService.user$;

	private displayValue: number = 0;

	constructor(
		private readonly reviewsService: ReviewsService,
		private readonly route: ActivatedRoute,
		private readonly authService: AuthService,
	) {}

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
		this.reviewsService.post({
			id: 'id',
			rating: this.form.controls.rating.value,
			comment: this.form.controls.comment.value,
			show_id: this.route.snapshot.params['id'],
			user: {
				id: '',
				email: '',
				image_url: '',
			},
		} as IReview);
	}
}
