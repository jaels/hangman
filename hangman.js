
(function (){
    var countCorrect = 0;
    var fail = -1;

    var wordArray = ["CHINA","IRAN","USA","IRAQ",
    "PAKISTAN","YEMEN","EGYPT","SOMALIA","CHAD","INDONESIA"];


    var exec = [1000,977,28,26,326,8,22,25,10,14];

    var context = document.getElementById('canv').getContext('2d');

    var abc = document.getElementsByClassName('abc')[0];

    context.strokeStyle = '#00000';
    context.lineWidth=5;
    context.beginPath();
    context.moveTo(10,700);
    context.lineTo(250,700);
    context.moveTo(125,700);
    context.lineTo(125,15);
    context.lineTo(350,15);
    context.lineTo(350,120);
    context.moveTo(250,15);
    context.lineTo(125,130);
    context.moveTo(350,120);

    context.stroke();





    var startButton = document.getElementsByClassName('button')[0];
    startButton.addEventListener("click", function () {
        game();
    });


    function game () {

        var startButton = document.getElementsByClassName('button')[0];
        startButton.addEventListener("click", function () {
            location.reload();
    //        game();
        });



        var number = Math.floor(Math.random() * 10);
        var word = wordArray[number];
        var underscoredWord = document.getElementById("underscored-word");
        for (var i=0;i<word.length;i++){
            var newDiv = document.createElement("DIV");
            var letterInDiv = document.createTextNode(word[i]);


            newDiv.appendChild(letterInDiv);
            underscoredWord.appendChild(newDiv);
            underscoredWord.children[i].style.color = "#DEB887";
            newDiv.classList.add("newDiv");
        }


        abc.addEventListener("click",
        function(e) {
            var letter = e.target.innerHTML;
            if(letter.length>1)
            {return;}
            e.target.classList.add("used-letter");
            e.target.classList.add("crossover");

            for (var i=0;i<word.length;i++) {
                if (letter===word[i]) {
                    underscoredWord.children[i].style.color = "red";
                    countCorrect+=1;
                }
                if (countCorrect===word.length){
                    for (var i=0;i<word.length;i++) {
                        underscoredWord.children[i].style.color = "red";
                    }
                    extra();
                    setTimeout(function(){
                        alert ("GOOD JOB, YOU WIN!");
                        setTimeout(function(){startOver();},1000);
                    },200);
                }
            }

            if (word.indexOf(letter)===-1) {
                fail=fail+1;
                if (fail===5) {
                    paintMan(5);
                    for (var i=0;i<word.length;i++) {
                        underscoredWord.children[i].style.color = "red";
                    }
                    setTimeout(function() {alert ("YOU LOSE, GAME OVER");}, 500);
                    setTimeout(function(){startOver();},1000);
                }
                else {
                    paintMan(fail);
                }
            }

        });


        var guess = document.getElementById('textarea');
        var submit = document.getElementById('submit-button');

        submit.addEventListener("click", function() {

            if(guess.value.toUpperCase()==word)
            {
                for (var i=0;i<word.length;i++) {
                    underscoredWord.children[i].style.color = "red";
                }
                extra();
                setTimeout(function(){
                    alert ("THAT'S CORRECT, YOU WIN!");
                    setTimeout(function(){startOver();},1000);
                },200);
            }

            else {
                setTimeout(function(){
                    alert ("THAT'S NOT CORRECT, YOU LOSE");
                    for (var i=0;i<word.length;i++) {
                        underscoredWord.children[i].style.color = "red";
                    }
                    setTimeout(function(){startOver();},800);
                },200);
            }
        });

        function extra() {

            var extraInfo = document.getElementById("extra-info");
            extraInfo.innerHTML = "Executed " + '<span class="span">' + exec[number] + '</span>' + " People in 2015";
            extraInfo.classList.add("newInfoDiv");

        }

    }



    function paintMan(fail) {
        var painting = [function() {
            context.beginPath();
            context.arc(350,170,50,0,2*Math.PI);
            context.stroke();
        },function() {
            context.moveTo(350,220);
            context.lineTo(350,500);
            context.stroke();
        },
        function() {
            context.lineTo(250,620);
            context.stroke();
        }, function() {
            context.moveTo(350,500);
            context.lineTo(450,620);
            context.stroke();
        }, function() {
            context.moveTo(350,280);
            context.lineTo(230,160);
            context.stroke();
        }, function() {
            context.moveTo(350,280);
            context.lineTo(470,160);
            context.stroke();
        }];

        painting[fail]();

    }



    function startOver() {
        location.reload();
    }


})();
