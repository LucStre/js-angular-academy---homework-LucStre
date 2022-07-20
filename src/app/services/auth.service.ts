import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { IAuthData } from '../interfaces/auth-data.interface';
import { IUser } from '../interfaces/user.interface';

@Injectable({
	providedIn: 'root',
})
export class AuthService {
	constructor(private readonly http: HttpClient) {}

	public register(data: IAuthData): Observable<IUser> {
		return this.http.post<IUser>('https://tv-shows.infinum.academy/users', data);
	}

	public login(data: IAuthData): Observable<IUser> {
		return this.http.post<IUser>('https://tv-shows.infinum.academy/users/sign_in', data);
	}
}
