

(function (){

    var wordArray = ["HELICOPTER","OMNIVORE","RESTAURANT","ENCYCLOPEDIA",
    "PHILOSOPHY","AUTOIMMUNE","NETWORKING","METABOLISM","PSYCHPATH",
    "PRONUNCIATION","BODYBUILDING"];



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
    context.moveTo(250,180);



    context.stroke();

    var startButton = document.getElementsByClassName('button')[0];
    startButton.addEventListener("click", function () {
        game();
    });


    game();
    function game () {

        var word = wordArray[Math.floor(Math.random() * 10)];
        var underscoredWord = document.getElementById("underscored-word");
        for (var i=0;i<word.length;i++){
            var newDiv = document.createElement("DIV");
            var letterInDiv = document.createTextNode(word[i]);
            newDiv.appendChild(letterInDiv);
            underscoredWord.appendChild(newDiv);
            newDiv.classList.add("newDiv");
        }


        abc.addEventListener("click",
        function(e) {
            var letter = e.target.innerHTML;
            e.srcElement.classList.add("used-letter");
            e.srcElement.classList.add("crossover");

          for (var i=0;i<word.length;i++) {
              if (letter===word[i]) {
                  underscoredWord.children[i].style.color = "red";
               }
           }

        ///        document.getElementsByClassName('letter')[i].style.color = "red";


        });



    }




    function paintHead() {

    }




    function startOver() {


        //Resets all your global variables
        //Removes all your EventListeners ( seeing you have two you don't really have to make a list to loop through all of them )
        //Calls the main game function when the player is ready to start again

    }

})();
