var elementos = document.querySelectorAll('.player-options img');
var playerOpt = '';
var inimigoOpt = '';

function validarVitoria(){
    if(playerOpt == 'rock' && inimigoOpt == 'rock'){
        alert('empate');
    } else if(playerOpt == 'rock' && inimigoOpt == 'paper'){
        alert('Perdeu');
    } else if(playerOpt == 'rock' && inimigoOpt == 'scisor'){
        alert('ganhou');
    }

    if(playerOpt == 'paper' && inimigoOpt == 'rock'){
        alert('ganhou');
    } else if(playerOpt == 'paper' && inimigoOpt == 'paper'){
        alert('empate');
    } else if(playerOpt == 'paper' && inimigoOpt == 'scisor'){
        alert('perdeu');
    }

    if(playerOpt == 'scisor' && inimigoOpt == 'rock'){
        alert('Perdeu');
    } else if(playerOpt == 'scisor' && inimigoOpt == 'paper'){
        alert('ganhou');
    } else if(playerOpt == 'scisor' && inimigoOpt == 'scisor'){
        alert('empate');
    }
}

function resetInimigo(){
    var enemyOptions = document.querySelectorAll('.enemy-options div');
    for(var i= 0 ; i < enemyOptions.length; i++){
        enemyOptions[i].childNodes[0].style.opacity = 0.3;
    }
}

function inimigoJogar(){
    let rand = Math.floor(Math.random()*3);
    var enemyOptions = document.querySelectorAll('.enemy-options div');
    resetInimigo();
    for(var i= 0 ; i < enemyOptions.length; i++){
        if (i==rand){
            enemyOptions[i].childNodes[0].style.opacity = 1;
            inimigoOpt = enemyOptions[i].childNodes[0].getAttribute('opt');
        }
    }
    validarVitoria();
    
}


function limparOpacity(){
    for(i = 0; i < elementos.length; i++){
    elementos[i].style.opacity = 0.3;
    }
}

for(i = 0; i < elementos.length; i++){
    elementos[i].addEventListener('click', function(t){
        limparOpacity();
        t.target.style.opacity = 1;
        playerOpt = t.target.getAttribute('opt');
        inimigoJogar();
    });
}