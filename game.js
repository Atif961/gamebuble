// var timer =60;
// var score = 0;
// var hitrn = 0;


// function increaseScore() {
//   score += 0;
//   document.querySelector("#scorevl").textContent = score
// }

// function getNewHit() {
//  hitrn = Math.floor(Math.random() *10);
//   document.querySelector("#hitvl").textContent = hitrn;
// }
// function makeBuble(){
//   var clutter =""
//   for (var i = 1; i<=168; i++){ 
//    var rn = Math.floor(Math.random()*10)
//      clutter += `<div class="buble">${rn}</div>`;
//   }
// document.querySelector("#pbtm").innerHTML = clutter;
// }
// function runTimer(){
//  var timerint = setInterval(function(){
//     if (timer > 0){
//     timer--;
//     document.querySelector("#timervl").textContent = timer;
//     }
//     else{
//       clearInterval(timerint);
//       document.querySelector("#pbtm").innerHTML = `<h1>Game over</h1>`;
//     }
//   }, 1000)
// }

// document.querySelector("#pbtm").addEventListener("click", function(dets){
// var clickNumber = Number(dets.target.textContent);
// if (clickNumber === hitrn){
//   increaseScore();
//   makeBuble();
//   getNewHit();
// }
// });
// increaseScore();
// runTimer();
// makeBuble();
// getNewHit();

var timer = 60;
var score = 0;
var hitrn = 0;

function increaseScore() {
  score += 10; // Increase the score by 1 for each correct click.
  document.querySelector("#scorevl").textContent = score;
}

function getNewHit() {
  hitrn = Math.floor(Math.random() * 10);
  document.querySelector("#hitvl").textContent = hitrn;
}

function makeBuble() {
  var clutter = "";
  for (var i = 1; i <= 168; i++) {
    var rn = Math.floor(Math.random() * 10);
    clutter += `<div class="buble">${rn}</div>`;
  }
  document.querySelector("#pbtm").innerHTML = clutter;
}

function runTimer() {
  var timerint = setInterval(function () {
    if (timer > 0) {
      timer--;
      document.querySelector("#timervl").textContent = timer;
    } else {
      clearInterval(timerint);
      document.querySelector("#pbtm").innerHTML = `<h1>Game over</h1>`;
    }
  }, 1000);
}

document.querySelector("#pbtm").addEventListener("click", function (dets) {
  var clickNumber = Number(dets.target.textContent);
  if (clickNumber === hitrn) {
    increaseScore();
    makeBuble();
    getNewHit();
  }
});

// Initialize the game
increaseScore(); // Initialize the score (starts at 0)
runTimer();     // Start the timer
makeBuble();    // Create initial bubbles
getNewHit();    // Set the initial target number
