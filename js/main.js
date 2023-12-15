// Math.random()

function newQuote(){

     var random= Math.floor(Math.random() * 5);
    if(random ==0){
        document.getElementById("demo").innerHTML = "“Be yourself; everyone else is already taken.”";
        document.getElementById("name").innerHTML = "― Oscar Wilde";
    }
    else if(random == 1){
        document.getElementById("demo").innerHTML = "“Two things are infinite: the universe and human stupidity; and I'm not sure about the universe.”";
        document.getElementById("name").innerHTML = "― Albert Einstein";

    }
    else if(random == 2){
        document.getElementById("demo").innerHTML = "“So many books, so little time.”";
        document.getElementById("name").innerHTML = '― Frank Zappa';

    }
    else if(random == 3){
        document.getElementById("demo").innerHTML = "“A room without books is like a body without a soul.”";
        document.getElementById("name").innerHTML = '― Marcus Tullius Cicero';
    }
    else if(random == 4){
        document.getElementById("demo").innerHTML = "“You only live once, but if you do it right, once is enough.”";
        document.getElementById("name").innerHTML = '― Mae West';
    }

}