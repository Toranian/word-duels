let words = [];
let player_1_score = 0;
let player_2_score = 0;

var flip = Math.random() >= 0.5 ? "Player 1" : "Player 2";
var seconds = 0;
var previous_word = "";

function timer() {
  if (seconds < 10) {
    $("#timer").html(seconds);
  }
  if (seconds > 0) {
    seconds--;
  } else {
    flipPlayer();
    clearInterval(timer);
    gameOver(flip, `${flip} ran out of time`)
    seconds = 10;
  }
}
function startGame() {
  seconds = 10;
  previous_word = $("#word-input").val();
  $("#previous-word").html(previous_word);
  $("#word-input").val("");
  $("#start-button").style = "visibility: none;";
  words.push(previous_word);
  setInterval(timer, 1000);
}

$("#player").html(flip);

function update_score(number) {
  if (flip === "Player 1") {
    player_1_score += number;
    $("#player_1_score").html(player_1_score);
  } else {
    player_2_score += number;
    $("#player_2_score").html(player_2_score);
  }
}

// Change the player
function flipPlayer() {
  if (flip === "Player 1") {
    flip = "Player 2";
  } else {
    flip = "Player 1";
  }
  $("#player").html(flip);
}

function gameOver(winner, condition) {
  $("#center-card").css("display", "none");
  $("#nav").css("visibility", "hidden");
  clearInterval(timer);
  $("#win-condition").css("display", "block");

  $("#winner").html(winner + " wins!");
  $("#reason").html(condition);


}

$("#word-form").submit(function (e) {
  // Prevent the default behavior of the form (refresh)
  e.preventDefault();

  if (words.length == 0) {
    startGame();
    player_1_score = 0;
    player_2_score = 0;
    seconds = 10;
    word= $("#word-input").val();
    $("#previous-word").html(word);
    $("#word-input").val("");
    $("#start-button").style = "visibility: none;";
    setInterval(timer, 1000);
  }

  if (player_1_score >= 75) {
    gameOver("Player 1", "Player 1 reached 100 points before Player 2.");
  } 
  if (player_2_score >= 75) {
    gameOver("Player 2", "Player 2 reached 100 points before Player 1.");
  }

  let word = $("#word-input").val();

  if (words.includes(word)) {
    let loser = flip;
    flipPlayer();
    let winner = flip;
    gameOver(winner, `${loser} already used that word.`);
  }
  words.push(word);

  var last_word = words[words.length - 2];
  if (word[0] === last_word[last_word.length - 1]) {
    update_score(seconds);
  } else {
    update_score(-1 * Math.floor(seconds / 2));
  }

  // Flip the player after each word
  flipPlayer();

  // Restart the timer
  seconds = 10;
  $("#timer").html(seconds);

  // Determine if the first letter of the entered word matches the last letter of the last word in the array
  $("#previous-word").html(word);
  $("#word-input").val("");
});
