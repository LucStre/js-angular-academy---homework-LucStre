import { Component } from '@angular/core';
import { AuthService } from 'src/app/services/auth/auth.service';

@Component({
	selector: 'app-my-profile',
	templateUrl: './my-profile.component.html',
	styleUrls: ['./my-profile.component.scss'],
})
export class MyProfileComponent {
	public readonly user$ = this.authService.user$;
	public file?: File;

	constructor(private readonly authService: AuthService) {}

	public onFileChange(file: File | null): void {
		this.file = file || undefined;
	}

	public onUploadButtonClick(): void {
		if (this.file) {
			this.authService.upload(this.file).subscribe();
		}
	}
}
