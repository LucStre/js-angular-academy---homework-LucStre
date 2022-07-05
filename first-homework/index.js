const reviewFormElement = document.getElementById('review-form');
const reviewListElement = document.getElementById('review-list');
const averageElement = document.getElementById('average');

const reviewKey = 'reviews';

const reviews = JSON.parse(localStorage.getItem(reviewKey));

renderReviews(reviews);
renderAverage();

reviewFormElement.addEventListener('submit', (event) => {
	event.preventDefault();
	const formData = new FormData(reviewFormElement);
	const reviewText = formData.get('text');
	const reviewRating = formData.get('rating');

	reviews.push({
		text: reviewText,
		rating: reviewRating,
	});

	renderReviews(reviews);
	renderAverage();

	reviewFormElement.reset();
});

function renderAverage() {
	averageElement.innerText = getAverageReview();
	averageElement.insertAdjacentText('beforeend', ' / 5');
}

function renderReviews(reviews) {
	clearReviews();
	reviews.forEach((review) => {
		const listElement = document.createElement('li');
		const reviewRating = document.createElement('span');
		const reviewText = document.createElement('span');
		const removeButton = document.createElement('button');

		removeButton.innerText = 'Remove';
		reviewRating.innerText = review.rating;
		reviewText.innerText = review.text;

		reviewRating.insertAdjacentText('beforeend', '/5');
		listElement.appendChild(reviewText);
		listElement.appendChild(reviewRating);
		listElement.appendChild(removeButton);

		removeButton.addEventListener('click', () => {
			const reviewIndex = reviews.findIndex((el) => el === review);
			reviews.splice(reviewIndex, 1);

			renderReviews(reviews);
			renderAverage();
		});

		reviewListElement.appendChild(listElement);
	});
	saveReviews(reviews);
}

function getAverageReview() {
	var sum = 0;
	reviews.forEach((review) => (sum += parseInt(review.rating)));
	return Number((sum / reviews.length).toFixed(2));
}

function saveReviews(reviews) {
	localStorage.setItem(reviewKey, JSON.stringify(reviews));
}

function clearReviews() {
	while (reviewListElement.firstChild) {
		reviewListElement.removeChild(reviewListElement.firstChild);
	}
}
