
let section1 = document.getElementById("section1");
let section2 = document.getElementById("section2");
let section3 = document.getElementById("section3");
let section4 = document.getElementById("section4");
let section5 = document.getElementById("section5");
let section6 = document.getElementById("section6");
let section7 = document.getElementById("section7");

section1.addEventListener("click", claimPlayer);
section2.addEventListener("click", claimPlayer);
section3.addEventListener("click", claimPlayer);
section4.addEventListener("click", claimPlayer);
section5.addEventListener("click", claimPlayer);
section6.addEventListener("click", claimPlayer);
section7.addEventListener("click", claimPlayer);


function claimPlayer(){
    test = this.classList.contains("selectedPlayer");
    test2 = this.classList.contains("selectedChaser");

    if (test == false && test2 == false){
        this.classList.add("selectedPlayer");
    }
    if (test == true && test2 == false){
        this.classList.add("selectedChaser");
        this.classList.remove("selectedPlayer");
    }
    if (test == false && test2 == true){
        this.classList.remove("selectedChaser");
    }
}

