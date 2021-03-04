function raffle(){

    let randomNumber = 100;

    let result = Math.round(Math.random() * randomNumber);

    document.getElementById("result").innerHTML = result
}
