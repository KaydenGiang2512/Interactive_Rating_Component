//Declaring constants
const $RATING_CARD = document.querySelector('.rating-page'); 
const $THANK_CARD = document.querySelector('.thankyou-page');
const $RATINGS = document.querySelectorAll('.rating-choice');
const $SUBMIT_BUTTON = document.querySelector('input');
const $RATING_SUMMARY = document.querySelector('.rating-summary');

//Executing functions
for (let i = 0; i < $RATINGS.length; i++) {
    $RATINGS[i].addEventListener("click", ratingOption);
}

$SUBMIT_BUTTON.addEventListener("click", redirectToThankYou);

//Functions
function ratingOption(r) {
    for (let j = 0; j < $RATINGS.length; j++) {
        $RATINGS[j].classList.remove('rating-selection');
    }
    r.target.classList.add('rating-selection');
    $RATING_SUMMARY.textContent = `You selected ${r.target.textContent} out of 5`;
}

function redirectToThankYou() {
    $RATING_CARD.style.display = "none";
    $THANK_CARD.style.display = "flex";
    $THANK_CARD.style.flexDirection = "column";
    $THANK_CARD.style.alignItems = "center";
}