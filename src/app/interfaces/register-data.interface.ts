import { ILoginData } from './login-data.interface';

export interface IRegisterData extends ILoginData {
	password_confirmation: string;
}
