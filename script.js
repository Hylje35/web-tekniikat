function v01() {
    let byear = document.getElementById("year").value;
    let today = new Date();
    let current_year = today.getFullYear();

    let age = +current_year - +byear;

    if (age > 18 || age == 18){
        document.getElementById("allow").innerHTML = "Welcome!";
    } else {
        document.getElementById("allow").innerHTML = "too young";
    }


}

function v02() {
    let luku1 = document.getElementById("number1").value;
    let luku2 = document.getElementById("number2").value;

    if (+luku1 < +luku2) {
        document.getElementById("smaller").innerHTML = + luku1;
    } 
    else if (+luku2 < +luku1) {
        document.getElementById("smaller").innerHTML = + luku2;
    } else {
        document.getElementById("smaller").innerHTML = "Even";
    }

}

function v03() {
    const NEG = "One of the numbers is negative."
    const POS = "Both numbers are either positive or negative."
    let luku1 = document.getElementById("number1").value;
    let luku2 = document.getElementById("number2").value;

    let tulo = (luku1 * luku2);

    if (tulo >= 0){
        document.getElementById("negative").innerHTML = POS;
    } else if (tulo <= 0){
        document.getElementById("negative").innerHTML = NEG;
    } 
}

function v04() {
    const REC = "rectangle";
    const SQ = "square";
    let sivu1 = document.getElementById("side1").value;
    let sivu2 = document.getElementById("side2").value;

    if (sivu1 == sivu2){
        document.getElementById("square").innerHTML = SQ;
    } else {
        document.getElementById("square").innerHTML = REC;
    }

}