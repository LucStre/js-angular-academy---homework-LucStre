import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
	selector: 'app-register',
	templateUrl: './register.component.html',
	styleUrls: ['./register.component.scss'],
})
export class RegisterComponent {
	public form = new FormGroup({
		email: new FormControl('', [Validators.required, Validators.email]),
		password: new FormControl('', [Validators.required, Validators.minLength(8)]),
		password_confirmation: new FormControl('', [Validators.required, Validators.minLength(8)]),
	});

	constructor() {}

	public onRegisterClick(): void {
		console.log(this.form.controls.email.value);
	}
}
