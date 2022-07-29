import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth/auth.service';

@Component({
	selector: 'app-main-layout',
	templateUrl: './main-layout.component.html',
	styleUrls: ['./main-layout.component.scss'],
})
export class MainLayoutComponent {
	public isOpened: boolean = true;
	public isToggled: boolean = false;
	public isMobile: boolean = false;

	constructor(
		private readonly breakpoint: BreakpointObserver,
		private readonly authService: AuthService,
		private readonly router: Router,
	) {
		breakpoint.observe([Breakpoints.XSmall, Breakpoints.Small]).subscribe((breakpointState) => {
			this.isOpened = !breakpointState.matches;
			this.isMobile = breakpointState.matches;
		});
	}

	public onToggleSideNav() {
		this.isToggled = !this.isToggled;
		this.isOpened = this.isToggled;
	}

	public onLogoutClick(event: Event): void {
		event.preventDefault();
		this.authService.logout();
		this.router.navigateByUrl('/login');
	}
}
