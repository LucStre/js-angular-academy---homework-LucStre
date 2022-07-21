import { Component } from '@angular/core';
import { AbstractControl, FormControl, FormGroup, ValidationErrors, ValidatorFn, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { IAuthData } from 'src/app/interfaces/auth-data.interface';
import { AuthService } from 'src/app/services/auth.service';

@Component({
	selector: 'app-register',
	templateUrl: './register.component.html',
	styleUrls: ['./register.component.scss'],
})
export class RegisterComponent {
	public form = new FormGroup({
		email: new FormControl('', [Validators.required, Validators.email, this.emailNameValidator()]),
		password: new FormControl('', [Validators.required, Validators.minLength(8)]),
		password_confirmation: new FormControl('', [Validators.required, Validators.minLength(8)]),
	});

	constructor(private readonly authService: AuthService, private readonly router: Router) {}

	public onRegisterClick(event: Event): void {
		event.preventDefault();
		this.authService
			.register({
				email: this.form.controls.email.value,
				password: this.form.controls.password.value,
				password_confirmation: this.form.controls.password_confirmation.value,
			} as IAuthData)
			.subscribe((resp) => {
				this.router.navigate(['']);
				console.log(resp);
			});
	}

	private emailNameValidator(): ValidatorFn {
		return (control: AbstractControl): ValidationErrors | null => {
			const required = /.com$|.hr$/.test(control.value);
			return required ? null : { requiredName: { value: control.value } };
		};
	}
}
