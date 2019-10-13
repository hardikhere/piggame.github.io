/*
GAME RULES:

- The game has 2 players, playing in rounds
- In each turn, a player rolls a dice as many times as he whishes. Each result get added to his ROUND score
- BUT, if the player rolls a 1, all his ROUND score gets lost. After that, it's the next player's turn
- The player can choose to 'Hold', which means that his ROUND score gets added to his GLBAL score. After that, it's the next player's turn
- The first player to reach 100 points on GLOBAL score wins the game

*/
var scores,roundScores,activePlayer,dice,count=0,preScore,win,gamePlay=1;


reset();

		
		


document.querySelector('#current-'+activePlayer).textContent=dice;

//var //x=document.querySelector('#score-0').textContent;
//console.log(x);

function reset(){
      var isMobile = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);
      var element = document.getElementById('text');
       if (isMobile) alert("rotate your Mobile");
     win=parseInt(prompt('enter the winning score',"0"),"10");
    if(isNaN(win)){
        alert('please enter valid win score');
        reset();
    }
    scores=[0,0];
roundScore=0;
activePlayer=0;

document.querySelector(".dice").style.display='none';

document.getElementById('score-0').textContent='0';
document.getElementById('score-1').textContent='0';
document.getElementById('current-0').textContent='0';
document.getElementById('current-1').textContent='0';
    
    document.getElementById('name-0').textContent = 'Player 1';
    document.getElementById('name-1').textContent = 'Player 2';
    document.querySelector('.player-0-panel').classList.remove('winner');
    document.querySelector('.player-1-panel').classList.remove('winner');
    document.querySelector('.player-0-panel').classList.remove('active');
    document.querySelector('.player-1-panel').classList.remove('active');
    document.querySelector('.player-0-panel').classList.add('active');
    
    
    
}
 preScore=6;
function btn(){
    //randome number
    if(gamePlay==1){
    dice= Math.floor(Math.random()*6+1);
   //dice=6;
    
   
    
   /*display */
    var temp=0;
    var dicedom= document.querySelector(".dice");dicedom.style.display='block';
    dicedom.src='dice-'+dice+'.png';
    //updating score
    if(dice!==1){
        //add score
        if(dice==6 && preScore==6)count++;
          if(count==2){
           document.querySelector("#current-"+activePlayer).textContent='0'; 
           alert('you got two sixs');
           nextPlayer();
           count=0;
       }
        
        roundScore += dice;
        document.querySelector("#current-"+activePlayer).textContent=roundScore;
        
    }else{
        //next player
        nextPlayer();
        alert('you got 1');
       
    }
    
  preScore=dice;
    }
}
document.querySelector('.btn-roll').addEventListener('click',btn);

function nextPlayer(){
    
     activePlayer===0?activePlayer=1:activePlayer=0;
        roundScore=0;
        
        document.getElementById('current-0').textContent='0';
         document.getElementById('current-1').textContent='0';
        
        document.querySelector('.player-0-panel').classList.toggle('active');
        document.querySelector('.player-1-panel').classList.toggle('active');
        
       
    
    
}
 

document.querySelector('.btn-hold').addEventListener('click',function(){
    if(gamePlay==1){
    //add current score to global score
    scores[activePlayer]+=roundScore;
    
    
    //update the ui
    document.querySelector('#score-'+activePlayer).textContent = scores[activePlayer];
   
   
    
    
    //check if player won the game
    if(scores[activePlayer]>=win){
        document.querySelector('#name-'+activePlayer).textContent = 'WINNER';
        document.querySelector('.dice').style.display='none';
        document.querySelector('.player-'+ activePlayer +'-panel').classList.add('winner');
        document.querySelector('.player-'+ activePlayer + '-panel').classList.remove('active');
        gamePlay=0;
    }else {nextPlayer();}//next player
    
    }
    
});

document.querySelector('.btn-new').addEventListener('click', function(){
    
    
   reset(); 
    
    
    
    
});
















