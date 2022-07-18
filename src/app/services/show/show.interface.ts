import { IReview } from 'src/app/interfaces/review-interface';

export interface IShow {
	title: string;
	description: string;
	average_rating: number | null;
	image_url: string | null;
	id: number;
	reviews: IReview[];
}
