import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { catchError } from 'rxjs';
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
		private readonly snackBar: MatSnackBar,
	) {}

	public onLoginClick(event: Event): void {
		event.preventDefault();
		this.authService
			.login({
				email: this.form.controls.email.value,
				password: this.form.controls.password.value,
			} as IAuthData)
			.pipe(
				catchError(async () => {
					this.snackBar.open('Invalid login credentials. Try again!', 'Close', {
						duration: 5 * 1000,
					});
				}),
			)
			.subscribe((resp) => {
				console.log(resp);
				if (resp) {
					this.router.navigate(['']);
				}
			});
	}
}
