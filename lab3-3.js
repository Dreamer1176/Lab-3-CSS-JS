min = 1
max = 100
function GuessNumber(){
    Ans = Math.floor(Math.random() * (max - min) + min);
    random = parseInt(Ans);
    guess = prompt('Guess the number between ' + min + ' and ' + max + ' inclusive or input other numbers to see the secret number?');
    x1 = parseInt(guess); 
    if(x1 != random){
        while(x1 !== random)
            if(x1 < random ){
                min = x1
                x2 = parseInt(x1);
                x1 = prompt('Guess the number between ' + (x2 + 1) + ' and ' + max + ' inclusive or input other numbers to see the secret number.')
                if(x1 == random){
                    alert('Matched! You win The secret number is ' + random)
                }
            }else if(x1 > random){
                max = x1;
                x1 = prompt('Guess the number between ' + min + ' and ' + (x1 - 1)  + ' inclusive or input other numbers to see the secret number.')
                if(x1 == random){
                    alert('Matched! You win. The secret number is ' + random)
                }
            }
        } 
    }
GuessNumber()  