import { IUser } from './user.interface';

export interface IReview extends IUser {
	id: string;
	rating: number;
	comment: string;
	show_id: string;
}
