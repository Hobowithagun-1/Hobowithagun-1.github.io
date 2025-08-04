


const butt1 = document.querySelector("#butt1");
const page1 = document.querySelector("#page1");
const butt2 = document.querySelector("#butt2");
const page2 = document.querySelector("#page2");
const butt3 = document.querySelector("#butt3");
const page3 = document.querySelector("#page3");
const butt4 = document.querySelector("#butt4");
const page4 = document.querySelector("#page4");


//TopFunction to bring the user to the top of the page when they click 
//The buttons on the header
function TopFunction() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}
//To hide the other pages other than the first page during start up
function startup() {
  page2.style.display = "none";
  page3.style.display = "none";
  page4.style.display = "none";
}
//To hide all the pages
function hideall() {
  page1.style.display = "none";
  page2.style.display = "none";
  page3.style.display = "none";
  page4.style.display = "none";
}

//All these functions are to hide all the other pages except their own pages
butt1.addEventListener("click", function () {
  hideall(); //we don't know which page is shown, so hideall
  document.getElementById("headerText").innerHTML = "World War 1 101";
  page1.style.display = "block";

});
butt2.addEventListener("click", function () {
  hideall(); //we don't know which page is shown, so hideall
  document.getElementById("headerText").innerHTML = "Tactics developed";

  page2.style.display = "block";

});
butt3.addEventListener("click", function () {
  hideall(); //we don't know which page is shown, so hideall
  document.getElementById("headerText").innerHTML = "Machines of War made";

  page3.style.display = "block";

});
butt4.addEventListener("click", function () {
  hideall(); //we don't know which page is shown, so hideall
  document.getElementById("headerText").innerHTML = "Consequenses of the war";

  page4.style.display = "block";
});

var Bar_Progress = 0;
//To go to next slide and show bar progression
function next() {
  var elem = document.getElementById("Inner_Bar");
  var width = Bar_Progress * 20;
  Bar_Progress++;
  var id = setInterval(frame, 10);
  
  function frame() {
    if (width >= Bar_Progress * 20) {
      clearInterval(id);
      if (Bar_Progress >= 5) {
        Bar_Progress = -1;
      }
    }
    else {
      width++;
      elem.style.width = width + "%";
    }
    if (Bar_Progress == 0) {
      document.getElementById("Noteworthy_Header").innerHTML = "The Battle of Verdun";
      document.getElementById("Noteworth_Descriptiion").innerHTML = "The battle of verdun is one of the longest, bloodiest, and most-ferocious battles of world war 1. Casualties from the french are around 400,000, and the German ones are around 350,000. The french held the line against the germain for 10 months, before the French finally obtained victory.";
      document.getElementById("Noteworthy_Image").src = "images/Verdun.png";
    }
    if (Bar_Progress == 1) {
      document.getElementById("Noteworthy_Header").innerHTML = "Woman fought in WW1 too";
      document.getElementById("Noteworth_Descriptiion").innerHTML = "Russian forces called uppon woman to join the female shock battalions. This was to boost moral in the later years of the war. The first Women's Battalion of Death marched out to the front in june 1917. Even after the disconuation of the Women's Battalion of death, Many woman continued to apply and fight for regular units.";
      document.getElementById("Noteworthy_Image").src = "images/Woman_Death_Battalion.png";
    }
    if (Bar_Progress == 2) {
      document.getElementById("Noteworthy_Header").innerHTML = "The circus animal that helped Britian";
      document.getElementById("Noteworth_Descriptiion").innerHTML = "Britian utilized the usage of circus animals to cart around ammunition throughout the country. One of these animals was named Lizzie, an indian elephant who wore boots as she carted around food and necessities in the town of sheffield";
      document.getElementById("Noteworthy_Image").src = "images/Elephant.png";
    }
    if (Bar_Progress == 3) {
      document.getElementById("Noteworthy_Header").innerHTML = "The foundations of the United Nations";
      document.getElementById("Noteworth_Descriptiion").innerHTML = "During the end of the war, the League of Nations was created to 'Promote intenational cooperation and to achieve peach and security.' Unfortunately, it was shortly disbanded following Hitler's rise to power. Thankfully it made wat for the United Nations which now consists about 193 nations.";
      document.getElementById("Noteworthy_Image").src = "images/United_Nations.png";
    }
    if (Bar_Progress == 4) {
      document.getElementById("Noteworthy_Header").innerHTML = "The bloodiest day";
      document.getElementById("Noteworth_Descriptiion").innerHTML = "The battle of Somme was the day with the heaviest loss of life in a single day, with an estimate 57,470 casualties suffered by the british, this including 19,240 fatalities. As well as the germans suffering around 6000 casualties of the First day of the Battle of Somme";
      document.getElementById("Noteworthy_Image").src = "images/German_Grenade_Somme.png";
    }
    if (Bar_Progress == 5) {
      document.getElementById("Noteworthy_Header").innerHTML = "Man-Killer stew";
      document.getElementById("Noteworth_Descriptiion").innerHTML = "Man-killer stew, or otherwise refered by its actual name, <b>Maconochie</b> stew, is a canned British stew consisting of turnips, carrots potatoes, onions, haricot beans, and beef in a thin broth. Many soldiers would compare this stew to 'An inferior grade of garbage'.";
      document.getElementById("Noteworthy_Image").src = "images/Maconochie.png";
    }
  }

}

