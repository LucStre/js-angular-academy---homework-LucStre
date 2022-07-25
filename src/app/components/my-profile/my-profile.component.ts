import { Component, OnInit } from '@angular/core';

@Component({
	selector: 'app-my-profile',
	templateUrl: './my-profile.component.html',
	styleUrls: ['./my-profile.component.scss'],
})
export class MyProfileComponent {
	public userEmail: string | null = '';

	constructor() {
		const loggedUser = sessionStorage.getItem('loggedUser');
		if (loggedUser) {
			const user = JSON.parse(loggedUser);
			this.userEmail = user.email;
		}
	}
}
