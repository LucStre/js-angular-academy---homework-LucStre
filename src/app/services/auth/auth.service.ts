import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, catchError, EMPTY, Observable, tap } from 'rxjs';
import { ITokenData } from 'src/app/interfaces/token-data.interface';
import { ILoginData } from '../../interfaces/login-data.interface';
import { IRegisterData } from '../../interfaces/register-data.interface';
import { IUser } from '../../interfaces/user.interface';

@Injectable({
	providedIn: 'root',
})
export class AuthService {
	private _user$ = new BehaviorSubject<IUser | null>(null);
	public user$ = this._user$.asObservable();
	private _token$ = new BehaviorSubject<ITokenData | null>(null);
	public token$ = this._token$.asObservable();
	private token: ITokenData | null = null;

	constructor(private readonly http: HttpClient) {
		const loggedUser = localStorage.getItem('token');
		if (loggedUser) {
			this._token$.next(JSON.parse(loggedUser));
		}
		this._token$.subscribe((token) => {
			if (token) {
				this.token = token;
			}
		});
	}

	public getOptions() {
		return this.token?.client && this.token?.access_token && this.token?.uid
			? {
					headers: new HttpHeaders()
						.set('client', this.token?.client)
						.set('access-token', this.token?.access_token)
						.set('uid', this.token?.uid),
			  }
			: {};
	}

	public init(): Observable<IUser> {
		return this.http.get<IUser>('https://tv-shows.infinum.academy/users/me', this.getOptions()).pipe(
			catchError(() => {
				return EMPTY;
			}),
			tap((user) => {
				this._user$.next(user);
			}),
		);
	}

	public register(data: IRegisterData): Observable<HttpResponse<ITokenData>> {
		return this.http.post<ITokenData>('https://tv-shows.infinum.academy/users', data, { observe: 'response' }).pipe(
			tap((resp) => {
				const registerData: ITokenData = {
					access_token: resp.headers.get('access-token'),
					client: resp.headers.get('client'),
					uid: resp.headers.get('uid'),
				};
				this._token$.next(registerData);
				localStorage.setItem('token', JSON.stringify(registerData));
			}),
		);
	}

	public login(data: ILoginData): Observable<HttpResponse<ITokenData>> {
		return this.http
			.post<ITokenData>('https://tv-shows.infinum.academy/users/sign_in', data, { observe: 'response' })
			.pipe(
				tap((resp) => {
					const loginData: ITokenData = {
						access_token: resp.headers.get('access-token'),
						client: resp.headers.get('client'),
						uid: resp.headers.get('uid'),
					};
					this._token$.next(loginData);
					localStorage.setItem('token', JSON.stringify(loginData));
				}),
			);
	}

	public upload(file: File): Observable<any> {
		const form = new FormData();
		form.append('image', file);
		return this.http.put('https://tv-shows.infinum.academy/users', form, this.getOptions());
	}

	public logout(): void {
		localStorage.clear();
		this._user$.next(null);
		this._token$.next(null);
	}
}