const game_Title = document.getElementById("Shooting_Game_h1");
const game_Start_Button=document.getElementById("Shooting_Game_Start");
const game_Target=document.getElementById("Target");
const game_Medic=document.getElementById("Medic");
const game_Score=document.getElementById("Shooting_Score");
const game_Timer=document.getElementById("Timer");
const game_Screen=document.getElementById("Game_Section");
var Seconds=-1;
var score_Gun_Game=0;
var height=game_Screen.offsetHeight;
var width=game_Screen.offsetWidth;
var Target_Moving= setInterval(spawnTargets, 800);
var TimerGo= setInterval(TimerStart,1000);
clearInterval(Target_Moving);
clearInterval(TimerGo);
//To initialize function to get a random number
function GetRandom(min,max){
return Math.round(Math.random() * (max - min)) + min;
}


var choose=GetRandom(0,1);
//To choose which image to spawn, either the Target, or the medic
function WhichTargetToSpawn(){
  choose=GetRandom(0,1);
  if(choose>0)
  {
      spawnTargets();
  }
  else{
    spawnMedic();
  }

}
//Function to spawn the medic and hide the target
function spawnMedic(){
  game_Medic.style.display="block";
  game_Target.style.display="none";
game_Medic.style.left = GetRandom(0, width-200) + "px";
game_Medic.style.top = GetRandom(0, height-350) + "px";
}
//Function to spawn the Target and hide the medic
function spawnTargets(){
game_Target.style.display="block";
 game_Medic.style.display="none";
game_Target.style.left = GetRandom(0, width-200) + "px";
game_Target.style.top = GetRandom(0, height-350) + "px";
}

//Function to initialize the game
function gameStart(){
game_Timer.style.display="block";
game_Title.style.display="none";
game_Start_Button.style.display="none";
Seconds=31;
score_Gun_Game=0;
//Starts the spawning
Target_Moving= setInterval(WhichTargetToSpawn, 800);
//Starts the timer countdown
TimerGo= setInterval(TimerStart,1000);
game_Score.style.display="block";
game_Score.innerHTML=`Targets shot: ${score_Gun_Game}`;
}
//Runs when the shooting game ends
function gameEnd(){
  game_Timer.style.display="none";
  game_Target.style.display="none";
  game_Title.innerHTML=`Your Score was ${score_Gun_Game}!`;
  game_Title.style.display="block";
  game_Start_Button.style.display="block";
  clearInterval(Target_Moving);
  clearInterval(TimerGo);
}
//Every second, subtracts one from the Seconds variable
function TimerStart(){
  Seconds--;
  game_Timer.innerHTML=`Time left: ${Seconds} Seconds!`;
  if(Seconds===0){
  gameEnd();
}
}
//When the target gets shot, adds 1 to the score
function targetShot(){
  score_Gun_Game++;
  const GunShot= new Audio("audio/Gun_Sound.mp3");
  GunShot.play();
  game_Score.innerHTML=`Targets shot: ${score_Gun_Game}`;
}
//When a medic gets shot, subtracts 1 from the score
function shotMedic(){
  score_Gun_Game--;
  const GunShot= new Audio("audio/Gun_Sound.mp3");
  GunShot.play();
  game_Score.innerHTML=`Targets shot: ${score_Gun_Game}`;
}

game_Target.addEventListener("click",targetShot);
game_Medic.addEventListener("click",shotMedic);
game_Start_Button.addEventListener("click",gameStart);


