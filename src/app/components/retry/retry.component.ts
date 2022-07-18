import { Component, Input } from '@angular/core';
import { Observable } from 'rxjs';

@Component({
	selector: 'app-retry',
	templateUrl: './retry.component.html',
	styleUrls: ['./retry.component.scss'],
})
export class RetryComponent {
	@Input() public tryAgainObservable: Observable<any> = new Observable();
	public retry() {
		this.tryAgainObservable.subscribe();
	}
}
