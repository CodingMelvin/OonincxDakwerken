const reviews = [
    {
        text: "Gelukkig en blij met het nieuwe dak dat de firma bij mij heel netjes heeft gelegd en afgewerkt! Vakmensen, aan te raden!",
        author: "Jan B."
    },
    {
        text: "Snel, goed en betrouwbaar. Alles is op kort termijn besproken en geleverd.",
        author: "Patrick, Wouw"
    }
];

let currentReview = 0;

const reviewText = document.querySelector(".review-text");
const reviewAuthor = document.querySelector(".review-author");

function showReview(index) {
    reviewText.textContent = `"${reviews[index].text}"`;
    reviewAuthor.textContent = reviews[index].author;
}

showReview(currentReview);

document.getElementById("next").addEventListener("click", () => {
    currentReview = (currentReview + 1) % reviews.length;
    showReview(currentReview);
});

document.getElementById("prev").addEventListener("click", () => {
    currentReview = (currentReview - 1 + reviews.length) % reviews.length;
    showReview(currentReview);
});