//Quiz section
const questions = [
  {
    Questions: "What is the first tank that was utilized during world war 1?",
    Answer: [
      { text: "Big willie", correct: false },
      { text: "Little willie", correct: true },
      { text: "M1 Abrams", correct: false },
      { text: "German Tiger m1", correct: false },
    ]
  },
  {
    Questions: "How did World war 1 start?",
    Answer: [
      { text: "Franze Ferdinand was asssasinated", correct: true },
      { text: "The Germans hated the french", correct: false },
      { text: "France wanted more resources", correct: false },
      { text: "Donald trump wanted to build a wall to block off mexico", correct: false },
    ]
  },
 {
    Questions: "Which battle during world war 1 caused the most amount of lives",
    Answer: [
      { text: "The battle of verdun", correct: true },
      { text: "The battle of Somme", correct: false },
      { text: "The battle against the Emus", correct: false },
      { text: "The Battle of Jutland", correct: false },
    ]
  },
  {
    Questions: "What is NOT a reason that trench warfare was popularized in WW1?",
    Answer: [
      { text: "There was a heavy usage of artillery", correct: false },
      { text: "It provided troops a safe way to move along the battlefield", correct: false },
      { text: "Trenches were comfy", correct: true },
      { text: "There was a lack of mobility at the time", correct: false },
    ]
  },
 {
    Questions: "What was the main reason for using artillery",
    Answer: [
      { text: "It is cheap", correct: false },
      { text: "It caused Maximum damage and distruption of the enemy", correct: true },
      { text: "It was easy to use", correct: false },
      { text: "It can me manned individually effectively with no help", correct: false },
    ]
  }
];
const questionElement= document.getElementById("Questions");
const Answer_Button= document.getElementById("Answer_Button");
const nextButton= document.getElementById("Next_Question");

let currentQuestionIndex=0;
let score=0;
//Function: To start the quiz and inizialize all these values
function startQuiz(){
  currentQuestionIndex=0;
  score=0;
  nextButton.innerHTML="Next";
  showQuestion();
}

//To know which questions to show
function showQuestion(){
  resetState();
  let currentQuestion=questions[currentQuestionIndex];
  let questionNo=currentQuestionIndex+1;
  questionElement.innerHTML=questionNo+". "+currentQuestion.Questions;

  currentQuestion.Answer.forEach(answer);
}
//Puts the Answer options inside the Options
function answer(Answer){
  const button=document.createElement("button");
  button.innerHTML=Answer.text;
  button.classList.add("Answer_btn");
  Answer_Button.appendChild(button);
  if(Answer.correct){
    button.dataset.correct=Answer.correct;
  }
  button.addEventListener("click",selectAnswer);
}

//Hides the options of the questions
function resetState(){
  nextButton.style.display="none";
  while(Answer_Button.firstChild){
    Answer_Button.removeChild(Answer_Button.firstChild);
  } 
}
//when a correct option is clicked, makes the button go green and make it so that
//The other options cannot be clicked, and when a wrong option is clicked, it goes red,
//while also making the correct answer green.
function selectAnswer(e){
  const selectedBtn=e.target;
  const isCorrect=selectedBtn.dataset.correct==="true";
  if(isCorrect){
    selectedBtn.classList.add("Correct");
    score++;
  }
  else{
    selectedBtn.classList.add("Incorrect");
  }
  Array.from(Answer_Button.children).forEach(function(button) {
  if (button.dataset.correct === "true") {
    button.classList.add("Correct");
  }
  button.disabled = true;
});
 
  nextButton.style.display="block";
}
//to show how many questions they got right
function showScore(){
    resetState();
    questionElement.innerHTML= `You scored ${score} out of 5!`;
    nextButton.innerHTML="Play Again";
    nextButton.style.display="block";
}
//To see either to show the next question or to show the score
function handleNextButton(){
  currentQuestionIndex++;
  if(currentQuestionIndex<5){
    showQuestion();
  }
  else{
    showScore();
  }
}

function nextButtonClicked(){
  if(currentQuestionIndex<5){
    handleNextButton();
  }
  else{
    startQuiz();
  }
}
nextButton.addEventListener("click",nextButtonClicked);

startQuiz();

const btnFS=document.querySelector("#btnFS");
const btnWS=document.querySelector("#btnWS");
btnFS.addEventListener("click",enterFullscreen);
btnWS.addEventListener("click",exitFullscreen);
function enterFullscreen() { //must be called by user generated event
document.documentElement.requestFullscreen();
}
function exitFullscreen() {
document.exitFullscreen();
}