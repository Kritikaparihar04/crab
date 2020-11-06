const startingMinutes=5;
let time=startingMinutes*60;

const countdownEl=document.getElementById('countdown');

setInterval(updateCountdown,1000);

function updateCountdown()
{
    const minutes=Math.floor(time/60);
    let seconds=time%60;

    seconds=seconds<10?'0'+seconds:seconds;

    countdownEl.innerHTML=`${minutes}:${seconds}`;
    time--;
}


   const restartBtn = document.getElementById('restart');
   const prevBtn = document.getElementById('prev');
   const nextBtn = document.getElementById('next');
   const submitBtn = document.getElementById('submit');
   const trueBtn = document.getElementById('True');
   const falseBtn = document.getElementById('False');
   const userScore = document.getElementById('user-score');
   const quesText = document.getElementById('ques-text');
   let currentQues = 0;
   var score = 0;
   let questions = [
       {
           question:"Ready for the quiz? ",
           answers:[
               {option:"yess!!!",answer:true},
               {option:"No Nooo!!",answer:false}
           ]
       },
       {
           question:"Prime minister of India? ",
           answers:[
               {option:"Trump",answer:false},
               {option:"Narendra Modi",answer:true}
           ]
       },
       {
           question:"Capital of Uttarakhand?",
           answers:[
               {option:"Mussoorie",answer:false},
               {option:"Mountain",answer:true}
           ]
       },
       {
           
           question:"Currency of Britain?",
           answers:[
               { option:"Dollar", answer:false},
               {option:"Pound",answer:true}
           ]

       },
       {
           
        question:"Who is FlyingBeast youtuber?",
        answers:[
            { option:"Nikhil", answer:false},
            {option:"Gaurav Taneja",answer:true}
        ]

    },
    {
           
        question:"Co-founder of APPLE?",
        answers:[
            { option:"Jack Ma", answer:false},
            {option:"Steve Jobs",answer:true}
        ]

    }
           
   ]
   
   restartBtn.addEventListener('click',restart);
   prevBtn.addEventListener('click',prev);
   nextBtn.addEventListener('click',next);
   submitBtn.addEventListener('click',submit);
   
   function beginQuiz(){
       currentQues = 0;
       quesText.innerHTML = questions[currentQues].question;
       trueBtn.innerHTML = questions[currentQues].answers[0].option;
       trueBtn.onclick = () => {
           let ano=0;
           if(questions[currentQues].answers[ano].answer){
               if(score<=5){
                   score++;
               }
           }
           userScore.innerHTML = score;
           if(currentQues<=4){
               next();
           }
       }
       falseBtn.innerHTML = questions[currentQues].answers[1].option;
       falseBtn.onclick = () => {
           let ano=1;
           if(questions[currentQues].answers[ano].answer){
               if(score<=5){
                   score++;
               }
           }
           userScore.innerHTML = score;
           if(currentQues<=4){
               next();
           }
       }
       prevBtn.classList.add('hide');
   }
   beginQuiz();
   function restart(){
       currentQues = 0;
       prevBtn.classList.remove('hide');
       nextBtn.classList.remove('hide');
       submitBtn.classList.remove('hide');
       trueBtn.classList.remove('hide');
       falseBtn.classList.remove('hide');
       score = 0;
       userScore.innerHTML = score;
       beginQuiz();
   }
   function next(){
       currentQues++;
       if(currentQues>=4){
           nextBtn.classList.add('hide');
           prevBtn.classList.remove('hide');
       }
       quesText.innerHTML = questions[currentQues].question;
       trueBtn.innerHTML = questions[currentQues].answers[0].option;
       trueBtn.onclick = ()=>{
           let ano=0;
           if(questions[currentQues].answers[ano].answer){
               if(score<=5){
                   score++;
               }
           }
           userScore.innerHTML = score;
           if(currentQues<=4){
               next();
           }
       }
       falseBtn.innerHTML = questions[currentQues].answers[1].option;
       falseBtn.onclick = ()=>{
           let ano=1;
           if(questions[currentQues].answers[ano].answer){
               if(score<5){
                   score++;
               }
           }
           userScore.innerHTML = score;
           if(currentQues<=4){
               next();
           }
       }
       prevBtn.classList.remove('hide');
   }
   function prev(){
       currentQues--;
       if(currentQues<=0){
           prevBtn.classList.add('hide');
           nextBtn.classList.remove('hide');
       }
       quesText.innerHTML = questions[currentQues].question;
       trueBtn.innerHTML = questions[currentQues].answers[0].option;
       trueBtn.onclick = ()=>{
           let ano=0;
           if(questions[currentQues].answers[ano].answer){
               if(score<=5){
                   score++;
               }
           }
           userScore.innerHTML = score;
           if(currentQues<=4){
               next();
           }
       }
       falseBtn.innerHTML = questions[currentQues].answers[1].option;
       falseBtn.onclick = ()=>{
           let ano=1;
           if(questions[currentQues].answers[ano].answer){
               if(score<=5){
                   score++;
               }
           }
           userScore.innerHTML = score;
           if(currentQues<=4){
               next();
           }
       }
       nextBtn.classList.remove('hide');
   }
   function submit(){
       prevBtn.classList.add('hide');
       nextBtn.classList.add('hide');
       submitBtn.classList.add('hide');
       trueBtn.classList.add('hide');
       falseBtn.classList.add('hide');
       quesText.innerHTML="Congratulations on submitting the quiz!";
   }
   document.getElementById("app").innerHTML = `
<div class="base-timer">
  <svg class="base-timer__svg" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
    <g class="base-timer__circle">
      <circle class="base-timer__path-elapsed" cx="50" cy="50" r="45" />
    </g>
  </svg>
  <span>
    <!-- Remaining time label -->
  </span>
</div>
`;
