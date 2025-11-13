function fnJogo(){
    let chute = 0, numeroMagico = 3
    chute = document.getElementById("valor").value
 
    if(chute == numeroMagico){
        document.getElementById("resultado").innerText = "Acertou 😊"
    }
   
    else{
        document.getElementById("resultado").innerText = "Errou 😓"
    }  
}