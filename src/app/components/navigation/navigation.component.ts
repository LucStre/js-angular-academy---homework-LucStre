import { Component } from '@angular/core';
import { INavigationLink } from 'src/app/interfaces/navigation-link.interface';

@Component({
	selector: 'app-navigation',
	templateUrl: './navigation.component.html',
	styleUrls: ['./navigation.component.scss'],
})
export class NavigationComponent {
	public readonly navigationLinks: Array<INavigationLink> = [
		{
			url: '',
			title: 'All shows',
		},
		{
			url: 'top-rated',
			title: 'Top rated shows',
		},
	];
}
