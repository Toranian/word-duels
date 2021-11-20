let words = [];
let player_1_score = 0;
let player_2_score = 0;


var flip = Math.random() > 0.5 ? "Player 1" : "Player 2";
var seconds = 10;

$("#player").html(flip);

function update_score(number) {
  if (flip === "Player 1") {
    player_1_score += number;
    $("#player_2_score").html(player_2_score);
  } else {
    player_2_score += number;
    $("#player_1_score").html(player_1_score);
  }
}

function flipPlayer() {
  if (flip === "Player 1") {
    flip = "Player 2";
  } else {
    flip = "Player 1";
  }
  $("#player").html(flip);
}

$("#word-form").submit(function (e) {
  // Prevent the default behavior of the form (refresh)
  e.preventDefault();

  let word = $("#word-input").val();

  if (words.includes(word)) {
    update_score(-1);
  }
  
  words.push(word);

  // Flip the player after each word
  flipPlayer();

  // Restart the timer
  seconds = 10;
  $("#timer").html(seconds);

  // Determine if the first letter of the entered word matches the last letter of the last word in the array
  var last_word = words[words.length - 2];
  if (word[0] === last_word[last_word.length - 1]) {
    update_score(1);
  }

  $("#previous-word").html(word);
  $("#word-input").val("");
});

function timer() {
  console.log(seconds)
  if (seconds < 10) {
    $("#timer").html(seconds);
  }
  if (seconds > 0) {
    seconds--;
  } else {
    clearInterval(timer);
  }
}

setInterval(timer, 1000);
