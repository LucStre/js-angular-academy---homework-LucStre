import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Component, OnInit } from '@angular/core';

@Component({
	selector: 'app-main-layout',
	templateUrl: './main-layout.component.html',
	styleUrls: ['./main-layout.component.scss'],
})
export class MainLayoutComponent {
	public isOpened: boolean = true;
	public isToggled: boolean = false;
	public isMobile: boolean = false;

	constructor(private readonly breakpoint: BreakpointObserver) {
		breakpoint.observe([Breakpoints.XSmall, Breakpoints.Small]).subscribe((breakpointState) => {
			this.isOpened = !breakpointState.matches;
			this.isMobile = breakpointState.matches;
			console.log(this.isOpened);
		});
	}

	public onToggleSideNav() {
		this.isToggled = !this.isToggled;
		this.isOpened = this.isToggled;
	}
}
