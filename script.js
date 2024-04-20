var time=60;
var score=0;
var hitValue=0;


function gameOver(){
    var container=document.getElementById('container');
    container.innerHTML=`<div id="over">Game Over!!!!<br>Final Score = ${score} </div>`;
}

function remove(){
    targetbubble=document.querySelector('#container');
    targetbubble.addEventListener('click',(e)=>{
        e.target.remove();
    })
}

function GameScore(){
    document.querySelector('#container').addEventListener('click',(e)=>{
        var value=Number(e.target.textContent);
        if(value==hitValue){
            createBubble();
            updateScore();
            createTarget();
        }else{
            
        }
    })
}

function updateScore(){
    score+=10;
    document.querySelector('#Score').textContent=score;
}
function createTarget(){
    hitValue=Math.floor(Math.random()*10);
    var end=document.querySelector('#Target');
    end.innerHTML=hitValue;
}
function createBubble(){
    var allB="";
    for(var i=0;i<180;i++){
        var random=Math.floor(Math.random()*20);
        allB+=`<div class="button">${random}</div>`;
    }
    var container=document.getElementById('container');
    container.innerHTML=allB;
}
function timer(){
    var set=setInterval(function(){
        if(time>0){
            time--;
            console.log(time);
        }else{
            gameOver();
        }
        document.querySelector('#Timer').textContent=time;
    },1000);

}
GameScore();
createBubble(); 
timer();
createTarget();
