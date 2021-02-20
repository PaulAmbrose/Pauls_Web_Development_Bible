
let section1 = document.getElementById("section1");
let section2 = document.getElementById("section2");
let section3 = document.getElementById("section3");
let section4 = document.getElementById("section4");
let section5 = document.getElementById("section5");
let section6 = document.getElementById("section6");
let section7 = document.getElementById("section7");

section1.addEventListener("click", claimPlayer1);
section2.addEventListener("click", claimPlayer2);
section3.addEventListener("click", claimPlayer3);
section4.addEventListener("click", claimPlayer4);
section5.addEventListener("click", claimPlayer5);
section6.addEventListener("click", claimPlayer6);
section7.addEventListener("click", claimPlayer7);


function claimPlayer1(){
    section1.classList.add("selectedPlayer");
    };
    function claimPlayer2(){
        section2.classList.add("selectedPlayer");
        };
        function claimPlayer3(){
            section3.classList.add("selectedPlayer");
            };
            function claimPlayer4(){
                section4.classList.add("selectedPlayer");
                };
                function claimPlayer5(){
                    section5.classList.add("selectedPlayer");
                    };
                    function claimPlayer6(){
                        section6.classList.add("selectedPlayer");
                        };
                        function claimPlayer7(){
                            section7.classList.add("selectedPlayer");
                            };

                            section1.addEventListener("contextmenu", claimChaser1);
                            section2.addEventListener("contextmenu", claimChaser2);
                            section3.addEventListener("contextmenu", claimChaser3);
                            section4.addEventListener("contextmenu", claimChaser4);
                            section5.addEventListener("contextmenu", claimChaser5);
                            section6.addEventListener("contextmenu", claimChaser6);
                            section7.addEventListener("contextmenu", claimChaser7);

                            function claimChaser1(){
                                section1.classList.add("selectedChaser");
                                section1.classList.remove("selectedPlayer");
                                };
                                function claimChaser2(){
                                    section2.classList.add("selectedChaser");
                                    section2.classList.remove("selectedPlayer");
                                    };
                                    function claimChaser3(){
                                        section3.classList.add("selectedChaser");
                                        section3.classList.remove("selectedPlayer");
                                        };
                                        function claimChaser4(){
                                            section4.classList.add("selectedChaser");
                                            section4.classList.remove("selectedPlayer");
                                            };
                                            function claimChaser5(){
                                                section5.classList.add("selectedChaser");
                                                section5.classList.remove("selectedPlayer");
                                                };
                                                function claimChaser6(){
                                                    section6.classList.add("selectedChaser");
                                                    section6.classList.remove("selectedPlayer");
                                                    };
                                                    function claimChaser7(){
                                                        section7.classList.add("selectedChaser");
                                                        section7.classList.remove("selectedPlayer");
                                                        };