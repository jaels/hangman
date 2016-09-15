

(function (){
    var countCorrect = 0;
    var fail = -1;
    var word;
    //    var wordArray = ["HELICOPTER","OMNIVORE","RESTAURANT","ENCYCLOPEDIA",
    //    "PHILOSOPHY","AUTOIMMUNE","NETWORKING","METABOLISM","PSYCHOPATH",
    //    "PRONUNCIATION","BODYBUILDING"];

    var word_a = new XMLHttpRequest;

    word_a.open('GET', 'http://www.setgetgo.com/randomword/get.php?len=10');

    word_a.send();

    word_a.addEventListener('readystatechange', function() {
        if (word_a.readyState == XMLHttpRequest.DONE) {
            word = word_a.response.toUpperCase();

        }

    });


    var context = document.getElementById('canv').getContext('2d');

    var abc = document.getElementsByClassName('abc')[0];

    context.strokeStyle = '#00000';
    context.lineWidth=5;
    context.beginPath();
    context.moveTo(10,500);
    context.lineTo(200,500);
    context.moveTo(105,500);
    context.lineTo(105,100);
    context.lineTo(250,100);
    context.lineTo(250,180);
    context.moveTo(170,100);
    context.lineTo(105,180);
    context.moveTo(270,180);
    context.stroke();


    var startButton = document.getElementsByClassName('button')[0];
    startButton.addEventListener("click", function () {
        game();
    });


    //    game();
    function game () {


        //        var word = wordArray[Math.floor(Math.random() * 10)];
        var underscoredWord = document.getElementById("underscored-word");
        for (var i=0;i<word.length;i++){
            var newDiv = document.createElement("DIV");
            var letterInDiv = document.createTextNode(word[i]);


            newDiv.appendChild(letterInDiv);
            underscoredWord.appendChild(newDiv);
            underscoredWord.children[i].style.color = "black";
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
                    console.log("yes");
                    underscoredWord.children[i].style.color = "red";
                    countCorrect+=1;
                }
                if (countCorrect===word.length)
                {
                    setTimeout(function(){
                        alert("GOOD JOB! YOU WIN!");
                        startOver();
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





    }

    function paintMan(fail) {
        var painting = [function() {
            context.beginPath();
            context.arc(250,210,30,0,2*Math.PI);
            context.stroke();
        },function() {
            context.moveTo(250,240);
            context.lineTo(250,360);
            context.stroke();
        },
        function() {
            context.lineTo(300,430);
            context.stroke();
        }, function() {
            context.moveTo(250,360);
            context.lineTo(200,430);
            context.stroke();
        }, function() {
            context.moveTo(250,280);
            context.lineTo(200,220);
            context.stroke();
        }, function() {
            context.moveTo(250,280);
            context.lineTo(300,220);
            context.stroke();
        }];

        painting[fail]();

    }



    function startOver() {
        //        document.getElementById("button-text").innerHTML="START OVER";
        //  startButton.addEventListener("click", function () {
        location.reload();

        //    });




        //Resets all your global variables
        //Removes all your EventListeners ( seeing you have two you don't really have to make a list to loop through all of them )
        //Calls the main game function when the player is ready to start again

    }





})();
