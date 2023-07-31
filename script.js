let number = Math.floor(Math.random() * 10)+1;
console.log(number);
function check(){
    let userGuess = document.querySelector(".enteredNumber").value;
    
    if(userGuess === ""){
        document.querySelector(".result").textContent = "Don't be lazy man, write your guess"; 
        document.querySelector(".popup").style.display = "flex";
        popupTimeout();
        return;
    }
    
    if(userGuess == number){
        document.querySelector(".result").textContent = "Conguratulation you guess it right";
        document.querySelector(".popup").style.display = "flex";
    }else if(userGuess > number){
        document.querySelector(".result").textContent = "Try a lower number"; 
        document.querySelector(".popup").style.display = "flex";
        popupTimeout();
    }else {
        document.querySelector(".result").textContent = "Try a higher number"; 
        document.querySelector(".popup").style.display = "flex";
        popupTimeout();
    }
}

function popupTimeout(){
    setTimeout(() => {
        document.querySelector(".popup").style.display = "none";
    },2500);
}
