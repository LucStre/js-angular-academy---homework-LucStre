const reviewFormElement = document.getElementById('review-form')
const reviewListElement = document.getElementById('review-list')

const reviews = [{
    text: 'Great movie!',
    rating: 5
}]

renderReviews(reviews);

reviewFormElement.addEventListener('submit', (event) => {
    event.preventDefault();
    const formData = new FormData(reviewFormElement);
    const reviewText = formData.get("text");
    const reviewRating = formData.get("rating");

    reviews.push({
        text: reviewText,
        rating: reviewRating
    });

    renderReviews(reviews);
});

function renderReviews(reviews){
    clearReviews();
    reviews.forEach(review => {
        const listElement = document.createElement('li');
        const reviewRating = document.createElement('span');
        const reviewText = document.createElement('span');

        reviewRating.innerText = review.rating;
        reviewText.innerText = review.text;
        listElement.appendChild(reviewRating);
        listElement.appendChild(reviewText);
        reviewListElement.appendChild(listElement);
    });
}

function clearReviews(){
    while(reviewListElement.firstChild){
        reviewListElement.removeChild(reviewListElement.firstChild);
    }
}