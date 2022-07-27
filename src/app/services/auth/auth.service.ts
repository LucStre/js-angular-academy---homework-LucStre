import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ILoginData } from '../../interfaces/login-data.interface';
import { IRegisterData } from '../../interfaces/register-data.interface';
import { IUser } from '../../interfaces/user.interface';

@Injectable({
	providedIn: 'root',
})
export class AuthService {
	constructor(private readonly http: HttpClient) {}

	public register(data: IRegisterData): Observable<IUser> {
		return this.http.post<IUser>('https://tv-shows.infinum.academy/users', data);
	}

	public login(data: ILoginData): Observable<IUser> {
		return this.http.post<IUser>('https://tv-shows.infinum.academy/users/sign_in', data);
	}
}
