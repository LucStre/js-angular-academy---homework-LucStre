import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { IRegisterData } from 'src/app/interfaces/register-data.interface';
import { AuthService } from 'src/app/services/auth.service';
import { matchValidator } from 'src/app/validators/match-validator';
import { nameValidator } from 'src/app/validators/name-validator';

@Component({
	selector: 'app-register',
	templateUrl: './register.component.html',
	styleUrls: ['./register.component.scss'],
})
export class RegisterComponent {
	public form = new FormGroup(
		{
			email: new FormControl('', [Validators.required, Validators.email, nameValidator(/.com$|.hr$/)]),
			password: new FormControl('', [Validators.required, Validators.minLength(8)]),
			password_confirmation: new FormControl('', [Validators.required, Validators.minLength(8)]),
		},
		[matchValidator('password', 'password_confirmation')],
	);

	constructor(private readonly authService: AuthService, private readonly router: Router) {}

	public onRegisterClick(event: Event): void {
		event.preventDefault();
		this.authService
			.register({
				email: this.form.controls.email.value,
				password: this.form.controls.password.value,
				password_confirmation: this.form.controls.password_confirmation.value,
			} as IRegisterData)
			.subscribe((resp) => {
				this.router.navigate(['']);
				console.log(resp);
			});
	}

	public get passwordMismatchError() {
		return this.form.getError('mismatch') && this.form.get('password_confirmation')?.touched;
	}
}
