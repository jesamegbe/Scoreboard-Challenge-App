let homeScore = document.getElementById("home-score");
let guestScore = document.getElementById("guest-score");

let homeScoreIndicator = 0;
let guestScoreIndicator = 0;

function home01() {
  homeScoreIndicator += 1;
  homeScore.textContent = homeScoreIndicator + 1;
}

function home02() {
  homeScoreIndicator += 2;
  homeScore.textContent = homeScoreIndicator + 1;
}

function home03() {
  homeScoreIndicator += 3;
  homeScore.textContent = homeScoreIndicator + 1;
}

function guest04() {
  guestScoreIndicator += 1;
  guestScore.textContent = guestScoreIndicator + 1;
}

function guest05() {
  guestScoreIndicator += 2;
  guestScore.textContent = guestScoreIndicator + 1;
}

function guest06() {
  guestScoreIndicator += 3;
  guestScore.textContent = guestScoreIndicator + 1;
}
