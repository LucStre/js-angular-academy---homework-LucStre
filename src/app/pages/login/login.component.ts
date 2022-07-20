import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { IAuthData } from 'src/app/interfaces/auth-data.interface';
import { AuthService } from 'src/app/services/auth.service';

@Component({
	selector: 'app-login',
	templateUrl: './login.component.html',
	styleUrls: ['./login.component.scss'],
})
export class LoginComponent {
	public form = new FormGroup({
		email: new FormControl('', [Validators.required, Validators.email]),
		password: new FormControl('', [Validators.required, Validators.minLength(8)]),
	});

	constructor(
		private readonly authService: AuthService,
		private readonly router: Router,
		private _snackBar: MatSnackBar,
	) {}

	public onLoginClick(event: Event): void {
		event.preventDefault();
		this.authService
			.login({
				email: this.form.controls.email.value,
				password: this.form.controls.password.value,
			} as IAuthData)
			.subscribe((resp) => {
				this.router.navigate(['']);
				console.log(resp);
			});
	}

	openSnackBar() {
		this._snackBar.open('Invalid login. Try again!', undefined, {
			duration: 5 * 1000,
		});
	}
}
