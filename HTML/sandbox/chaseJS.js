
let section1 = document.getElementById("section1");
let section2 = document.getElementById("section2");
let section3 = document.getElementById("section3");
let section4 = document.getElementById("section4");
let section5 = document.getElementById("section5");
let section6 = document.getElementById("section6");
let section7 = document.getElementById("section7");

section1.addEventListener("click", claimChaser1);
section2.addEventListener("click", claimChaser2);
section3.addEventListener("click", claimChaser3);
section4.addEventListener("click", claimChaser4);
section5.addEventListener("click", claimChaser5);
section6.addEventListener("click", claimChaser6);
section7.addEventListener("click", claimChaser7);


function claimChaser1(){
    section1.classList.add("selectedPlayer")
    };
    function claimChaser2(){
        section2.classList.add("selectedPlayer")
        };
        function claimChaser3(){
            section3.classList.add("selectedPlayer")
            };
            function claimChaser4(){
                section4.classList.add("selectedPlayer")
                };
                function claimChaser5(){
                    section5.classList.add("selectedPlayer")
                    };
                    function claimChaser6(){
                        section6.classList.add("selectedPlayer")
                        };
                        function claimChaser7(){
                            section7.classList.add("selectedPlayer")
                            };

                            section1.addEventListener("contextmenu", claimPlayer1);
                            section2.addEventListener("contextmenu", claimPlayer2);
                            section3.addEventListener("contextmenu", claimPlayer3);
                            section4.addEventListener("contextmenu", claimPlayer4);
                            section5.addEventListener("contextmenu", claimPlayer5);
                            section6.addEventListener("contextmenu", claimPlayer6);
                            section7.addEventListener("contextmenu", claimPlayer7);

                            function claimPlayer1(){
                                section1.classList.add("selectedPlayer")
                                };
                                function claimPlayer2(){
                                    section2.classList.add("selectedPlayer")
                                    };
                                    function claimPlayer3(){
                                        section3.classList.add("selectedPlayer")
                                        };
                                        function claimPlayer4(){
                                            section4.classList.add("selectedPlayer")
                                            };
                                            function claimPlayer5(){
                                                section5.classList.add("selectedPlayer")
                                                };
                                                function claimPlayer6(){
                                                    section6.classList.add("selectedPlayer")
                                                    };
                                                    function claimPlayer7(){
                                                        section7.classList.add("selectedPlayer")
                                                        };