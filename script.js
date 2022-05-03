//Declaring constants
const $RATING_CARD = document.querySelector('.rating-page'); 
const $THANK_CARD = document.querySelector('.thankyou-page');
const $RATINGS = document.querySelectorAll('.rating-choice');
const $SUBMIT_BUTTON = document.querySelector('input');
const $THANK_IMAGE = document.querySelector('.thanks-img');
const $REFRESH_PROMPT = document.querySelector('.refresh-prompt');
const $RATING_SUMMARY = document.querySelector('.rating-summary');

//Executing functions
for (let i = 0; i < $RATINGS.length; i++) {
    $RATINGS[i].addEventListener("click", ratingOption);
}

$SUBMIT_BUTTON.addEventListener("click", redirectToThankYou);

$THANK_IMAGE.addEventListener("mouseover", displayPrompt);

$THANK_IMAGE.addEventListener("mouseout", hidePrompt);

$THANK_IMAGE.addEventListener("click", reloadMainPage);

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

function displayPrompt() {
    $THANK_IMAGE.style.cursor = "pointer";
    $REFRESH_PROMPT.style.opacity = "1";
    $REFRESH_PROMPT.style.textAlign = "center";
    $REFRESH_PROMPT.style.color = "var(--white)";
}

function hidePrompt() {
    $REFRESH_PROMPT.style.opacity = "0";
}

function reloadMainPage() {
    location.reload();
}