import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { IReview } from 'src/app/interfaces/review-interface';
import { IUserData } from 'src/app/interfaces/user-data.interface';
import { ReviewService } from 'src/app/services/review/review.service';

@Component({
	selector: 'app-review-form',
	templateUrl: './review-form.component.html',
	styleUrls: ['./review-form.component.scss'],
})
export class ReviewFormComponent {
	public form = new FormGroup({
		comment: new FormControl('', Validators.required),
		rating: new FormControl(0, Validators.required),
	});
	public user: IUserData = {
		id: '',
		email: '',
		image_url: '',
	};
	public stars: Array<Boolean> = new Array(5).fill(false);

	constructor(private readonly reviewService: ReviewService, private readonly route: ActivatedRoute) {
		const loggedUser = sessionStorage.getItem('loggedUser');
		if (loggedUser) {
			this.user = JSON.parse(loggedUser);
		}
	}

	public onStarClick(starNumber: number) {
		if (this.stars[starNumber]) {
			for (let i = starNumber; i < this.stars.length; i++) {
				this.stars[i] = false;
			}
		} else {
			for (let i = 0; i < starNumber; i++) {
				this.stars[i] = true;
			}
		}
		this.form.controls['rating'].setValue(starNumber);
	}

	public onPostClick(event: Event): void {
		event.preventDefault();
		this.reviewService.post({
			id: 'id',
			rating: this.form.controls.rating.value,
			comment: this.form.controls.comment.value,
			show_id: this.route.snapshot.params['id'],
			user: {
				id: this.user.id,
				email: this.user.email,
				image_url: this.user.image_url,
			},
		} as IReview);
	}
}
