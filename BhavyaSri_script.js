function startGame(){
    let randomNumber=Math.floor(Math.random()*15) + 1;
    let tries=3;
    function checkNumber(){
        let userInput=document.getElementById("userInput").value;
        let result=document.getElementById("result");
        let value=parseInt(userInput);
        if (userInput===""){
            alert("Please enter a number");
        }
        if (tries===0){
            result.textContent="Sorry, U have exceeded limit. U lose. Try again!!";
            result.style.backgroundColor="Red";
        }else if (randomNumber===value) {
            result.textContent="Congratulations! You guess the right number.";
            result.style.backgroundColor= "Green";
            tries=0;
        }else if (value<randomNumber){
            result.textContent= "Your guess is too low. Try Again.  You have "+tries+" left";
            result.style.backgroundColor="Blue";
            tries=tries-1;
        }else if(value>randomNumber){
            result.textContent = "Your guess is too high. Try Again. You have "+tries+" left";
            result.style.backgroundColor="Blue";
            tries=tries-1;
        }
        
        
    
      }
}
